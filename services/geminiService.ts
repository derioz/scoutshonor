import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { LoadingState } from "../types";

// Initialize the API client
// Note: In a real production app, ensure this key is restricted and process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are "Scout", the friendly, knowledgeable, and professional virtual assistant for "Scout's Honor", a premium dog care facility in Bloomington.
Your tone should be warm, trustworthy, and enthusiastic about dogs.
You help customers understand our services: Boarding, Daycare, Grooming, Training, and Enrichment.

Key Information to know:
- Boarding: Luxury suites, 24/7 monitoring.
- Daycare: Temperament-tested playgroups.
- Grooming: Spa services, breed-specific cuts.
- Training: Positive reinforcement only.
- Location: 611 W 11th St, Bloomington, IN 47404.
- We are an award-winning facility known for cleanliness and safety.

If a user asks about booking, tell them to click the "Book Now" button in the navigation or call us at 812-287-8260.
Keep answers concise (under 3 sentences) unless asked for details.
`;

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<{ text: string; status: LoadingState }> => {
  try {
    if (!process.env.API_KEY) {
      console.warn("API Key is missing.");
      return { 
        text: "I'm having trouble connecting to my brain (API Key missing). Please contact the front desk!", 
        status: LoadingState.ERROR 
      };
    }

    const model = 'gemini-3-flash-preview';

    // Construct the prompt with history context
    // We manually format history here for the generateContent call or use chat.
    // For simplicity in this stateless service wrapper, we'll just send the current message 
    // with the system instruction, but a Chat session is better for history.
    
    // Using chat session for context awareness
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
        },
        history: history.map(h => ({
            role: h.role,
            parts: [{ text: h.text }]
        }))
    });

    const response: GenerateContentResponse = await chat.sendMessage({
        message: message
    });

    return {
      text: response.text || "Woof! I didn't quite catch that.",
      status: LoadingState.SUCCESS
    };

  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "I'm having a bit of a 'ruff' time connecting right now. Please try again later.",
      status: LoadingState.ERROR
    };
  }
};