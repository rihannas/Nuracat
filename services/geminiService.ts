import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // In a real app, ensure this is handled securely
// Note: For this frontend-only demo, we assume the key is present or we fail gracefully.

let ai: GoogleGenAI | null = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (e) {
  console.warn("Gemini API Key not found or invalid.");
}

export const generateSafetyTip = async (topic: string, language: string): Promise<string> => {
  if (!ai) return "Stay safe online! Remember to keep your passwords private.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Give a very short, one-sentence encouraging safety tip for a girl in Ethiopia regarding "${topic}". Language: ${language} (if Amharic or Oromo, provide English translation in parentheses). Tone: Sisterly, protective, kind.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Remember, you are strong and your privacy matters.";
  }
};

export const checkContentSafety = async (text: string): Promise<{ safe: boolean; reason?: string }> => {
  if (!ai) return { safe: true };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Analyze this text for a safe space community for women. Is it bullying, victim-blaming, or hate speech? Answer JSON: {"safe": boolean, "reason": "string"}. Text: "${text}"`,
      config: {
        responseMimeType: "application/json"
      }
    });
    
    const jsonStr = response.text.trim();
    // Basic cleanup for markdown json blocks if returned
    const cleanJson = jsonStr.replace(/```json/g, '').replace(/```/g, '');
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("Gemini Safety Check Error", error);
    return { safe: true }; // Fail open for demo purposes, fail closed in prod
  }
};
