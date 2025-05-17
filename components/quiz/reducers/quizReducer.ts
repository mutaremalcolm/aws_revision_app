// reducers/quizReducer.ts
import { QuizState, UserAnswer, QuizAction } from '../types';

export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
    switch (action.type) {
        case 'INITIALIZE_QUIZ':
            return {
                ...state,
                userAnswers: action.payload.storedAnswers,
                currentQuestion: action.payload.firstUnansweredIndex,
                score: action.payload.storedAnswers.filter(answer => answer.isCorrect).length
            };
        
        case 'SELECT_OPTION':
            const { option, isCorrect, existingAnswerIndex } = action.payload;
            let newUserAnswers;
            
            if (existingAnswerIndex >= 0) {
                // Update existing answer
                newUserAnswers = [...state.userAnswers];
                newUserAnswers[existingAnswerIndex] = {
                    ...newUserAnswers[existingAnswerIndex],
                    selectedOption: option,
                    answer: option,
                    isCorrect
                };
            } else {
                // Add new answer
                const currentQuestion = state.questions[state.currentQuestion];
                const newAnswer: UserAnswer = {
                    question: currentQuestion.id.toString(),
                    selectedOption: option,
                    answer: option,
                    isCorrect
                };
                
                newUserAnswers = [...state.userAnswers, newAnswer];
            }
            
            return {
                ...state,
                selectedOption: option,
                isCorrect,
                userAnswers: newUserAnswers,
                score: newUserAnswers.filter(answer => answer.isCorrect).length,
                showExplanation: true
            };
        
        case 'NEXT_QUESTION':
            const currentDomain = state.questions[state.currentQuestion].subDomain;
            let nextIndex = state.currentQuestion + 1;
            
            // If we've reached the end of all questions, stay on the last question
            if (nextIndex >= state.questions.length) {
                nextIndex = state.currentQuestion;
            }
            
            return {
                ...state,
                currentQuestion: nextIndex,
                selectedOption: '',
                isCorrect: null,
                showExplanation: false
            };
        
        case 'PREV_QUESTION':
            const prevIndex = (state.currentQuestion - 1 + state.questions.length) % state.questions.length;
            return {
                ...state,
                currentQuestion: prevIndex,
                selectedOption: '',
                isCorrect: null,
                showExplanation: false
            };
        
        case 'GO_TO_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload.index,
                selectedOption: '',
                isCorrect: null,
                showExplanation: false
            };
        
        case 'RESTART_QUIZ':
            return {
                ...state,
                userAnswers: [],
                currentQuestion: 0,
                score: 0,
                showScore: false,
                showExplanation: false,
                selectedOption: '',
                isCorrect: null,
                isDropdownOpen: false
            };
        
        case 'TOGGLE_DROPDOWN':
            return {
                ...state,
                isDropdownOpen: !state.isDropdownOpen
            };
        
        case 'CLOSE_DROPDOWN':
            return {
                ...state,
                isDropdownOpen: false
            };
        ``
        case 'UPDATE_SUBDOMAIN_PROGRESS':
            return {
                ...state,
                subdomainProgress: action.payload.progress,
                currentSubDomain: action.payload.subdomain,
                currentCriticalTopic: action.payload.criticalTopic
            };
        
        default:
            return state;
    }
};