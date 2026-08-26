const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

const getAIResponse = async (userMessage, conversationHistory) => {
  try {
    const systemPrompt = `Eres un asistente virtual de Uniformes Candi, una empresa con 40 años de experiencia en la fabricación de uniformes de alta calidad en México.

INFORMACIÓN DE LA EMPRESA:
- 40 años de experiencia (1985-2025)
- Productos: chamarras, chalecos, pantalones, playeras, sudaderas, faldas, suéteres, batas, mandiles
- Tallas: XS a 5XL
- Envíos: Todo México, 3-5 días hábiles para CDMX/área metropolitana
- Horario: Lunes a viernes 9AM-7PM, sábados 9AM-2PM
- Contacto: Tel. 449.916.65.34 / 449.111.44.80, Email: uniformescandiaguascalientes@gmail.com
- Ubicación: Navarrete 1031 Fracc. San Marcos, CP 20070 Aguascalientes Ags. México
- Personalización: Logos, nombres, bordes disponibles
- Mínimo de pedido para uniformes personalizados: Consultar con ventas

TU ROL:
- Ser amable, profesional y servicial
- Responder preguntas sobre productos, precios, tallas, envíos y personalización
- Ayudar con cotizaciones: Si el usuario pide un precio, indícale que los precios varían según el material, cantidad y diseño, y ofrece generar una cotización o enviarlos a WhatsApp/llamada para un precio exacto.
- Usar un tono cercano pero profesional
- Si no sabes algo específico (como precios exactos o disponibilidad de talla específica), sugiere contactar al equipo de ventas por teléfono o WhatsApp.
- Nunca inventes precios.

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
    return "Los precios varían según el material, la cantidad y el diseño de los uniformes. ¿Te gustaría que te envíe una cotización o prefieres llamarnos al 449.916.65.34 para darte un precio exacto?";
  }
  
  if (lowerMessage.includes('talla') || lowerMessage.includes('medida')) {
    return "Contamos con tallas desde XS hasta 5XL. Para asegurar la mejor ajuste, te recomiendo consultar nuestra tabla de tallas. ¿Para qué tipo de uniforme necesitas las tallas?";
  }
  
  if (lowerMessage.includes('envio') || lowerMessage.includes('entrega')) {
    return "Realizamos envíos a todo México. El tiempo de entrega es de 3-5 días hábiles para la CDMX y área metropolitana. Para otras zonas, el tiempo puede variar.";
  }
  
  if (lowerMessage.includes('catalogo') || lowerMessage.includes('productos')) {
    return "Tenemos una gran variedad de productos: chamarras, chalecos, pantalones, playeras, sudaderas, faldas, suéteres, batas y mandiles. Todos disponibles en tallas XS a 5XL y con opciones de personalización.";
  }
  
  if (lowerMessage.includes('contacto') || lowerMessage.includes('telefono')) {
    return "Puedes contactarnos al Tel. 449.916.65.34 / 449.111.44.80 o por email a uniformescandiaguascalientes@gmail.com. Estamos en Navarrete 1031 Fracc. San Marcos, Aguascalientes.";
  }
  
  if (lowerMessage.includes('horario') || lowerMessage.includes('abierto')) {
    return "Nuestro horario es de lunes a viernes de 9AM a 7PM, y sábados de 9AM a 2PM.";
  }
  
  if (lowerMessage.includes('personalizado') || lowerMessage.includes('logo')) {
    return "¡Sí! Ofrecemos servicios de personalización con logotipos, nombres y bordes. Cuéntame más sobre lo que necesitas para tu empresa o escuela.";
  }
  
  return "Para brindarte la mejor asistencia, ¿podrías darme más detalles sobre lo que necesitas? Estoy aquí para ayudarte con información sobre nuestros uniformes, tallas y personalización.";
};

export { getAIResponse };
