'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import  cppBadge  from '/public/cppicon.png';

// import question arrays
import { cloudPractitionerCloudConceptsDefinition } from '../questions/cloud-practitioner/1-cloud-concepts/1.1';
import { cloudPractitionerCloudEconomics } from '../questions/cloud-practitioner/1-cloud-concepts/1.2';
import { cloudPractitionerCloudArchitecture } from '../questions/cloud-practitioner/1-cloud-concepts/1.3';
import { cloudPractitionerSharedResponsibilityModel } from '../questions/cloud-practitioner/2-security-and-compliance/2.1';
import { cloudPractitionerSecurityComplianceConcepts } from '../questions/cloud-practitioner/2-security-and-compliance/2.2';
import { cloudPractitionerAccessManagement } from '../questions/cloud-practitioner/2-security-and-compliance/2.3';
import { cloudPractitionerSecuritySupportResources } from '../questions/cloud-practitioner/2-security-and-compliance/2.4';
import { cloudPractitionerDeployingOperating } from '../questions/cloud-practitioner/3-technology/3.1';
import { cloudPractitionerGlobalInfrastructure } from '../questions/cloud-practitioner/3-technology/3.2';
import { cloudPractitionerCoreServices } from '../questions/cloud-practitioner/3-technology/3.3';
import { cloudPractitionerTechnologySupportResources } from '../questions/cloud-practitioner/3-technology/3.4';
import { cloudPractitionerPricingModels } from '../questions/cloud-practitioner/4-billing-and-pricing/4.1';
import { cloudPractitionerAccountStructures } from '../questions/cloud-practitioner/4-billing-and-pricing/4.2';
import { cloudPractitionerBillingSupportResources } from '../questions/cloud-practitioner/4-billing-and-pricing/4.3';

export default function CloudPractitionerOverview() {
    const router = useRouter();

    // Calculate the number of questions per subdomain and domain
    const cloudConceptsCount = {
        total:
            cloudPractitionerCloudConceptsDefinition.length +
            cloudPractitionerCloudEconomics.length +
            cloudPractitionerCloudArchitecture.length,
        subdomains: {
            definition: cloudPractitionerCloudConceptsDefinition.length,
            economics: cloudPractitionerCloudEconomics.length,
            architecture: cloudPractitionerCloudArchitecture.length,
        },
    };

    const securityAndComplianceCount = {
        total:
            cloudPractitionerSharedResponsibilityModel.length +
            cloudPractitionerSecurityComplianceConcepts.length +
            cloudPractitionerAccessManagement.length +
            cloudPractitionerSecuritySupportResources.length,
        subdomains: {
            resposibilityModel: cloudPractitionerSharedResponsibilityModel.length,
            complianceConcepts: cloudPractitionerSecurityComplianceConcepts.length,
            accessManagement: cloudPractitionerAccessManagement.length,
            supportResources: cloudPractitionerSecuritySupportResources.length,
        },
    };

    const technologyCount = {
        total: 
            cloudPractitionerDeployingOperating.length +
            cloudPractitionerGlobalInfrastructure.length +
            cloudPractitionerCoreServices.length +
            cloudPractitionerTechnologySupportResources.length,
        subdomains: {
            deplotingOperating: cloudPractitionerDeployingOperating.length,
            infrastructure: cloudPractitionerGlobalInfrastructure.length,
            coreServices: cloudPractitionerCoreServices.length,
            supportResources: cloudPractitionerTechnologySupportResources.length,
        },
    };

    const billingAndPricingCount = {
        total:
            cloudPractitionerPricingModels.length +
            cloudPractitionerAccountStructures.length +
            cloudPractitionerBillingSupportResources.length,
        subdomains: {
            pricingModels: cloudPractitionerPricingModels.length,
            accountStructures: cloudPractitionerAccountStructures.length,
            billingSupport: cloudPractitionerBillingSupportResources.length,
        },
    };

    const handleStartQuiz = () => {
        router.push('/cloud-practitioner/quiz');
    };

    return (
        <section className='py-8 text-white'>
            <div className='container mx-auto px-4'>
                {/* Badge and Header Section */}
                <div className='max-w-3wl mx-auto bg-gray-800 p-6 shadow-lg rounded-lg text-center'>
                    <Image
                        src={cppBadge}
                        alt='AWS Cloud Practitioner Badge'
                        width={100}
                        height={100}
                        className='mx-auto mb-4'
                        />
                        <h1 className='text-2xl font-bold text-white mb-2'>
                            AWS Cloud Practitioner Quiz Overview
                        </h1>
                        <p>
                            Prepare for the AWS Certified Cloud Practitioner Exam by tackling questions specifilally designed to stimulate the real test experience.
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
                    <h2 className='text-xl font-semibold mb-4'>Quiz breakdown</h2>

                    {/* Cloud Concepts */}
                    <h3 className='text-lg font-semibold mb-2'>1. Cloud Concepts</h3>
                    <p className='text-gray-700 mb-4'>
                        Expect {cloudConceptsCount.total} questions:
                    </p>
                    <ul>
                        <li><strong>Definition pf AWS Cloud:</strong>({cloudConceptsCount.subdomains.definition})</li>
                        <li><strong>Cloud Economics:</strong>({cloudConceptsCount.subdomains.economics})</li>
                        <li><strong>Cloud Architecture:</strong>({cloudConceptsCount.subdomains.architecture})</li>
                    </ul>

                    {/* Security & Compliance */}
                    <h3 className='text-lg font-semibold mb-2'>2. Security and Compliance</h3>
                    <p className='text-gray-700 mb-4'>
                        Expect {securityAndComplianceCount.total} questions:
                    </p>
                    <ul className='list-disc ml-5 text-gray-700 mb-4'>
                        <li>Shared Responsibilty Model:<strong>({securityAndComplianceCount.subdomains.resposibilityModel})</strong></li>
                        <li><strong>Security and Compliance:</strong>({securityAndComplianceCount.subdomains.complianceConcepts})</li>
                        <li><strong>Access management:</strong>({securityAndComplianceCount.subdomains.accessManagement})</li>
                    </ul>

                    {/* Technology */}
                    <h3 className='text-lg font-semibold mb-2'>3. Technology</h3>
                    <p className='text-gray-700 mb-4'>
                        Expect { technologyCount.total} questions:
                    </p>
                    <ul className='list-disc ml-5 text-gray-700 mb-4'>
                        <li><strong>Deploying and Operating:</strong>({technologyCount.subdomains.deplotingOperating})</li>
                        <li><strong>Global Infrastructure:</strong>({technologyCount.subdomains.infrastructure})</li>
                        <li><strong>Core Services:</strong>({technologyCount.subdomains.coreServices})</li>
                        <li><strong>Technology Support Recs:</strong>({technologyCount.subdomains.supportResources})</li>
                    </ul>

                    {/* Billing and Pricing */}
                    <h3 className='text-lg fint-semibold mb-2'>4. Billing and Pricing</h3>
                    <p className='text-gray-700 mb-4'>
                        Expect {billingAndPricingCount.total} questions:
                    </p>
                    <ul className='list-disc ml-5 text-gray-700 mb-4'>
                        <li><strong>Pricing Models:</strong> ({billingAndPricingCount.subdomains.pricingModels})</li>
                        <li><strong>Account Structures:</strong>({billingAndPricingCount.subdomains.accountStructures})</li>
                        <li><strong>Billing Support Recs:</strong>({billingAndPricingCount.subdomains.billingSupport})</li>
                    </ul>

                    <p className='text-gray-700 text-center'>
                        If you can ace this, you are ready
                    </p>
                </div>
            </div>
        </section>
    );
}

