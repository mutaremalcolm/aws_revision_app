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

export type QuizState = {
    totalQuestions: number;
    userAnswers: UserAnswer[];
    currentQuestion: number;
    score: number;
    showScore: boolean;
    showExplanation: boolean;
    selectedOption: string;
    isCorrect: boolean | null;
    isDropdownOpen: boolean;
    subdomainProgress: number;
    currentSubDomain: string;
    currentCriticalTopic: string;
};

export type QuizAction = 
| { type: 'INITIALIZE_QUIZ'; payload: { storedAnswers: UserAnswer[]; firstUnansweredIndex: number } }
| { type: 'SELECT_OPTION'; payload: { option: string; isCorrect: boolean; existingAnswerIndex: number } }
| { type: 'NEXT_QUESTION' }
| { type: 'PREV_QUESTION' }
| { type: 'GO_TO_QUESTION'; payload: { index: number } }
| { type: 'RESTART_QUIZ' }
| { type: 'TOGGLE_DROPDOWN' }
| { type: 'CLOSE_DROPDOWN' }
| { type: 'UPDATE_SUBDOMAIN_PROGRESS'; payload: { progress: number; subdomain: string; criticalTopic: string } };