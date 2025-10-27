import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { DatabaseReference, DataSnapshot, onValue, ref } from "firebase/database";
import { useAuth } from "../Context/Context";
import { FaRegUser } from "react-icons/fa";

interface Message {
    id: string;
    text: string;
    userId: string;
    userName: string;
    timestamp: number
}

function Messages() {
    const [messages, setMessages] = useState<Message[]>([]);
    const { user } = useAuth()
    const [delBtn, setDelBtn] = useState<boolean>(false)


    useEffect(() => {
        const messagesRef: DatabaseReference = ref(db, 'messages');

        const unsubscribe = onValue(messagesRef, (snapshot: DataSnapshot) => {
            const data = snapshot.val();
            if (data) {
                const messagesArray: Message[] = Object.entries(data).map(
                    ([id, msg]: [string, any]) => ({
                        id,
                        ...msg,
                    })
                );

                messagesArray.sort((a, b) => a.timestamp - b.timestamp);

                setMessages(messagesArray);
            } else {
                setMessages([]);
            }
        });

        return () => unsubscribe();
    }, []);

    if (user.uid && messages.length > 0) {
        console.log(user.uid, messages[0].userId);

    }

    return (
        <div className={`w-[90vw] md:w-[500px] lg:w-[552px] h-[75vh]  md:h-[65vh] lg:h-[520px] bg-formBg1 bg-no-repeat bg-cover bg-center rounded-[12px] md:rounded-[14px] lg:rounded-[16px] overflow-y-auto gap-y-1.5 md:gap-y-[10px] flex flex-col ${messages.length == 0 ? 'justify-center' : 'justify-start'}  items-center px-[10px] md:px-[13px] lg:px-[15px] pt-[11px] md:pt-[13px] lg:pt-[15px]`}>
            {messages.length > 0 ?
                messages.map((el, i) => (
                    <div
                        key={i}
                        className={`w-full  flex justify-start items-start ${user.uid == el.userId ? 'flex-row-reverse' : 'flex-row'} gap-x-[4px] md:gap-x-[5px]`}
                    >
                        <div className="p-[9px] md:p-[10px] lg:p-[11px] bg-formBg rounded-full text-p">
                            <FaRegUser />
                        </div>
                        <div className={`text-p text-[12px] md:text-[13px] lg:text-[14px] max-w-[250px] px-[10px] py-[3px] font-semibold bg-formBg rounded-[10px] flex flex-col justify-evenly  ${user.uid == el.userId ? 'rounded-br-[0px] items-end' : 'rounded-bl-[0px] items-start'} `} >
                            <h1 className={`text-[13px] md:text-[14px] lg:text-[15px]  font-bold ${user.uid == el.userId ? 'text-purpleHover' : 'text-purple'}`}>{el.userName}</h1>
                            <div className={`flex justify-between items-end w-full ${user.uid == el.userId ? 'flex-row-reverse' : 'flex-row'} `}>
                                <p>{el.text}</p>
                                <p className={`text-plh opacity-70 text-[9px] md:text-[10px] mt-[3px] ${user.uid == el.userId ? 'mr-[6px] md:mr-[10px]' : 'ml-[6px] md:ml-[10px]'} `}>{new Date(el.timestamp).toLocaleTimeString().slice(0, 5)}</p>

                            </div>
                        </div>
                    </div>
                ))
                : <p className="text-[]">No Messages</p>
            }
        </div>
    )
}

export default Messages