import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

function WithEmail() {
      const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ User created:", userCredential.user);
    } catch (error: any) {
      console.error("❌ Error:", error.message);
    }
  };
  return (
    <div className="flex flex-col justify-evenly items-center gap-y-[20px]">
        <input type="text"
        className="w-[340px] h-[58px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium "
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email" 
        value={email}/>
        <input type="password"
        className="w-[340px] h-[58px] px-[16px] text-p placeholder:font-normal placeholder:text-plh rounded-[7px] border-[1px] border-plh/50 focus:outline-[1px] focus:outline-plh/70 font-medium "
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        value={password} />
        <button
        className="w-[300px] h-[58px] bg-bg rounded-[30px] text-formBg font-medium text-[18px] hover:cursor-pointer hover:shadow-p/30 hover:shadow-md duration-300 transition-all"
        onClick={handleSignUp}>Sign Up</button>

    </div>
  )
}

export default WithEmail