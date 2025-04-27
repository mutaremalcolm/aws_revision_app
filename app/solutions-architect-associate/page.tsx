'use client'

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import saaBadge from '/public/saas.png';

//Import question arrays
import { solutionsArchitectSecureArchitecturesQuestions } from '@/questions/solution-architect-associate/1-design-secure-architecture/1.1';
import { solutionsArchitectSecureWorkloads } from '@/questions/solution-architect-associate/1-design-secure-architecture/1.2';
import { solutionsArtchitectcloudPractionerDataSecurity } from '@/questions/solution-architect-associate/1-design-secure-architecture/1.3';
import { solutionsArchitectScalableArchitectures } from '@/questions/solution-architect-associate/2-design-resillient-architecture/2.1';
import { solutionsArchitectAvailableArchitectures } from '@/questions/solution-architect-associate/2-design-resillient-architecture/2.2';
import { solutionsArchitectScaleableSolutions } from '@/questions/solution-architect-associate/3-design-high-performing-architectures/3.1';
import { solutionsArchitectNetworkingSolutions } from '@/questions/solution-architect-associate/3-design-high-performing-architectures/3.2';
import { solutionsArchitectComputeSolutions } from '@/questions/solution-architect-associate/4-design-well-performing-architectures/4.1';
import { solutionsArchitectStorageSolutions } from '@/questions/solution-architect-associate/4-design-well-performing-architectures/4.2';
import { solutionsArchitectDatabaseSolutions } from '@/questions/solution-architect-associate/4-design-well-performing-architectures/4.3';

export default function SolutionArchitectAssociateOverview() {
    const router = useRouter();

    // Calculate the number of questions per subdomain and domain
    const designSecureArchitectureCount = {
        total:
            solutionsArchitectSecureArchitecturesQuestions.length +
            solutionsArchitectSecureWorkloads.length +
            solutionsArtchitectcloudPractionerDataSecurity.length,
        subdomains: {
            secureArchitecture: solutionsArchitectSecureArchitecturesQuestions.length,
            secureWorkloads: solutionsArchitectSecureWorkloads.length,
            dataSecurity: solutionsArtchitectcloudPractionerDataSecurity.length
        },
    };

    const designResillientArchitectureCount = {
        total: 
            solutionsArchitectScalableArchitectures.length +
            solutionsArchitectAvailableArchitectures.length,    
        subdomains: {
            scaleableArchitecture: solutionsArchitectScalableArchitectures.length,
            availableArchitecture: solutionsArchitectAvailableArchitectures.length,
            
        },
    };

    const designHighPerformingArchitecturesCount = {
        total:
            solutionsArchitectScaleableSolutions.length +
            solutionsArchitectNetworkingSolutions.length,
        subdomains: {
            scaleableSolutions: solutionsArchitectScaleableSolutions.length,
            architectNetworkSolutions: solutionsArchitectNetworkingSolutions.length,
        }
    };

    const designWellPerformingArchitecturesCount = {
        total: 
            solutionsArchitectComputeSolutions.length +
            solutionsArchitectStorageSolutions.length +
            solutionsArchitectDatabaseSolutions.length,
        subdomains: {
            computeSolutions: solutionsArchitectComputeSolutions.length,
            storageSolutions: solutionsArchitectStorageSolutions.length,
            databaseSolutions: solutionsArchitectDatabaseSolutions.length
    }
};

    const handleStartQuiz = () => {
        router.push('cloud-practioner/quiz');
    };

    return (
        <section className='py-8 text-white'>
            <div className='container mx-auto px-4'>
                {/* Badge and Header Section */}
                <div className='max-w-3wl mx-auto bg-gray-800 p-6 shadow-lg rounded-lg text-center'>
                    <Image
                        src={saaBadge}
                        alt='AWS Solutions Architect Associate Page'
                        width={100}
                        height={100}
                        className='mx-auto mb-4' 
                        />
                        <h1>
                            AWS Solutions Architect Associate Quiz Overview
                        </h1>
                        <p>
                            Prepare for the AWS Solutions Architect Associate Exam by tackling questions specifically designed to stimulate designed to stimulate the real test experience.
                        </p>
                </div>

                <div className='flex justify-center mt-6'>
                    <button
                        onClick={handleStartQuiz}
                        className='p-3 bg-blue-700 text-white w-48 font-bold rounded-lg hover:bg-blue-700'
                    >
                        Start Quiz
                    </button>
                </div>
                {/* Overview Content Section */}
                <div className='max-w-3xl mx-auto bg-gray-100 text-gray-800 p-6 shadow-lg rounded-lg mt-8'>
                    <h2 className='text-xl font-semibold mb-4'>Quiz Breakdown</h2>


                {/* Design Secure Architecture */}
                <h3 className='text-lg font-semibold mb-2'>1. Secure Architecture</h3>
                <p>
                    Expect {designSecureArchitectureCount.total} questions:
                </p>
                <ul>
                    <li><strong>Design Secure Architecture:</strong>{designSecureArchitectureCount.subdomains.secureArchitecture}</li>
                    <li><strong>Secure Workloads:</strong>{designSecureArchitectureCount.subdomains.secureWorkloads}</li>
                    <li><strong>Data Security:</strong>{designSecureArchitectureCount.subdomains.dataSecurity}</li>
                </ul>

                {/* Design resillient Architecture */}
                <h3 className='text-lg font-semibold mb-2'>2. Resillient Architecture</h3>
                <p>
                    Expect {designResillientArchitectureCount.total} questions:
                </p>
                <ul>
                    <li><strong>Scaleable Architectures:</strong>{designResillientArchitectureCount.subdomains.scaleableArchitecture}</li>
                    <li><strong>Availabale Architectures:</strong>{designResillientArchitectureCount.subdomains.availableArchitecture}</li>
                </ul>

                {/* Design High Performing Architecture */}
                <h3 className='text-lg font-semibold mb-2'>3. High Performing Architecture</h3>
                <p>
                    Expect {designHighPerformingArchitecturesCount.total} questions:
                </p>
                <ul>
                    <li><strong>Scaleable Solutions:</strong>{designHighPerformingArchitecturesCount.subdomains.scaleableSolutions}</li>
                    <li><strong>Architect Network Solutions</strong>{designHighPerformingArchitecturesCount.subdomains.architectNetworkSolutions}</li>
                </ul>

                {/* Design Well Performing Architecture */}
                <h3 className='text-lg font-semibold mb-2'>4. Well Performing Architecture</h3>
                <p>
                    Expect {designWellPerformingArchitecturesCount.total} questions:
                </p>
                <ul>
                    <li><strong>Compute Solutions:</strong>{designWellPerformingArchitecturesCount.subdomains.computeSolutions}</li>
                    <li><strong>Storage Solutions:</strong>{designWellPerformingArchitecturesCount.subdomains.storageSolutions}</li>
                    <li><strong>Database Solutions:</strong>{designWellPerformingArchitecturesCount.subdomains.databaseSolutions}</li>
                </ul>

                <p className='text-gray-700 text-center'>
                    If you can ace this, you are ready
                </p>
            </div>
        </div>
        </section>
    )
}

