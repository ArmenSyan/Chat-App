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
        <div className={`lg:w-[552px] lg:h-[520px] bg-formBg1 bg-no-repeat bg-cover bg-center rounded-[16px] overflow-y-auto gap-y-[10px] flex flex-col ${messages.length == 0 ? 'justify-center' : 'justify-start'}  items-center px-[15px] pt-[15px]`}>
            {messages.length > 0 ?
                messages.map((el, i) => (
                    <div
                        key={i}
                        className={`w-full  flex justify-start items-start ${user.uid == el.userId ? 'flex-row-reverse' : 'flex-row'} gap-x-[5px]`}
                    >
                        <div className="p-[11px] bg-formBg rounded-full text-p">
                            <FaRegUser />
                        </div>
                        <div className={`text-p text-[14px] max-w-[250px] px-[10px] py-[3px] font-semibold bg-formBg rounded-[10px] flex flex-col justify-evenly  ${user.uid == el.userId ? 'rounded-br-[0px] items-end' : 'rounded-bl-[0px] items-start'} `} >
                            <h1 className="text-[15px] text-sendBtn font-bold ">{el.userName}</h1>
                            <div className={`flex justify-between items-end w-full ${user.uid == el.userId ? 'flex-row-reverse' : 'flex-row'} `}>
                                <p>{el.text}</p>
                                <p className={`text-plh opacity-70 text-[10px] mt-[3px] ${user.uid == el.userId ? 'mr-[10px]' : 'ml-[10px]'} `}>{new Date(el.timestamp).toLocaleTimeString().slice(0, 5)}</p>

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