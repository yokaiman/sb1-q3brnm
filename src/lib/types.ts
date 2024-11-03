export interface Message {
  id: number;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

export interface Chat {
  id: number;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export interface Settings {
  theme: 'dark' | 'light' | 'system';
  language: string;
  saveHistory: boolean;
}