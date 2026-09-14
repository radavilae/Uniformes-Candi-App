const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
import { productData } from '../data/productData.js';

// Generar resumen de modelos para el system prompt
const generateProductSummary = () => {
  let summary = '\n\nCATÁLOGO DE MODELOS:\n';
  
  Object.keys(productData).forEach(category => {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    summary += `\n${categoryName}:\n`;
    
    productData[category].forEach(product => {
      summary += `- MOD-${product.code}: ${product.name}\n`;
      summary += `  ${product.description}\n`;
      summary += `  Material: ${product.material}\n`;
      summary += `  Tallas: ${product.sizes.join(', ')}\n`;
      summary += `  Colores: ${product.colors.join(', ')}\n`;
      summary += `  Características: ${product.features.join(', ')}\n`;
    });
  });
  
  return summary;
};

// Buscar modelo específico por código
const findModelByCode = (code) => {
  const allModels = [];
  
  Object.keys(productData).forEach(category => {
    productData[category].forEach(product => {
      allModels.push({
        ...product,
        category: category
      });
    });
  });
  
  // Buscar por código exacto (con o sin prefijo MOD-)
  const cleanCode = code.replace(/MOD-/i, '').toUpperCase();
  return allModels.find(model => 
    model.code.toUpperCase() === cleanCode || 
    `MOD-${model.code}`.toUpperCase() === code.toUpperCase()
  );
};

// Generar respuesta detallada de un modelo
const generateModelResponse = (model) => {
  const categoryName = model.category.charAt(0).toUpperCase() + model.category.slice(1);
  
  return `**${categoryName} MOD-${model.code}: ${model.name}**

${model.description}

Material: ${model.material}
Tallas: ${model.sizes.join(', ')}
Colores: ${model.colors.join(', ')}
Características: ${model.features.join(', ')}
Cuidado: ${model.care}

Precio: ${model.price}

¿Te gustaría más información sobre este modelo o necesitas ayuda con otra cosa?`;
};

