import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Message, Chat, Settings } from './types';

interface AppState {
  chats: Chat[];
  currentChatId: number | null;
  settings: Settings;
  addChat: (title: string) => void;
  addMessage: (chatId: number, message: Omit<Message, 'id' | 'timestamp'>) => void;
  updateSettings: (settings: Partial<Settings>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      chats: [],
      currentChatId: null,
      settings: {
        theme: 'dark',
        language: 'en',
        saveHistory: true,
      },
      addChat: (title) =>
        set((state) => ({
          chats: [
            ...state.chats,
            {
              id: Date.now(),
              title,
              messages: [],
              createdAt: new Date(),
            },
          ],
          currentChatId: Date.now(),
        })),
      addMessage: (chatId, message) =>
        set((state) => ({
          chats: state.chats.map((chat) =>
            chat.id === chatId
              ? {
                  ...chat,
                  messages: [
                    ...chat.messages,
                    {
                      ...message,
                      id: Date.now(),
                      timestamp: new Date(),
                    },
                  ],
                }
              : chat
          ),
        })),
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
    }),
    {
      name: 'group-promptz-storage',
    }
  )
);