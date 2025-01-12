// components/sysops/SysOpsQuiz.tsx

import Quiz from '@/app/components/quiz/Quiz';
import sysOpsAdministratorQuestions from '@/app/questions/sysops-administrator-associate';

const SysOpsQuiz = () => {
    return (
        <Quiz questions={sysOpsAdministratorQuestions} quizKey='sysOps'/>
    );
};

export default SysOpsQuiz;