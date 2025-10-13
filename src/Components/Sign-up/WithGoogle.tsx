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
            <button onClick={signInWithGoogle}>Sign up with Google</button>

        </div>
    )
}

export default WithGoogle