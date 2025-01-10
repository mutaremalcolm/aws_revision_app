//  components/quiz/QuizContent.tsx

import { FaCheckCircle, FaTimesCircle, FaRedo } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from './types';

type QuizContentProps = {
    showScore: boolean;
    score: number;
    totalQuestions: number;
    questions: Question[];
    currentQuestion: number;
    handleOptionSelect: (option: string) => void;
    handleNextQuestion: () => void; // <--- include this
    selectedOption: string;
    showExplanation: boolean;
    handleRestartQuiz: () => void;
};

const QuizContent: React.FC<QuizContentProps> = ({
                                                    showScore,
                                                    score,
                                                    totalQuestions,
                                                    questions,
                                                    currentQuestion,
                                                    handleOptionSelect,
                                                    handleNextQuestion, // <-- Receive the function
                                                    selectedOption,
                                                    showExplanation,
                                                    handleRestartQuiz,
                                            }) => (
    <div className='max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 relative'>
        {showScore ? (
            <AnimatePresence>
                <motion.div
                    key='score'
                    initial={{ opacity: 0, y: -20}}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className='text-center'
                >
                    <h2 className='text-3xl font-bold text-green-600 dark:text-green-400'>
                        Quiz Completed!
                    </h2>
                    <div className='mt-4 flex items-center justify-center'>
                        <span className='text-4xl font-extrabold text-blue-600 dark:text-blue-400'>
                            {score}
                        </span>
                        <span className='text-2xl font-medium text-gray-500 dark:text-gray-300 ml-2'>
                            / {totalQuestions}
                        </span>
                    </div>
                    <p className='mt-4 text-md text-gray-700 dark:text-gray-300'>
                        Great Job 1 You have covered important AWS Concepts.
                    </p>

                    <div className='mt-6'>
                        <button
                            onClick={handleRestartQuiz}
                            className='flex items-center justify-center space-x-2 bg-blue-500 dark:bg-blue-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300'
                        >
                        <FaRedo className='h-5 w-5' />
                        <span>Restart Quiz</span>
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        ) : (
            <AnimatePresence>
                <motion.div key={currentQuestion} animate={{ opacity: 1, x: 0 }}>
                    {/* Question Card */}
                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold text-blue-800 dark:text-blue-200 mb-2'>
                            {questions[currentQuestion].question}
                        </h3>
                    </div>

                    {/* Options */}
                    <ul className='space-y-3'>
                        {questions[currentQuestion].options.map((option, index) => {
                            const isOptionCorrect = 
                                option === questions[currentQuestion].answer;
                            const isOptionSelected = option === selectedOption;

                            return  (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <button 
                                        onClick={() => {
                                            if (!selectedOption) {
                                                handleOptionSelect(option);
                                            }else if (isOptionCorrect) {
                                                handleNextQuestion(); // <-- Trigger next question
                                            }
                                        }}
                                        disabled={!!selectedOption && !isOptionCorrect}
                                        className={`w-full flex items-center justify-between px-4 py-2 border rounded-lg text-left transition-colors duration-300 focus:outline-none
                                            ${
                                            selectedOption
                                                ? isOptionCorrect
                                                    ? 'bg-green-100 dark:bg-green-700 border-green-500 cursor-pointer'
                                                    : isOptionSelected
                                                        ? 'bg-red-100 dark:bg-red-700 border-red-500 cursor-default'
                                                        : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-default'
                                                    : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-800 cursor-pointer'
                                            }
                                            `}
                                        >
                                            <span className='text-gray-800 dark:text-gray-200'>
                                                {option}
                                            </span>
                                            {selectedOption && (
                                                isOptionCorrect ? (
                                                    <FaCheckCircle className='h-6 w-6 text-green-500' />
                                                ): isOptionSelected ? (
                                                    <FaTimesCircle className='h-6 w-6 text-red-500' />
                                                ): null
                                            )}
                                        </button>
                                </motion.li>
                            )
                        })}
                    </ul>

                    {/* Explanation */}
                    <AnimatePresence>
                        {showExplanation && (
                            <motion.div
                                key='explanation'
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className='mt-4 p-3 bg-blue-50 dark:bg-blue-700 border-blue-500 dark:border-blue-400 rounded overflow-hidden'
                            >
                                <h4 className='text-md font-semibold text-blue-700 dark:text-blue-300'>
                                    Explanation:
                                </h4> 
                                <p>
                                    {questions[currentQuestion].explanation}
                                </p>   
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        )}
    </div>
);

export default QuizContent