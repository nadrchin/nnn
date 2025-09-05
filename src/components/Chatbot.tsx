'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, MessageCircle, X } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Bonjour ! Je suis l'assistant virtuel de Guzel K Beauty. Comment puis-je vous aider?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;

    // message utilisateur
    const userMessage: Message = {
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    // réponse délai
    setTimeout(() => {
      let botResponse = '';
      
      if (inputText.toLowerCase().includes('prix') || inputText.toLowerCase().includes('tarif')) {
        botResponse = "Vous pouvez consulter tous nos tarifs sur la page des prestations. Souhaitez-vous que je vous oriente vers une prestation spécifique?";
      } else if (inputText.toLowerCase().includes('rendez-vous') || inputText.toLowerCase().includes('réserver')) {
        botResponse = "Pour prendre rendez-vous, vous pouvez utiliser notre formulaire de réservation en ligne ou nous appeler au 0614084242.";
      } else if (inputText.toLowerCase().includes('adresse') || inputText.toLowerCase().includes('localisation')) {
        botResponse = "Nous sommes situés au 23 rue Wattignies, Paris 75012. Voulez-vous que je vous donne l'itinéraire?";
      } else if (inputText.toLowerCase().includes('heure') || inputText.toLowerCase().includes('ouvert')) {
        botResponse = "Nos horaires d'ouverture sont du lundi au samedi de 10h à 19h.";
      } else {
        botResponse = "Je comprends votre demande. Pour une réponse précise, je vous recommande de nous contacter directement par téléphone au 0614084242 ou de consulter notre site web.";
      }

      const botMessage: Message = {
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* bouton de lancement */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-gradient-primary shadow-lg"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* En-tête */}
          <div className="bg-gradient-primary text-white p-3 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Assistant Guzel K Beauty</h3>
              <p className="text-xs opacity-80">En ligne</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* messages */}
          <div className="flex-1 p-3 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${message.sender === 'user' ? 'text-right' : ''}`}
              >
                <div
                  className={`inline-block p-2 rounded-lg max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {message.timestamp.toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          
          <div className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} className="bg-gradient-primary">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};