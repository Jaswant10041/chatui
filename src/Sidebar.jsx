import { SiWechat } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";

const Sidebar = ({ users, setSelectedUser }) => {
  return (
    <div className="w-full md:w-1/4 bg-zinc-800 text-white p-4 rounded-md shadow-lg">
      <div className="text-xl font-bold pl-4">All Your Chats</div>
      <button className="flex px-3 py-2 mt-3 bg-pink-200 rounded-md items-center hover:bg-pink-300">
        <SiWechat className="text-xl" />
        <span className="ml-2 text-black">Chat Images: ON</span>
      </button>

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
            onClick={() => setSelectedUser(user)}
          >
            <img src={user.avatar} alt={user.name} className="rounded-full" />
            <div className="ml-4">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-400">
                {user.chats.length > 0 ? user.chats[user.chats.length - 1].text : "No messages yet..."}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-6" />
      <div className="flex items-center space-x-4">
        <IoMdAddCircleOutline className="text-3xl bg-pink-200 text-black rounded-full hover:bg-pink-300" />
        <p>Create New bot</p>
      </div>
    </div>
  );
};

export default Sidebar;
