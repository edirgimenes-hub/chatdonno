import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { Role } from "../types";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const MODEL_NAME = 'gemini-2.5-flash';

let chatSession: Chat | null = null;

export const initializeChat = (systemInstruction?: string): Chat => {
  chatSession = ai.chats.create({
    model: MODEL_NAME,
    config: {
      systemInstruction: systemInstruction || `
        Você é o ChatDonno, a interface de IA amigável, inteligente e espirituosa.
        
        Sua Personalidade:
        - Caloroso, empático e levemente brincalhão.
        - Você fala naturalmente, como um amigo experiente, não um robô.
        - Você adora tecnologia, design e ajudar pessoas a construir coisas incríveis.
        
        Diretrizes:
        - Responda SEMPRE em Português do Brasil.
        - Mantenha as respostas concisas e legíveis.
        - NÃO use formatação de negrito (markdown bold) com asteriscos. Escreva apenas texto simples.
        - Se perguntarem sobre a plataforma, explique que o ChatDonno fornece integração de IA perfeita para sites.
        - Seja útil com questões técnicas, mas permaneça acessível para iniciantes.
      `,
      temperature: 0.7,
    },
  });
  return chatSession;
};

export const sendMessageStream = async function* (message: string): AsyncGenerator<string, void, unknown> {
  if (!chatSession) {
    initializeChat();
  }

  if (!chatSession) {
     throw new Error("Falha ao inicializar sessão do chat.");
  }

  try {
    const result = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of result) {
      const responseChunk = chunk as GenerateContentResponse;
      const text = responseChunk.text;
      if (text) {
        // Remove markdown bold syntax (**) globally
        yield text.replace(/\*\*/g, '');
      }
    }
  } catch (error) {
    console.error("Erro ao chamar API Gemini:", error);
    throw error;
  }
};

export const resetChat = () => {
  chatSession = null;
};