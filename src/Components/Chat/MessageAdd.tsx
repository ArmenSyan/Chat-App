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
        const messageRef: DatabaseReference = ref(db, 'messages');

        const newMessage: message = {
            text: text,
            userId: user.uid,
            userName: user.displayName || 'Anonimus',
            timestamp: Date.now(),
        }
        console.log(typeof Date.now() );
        

        await push(messageRef, newMessage);
        setText('')
    }



    return (
        <div className="lg:w-[552px] h-[55px] rounded-[16px] bg-formBg1 flex justify-evenly items-center">
            <input
                type="text"
                className="lg:w-[350px] px-[10px] h-[36px] rounded-[10px] lg:text-[15px] font-bold bg-formBg focus:outline-plh/70 focus:outline-1  transition-all duration-200 placeholder:text-plh"
                placeholder="Some text..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
            onClick={sendMessage}
            className="lg:w-[130px] lg:h-[36px] rounded-[10px] bg-sendBtn text-[white] lg:text-[15px] lg:font-bold hover:cursor-pointer hover:bg-sendBtnHover duration-200">Send</button>
        </div>
    )
}

export default MessageAdd