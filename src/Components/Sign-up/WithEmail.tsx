import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function WithEmail() {
  const [username, setUsername] = useState<string>(""); 
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()
  const handleSignUp = async () => {
    try {
      // 1️⃣ Создаём пользователя
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Добавляем имя
      await updateProfile(user, { displayName: username });

      console.log("✅ User created:", user);
      navigate("/sign-in");
    } catch (error: any) {
      console.error("❌ Error:", error.message);
    }
  };
  return (
    <div className="flex flex-col justify-evenly items-center gap-y-[20px]">
      <input
        type="text"
        className="w-[340px] h-[42px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        value={username}
      />

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
        onClick={handleSignUp}>Sign Up</button>

    </div>
  )
}

export default WithEmail