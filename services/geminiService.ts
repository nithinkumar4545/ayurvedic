
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function identifyPlant(base64Image: string): Promise<AnalysisResult> {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    Analyze this image of a plant. Determine if it is a known medicinal or Ayurvedic plant.
    If it is, provide its detailed Ayurvedic profile in JSON format.
    The response must follow this schema:
    {
      "plantFound": boolean,
      "confidence": number (0 to 1),
      "profile": {
        "name": string (Common English name),
        "botanicalName": string,
        "sanskritName": string,
        "rasa": string[] (Tastes like Madhura, Amla, Lavana, Katu, Tikta, Kashaya),
        "guna": string[] (Qualities like Laghu, Guru, Snigdha, Ruksha),
        "virya": string (Potency like Ushna or Sheeta),
        "vipaka": string (Post-digestive effect),
        "doshaEffect": string (e.g., 'Balances Vata and Pitta'),
        "benefits": string[],
        "traditionalUses": string[],
        "precautions": string
      },
      "description": string (A brief overview of the plant and its significance in Ayurveda)
    }
    If the plant is not recognizable or not medicinal, set plantFound to false and provide a helpful description.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [
        {
          role: 'user',
          parts: [
            { text: prompt },
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image.split(',')[1] || base64Image,
              },
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response from AI");
    
    return JSON.parse(resultText) as AnalysisResult;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
}
