# Configuración del Asistente Virtual - Uniformes Candi

## 🤖 Características Implementadas

- **Chatbot inteligente** con integración OpenAI API
- **Diseño premium** con colores de marca (rosa #db1c7c)
- **Responsive** para móvil y desktop
- **Animaciones suaves** acordes al diseño del sitio
- **Respuestas contextuales** sobre productos, precios, tallas, envíos

## 🔧 Configuración de OpenAI API

### 1. Obtener API Key de OpenAI

1. Ve a [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Inicia sesión o crea una cuenta
3. Crea una nueva API Key
4. Copia la key generada

### 2. Configurar en el proyecto

Abre el archivo `.env` en la raíz del proyecto y reemplaza:

```env
REACT_APP_OPENAI_API_KEY=tu_api_key_aqui
```

Por tu API Key real:

```env
REACT_APP_OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 3. Reiniciar el servidor

Después de modificar el archivo `.env`, reinicia el servidor:

```bash
npm run dev
```

## 📋 Funcionalidades del Chatbot

### Preguntas que el asistente puede responder:

- **Precios**: Información sobre costos y cotizaciones
- **Tallas**: Guía de tallas (XS a 5XL)
- **Envíos**: Tiempos de entrega y zonas de cobertura
- **Catálogo**: Información sobre tipos de uniformes
- **Contacto**: Teléfono, email y horarios
- **Personalización**: Logos, nombres y bordes
- **Horarios**: Días y horas de atención

### Respuestas Inteligentes

El chatbot usa OpenAI GPT-3.5-turbo para:
- Entender el contexto de la conversación
- Dar respuestas naturales y personalizadas
- Mantener un tono profesional y servicial
- Manejar preguntas complejas sobre uniformes

## 🎨 Diseño Visual

- **Colores**: Gradiente rosa (#db1c7c a #e91e63)
- **Posición**: Esquina inferior derecha
- **Animaciones**: Suaves transiciones y efectos hover
- **Responsive**: Se adapta a pantallas móviles
- **Estilo**: Consistente con el diseño de Uniformes Candi

## 🚀 Uso del Chatbot

1. El usuario hace clic en el botón flotante (icono de mensaje)
2. Se abre la ventana de chat con mensaje de bienvenida
3. El usuario escribe su pregunta
4. El asistente responde automáticamente
5. La conversación se mantiene en el historial

## 🔒 Seguridad

- La API Key se guarda en variables de entorno (.env)
- Nunca se expone en el código del cliente
- El archivo .env está en .gitignore para seguridad

## 📱 Compatibilidad

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Móvil (iOS Safari, Chrome Mobile)
- ✅ Tablet (iPad, Android tablets)
- ✅ Responsive design

## 🛠️ Personalización

Para modificar las respuestas del chatbot, edita:

1. **Archivo**: `src/services/openaiService.js`
2. **Sección**: `systemPrompt` (línea 6)
3. **Contenido**: Información de la empresa y rol del asistente

## 📞 Soporte

Si el chatbot no responde correctamente:
1. Verifica que la API Key sea válida
2. Revisa que tengas créditos en OpenAI
3. Revisa la consola del navegador para errores
4. El sistema tiene fallback a respuestas predefinidas

## 🎯 Próximas Mejoras (Opcionales)

- Integración con WhatsApp
- Historial de conversaciones guardado
- Envío de correos automáticos
- Integración con sistema de cotizaciones
- Multilenguaje (español, inglés)
- Análisis de preguntas frecuentes
