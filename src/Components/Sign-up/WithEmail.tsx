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
    <div>
        <input type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email" 
        value={email}/>
        <input type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        value={password} />
        <button
        onClick={handleSignUp}>Sign Up</button>

    </div>
  )
}

export default WithEmail