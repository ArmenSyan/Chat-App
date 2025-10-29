import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

function Chat() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-black from-10% via-purple via-30% to-black to-90% font-inter flex flex-col justify-evenly items-center">
      <div className="flex flex-col gap-y-[15px] md:gap-y-[20px] lg:gap-y-[30px] items-center ">
        <h1 className="text-white text-[22px] md:text-[28px] lg:text-[32px] font-bold ">Live Chat</h1>
        <Messages />
        <div className="w-[90vw] md:w-[500px] lg:w-[552px] h-[45px] md:h-[53px] lg:h-[55px] rounded-[16px] bg-formBg1 hidden md:flex justify-evenly items-center">
          <MessageAdd />
        </div>
      </div>
    </div>
  )
}

export default Chat