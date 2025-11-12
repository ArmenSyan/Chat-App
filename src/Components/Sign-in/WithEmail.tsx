import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function WithEmail() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate: NavigateFunction = useNavigate()
    const handleSignIn = async () => {
        try {
            // 🔸 Пытаемся войти
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("✅ User logged in:", user);
            navigate("/");
        } catch (error: any) {
            console.error("❌ Ошибка входа:", error.message);
        }
    };
    return (
        <div className="flex flex-col justify-evenly items-center gap-y-[10px] text-[12px] md:text-[14px] lg:text-base">
            <input type="text"
                className="w-[200px] md:w-[250px] lg:w-[340px] h-[31px] md:h-[34px] lg:h-[42px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email} />

            <input type="password"
                className="w-[200px] md:w-[250px] lg:w-[340px] h-[31px] md:h-[34px] lg:h-[42px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password} />

            <button
                className="w-[200px] md:w-[240px] lg:w-[300px] h-[32px] md:h-[40px] lg:h-[48px] bg-bg rounded-[30px] text-formBg font-medium text-[14px] md:text-base lg:text-[18px] hover:cursor-pointer hover:shadow-p/30 hover:shadow-md duration-300 transition-all"
                onClick={handleSignIn}>Sign in</button>
        </div>
    )
}

export default WithEmail