import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
const ChatWindow = ({ user }) => {
  return (
    <div className="flex-1 bg-black-900 text-white pl-3 flex flex-col rounded-md">
      {/* Chat Header */}
      <div className="bg-zinc-600">
        <div className="flex items-center justify-between mb-4 rounded-md">
          <div className="flex items-center pl-2 pt-2">
            <img src={user.avatar} alt={user.name} className="rounded-full " />
            <p className="ml-4 font-semibold">{user.name}</p>
          </div>
          
          <div className="flex pr-2 pt-1">
          <div className="pt-1 pr-3">
            <IoIosArrowRoundBack className="border-2 rounded-full bg-white text-black"/>
            </div>
            <button className="text-white pr-2">Back</button>
            <div className="pt-1 pr-2">
              <RiDeleteBinLine />
            </div>
            <button className="text-white pr-2">Delete</button>
          </div>
        </div>
      </div>
      {/* Chat Messages */}
      <div className="flex-1 bg-zinc-800 p-4 overflow-y-auto">
        {user.chats.map((chat) => (
          <div
            key={chat.id}
            className={`mb-4 flex ${
              chat.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                chat.sender === "me" ? "bg-pink-500 text-right" : "bg-gray-500"
              }`}
            >
            
            {chat.text}</div></div>
             
            
          
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex">
        <input
          type="text"
          placeholder="Message"
          className="flex-1 p-3 bg-gray-600 rounded-l-lg focus:outline-none"
        />
        <button className="bg-pink-500 p-3 rounded-r-lg">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
