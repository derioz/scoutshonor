import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { ChatMessage, LoadingState } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Scout, your virtual assistant. How can I help you today?", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || loadingState === LoadingState.LOADING) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setLoadingState(LoadingState.LOADING);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    history.push({ role: 'user', text: userMsg.text });

    const response = await sendMessageToGemini(userMsg.text, history);

    const botMsg: ChatMessage = { 
      role: 'model', 
      text: response.text, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, botMsg]);
    setLoadingState(LoadingState.IDLE);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-scout-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-scout-800 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg leading-none">Ask Scout</h3>
                <span className="text-xs text-scout-200">AI Assistant • Always Online</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-scout-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-scout-700 text-white rounded-br-none' 
                    : 'bg-white text-scout-900 border border-scout-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loadingState === LoadingState.LOADING && (
              <div className="flex justify-start">
                <div className="bg-white text-scout-500 border border-scout-100 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center space-x-1">
                  <div className="w-2 h-2 bg-scout-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-scout-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-scout-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-scout-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about boarding..."
              className="flex-1 px-4 py-2 bg-scout-50 rounded-full border-none focus:ring-2 focus:ring-scout-200 outline-none text-sm text-scout-900 placeholder:text-scout-400"
            />
            <button 
              type="submit" 
              disabled={loadingState === LoadingState.LOADING || !inputText.trim()}
              className="p-2 bg-scout-800 text-white rounded-full hover:bg-scout-900 disabled:opacity-50 transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center space-x-2 bg-scout-800 hover:bg-scout-900 text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-medium hidden sm:inline">Chat with Scout</span>
      </button>
    </div>
  );
};
