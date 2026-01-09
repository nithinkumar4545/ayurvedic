
export interface AyurvedicProfile {
  name: string;
  botanicalName: string;
  sanskritName: string;
  rasa: string[]; // Taste
  guna: string[]; // Qualities
  virya: string;  // Potency
  vipaka: string; // Post-digestive effect
  doshaEffect: string; // Vata, Pitta, Kapha influence
  benefits: string[];
  traditionalUses: string[];
  precautions: string;
}

export interface AnalysisResult {
  plantFound: boolean;
  confidence: number;
  profile?: AyurvedicProfile;
  description: string;
}