const getAIResponse = async (userMessage, conversationHistory) => {
  try {
    // Detectar si el usuario menciona un código de modelo específico
    const modelCodeMatch = userMessage.match(/MOD-\d+/i) || userMessage.match(/\b\d{3,4}\b/);
    
    if (modelCodeMatch) {
      const modelCode = modelCodeMatch[0];
      const model = findModelByCode(modelCode);
      
      if (model) {
        return generateModelResponse(model);
      } else {
        return `Lo siento, no encontré el modelo ${modelCode} en nuestro catálogo.

Tenemos disponibles modelos en las siguientes categorías:
- Chamarras: 12 modelos (MOD-0003, MOD-004, MOD-0077, etc.)
- Suéteres: 17 modelos (MOD-0009, MOD-0013, MOD-0025, etc.)
- Chalecos: 6 modelos (MOD-0007, MOD-0011, MOD-0040, etc.)
- Pants: 9 modelos (MOD-0003P, MOD-004P, MOD-0033P, etc.)
- Faldas: 4 modelos (MOD-0002, MOD-0078, MOD-0164, etc.)
- Pantalones: 2 modelos (MOD-0089, MOD-0171)
- Y más: Sudaderas, Batas, Mandiles, Playeras

¿Te gustaría que te muestre los modelos disponibles de alguna categoría específica?`;
      }
    }
    
    const productSummary = generateProductSummary();
    
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

${productSummary}

TU ROL:
- Ser amable, profesional y servicial
- Responder preguntas sobre productos, precios, tallas, envíos y personalización
- Cuando el usuario pregunte por modelos específicos de cualquier prenda, usa la información del catálogo de modelos arriba listado
- Proporciona detalles sobre código de modelo, nombre, descripción, material, tallas, colores y características
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
  
  // Primero verificar si menciona un código de modelo específico
  const modelCodeMatch = userMessage.match(/MOD-\d+/i) || userMessage.match(/\b\d{3,4}\b/);
  
  if (modelCodeMatch) {
    const modelCode = modelCodeMatch[0];
    const model = findModelByCode(modelCode);
    
    if (model) {
      return generateModelResponse(model);
    } else {
      return `Lo siento, no encontré el modelo ${modelCode} en nuestro catálogo.

Tenemos disponibles modelos en las siguientes categorías:
- Chamarras: 12 modelos (MOD-0003, MOD-004, MOD-0077, etc.)
- Suéteres: 17 modelos (MOD-0009, MOD-0013, MOD-0025, etc.)
- Chalecos: 6 modelos (MOD-0007, MOD-0011, MOD-0040, etc.)
- Pants: 9 modelos (MOD-0003P, MOD-004P, MOD-0033P, etc.)
- Faldas: 4 modelos (MOD-0002, MOD-0078, MOD-0164, etc.)
- Pantalones: 2 modelos (MOD-0089, MOD-0171)
- Y más: Sudaderas, Batas, Mandiles, Playeras

¿Te gustaría que te muestre los modelos disponibles de alguna categoría específica?`;
    }
  }
  
  if (lowerMessage.includes('precio') || lowerMessage.includes('costo')) {
    return "Los precios varían según el material, la cantidad y el diseño de los uniformes. ¿Te gustaría que te envíe una cotización o prefieres llamarnos al 449.916.65.34 para darte un precio exacto?";
  }
  
  if (lowerMessage.includes('talla') || lowerMessage.includes('medida')) {
    return "Contamos con tallas desde XS hasta 5XL, dependiendo del modelo. Para asegurar el mejor ajuste, te recomiendo consultar nuestra tabla de tallas. ¿Para qué tipo de uniforme necesitas las tallas?";
  }
  
  if (lowerMessage.includes('envio') || lowerMessage.includes('entrega')) {
    return "Realizamos envíos a todo México. El tiempo de entrega es de 3-5 días hábiles para la CDMX y área metropolitana. Para otras zonas, el tiempo puede variar.";
  }
  
  if (lowerMessage.includes('catalogo') || lowerMessage.includes('productos')) {
    return "Tenemos una gran variedad de productos: chamarras (12 modelos), chalecos (6 modelos), pantalones (2 modelos), pants (9 modelos), suéteres (17 modelos), faldas (4 modelos), playeras, sudaderas, batas y mandiles. Todos disponibles en tallas XS a 5XL y con opciones de personalización. ¿Te gustaría conocer los modelos específicos de alguna categoría?";
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
  
  // Respuestas específicas por categoría
  if (lowerMessage.includes('chamarra')) {
    return "Tenemos 12 modelos de chamarras: MOD-0003 (Ejecutiva Clásica), MOD-004 (Deportiva), MOD-0077 (Industrial), MOD-0088 (Formal), MOD-0094 (Casual), MOD-0122 (Técnica), MOD-0131 (Premium), MOD-0151 (Moderna), MOD-0162 (Profesional), MOD-0166 (Versátil), MOD-0175 (Especializada) y MOD-0193 (Elite). Cada una con materiales variados como poliéster, algodón y lana. ¿Te interesa algún modelo específico?";
  }
  
  if (lowerMessage.includes('sueter') || lowerMessage.includes('suéter')) {
    return "Contamos con 17 modelos de suéteres: desde el clásico MOD-0009 hasta el avanzado MOD-0185. Tenemos opciones ejecutivas, deportivas, casuales, premium y técnicas. Materiales como algodón, lana y poliéster en tallas S a XXL. ¿Quieres conocer detalles de algún modelo específico?";
  }
  
  if (lowerMessage.includes('chaleco')) {
    return "Tenemos 6 modelos de chalecos: MOD-0007 (Ejecutivo), MOD-0011 (Casual), MOD-0040 (Técnico), MOD-0081 (Moderno), MOD-0096 (Premium) y MOD-0178 (Especializado). Disponibles en materiales como lana, algodón y poliéster con tallas S a XXL. ¿Te interesa alguno en particular?";
  }
  
  if (lowerMessage.includes('pantalon') || lowerMessage.includes('pantalón')) {
    return "Tenemos 2 modelos de pantalones: MOD-0089 (Ejecutivo) y MOD-0171 (Casual). Ambos en tallas 28 a 44, materiales como poliéster/algodón para uso profesional y casual. ¿Quieres más detalles de alguno?";
  }
  
  if (lowerMessage.includes('pants')) {
    return "Contamos con 9 modelos de pants: desde MOD-0003P (Deportivos) hasta MOD-0187. Tenemos opciones casuales, técnicas, modernas, premium y versátiles. Materiales como algodón y poliéster en tallas S a XXL. ¿Te interesa algún modelo específico?";
  }
  
  if (lowerMessage.includes('falda')) {
    return "Tenemos 4 modelos de faldas: MOD-0002 (Ejecutiva), MOD-0078 (Casual), MOD-0164 (Moderna) y MOD-0170 (Premium). Disponibles en tallas S a XL con materiales como poliéster, algodón y lana. ¿Quieres conocer más detalles?";
  }
  
  if (lowerMessage.includes('sudadera')) {
    return "Tenemos el modelo MOD-0193 de sudadera. Este modelo está disponible en tallas S a XL y ofrece características premium. ¿Te gustaría más información sobre este modelo?";
  }
  
  if (lowerMessage.includes('bata')) {
    return "Tenemos el modelo MOD-0090 de bata. Disponible en tallas S a XL con diseño profesional. ¿Te gustaría conocer más detalles?";
  }
  
  if (lowerMessage.includes('mandil')) {
    return "Tenemos el modelo MOD-0065 de mandil. Diseñado para uso profesional con características funcionales. ¿Quieres más información?";
  }
  
  if (lowerMessage.includes('playera')) {
    return "Tenemos modelos de playeras disponibles en tallas S a XL con opciones de personalización. ¿Te gustaría conocer los modelos específicos?";
  }
  
  return "Para brindarte la mejor asistencia, ¿podrías darme más detalles sobre lo que necesitas? Puedo informarte sobre nuestros uniformes, modelos específicos, tallas, materiales y personalización. ¿Qué categoría de productos te interesa?";
};

export { getAIResponse };
