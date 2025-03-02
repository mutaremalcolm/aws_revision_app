import { UserAnswer } from '../types';

export const useQuizPersistence = (quizKey: string) => {
    const LOCAL_STORAGE_KEY = `${quizKey}QuizAnswers`;

    const saveAnswers = (answers: UserAnswer[]): void => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(answers));
        } catch (error) {
            console.error('Failed to save answers:', error)
        }
    };

    const loadAnswers = (): UserAnswer[] => {
        try {
            const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
            return storedData ? JSON.parse(storedData) : [];
        }catch (error) {
            console.error ('Failed to load answers', error);
            return [];
        }
    };

    const clearAnswers = (): void => {
        try {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
        }catch (error) {
            console.error('Failed to clear answers', error)
        }
    };

    return { saveAnswers, loadAnswers, clearAnswers};
};