import WithGoogle from "../Sign-up/WithGoogle"
import WithEmail from "./WithEmail"


function SignIn() {
  return (
    <div className="bg-gradient-to-r from-black from-10% via-purple via-45% to-black to-90% w-full h-screen bg-cover bg-center bg-no-repeat flex justify-evenly items-center">
      <div className="w-[470px] h-[520px] bg-formBg rounded-[32px] flex flex-col justify-evenly items-center">
        <div className="flex flex-col items-center gap-y-3.5 text-center">
          <h1 className="text-h1 text-[36px] font-semibold">Sign in</h1>
          <p className="text-p text-[15px] font-medium w-[300px]">Sign in and enjoy our chat for free!</p>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-y-[10px]">
          <WithEmail />
          <p className="text-[15px] text-p font-medium">or</p>
          <WithGoogle mode={'sign-in'} />
        </div>
      </div>

    </div >
  )
}

export default SignIn