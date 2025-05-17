import { Question, UserAnswer } from "../types";

// Pure utility functions
export const findFirstUnanswered = (questions: Question[], answers: UserAnswer[]): number => {
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i].question;
        const answered = answers.find((ans) => ans.question === question);
        if (!answered) {
            return i;
        }
    }

    //If all questions are answered, return the last index
    return questions.length - 1;
};

export const calculatePercentageComplete = (answeredQuestions: number, totalQuestions: number): number => {
    return Math.round((answeredQuestions / totalQuestions ) * 100);
};

export const calculateSubDomainProgress = (
    questions: Question[],
    userAnswers: UserAnswer[],
    subdomain: string
): number => {
    // Get all questions for this subdomain
    const questionsInSubDomain = questions.filter((q) => q.subDomain === subdomain);
    if (questionsInSubDomain.length === 0) return 0;

    // Count answered questions in this subdomain
    const answeredInSubDomain = questionsInSubDomain.filter((question) => 
        userAnswers.some(answer => answer.question === question.id.toString())
    ).length;

    return Math.round((answeredInSubDomain / questionsInSubDomain.length) * 100);
};