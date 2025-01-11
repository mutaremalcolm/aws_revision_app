// app/cloud-practitioner/quiz/page.tsx
import Quiz from "@/app/components/quiz/Quiz";
import cloudPractitionerQuestions from "@/app/questions/cloud-practitioner";

const CloudPractitionerQuiz = () => {
    return (
        <Quiz questions={cloudPractitionerQuestions} quizKey='cloudPractitioner' />
    );
};

export default CloudPractitionerQuiz;