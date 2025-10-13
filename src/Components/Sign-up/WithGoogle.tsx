import { auth, provider, signInWithPopup } from "../../firebase"
import { UserCredential } from "firebase/auth";

function WithGoogle() {
    const signInWithGoogle = async () => {
        try {
            const result: UserCredential = await signInWithPopup(auth, provider);
            console.log("User:", result.user);
        } catch (error: unknown) {
            console.error("Error:", error.message);
        }
    };
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign up with Google</button>

        </div>
    )
}

export default WithGoogle