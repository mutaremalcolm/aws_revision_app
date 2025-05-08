// components/solutionsArchitect/SolutionsArchitectQuiz.tsx

import Quiz from "@/components/quiz/Quiz";
import solutionsArchitectAssociateQuestions from "@/questions/solution-architect-associate";

const SolutionsArchitectAssociateQuiz = () => {
    return (
        <Quiz questions={solutionsArchitectAssociateQuestions} quizKey="solutionsArchitectAssociate" />
    )
}

export default SolutionsArchitectAssociateQuiz;