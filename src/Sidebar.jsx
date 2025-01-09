import { SiWechat } from "react-icons/si";
import { IoMdAddCircleOutline } from "react-icons/io";
const Sidebar = ({ users, setSelectedUser }) => {

    return (
      <div className="w-full md:w-1/4 bg-zinc-800 text-white p-4 rounded-md">
        
        <div className="text-xl font-bold pl-4">All Your Chats</div>
        <div className="pl-4 pt-3 text-black"><button className="flex px-3 pt-1 bg-pink-200 rounded-md py-1 ">
        <SiWechat className="text-xl pt-1"/>
            <p className="pl-2">Chat Images: ON</p>
        </button></div>
        
        {/* Chat List */}
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"
              onClick={() => setSelectedUser(user)}  // Set the selected user when clicked
            >
              <img src={user.avatar} alt="User" className="rounded-full" />
              <div className="ml-4">
                <p className="font-semibold">{user.name}</p>
                <p className="text-xs text-gray-400">
                  {user.chats.length > 0 ? user.chats[user.chats.length - 1].text : 'No messages yet...'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-5"><hr className=""/></div>
          
        <div className="flex space-x-5 pl-3 pt-8">
        <IoMdAddCircleOutline className="bg-pink-200 text-black text-3xl rounded-full"/>
          <p className="pt-0.5">Create New bot</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  