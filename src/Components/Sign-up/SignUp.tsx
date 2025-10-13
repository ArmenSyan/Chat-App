
import { useState } from "react";
import WithEmail from "./WithEmail";
import WithGoogle from "./WithGoogle";

function SignUp() {

    return (
        <div className="bg-[url(/image.png)] w-full h-screen bg-cover bg-center bg-no-repeat flex justify-evenly items-center">
            <div className="w-[500px] h-[500px] bg-formBg rounded-[32px] flex flex-col justify-evenly items-center">
                <h1 className="text-h1 text-[36px] font-semibold">Create An Account</h1>
                <p className="text-p text-[15px] font-medium">Create an account to enjoy our chat for free!</p>
                <WithGoogle />
                <WithEmail />

            </div>

        </div >
    )
}

export default SignUp