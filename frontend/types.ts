export enum Role {
  USER = 'user',
  MODEL = 'model',
  SYSTEM = 'system'
}

export interface ChatMessage {
  id: string;
  role: Role;
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  isOpen: boolean;
}

export interface ChatConfig {
  botName: string;
  welcomeMessage: string;
  primaryColor: string; // Tailwind class prefix or hex
}