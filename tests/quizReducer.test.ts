import { test, expect } from '@playwright/test';
import { quizReducer } from '../components/quiz/reducers/quizReducer'
import { QuizState, QuizAction, UserAnswer } from '../components/quiz/types'

// Initial state for testing
const initialState: QuizState = {
    userAnswers: [],
    currentQuestion: 0,
    totalQuestions: 5,
    score: 0,
    showScore: false,
    showExplanation: false,
    selectedOption: '',
    isCorrect: null,
    isDropdownOpen: false,
    subdomainProgress: 0,
    currentSubDomain: '',
    currentCriticalTopic: ''
};

test.describe('quizReducer', () => {
    test('should handle INITIALIZE_QUIZ action', () => {
        const storedAnswers: UserAnswer[] = [
            { question: '0', selectedOption: 'A', isCorrect: true },
            { question: '1', selectedOption: 'B', isCorrect: false },
        ];
        const action: QuizAction = {
            type: 'INITIALIZE_QUIZ',
            payload: { storedAnswers, firstUnansweredIndex: 2 },
        };

        const newState = quizReducer(initialState, action);

        expect(newState.userAnswers).toEqual(storedAnswers);
        expect(newState.score).toBe(1); // Only one correct answer in storedAnswers
        expect(newState.currentQuestion).toBe(2); // First unanswered question index
    });

    test('should handle NEXT_QUESTION action (not last question)', () => {
        const action: QuizAction = { type: 'NEXT_QUESTION' };

        const newState = quizReducer(initialState, action);

        expect(newState.currentQuestion).toBe(1); // Moved to the next question
        expect(newState.showScore).toBe(false); // Not the last question
    });

    test('should handle NEXT_QUESTION action (last question', () => {
        const stateAtLastQuestion: QuizState = {
            ...initialState,
            currentQuestion: 4, // Assuming totalQuestions is 5
        };
        const action: QuizAction = { type: 'NEXT_QUESTION' };

        const newState = quizReducer(stateAtLastQuestion, action);
 
        expect(newState.currentQuestion).toBe(4); // Stayed at the last question
        expect(newState.showScore).toBe(true); //Show score at the last question
    });

    test('should handle PREV_QUESTION action', ()=> {
        const stateAtQuestion2: QuizState = {
            ...initialState,
            currentQuestion: 2,
        };
        const action: QuizAction = { type: 'PREV_QUESTION' };
        
        const newState = quizReducer(stateAtQuestion2, action);
    });

    test('should handle GO_TO_Question action', () => {
        const action: QuizAction = {
            type: 'GO_TO_QUESTION',
            payload: { index: 3}
        };

        const newState = quizReducer(initialState, action);

        expect(newState.currentQuestion).toBe(3); // Jumped to question 3
    });

    test('should handle RESTART_QUIZ action', () => {
        const stateWithData: QuizState = {
            ...initialState,
            userAnswers: [{ question: '0', selectedOption: 'A', isCorrect: true }],
            score: 1,
            currentQuestion: 2,
        };
        const action: QuizAction = { type: 'RESTART_QUIZ' };

        const newState = quizReducer(stateWithData, action);

        expect(newState.userAnswers).toHaveLength(0); // Answers cleared
        expect(newState.score).toBe(0); // Score reset
        expect(newState.currentQuestion).toBe(0); // Reset to the first question
        expect(newState.showScore).toBe(false); // Score hidden
    });

    test('should handle TOGGLE_DROPDOWN action', () => {
        const action: QuizAction = { type: 'TOGGLE_DROPDOWN' };

        const newState = quizReducer(initialState, action);

        expect(newState.isDropdownOpen).toBe(true); // Toggled from false to true
    });

    test('should handle CLOSE_DROPDOWN action', () => {
        const stateWithOpenDropdown: QuizState = {
            ...initialState,
            isDropdownOpen: true,
        };
        const action: QuizAction = { type: 'CLOSE_DROPDOWN' };

        const newState = quizReducer(stateWithOpenDropdown, action);

        expect(newState.isDropdownOpen).toBe(false); // Dropdown closed
    });

    test('should handle UPDATE_SUBDOMAIN_PROGRESS action', () => {
        const action: QuizAction = {
            type: 'UPDATE_SUBDOMAIN_PROGRESS',
            payload: { progress: 50, subdomain: 'Math', criticalTopic: 'Algebra' },
        };

        const newState = quizReducer(initialState, action);

        expect(newState.subdomainProgress).toBe(50);
        expect(newState.currentSubDomain).toBe('Math');
        expect(newState.currentCriticalTopic).toBe('Algebra')
    });
});