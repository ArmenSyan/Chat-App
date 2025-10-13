import { auth, provider, signInWithPopup } from "../../firebase"
import { UserCredential } from "firebase/auth";

function WithGoogle() {
    const signInWithGoogle = async () => {
        try {
            const result: UserCredential = await signInWithPopup(auth, provider);
            console.log("User:", result.user);
        } catch (error: any) {
            console.error("Error:");
        }
    };
    return (
        <div>
            <button onClick={signInWithGoogle}
            className="w-[300px] h-[58px] bg-bg rounded-[30px] text-formBg font-medium text-[18px] hover:cursor-pointer">Sign up with Google</button>

        </div>
    )
}

export default WithGoogle