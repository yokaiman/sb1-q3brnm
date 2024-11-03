import React from 'react';
import { Plus, MessageSquare, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 bg-gray-800 p-4 transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-purple-400">GroupPromptZ</h1>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-700 rounded-lg md:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <button className="w-full flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg py-2 px-4 transition-colors">
        <Plus className="w-5 h-5" />
        <span>New Chat</span>
      </button>

      <div className="mt-4 space-y-2">
        {['Project Discussion', 'Code Review', 'Team Updates'].map((chat, index) => (
          <button
            key={index}
            className="w-full flex items-center space-x-3 px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm truncate">{chat}</span>
          </button>
        ))}
      </div>
    </div>
  );
}