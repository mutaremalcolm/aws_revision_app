// components/QuizProgress.tsx

import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Question, UserAnswer } from './types';

type QuizProgressProps = {
    userAnswers: UserAnswer[];
    currentQuestion: number;
    questions: Question[];
    handleProgressBarClick: (index: number) => void;
    totalQuestions: number;
    calculatePercentageComplete: () => number;
};

const QuizProgress: React.FC<QuizProgressProps> = ({
                                                        userAnswers,
                                                        currentQuestion,
                                                        questions,
                                                        handleProgressBarClick,
                                                        totalQuestions,
                                                        calculatePercentageComplete
                                                    }) => {                                               
   return (

    <div className='w-full max-w-2xl mb-4'>
        <div className='flex justify-between items-center mb-2'>
            <span className='text-xs font-medium text-gray-700 dark:text-gray-300'>
                Question {currentQuestion + 1} of {totalQuestions}
            </span>
            <span>
                {calculatePercentageComplete()}% Complete
            </span>
        </div>

        <div className='w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700 flex relative'>
            <div
                className='bg-green-500 h-4 rounded-full transition-width duration-300'
                style={{ width: `${calculatePercentageComplete()}%` }}
            ></div>

            <div className='absolute inset-0 flex justify-between'>
                {questions.map((question, index) => {
                    const isCurrent = index === currentQuestion;
                    const answer = userAnswers.find(
                        (ans) => ans.question === question.id
                    );
                    const isAnswered = !!answer;
                    const isCorrect = answer?.isCorrect

                    return (
                        <button
                            key={index}
                            onClick={() => handleProgressBarClick(index)}
                            className={`relative w-6 h-6 rounded-full focus:outline-none transition
                                ${isCurrent
                                ? 'bg-blue-600 ring-2 ring-blue-300'
                                : isAnswered
                                    ? isCorrect
                                        ? 'bg-green-500'
                                        : 'bg-red-500'
                                    : 'bg-gray-400 dark:bg-gray-500'
                                } hover:bg-blue-700` }
                                aria-label={`Go to question ${index + 1}`}
                        >
                            {isAnswered && !isCurrent && (
                                <span>
                                    {isCorrect ? <FaCheck /> : <FaTimes />}
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>                                                    
);
}

export default QuizProgress;