

function SignIn() {
  return (
    <div className="bg-[url(/image.png)] w-full h-screen bg-cover bg-center bg-no-repeat flex justify-evenly items-center">
      <div className="w-[500px] h-[555px] bg-formBg rounded-[32px] flex flex-col justify-evenly items-center">
        <div className="flex flex-col items-center gap-y-3.5 text-center">
          <h1 className="text-h1 text-[36px] font-semibold">Create An Account</h1>
          <p className="text-p text-[15px] font-medium w-[300px]">Create an account to enjoy our chat for free!</p>
        </div>
        <div className="flex flex-col justify-evenly items-center gap-y-[10px]">

          {/* <p className="text-[15px] text-p font-medium">or</p> */}

        </div>
      </div>

    </div >
  )
}

export default SignIn