import MessageAdd from "./MessageAdd"
import Messages from "./Messages"

function Chat() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500/90 from-10% via-sky-500/90 via-30% to-emerald-500/90 to-90% font-inter flex flex-col justify-evenly items-center">
      <div className="flex flex-col gap-y-[30px] items-center ">
        <h1 className="text-white text-[20px] md:text-[28px] lg:text-[32px] font-bold ">Live Chat</h1>
        <Messages />
        <MessageAdd />
      </div>
    </div>
  )
}

export default Chat