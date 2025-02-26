// components/sysops/SysOpsQuiz.tsx

import Quiz from '@/components/quiz/Quiz';
import sysOpsAdministratorQuestions from '@/questions/sysops-administrator-associate';

const SysOpsQuiz = () => {
    return (
        <Quiz questions={sysOpsAdministratorQuestions} quizKey='sysOps'/>
    );
};

export default SysOpsQuiz;