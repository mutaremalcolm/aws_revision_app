// components/SubdomainProgress.tsx

type SubdomainProgressProps = {
    currentSubDomain: string;
    currentCriticalTopic: string;
    subDomainProgress: number;
};

const SubdomainProgress: React.FC<SubdomainProgressProps> = ({
                                                                currentSubDomain,
                                                                currentCriticalTopic,
                                                                subDomainProgress,
                                                            }) => (
<div className='w-full max-w-2xl mb-2'>
    <div className='flex justify-between items-center mb-2'>
        <span className='text-xs w-1/2 font-medium text-gray-700 dark:text-gray-300'>
            {currentSubDomain}
        </span>
    </div>
    <div className='w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700'>
        <div
            className='bg-blue-500 h-3 rounded-full transition-width duration-300'
                style={{ width: `${subDomainProgress}%`}}
        ></div>
    </div>
</div>
);

export default SubdomainProgress;