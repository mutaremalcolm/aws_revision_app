// app/cloud-practitioner/quiz/page.tsx
import Quiz from "@/components/quiz/Quiz";
import cloudPractitionerQuestions from "@/questions/cloud-practitioner";

const CloudPractitionerQuiz = () => {
    return (
        <Quiz questions={cloudPractitionerQuestions} quizKey='cloudPractitioner' />
    );
};

export default CloudPractitionerQuiz;