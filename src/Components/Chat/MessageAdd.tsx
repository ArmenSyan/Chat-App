import { useState } from "react";
import { useAuth } from "../Context/Context";
import { DatabaseReference, push, ref } from "firebase/database";
import { db } from "../../firebase";

interface message {
    text: string,
    userId: string,
    userName: string,
    timestamp: number
}

function MessageAdd() {
    const [text, setText] = useState<string>("");
    const { user } = useAuth()

    const sendMessage = async () => {
        if (!text.trim()) return;
        if(user){
        const messageRef: DatabaseReference = ref(db, 'messages');

            const newMessage: message = {
                text: text,
                userId: user.uid,
                userName: user.displayName || 'Anonimus',
                timestamp: Date.now(),
            }
            
            
            await push(messageRef, newMessage);
            setText('')
        }
    }



    return (
        <>
            <input
                type="text"
                className="w-[53vw] md:w-[323px] lg:w-[350px] px-[10px] h-[28px] md:h-[31px] lg:h-[36px] rounded-[10px] text-[13px] md:text-[14px] lg:text-[15px] font-bold bg-formBg focus:outline-plh/70 focus:outline-1  transition-all duration-200 placeholder:text-plh"
                placeholder="Some text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={sendMessage}
                className="w-[26vw] md:w-[110px] lg:w-[130px] h-[28px] md:h-[31px] lg:h-[36px] rounded-[10px] bg-purple text-[white] text-[13px] md:text-[14px] lg:text-[15px] font-bold hover:cursor-pointer hover:bg-purpleHover duration-200">Send</button>
        </>
    )
}

export default MessageAdd