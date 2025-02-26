export type Question = {
    id: number;
    subDomain: string;
    criticalTopic: string;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
};

export type UserAnswer = {
    question: string;
    selectedOption: string;
    isCorrect: boolean;
};