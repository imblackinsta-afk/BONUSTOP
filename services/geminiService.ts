import { GoogleGenAI, Chat } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const initializeGenAI = () => {
  if (!process.env.API_KEY) {
    console.error("API_KEY is missing via process.env.API_KEY");
    return null;
  }
  if (!genAI) {
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return genAI;
};

export const getChatResponseStream = async (message: string) => {
  const ai = initializeGenAI();
  if (!ai) {
    throw new Error("API Key not configured");
  }

  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
      },
    });
  }

  try {
    const responseStream = await chatSession.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Gemini API Error:", error);
    chatSession = null; // Reset session on error
    throw error;
  }
};
