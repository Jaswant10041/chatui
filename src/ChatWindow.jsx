import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";

const ChatWindow = ({ user }) => {
  return (
    <div className="flex-1 bg-black text-white pl-4 flex flex-col rounded-md">
      <div className="bg-zinc-600 p-3 rounded-md flex items-center justify-between">
        <div className="flex items-center">
          <img src={user.avatar} alt={user.name} className="rounded-full" />
          <p className="ml-4 font-semibold">{user.name}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-white px-2 py-1 rounded-md hover:bg-gray-300">
            <IoIosArrowRoundBack />
            <span className="ml-2">Back</span>
          </button>
          <button className="flex items-center  text-white px-2 py-1 rounded-md ">
            <RiDeleteBinLine />
            <span className="ml-2">Delete</span>
          </button>
        </div>
      </div>

      <div className="flex-1 bg-zinc-800 p-4 overflow-y-auto mt-2 rounded-md">
        {user.chats.map((chat) => (
          <div key={chat.id} className={`mb-4 flex ${chat.sender === "me" ? "justify-end" : "justify-start"}`}>
            {chat.sender !== "me" && <img src={user.avatar} alt={user.name} className="rounded-full mr-2" />}
            <div className={`px-3 py-2 rounded-lg max-w-xs ${chat.sender === "me" ? "bg-pink-500" : "bg-gray-500"}`}>
              {chat.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          placeholder="Message"
          className="flex-1 p-3 bg-gray-600 rounded-l-lg focus:outline-none"
        />
        <button className="bg-pink-500 p-3 rounded-r-lg hover:bg-pink-600">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
