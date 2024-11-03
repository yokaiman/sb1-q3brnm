import React from 'react';
import { Plus } from 'lucide-react';
import { useStore } from '../lib/store';

export default function NewChatButton() {
  const addChat = useStore((state) => state.addChat);

  const handleNewChat = () => {
    addChat('New Chat');
  };

  return (
    <button
      onClick={handleNewChat}
      className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 transition-colors"
    >
      <Plus className="w-5 h-5" />
      <span>New Chat</span>
    </button>
  );
}