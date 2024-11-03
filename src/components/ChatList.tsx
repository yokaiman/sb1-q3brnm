import React from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';
import { useStore } from '../lib/store';

export default function ChatList() {
  const { chats, currentChatId } = useStore((state) => ({
    chats: state.chats,
    currentChatId: state.currentChatId,
  }));

  return (
    <div className="mt-4 space-y-2">
      {chats.map((chat) => (
        <button
          key={chat.id}
          className={`w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors ${
            chat.id === currentChatId ? 'bg-gray-700' : ''
          }`}
        >
          <div className="flex items-center space-x-3 truncate">
            <MessageSquare className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm truncate">{chat.title}</span>
          </div>
          <Trash2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      ))}
    </div>
  );
}