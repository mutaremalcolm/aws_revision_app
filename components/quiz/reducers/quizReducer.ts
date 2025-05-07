import { QuizAction, QuizState, UserAnswer } from "../types";

export const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
    switch (action.type) {
        case 'INITIALIZE_QUIZ': {
            const { storedAnswers, firstUnansweredIndex } = action.payload;
            const storedScore = storedAnswers.filter((answer) => answer.isCorrect).length;

            return {
                ...state,
                userAnswers: storedAnswers,
                score: storedScore,
                currentQuestion: firstUnansweredIndex
            };
        }

        case "SELECT_OPTION":  {
            const { option, isCorrect, existingAnswerIndex } = action.payload;
            let updatedScore = state.score;
            let updatedAnswers = [...state.userAnswers];

            // get the current question ID
            const currentQuestionId = state.questions[state.currentQuestion].id;

            if (existingAnswerIndex !== -1) {
                //Update existing answer
                const previouslyCorrect = updatedAnswers[existingAnswerIndex].isCorrect;

                //Adjust score if correctness changed
                if (previouslyCorrect && !isCorrect) {
                    updatedScore -= 1;
                }else if (!previouslyCorrect && isCorrect) {
                    updatedScore += 1;
                }

                updatedAnswers [existingAnswerIndex] = {
                    ...updatedAnswers[existingAnswerIndex],
                    selectedOption: option as string,
                    isCorrect: isCorrect as boolean
                };
            }else {
                //Add new answer
                if (isCorrect) {
                    updatedScore += 1;
                }

                updatedAnswers.push({
                    question: currentQuestionId,
                    selectedOption: option as string,
                    isCorrect: isCorrect as boolean
                });
            }

        return {
            ...state,
            userAnswers: updatedAnswers,
            selectedOption: option as string,
            showExplanation: true,
            isCorrect: isCorrect as boolean,
            score: updatedScore
        };
    }

        case "NEXT_QUESTION": {
            const isLastQuestion = state.currentQuestion >= state.totalQuestions -1;

            return {
                ...state,
                currentQuestion: isLastQuestion ? state.currentQuestion : state.currentQuestion + 1,
                showScore: isLastQuestion,
                selectedOption: '',
                isCorrect: null,
                showExplanation: false
            };
        }

        case "PREV_QUESTION": {
            return {
                ...state,
                currentQuestion: Math.max(0, state.currentQuestion - 1)
            };
        }

        case "GO_TO_QUESTION": {
            return {
                ...state,
                currentQuestion: action.payload.index
            };
        }

        case "RESTART_QUIZ": {
            return {
                ...state,
                userAnswers: [],
                currentQuestion: 0,
                selectedOption: '',
                score: 0,
                showScore: false,
                showExplanation: false,
                isCorrect: null,
                isDropdownOpen: false
            };
        }

        case "TOGGLE_DROPDOWN": {
            return {
                ...state,
                isDropdownOpen: !state.isDropdownOpen
            };
        }

        case "CLOSE_DROPDOWN": {
            return {
                ...state,
                isDropdownOpen: false
            };
        }

        case "UPDATE_SUBDOMAIN_PROGRESS": {
            const { progress, subdomain, criticalTopic } = action.payload;

            return {
                ...state,
                subdomainProgress: progress,
                currentSubDomain: subdomain,
                currentCriticalTopic: criticalTopic
            };
        }

        default:
            return state;
    }
};