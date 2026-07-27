const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const getAIResponse = async (userMessage, conversationHistory) => {
  try {
    const systemPrompt = `Eres un asistente virtual de Uniformes Candi, una empresa con 40 años de experiencia en la fabricación de uniformes de alta calidad en México.

INFORMACIÓN DE LA EMPRESA:
- 40 años de experiencia (1985-2025)
- Productos: chamarras, chalecos, pantalones, playeras, sudaderas, faldas, suéteres, batas, mandiles
- Tallas: XS a 5XL
- Envíos: Todo México, 3-5 días hábiles CDMY/área metropolitana
- Horario: Lunes a viernes 9AM-7PM, sábados 9AM-2PM
- Contacto: 55-1234-5678, contacto@uniformescandi.com
- Personalización: Logos, nombres, bordes disponibles

TU ROL:
- Ser amable, profesional y servicial
- Responder preguntas sobre productos, precios, tallas, envíos
- Ayudar con cotizaciones y personalización
- Usar un tono cercano pero profesional
- Si no sabes algo, sugiere contactar al equipo de ventas

Responde de manera concisa y útil, máximo 2-3 párrafos.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: userMessage }
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 300,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      throw new Error('Error en la respuesta de OpenAI');
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error('Error al obtener respuesta de OpenAI:', error);
    // Fallback a respuestas predefinidas si falla la API
    return getFallbackResponse(userMessage);
  }
};

const getFallbackResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
    return "Nuestros precios varían según el tipo de uniforme y cantidad. ¿Te gustaría recibir una cotización personalizada?";
  }
  
  if (lowerMessage.includes('talla') || lowerMessage.includes('medida')) {
    return "Contamos con tallas desde XS hasta 5XL. ¿Para qué tipo de uniforme necesitas las tallas?";
  }
  
  if (lowerMessage.includes('envio') || lowerMessage.includes('entrega')) {
    return "Realizamos envíos a todo México. El tiempo de entrega es de 3-5 días hábiles para la CDMX y área metropolitana.";
  }
  
  if (lowerMessage.includes('catalogo') || lowerMessage.includes('productos')) {
    return "Tenemos chamarras, chalecos, pantalones, playeras, sudaderas, faldas, suéteres, batas y mandiles. ¿Qué tipo te interesa?";
  }
  
  if (lowerMessage.includes('contacto') || lowerMessage.includes('telefono')) {
    return "Puedes contactarnos al 55-1234-5678 o por email a contacto@uniformescandi.com";
  }
  
  if (lowerMessage.includes('horario') || lowerMessage.includes('abierto')) {
    return "Nuestro horario es lunes a viernes 9AM-7PM, sábados 9AM-2PM";
  }
  
  if (lowerMessage.includes('personalizado') || lowerMessage.includes('logo')) {
    return "¡Sí! Ofrecemos personalización con logos, nombres y bordes. Cuéntame más sobre tu proyecto.";
  }
  
  return "Para brindarte la mejor asistencia, ¿podrías darme más detalles sobre lo que necesitas? Estoy aquí para ayudarte con información sobre nuestros uniformes.";
};

export { getAIResponse };
