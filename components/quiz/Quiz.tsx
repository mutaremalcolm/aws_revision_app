// components/quiz/Quiz.tsx
'use client';

import { useEffect, useRef, useCallback, useReducer } from "react";
import QuizContent from './QuizContent';
import QuizNavigation from './QuizNavigation';
import QuizProgress from './QuizProgress';
import SubdomainProgress from './SubdomainProgress';
import { Question, QuizState, UserAnswer } from './types';
import { quizReducer } from "./reducers/quizReducer";
import { useQuizPersistence } from "./hooks/useQuizPersistence";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { 
    findFirstUnanswered,
    calculatePercentageComplete,
    calculateSubDomainProgress,
} from './utils/utils'

type QuizProps = {
    questions: Question[];
    quizKey: string;
};

// TODO: refactor and useReducer Hook
const Quiz: React.FC<QuizProps> = ({ questions, quizKey }) => {
    // Custom hooks
    const { saveAnswers, loadAnswers, clearAnswers } = useQuizPersistence(quizKey);

    //Refs for dropdown
    const settingsRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    //Initial state
    const initialState: QuizState = {
        userAnswers: [],
        currentQuestion: 0,
        score: 0,
        showScore: false,
        showExplanation: false,
        selectedOption: '',
        isCorrect: null,
        isDropdownOpen: false,
        subdomainProgress: 0,
        currentSubDomain: questions.length > 0 ? questions[0].subDomain : '',
        currentCriticalTopic: questions.length > 0 ? questions[0].criticalTopic : '',
        totalQuestions: questions.length

    };

    const [state, dispatch] = useReducer(quizReducer, initialState);

    // Initialize quiz from localStorage
    useEffect(() => {
        const storedAnswers = loadAnswers();
        if (storedAnswers.length > 0) {
            const firstUnansweredIndex = findFirstUnanswered(questions, storedAnswers);

            dispatch({
                type: 'INITIALIZE_QUIZ',
                payload: {
                    storedAnswers,
                    firstUnansweredIndex
                }
            });
        }
    }, []);

    // Save answers to loaclStorage when they change
    useEffect(() => {
        if (state.userAnswers.length > 0) {
            saveAnswers(state.userAnswers);
        }
    }, [state.userAnswers]);

    // Update subdomain progress when current question changes
    useEffect(()=> {
        if (questions.length === 0) return;

        const currentQ = questions[state.currentQuestion];
        const progress = calculateSubDomainProgress(
            questions,
            state.userAnswers,
            currentQ.subDomain
        );

        dispatch({
            type: 'UPDATE_SUBDOMAIN_PROGRESS',
            payload: {
                progress,
                subdomain: currentQ.subDomain,
                criticalTopic: currentQ.criticalTopic
            }
        });
    }, [state.currentQuestion, state.userAnswers, questions]);

    // Handle outside click for dropdown
    const handleCloseDropDown = useCallback(()=> {
        dispatch({ type: 'CLOSE_DROPDOWN' });
    }, []);

    useOutsideClick([settingsRef, dropdownRef], handleCloseDropDown);

    // Event handlers
    const handleOptionSelect = (option: string) => {
        if (state.selectedOption || questions.length === 0) return;

        const currentQ = questions[state.currentQuestion];
        const isCorrect = option === currentQ.answer;

        const existingAnswerIndex = state.userAnswers.findIndex(
            (answer) => answer.question === currentQ.question
        );

        dispatch({
            type: 'SELECT_OPTION',
            payload: {
                option,
                isCorrect,
                existingAnswerIndex
            }
        });
    };

    const handleNextQuestion = () => {
        dispatch({ type: 'NEXT_QUESTION' });
    };

    const handlePrevQuestion = () => {
        dispatch({ type: 'PREV_QUESTION' });
    };

    const handleProgressBarClick = (index: number) => {
        dispatch({ type: 'GO_TO_QUESTION', payload: { index } });
    };

    const handleRestartQuiz = () => {
        clearAnswers();
        dispatch({ type: 'RESTART_QUIZ'})
    };

    const handleGoToFirstUnanswered = () => {
        const firstUnanswered = findFirstUnanswered(questions, state.userAnswers);

        if (state.userAnswers.length === questions.length) {
            //TODO: Replace with toast notification
            alert('All questions have been answered!');
        }else {
            dispatch({ type: 'GO_TO_QUESTION', payload: { index: firstUnanswered } });
        }

        dispatch({ type: 'CLOSE_DROPDOWN' });
    };

    const toggleDropdown = () => {
        dispatch({ type: 'TOGGLE_DROPDOWN'})
    };

    const calculateProgress = () => {
        return calculatePercentageComplete(state.userAnswers.length, questions.length)
    };

    return (
        <div className='flex flex-col py-2 items-center justify-center transition-colors duration-500'>
            <QuizNavigation
              currentQuestion={state.currentQuestion}
              handlePrevQuestion={handlePrevQuestion}
              handleNextQuestion={handleNextQuestion}
              selectedOption={state.selectedOption}
              totalQuestions={questions.length}
              handleRestartQuiz={handleRestartQuiz}
              handleGoToFirstUnanswered={handleGoToFirstUnanswered}
              toggleDropdown={toggleDropdown}
              isDropdownOpen={state.isDropdownOpen}
              settingsRef={settingsRef}
              dropdownRef={dropdownRef}
            />

            <SubdomainProgress
              currentSubDomain={state.currentSubDomain}
              currentCriticalTopic={state.currentCriticalTopic}
              subDomainProgress={state.subdomainProgress}
            />

            <QuizProgress 
              userAnswers={state.userAnswers}
              currentQuestion={state.currentQuestion}
              questions={questions}
              handleProgressBarClick={handleProgressBarClick}
              totalQuestions={questions.length}
              calculatePercentageComplete={calculateProgress}
            />

            <QuizContent 
              showScore={state.showScore}
              score={state.score}
              totalQuestions={questions.length}
              questions={questions}
              currentQuestion={state.currentQuestion}
              handleOptionSelect={handleOptionSelect}
              handleNextQuestion={handleNextQuestion}
              selectedOption={state.selectedOption}
              showExplanation={state.showExplanation}
              handleRestartQuiz={handleRestartQuiz}
            />
        </div>
    );
};

export default Quiz;