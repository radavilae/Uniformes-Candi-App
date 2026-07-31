import React, { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { getAIResponse } from '../services/openaiService';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "¡Hola! 👋 Soy el asistente virtual de Uniformes Candi. ¿En qué puedo ayudarte hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    try {
      // Usar OpenAI API para respuesta inteligente
      const aiResponse = await getAIResponse(inputText, messages);
      
      const botResponse = {
        id: messages.length + 2,
        text: aiResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error en el chat:', error);
      
      // Fallback a respuesta simple
      const fallbackResponse = {
        id: messages.length + 2,
        text: "Lo siento, tuve un problema al procesar tu mensaje. Por favor intenta nuevamente o contacta directamente a nuestro equipo de ventas.",
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('es-MX', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getWhatsAppLink = () => {
    const userMessages = messages
      .filter((message) => message.sender === 'user')
      .map((message) => message.text);

    const lastMessage = userMessages[userMessages.length - 1];

    return buildWhatsAppUrl({
      message: lastMessage
        ? `Hola, estuve consultando en el chat de la web: "${lastMessage}"`
        : "Hola, me gustaría recibir información sobre uniformes.",
    });
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        className="chat-widget-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="chat-widget-window">
          {/* Header */}
          <div className="chat-widget-header">
            <div className="chat-widget-header-content">
              <div className="chat-widget-avatar">
                <span>👤</span>
              </div>
              <div className="chat-widget-header-info">
                <h3>Asistente Candi</h3>
                <p className="chat-widget-status">En línea</p>
              </div>
            </div>
            <button
              className="chat-widget-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="chat-widget-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chat-widget-message ${message.sender === 'user' ? 'user' : 'bot'}`}
              >
                <div className="chat-widget-message-content">
                  <p>{message.text}</p>
                  <span className="chat-widget-message-time">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-widget-message bot">
                <div className="chat-widget-message-content">
                  <div className="chat-widget-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="chat-widget-input">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="chat-widget-input-field"
            />
            <button
              type="submit"
              className="chat-widget-send-button"
              disabled={!inputText.trim()}
              aria-label="Enviar mensaje"
            >
              <FiSend size={20} />
            </button>
          </form>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="chat-widget-whatsapp-link"
          >
            <FaWhatsapp size={18} />
            Continuar por WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
