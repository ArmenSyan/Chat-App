import { Link, useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../../firebase"
import { UserCredential } from "firebase/auth";

function WithGoogle({ mode }: { mode: string }) {
    const navigate = useNavigate()
    const signInWithGoogle = async () => {
        try {
            const result: UserCredential = await signInWithPopup(auth, provider);
            console.log("User:", result.user);
            console.log(result.user.displayName);
            
            navigate('/')
        } catch (error: any) {
            console.error("Error:");
        }
    };
    return (
        <div className="flex flex-col justify-evenly items-center gap-y-[20px]">
            <button onClick={signInWithGoogle}
                className="w-[300px] h-[48px] bg-formBg rounded-[30px] border-[2px] border-bg hover:shadow-p/30 hover:shadow-md text-h1 font-medium text-[18px] hover:cursor-pointer duration-300 transition-all">
                {mode == 'sign-up' ?
                    <>Sign up with Google</>
                    : <>Log in with google</>}
            </button>
            {mode == 'sign-up' ?
                <p className="text-[15px] text-p font-medium ">Already have an account? <Link to={'/sign-in'} className="font-semibold text-h1 underline">Log In</Link></p>
                :
                <p className="text-[15px] text-p font-medium ">Dont have an account? <Link to={'/sign-up'} className="font-semibold text-h1 underline">Sign Up</Link></p>
            }
        </div>
    )
}

export default WithGoogle