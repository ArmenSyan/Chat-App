import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

function WithEmail() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate()
    const handleSignIn = async () => {
        try {
            // 🔸 Пытаемся войти
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("✅ User logged in:", user);

            // user содержит всю информацию:
            // user.uid, user.email, user.displayName, user.photoURL, ...
            navigate("/");
        } catch (error: any) {
            // 🔸 Если юзера нет или пароль неверный — ловим ошибку
            if (error.code === "auth/user-not-found") {
                console.error("❌ Пользователь не найден");
            } else if (error.code === "auth/wrong-password") {
                console.error("❌ Неверный пароль");
            } else if (error.code === "auth/invalid-email") {
                console.error("❌ Неверный формат email");
            } else {
                console.error("❌ Ошибка входа:", error.message);
            }
        }
    };
    return (
        <div className="flex flex-col justify-evenly items-center gap-y-[20px]">
            <input type="text"
                className="w-[340px] h-[42px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium "
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                value={email} />

            <input type="password"
                className="w-[340px] h-[42px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium "
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                value={password} />

            <button
                className="w-[300px] h-[48px] bg-bg rounded-[30px] text-formBg font-medium text-[18px] hover:cursor-pointer hover:shadow-p/30 hover:shadow-md duration-300 transition-all"
                onClick={handleSignIn}>Sign Up</button>
        </div>
    )
}

export default WithEmail