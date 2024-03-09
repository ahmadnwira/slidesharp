interface PitchDeck {
  id: number;
  pitchName: string;
  fileUrl: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string; // UUID from Supabase
}

interface SummaryReport {
  id: number;
  pitchDeckId: number;
  summaryText: string;
  overallRating: string;
  teamExperience: string;
  marketPotential: string;
  flowOfThePitch: string;
  strengths: string;
  weaknesses: string;
  areasOfImprovement: string;
  recommendations: string;
  createdAt: Date;
}

interface SlideBySlideReport {
  id: number;
  pitchDeckId: number;
  slideNumber: number;
  slideTitle: string;
  slideFunction: string;
  feedback: string;
  suggestions: string;
  createdAt: Date;
}
