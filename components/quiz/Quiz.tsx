// components/quiz/Quiz.tsx
'use client';

import { useEffect, useRef, useState } from "react";
import QuizContent from './QuizContent';
import QuizNavigation from './QuizNavigation';
import QuizProgress from './QuizProgress';
import SubdomainProgress from './SubdomainProgress';
import { Question, UserAnswer } from './types';

type QuizProps = {
    questions: Question[];
    quizKey: string;
};

//TODO: refactor and useReducer Hook
const Quiz: React.FC<QuizProps> = ({ questions, quizKey }) => {
    const LOCAL_STORAGE_KEY = `${quizKey}QuizAnswers`;

    const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showScore, setShowScore] = useState<boolean>(false);
    const [showExplanation, setShowExplanation] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [, setIsCorrect] = useState<boolean | null>(null);

    const [isDropdownOpen, setIisDropdownOpen] = useState<boolean>(false);

    const settingsRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const [subdomainProgress, setSubDomainProgress] = useState<number>(0);
    const [currentSubDomain, setCurrentSubDomain] = useState<string>(questions[0].subDomain);
    const [currentCriticalTopic, setCurrentCriticalTopic] = useState<string>(questions[0].criticalTopic);

    const totalQuestions = questions.length;

    // Helper function to Find First Unanswered Question
    const findFirstUnanswered = (answers: UserAnswer[]): number => {
        for (let i = 0; i < totalQuestions; i++) {
            const question = questions[i].question;
            const answered = answers.find((ans) => ans.question === question);
            if (!answered) {
                return i;
            }
        }
        // If all questions are answered, return the last index
        return totalQuestions - 1;
    };

    // Calculate percentage complete based on number of answered questions
    const calculatePercentageComplete = (): number => {
        const answeredQuestions = userAnswers.length;
        return Math.round((answeredQuestions / totalQuestions) * 100);
    };

    // Load User Answers from Local Storage on Mount
    // TODO: Refactor repetion of useEffect hook *DRY*
    useEffect(() => {
        const storedAnswers = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedAnswers){
            try {
                const parsedAnswers: UserAnswer[] = JSON.parse(storedAnswers);
                setUserAnswers(parsedAnswers);

                // Calculate Score
                const storedScore = parsedAnswers.filter((answer) => answer.isCorrect).length;
                setScore(storedScore);

                // Set Current Question to First Unanswered
                const firstUnanswered = findFirstUnanswered(parsedAnswers);
                setCurrentQuestion(firstUnanswered);
            } catch (error) {
                console.error('Failed to parse stored answers:', error);
            }
        }
    }, [LOCAL_STORAGE_KEY]);

    // Synchronize State When currentQuestion or userAnswers Change
    useEffect(() => {
        const currentQ = questions[currentQuestion];
        setCurrentSubDomain(currentQ.subDomain);
        setCurrentCriticalTopic(currentQ.criticalTopic);

        const answer = userAnswers.find((ans) => ans.question === currentQ.question);
        if (answer) {
            setSelectedOption(answer.selectedOption);
            setIsCorrect(answer.isCorrect);
            setShowExplanation(true);
        } else {
            setSelectedOption('');
            setIsCorrect(null);
            setShowExplanation(false);
        }

        // update subdomain progress
        const questionsInSubDomain = questions.filter((q) => q.subDomain === currentQ.subDomain).length;
        const answeredInSubDomain = userAnswers.filter(
            (ans) => questions.find(q => q.question === ans.question)?.subDomain === currentQ.subDomain
        ).length;
        setSubDomainProgress(Math.round((answeredInSubDomain / questionsInSubDomain) * 100));
        }, [currentQuestion, userAnswers, questions]);

        // Handle Option Selection
        const handleOptionSelect = (option: string) => {
            if (selectedOption) return; // Prevent multiple selection
            setSelectedOption(option);
            setShowExplanation(true);
            const correct = option === questions[currentQuestion].answer;
            setIsCorrect(correct);
            if (correct) {
                setScore((prev) => prev + 1);
            }

            // Save or Update User Answer
            setUserAnswers((prev) => {
                const updatedAnswers = [...prev];
                const existingIndex = updatedAnswers.findIndex(
                    (answer) => answer.question === questions[currentQuestion].question
                );
                if (existingIndex !== -1) {
                    // If the question was previously answered, update it
                    // Adjust score accordingly
                    if (updatedAnswers[existingIndex].isCorrect && !correct) {
                        setScore((prev) => prev - 1);
                    }else if (!updatedAnswers[existingIndex].isCorrect && correct) {
                        setScore((prev) => prev + 1);
                    }
                    updatedAnswers[existingIndex] = {
                        question: questions[currentQuestion].question,
                        selectedOption: option || 'No Answer',
                        isCorrect: correct,
                    };
                } else {
                    // If its a new answer, add it to the array
                    updatedAnswers.push({
                        question: questions[currentQuestion].question,
                        selectedOption: option || 'No Answer',
                        isCorrect: correct,
                    });
                }

                // Persist Updated Answers to Local Storage
                localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedAnswers));

                return updatedAnswers;
            })
        };

        // Handle Navigation to Next Sequential Question
        const handleNextQuestion = () => {
            if (currentQuestion + 1 < totalQuestions) {
                setCurrentQuestion(currentQuestion + 1);
            }else{
                // If all questions are answered, show the score
                setShowScore(true);
            }
        };

        // Handle Navigation to Previous Question
        const handlePrevQuestion = () => {
            if (currentQuestion > 0) {
                setCurrentQuestion(currentQuestion - 1);
            }
        };

        // Handle Progress Bar Clicks
        const handleProgressBarClick = (index: number) => {
            setCurrentQuestion(index);
        };

        // Handle Quiz Restart
        const handleRestartQuiz = () => {
            setCurrentQuestion(0);
            setSelectedOption('');
            setScore(0);
            setShowScore(false);
            setShowExplanation(false);
            setIsCorrect(null);
            setUserAnswers([]);

            // Clear Stored Answers from Local Storage
            localStorage.removeItem(LOCAL_STORAGE_KEY);

            // Close Dropdown if Open
            setIisDropdownOpen(false)
        };

        // Handle Go to First Unanswered Question
        const handleGoToFirstUnanswered = () => {
            const firstUnanswered = findFirstUnanswered(userAnswers);
            if (userAnswers.length === totalQuestions) {
                // All Questions are answered
                // TODO: Replace alert with toast notifications
                alert('All questions have been answered!');
            }else {
                setCurrentQuestion(firstUnanswered);
            }

            // Close Dropdown if Open
            setIisDropdownOpen(false);
        };

        // Toggle Dropdown Visibilty
        const toggleDropdown = () => {
            setIisDropdownOpen((prev) => !prev);
        };

        // Close Dropdown When Clicking Outside
        useEffect (() => {
            const handleClickOutside = (event: MouseEvent) => {
                if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target as Node) &&
                    settingsRef.current &&
                    !settingsRef.current.contains(event.target as Node)
                ) {
                    setIisDropdownOpen(false);
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, []);
        
        return (
            <div className='flex flex-col py-2 items-center justify-center transition-colors duration-500'>
                {/* Navigation Buttons: Back Settings (Dropdown), Next */}
                <QuizNavigation
                    currentQuestion={currentQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleNextQuestion={handleNextQuestion}
                    selectedOption={selectedOption}
                    totalQuestions={totalQuestions}
                    handleRestartQuiz={handleRestartQuiz}
                    handleGoToFirstUnanswered={handleGoToFirstUnanswered}
                    toggleDropdown={toggleDropdown}
                    isDropdownOpen={isDropdownOpen}
                    settingsRef={settingsRef}
                    dropdownRef={dropdownRef}
                />

                {/* Subdomain Progress Bar */}
                <SubdomainProgress 
                    currentSubDomain={currentSubDomain}
                    currentCriticalTopic={currentCriticalTopic}
                    subDomainProgress={subdomainProgress}
                />

                {/* Overall Progress Bar with Clickable Segments */}
                <QuizProgress
                    userAnswers={userAnswers}
                    currentQuestion={currentQuestion}
                    questions={questions}
                    handleProgressBarClick={handleProgressBarClick}
                    totalQuestions={totalQuestions}
                    calculatePercentageComplete={calculatePercentageComplete}
                />

                {/* Quiz Content */}
                <QuizContent
                    showScore={showScore}
                    score={score}
                    totalQuestions={totalQuestions}
                    questions={questions}
                    currentQuestion={currentQuestion}
                    handleOptionSelect={handleOptionSelect} 
                    handleNextQuestion={handleNextQuestion}// <-- Pass the function here
                    selectedOption={selectedOption}
                    showExplanation={showExplanation}
                    handleRestartQuiz={handleRestartQuiz}
                />
            </div>
        );

    };

    export default Quiz;