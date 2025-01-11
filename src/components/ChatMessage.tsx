import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from '../types';
import { marked } from 'marked';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex gap-4 ${isBot ? 'bg-white/80' : ''} p-6 rounded-2xl shadow-sm transition-all hover:shadow-md ${
      isBot ? 'border border-indigo-100' : ''
    }`}>
      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shadow-sm ${
        isBot 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white' 
          : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700'
      }`}>
        {isBot ? <Bot size={24} /> : <MessageCircle size={24} />}
      </div>
      <div className="flex-1">
        <div className={`font-semibold mb-2 ${
          isBot ? 'text-indigo-600' : 'text-gray-700'
        }`}>
          {isBot ? 'CDP Assistant' : 'You'}
        </div>
        <div 
          className="text-gray-700 prose prose-sm max-w-none prose-headings:text-indigo-600 prose-a:text-purple-600"
          dangerouslySetInnerHTML={{ 
            __html: marked(message.content, { breaks: true }) 
          }}
        />
      </div>
    </div>
  );
};