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

export const calculateSubDomainProgress = (
    questions: Question[],
    userAnswers: UserAnswer[],
    subdomain: string
): number => {
    const questionsInSubDomain = questions.filter((q) => q.subDomain === subdomain).length;
    if (questionsInSubDomain === 0) return 0

    const answeredInSubDomain = userAnswers.filter(
        (ans) => questions.find(q => q.question === ans.question)?.subDomain === subdomain
    ).length;

    return Math.round((answeredInSubDomain / questionsInSubDomain) * 100);
};