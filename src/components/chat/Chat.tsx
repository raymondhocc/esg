import React, { useState, useRef, useEffect } from 'react';
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 280, y: 20 });
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.closest('.chat-header')) {
      isDragging.current = true;
      const chatWindow = chatWindowRef.current;
      if (chatWindow) {
        const rect = chatWindow.getBoundingClientRect();
        dragOffset.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      const newX = e.clientX - dragOffset.current.x;
      const newY = e.clientY - dragOffset.current.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isOpen]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
      
      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: Date.now() + 1,
          text: 'Thank you for your message. How can I assist you with ESG analysis today?',
          sender: 'assistant',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 1000);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg text-gray-700 w-full"
      >
        <ChatBubbleLeftRightIcon className="w-5 h-5" />
        <span>Chat Assistant</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          style={{
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
          className="w-80 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          {/* Chat Header */}
          <div 
            className="chat-header flex justify-between items-center p-3 border-b border-gray-200 cursor-move bg-gray-50 rounded-t-lg"
            onMouseDown={handleMouseDown}
          >
            <h3 className="text-sm font-semibold">ESG Assistant</h3>
            <button
              onClick={toggleChat}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-96 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-2 ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-75">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
