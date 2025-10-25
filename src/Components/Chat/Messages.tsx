import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { DatabaseReference, DataSnapshot, onValue, ref } from "firebase/database";
import { useAuth } from "../Context/Context";

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
        <div className={`lg:w-[552px] lg:h-[460px] bg-formBg bg-no-repeat bg-cover bg-center rounded-[16px] overflow-y-auto flex flex-col ${messages.length == 0 ? 'justify-center' : 'justify-start' }  items-center`}>
            {messages.length > 0 ?
                messages.map((el, i) => (
                    <div 
                    key={i}
                    className=""
                    >
                        
                    </div>
                ))
                : <p className="text-[]">No Messages</p>
            }
        </div>
    )
}

export default Messages