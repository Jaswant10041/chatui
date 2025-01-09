import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import Sidebar from './Sidebar';


function Body() {
  const [selectedUser, setSelectedUser] = useState({
      id: 1,
      name: 'Caressa Jessalin',
      avatar: 'https://via.placeholder.com/40',
      chats: [
        { id: 1, text: 'Hello!', sender: 'other' },
        { id: 2, text: 'Your order according to application?', sender: 'other' },
        { id: 3, text: 'Yes, my order according to application. Thank you', sender: 'me' },
      ],
    });

  const users = [
    {
      id: 1,
      name: 'Caressa Jessalin',
      avatar: 'https://via.placeholder.com/40',
      chats: [
        { id: 1, text: 'Hello!', sender: 'other' },
        { id: 2, text: 'Your order according to application?', sender: 'other' },
        { id: 3, text: 'Yes, my order according to application. Thank you', sender: 'me' },
      ],
    },
    {
      id: 2,
      name: 'Letty Bride',
      avatar: 'https://via.placeholder.com/40',
      chats: [
        { id: 1, text: 'Are you available?', sender: 'other' },
        { id: 2, text: 'Yes, how can I help you?', sender: 'me' },
      ],
    },
  ];
  
  return (
    <div className="flex h-screen px-14 mx-5 my-7 rounded-md">
      {/* Pass users and setSelectedUser to Sidebar */}
      <Sidebar users={users} setSelectedUser={setSelectedUser} />
      
      {selectedUser ? (
        <ChatWindow user={selectedUser} />
      ) : (
        <div className="flex-1 bg-gray-800 text-white flex items-center justify-center">
          Select a chat to start messaging
        </div>
      )}
    </div>
  );
}

export default Body;
