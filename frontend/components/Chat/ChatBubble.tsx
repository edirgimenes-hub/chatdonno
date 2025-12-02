import React from 'react';
import { ChatMessage, Role } from '../../types';
import { Bot, User, AlertCircle } from 'lucide-react';

interface ChatBubbleProps {
  message: ChatMessage;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isModel = message.role === Role.MODEL;
  const isError = message.isError;

  return (
    <div className={`flex w-full mb-6 ${isModel ? 'justify-start' : 'justify-end'} animate-fade-in-up`}>
      <div className={`flex max-w-[85%] ${isModel ? 'flex-row' : 'flex-row-reverse'} items-end gap-2.5`}>
        
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${
          isModel 
            ? 'bg-gradient-to-br from-violet-100 to-fuchsia-100 border border-violet-100' 
            : 'bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200'
        }`}>
          {isModel ? (
            <Bot size={16} className="text-violet-600" />
          ) : (
            <User size={16} className="text-slate-600" />
          )}
        </div>

        {/* Message Content */}
        <div className={`
          relative px-4 py-3.5 rounded-2xl text-[14px] leading-relaxed shadow-sm
          ${isModel 
            ? 'bg-white border border-slate-100 text-slate-700 rounded-bl-none' 
            : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white rounded-br-none shadow-fuchsia-500/20'}
          ${isError ? 'bg-red-50 border-red-200 text-red-600' : ''}
        `}>
          {isError && <AlertCircle size={16} className="inline mr-2 mb-0.5" />}
          
          <div className="whitespace-pre-wrap break-words">
            {message.text}
          </div>

          <div className={`text-[10px] mt-1.5 font-medium ${isModel ? 'text-slate-400' : 'text-fuchsia-100 text-right opacity-80'}`}>
            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    </div>
  );
};