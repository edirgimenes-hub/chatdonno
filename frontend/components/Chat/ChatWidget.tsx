import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Paperclip, Cat, Bot, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { ChatBubble } from './ChatBubble';
import { ChatMessage, Role } from '../../types';
import { sendMessageStream, initializeChat, resetChat } from '../../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: Role.MODEL,
      text: "Olá! Sou o ChatDonno, sua IA inteligente. 🐱\n\nComo posso ajudar a evoluir seu projeto hoje?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: Role.USER,
      text: userText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      // Create a placeholder for the bot response
      const botMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, {
        id: botMessageId,
        role: Role.MODEL,
        text: '',
        timestamp: new Date()
      }]);

      const stream = sendMessageStream(userText);
      let fullResponse = '';

      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
          msg.id === botMessageId ? { ...msg, text: fullResponse } : msg
        ));
      }

    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: Role.MODEL,
        text: "Desculpe, tive um problema ao processar sua mensagem. Tente novamente.",
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    if (window.confirm("Tem certeza que deseja limpar o histórico da conversa?")) {
      setMessages([
        {
          id: 'welcome',
          role: Role.MODEL,
          text: "Olá! Sou o ChatDonno, sua IA inteligente. 🐱\n\nComo posso ajudar a evoluir seu projeto hoje?",
          timestamp: new Date()
        }
      ]);
      resetChat();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleInputResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Chat Window */}
      <div 
        className={`
          pointer-events-auto bg-white w-[380px] sm:w-[420px] max-w-[calc(100vw-40px)] 
          rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0 h-[600px] max-h-[80vh]' : 'opacity-0 scale-90 translate-y-10 h-0'}
        `}
      >
        {/* Striking Header */}
        <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 p-4 flex items-center justify-between sticky top-0 z-10 text-white shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner">
              <Cat size={22} className="text-white drop-shadow-md" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base tracking-wide">ChatDonno</h3>
              <p className="text-xs text-fuchsia-100 flex items-center gap-1.5 font-medium opacity-90">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <button 
              onClick={handleClearChat}
              className="p-2 hover:bg-white/10 rounded-full text-fuchsia-100 hover:text-white transition-colors backdrop-blur-sm"
              aria-label="Limpar chat"
              title="Limpar conversa"
            >
              <Trash2 size={18} />
            </button>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-fuchsia-100 hover:text-white transition-colors backdrop-blur-sm"
              aria-label="Minimizar chat"
            >
              <Minimize2 size={18} />
            </button>
          </div>
        </div>

        {/* Soft Context Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50/80 custom-scrollbar scroll-smooth">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} message={msg} />
          ))}
          {isLoading && messages[messages.length - 1]?.role === Role.USER && (
            <div className="flex w-full mb-6 justify-start animate-pulse">
               <div className="flex items-end gap-2">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-50 to-fuchsia-50 border border-violet-100 flex items-center justify-center">
                    <Bot size={16} className="text-violet-400" />
                 </div>
                 <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none text-slate-500 text-sm shadow-sm flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                   <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                   <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></span>
                 </div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.02)]">
          <div className="relative flex items-end gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-200 focus-within:border-fuchsia-300 focus-within:ring-4 focus-within:ring-fuchsia-500/10 transition-all duration-300">
            <button className="p-2 text-slate-400 hover:text-fuchsia-600 transition-colors h-10 w-10 flex items-center justify-center rounded-xl hover:bg-fuchsia-50 flex-shrink-0">
               <Paperclip size={20} />
            </button>
            
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={handleInputResize}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              rows={1}
              className="flex-1 bg-transparent border-none focus:ring-0 text-slate-700 placeholder-slate-400 resize-none py-2 max-h-[120px] text-sm custom-scrollbar leading-relaxed"
              style={{ minHeight: '40px' }}
            />
            
            <button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`
                h-10 w-10 flex items-center justify-center rounded-xl transition-all duration-300 shadow-sm flex-shrink-0
                ${inputValue.trim() && !isLoading
                  ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 text-white shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transform hover:scale-105' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'}
              `}
            >
              <Send size={18} className={inputValue.trim() && !isLoading ? 'ml-0.5' : ''} />
            </button>
          </div>
          <div className="text-center mt-2.5 flex items-center justify-center gap-1.5">
             <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">Powered by ChatDonno</span>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="mt-5 pointer-events-auto mr-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${isOpen 
              ? 'bg-slate-800 rotate-90 scale-90' 
              : 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 hover:scale-110 hover:shadow-fuchsia-500/40'}
          `}
        >
          {isOpen ? (
            <X size={26} className="text-white" />
          ) : (
            <MessageCircle size={32} className="text-white group-hover:animate-pulse" />
          )}
          
          {/* Notification Badge */}
          {!isOpen && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 z-20">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};