// components/QuizNavigation.tsx
import { FaCog, FaRedo, FaBookmark } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type QuizNavigationProps = {
    currentQuestion: number;
    handlePrevQuestion: () => void;
    handleNextQuestion: () => void;
    selectedOption: string;
    totalQuestions: number;
    handleRestartQuiz: () => void;
    handleGoToFirstUnanswered: () => void;
    toggleDropdown: () => void;
    isDropDownOpen: boolean;
    settingsRef: React.RefObject<HTMLDivElement>;
    dropdownRef: React.RefObject<HTMLDivElement>;
 };

 const QuizNavigation: React.FC<QuizNavigationProps> = ({
                                                            currentQuestion,
                                                            handlePrevQuestion,
                                                            handleNextQuestion,
                                                            selectedOption,
                                                            totalQuestions,
                                                            handleRestartQuiz,
                                                            handleGoToFirstUnanswered,
                                                            toggleDropdown,
                                                            isDropDownOpen,
                                                            settingsRef,
                                                            dropdownRef,
                                                        }) => (
<div className='flex items-center mb-4 w-full max-w-2xl space-x-2'>
    <button
        className={`flex items-center justify-center p-2 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg transition-all duration-300
            ${currentQuestion === 0
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-gray-400 dark:hover:bg-gray-500 cursor-pointer'
            }`}
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
        >
            Back
    </button>

    <div className='flex-1'></div>

    <div className='relative' ref={settingsRef}>
        <button
            className='flex items-center justify-center p-2 bg-blue-500 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-300 focus:outline-none'
            onClick={toggleDropdown}
        >
            <FaCog className='h-5 w-5' />
        </button>

        <AnimatePresence>
            {isDropDownOpen && (
                <motion.div
                    ref={dropdownRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className='absolute -left-24 mt-2 w-56 bg-white dark:bg-gray-700 boreder border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-10' 
                >
                    <ul className='py-1'>
                        <li>
                            <button
                                onClick={handleGoToFirstUnanswered}
                                className='w-full flex whitespace-nowrap items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                            >
                                <FaBookmark className='mr-3 h-4 w-4' />
                                First Unanswered Question
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={handleRestartQuiz}
                                className='w-full flex items-center whitespace-nowrap px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
                            >
                                <FaRedo className='mr-2.5 -ml-0.5 h-3 w-3' />
                                Restart Quiz
                            </button>
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    </div>

    <button
        className={`flex items-center justify-center p-2 bg-blue-500 dark:bg-blue-600 text-white rounded-lg transtition-all duration-300
            ${selectedOption
            ? 'hover:bg-blue-600 dark:hover:bg-blue-700 cursor-pointer'
            : 'cursor-not-allowed opacity-50'    
            }`}
            onClick={handleNextQuestion}
            disabled={!selectedOption}
    >
        {currentQuestion + 1 === totalQuestions ? 'Finish Quiz' : 'Next Question'}
    </button>
</div>
);

export default QuizNavigation;