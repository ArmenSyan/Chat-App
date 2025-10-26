
import WithEmail from "./WithEmail";
import WithGoogle from "./WithGoogle";

function SignUp() {

    return (
        <div className="bg-gradient-to-r from-black from-10% via-purple via-45% to-black to-90% w-full h-screen bg-cover bg-center bg-no-repeat flex justify-evenly items-center">
            <div className=" md:w-[373px] lg:w-[500px] h-[400px] md:h-[500px] lg:h-[555px] bg-formBg rounded-[20px] md:rounded-[28px] lg:rounded-[32px] flex flex-col justify-evenly items-center">
                <div className="flex flex-col items-center gap-y-3.5 text-center">
                    <h1 className="text-h1 text-[20px] md:text-[28px] lg:text-[36px] font-semibold">Create An Account</h1>
                    <p className="text-p text-[12px] md:text-[14px] lg:text-[15px] font-medium w-[300px]">Create an account to enjoy our chat for free!</p>
                </div>
                <div className="flex flex-col justify-evenly items-center gap-y-[7px] lg:gap-y-[10px]">

                    <WithEmail />
                    <p className="text-[11px] md:text-[13px] lg:text-[15px] text-p font-medium">or</p>
                    <WithGoogle mode={'sign-up'} />

                </div>
            </div>

        </div >
    )
}

export default SignUp