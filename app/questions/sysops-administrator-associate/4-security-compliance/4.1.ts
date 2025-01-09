// Security and Compliance - Implement and manage security and compliance policies

export const sysOpsSecurityCompliance = [
    {
        id: 1,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Password Policies',
        question: 'Which of the following can be enforced using an IAM password policy?',
        options: [
            'A. Enforcing multi-factor authentication',
            'B. Restricting access based on IP address',
            'C. Requiring a minimum password length and complexity',
            'D. Enabling AWS Config rules'
        ],
        answer: 'C. Requiring a minimum password length and complexity',
        explanation: 'IAM password policies allow you to enforce minimum password length, complexity, and expiration requirements for user passwords in AWS.'
    },
    {
        id: 2,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Roles and Policies',
        question: 'Which AWS service is used to create and manage IAM roles and policies?',
        options: [
            'A. Amazon EC2',
            'B. AWS Identity and Access Management (IAM)',
            'C. AWS Organizations',
            'D. Amazon CloudFront'
        ],
        answer: 'B. AWS Identity and Access Management (IAM)',
        explanation: 'AWS IAM is the service used to create and manage users, groups, roles, and policies to control access to AWS resources.'
    },
    {
        id: 3,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Multi-Factor Authentication (MFA)',
        question: 'How does enabling MFA improve the security of AWS accounts?',
        options: [
            'A. It limits access to specific regions.',
            'B. It requires users to provide a second form of authentication, such as a one-time passcode.',
            'C. It encrypts all data stored in S3.',
            'D. It reduces EC2 instance costs.'
        ],
        answer: 'B. It requires users to provide a second form of authentication, such as a one-time passcode.',
        explanation: 'Enabling MFA requires users to provide an additional form of authentication (e.g., a one-time passcode), adding a layer of security to AWS accounts.'
    },
    {
        id: 4,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Access Analyzer',
        question: 'What is the purpose of AWS IAM Access Analyzer?',
        options: [
            'A. To monitor CloudTrail logs for security breaches',
            'B. To identify and analyze resource access from outside the AWS account',
            'C. To automate the patching of EC2 instances',
            'D. To enforce compliance policies'
        ],
        answer: 'B. To identify and analyze resource access from outside the AWS account',
        explanation: 'IAM Access Analyzer helps identify and analyze resource access from external accounts, ensuring that only trusted entities have access to AWS resources.'
    },
    {
        id: 5,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Organizations and SCPs',
        question: 'Which feature of AWS Organizations allows you to enforce security and compliance policies across multiple AWS accounts?',
        options: [
            'A. IAM Password Policies',
            'B. AWS CloudTrail',
            'C. Service Control Policies (SCPs)',
            'D. AWS Auto Scaling'
        ],
        answer: 'C. Service Control Policies (SCPs)',
        explanation: 'Service Control Policies (SCPs) are used in AWS Organizations to enforce security and compliance policies across multiple AWS accounts.'
    },
    {
        id: 6,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'CloudTrail for Auditing',
        question: 'How does AWS CloudTrail help with auditing and compliance?',
        options: [
            'A. By encrypting data stored in S3',
            'B. By logging and monitoring all API calls made in your AWS account',
            'C. By providing performance monitoring for EC2 instances',
            'D. By managing resource tags'
        ],
        answer: 'B. By logging and monitoring all API calls made in your AWS account',
        explanation: 'AWS CloudTrail records all API calls made within your AWS account, enabling auditing, governance, and compliance monitoring.'
    },
    {
        id: 7,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Policy Simulator',
        question: 'What is the purpose of the IAM policy simulator?',
        options: [
            'A. To simulate infrastructure deployments',
            'B. To test and troubleshoot IAM policies before applying them',
            'C. To automatically enforce security policies',
            'D. To manage user authentication settings'
        ],
        answer: 'B. To test and troubleshoot IAM policies before applying them',
        explanation: 'The IAM policy simulator allows you to test and troubleshoot IAM policies to ensure that they are functioning as expected before applying them.'
    },
    {
        id: 8,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Trusted Advisor',
        question: 'Which of the following AWS services provides security best practice recommendations and alerts for your environment?',
        options: [
            'A. AWS Systems Manager',
            'B. AWS Trusted Advisor',
            'C. AWS Auto Scaling',
            'D. Amazon CloudFront'
        ],
        answer: 'B. AWS Trusted Advisor',
        explanation: 'AWS Trusted Advisor provides security best practice recommendations and alerts, helping you optimize security, performance, and cost in your environment.'
    },
    {
        id: 9,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'Resource Policies',
        question: 'Which AWS feature allows you to control access to specific resources such as S3 buckets or KMS keys?',
        options: [
            'A. IAM Policies',
            'B. Resource Policies',
            'C. VPC Security Groups',
            'D. Service Control Policies (SCPs)'
        ],
        answer: 'B. Resource Policies',
        explanation: 'Resource policies are used to control access to specific AWS resources, such as S3 buckets or KMS keys, and can define who has permission to interact with them.'
    },
    {
        id: 10,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Shield and DDoS Protection',
        question: 'Which AWS service provides protection against DDoS attacks?',
        options: [
            'A. AWS WAF',
            'B. AWS Shield',
            'C. AWS Trusted Advisor',
            'D. Amazon GuardDuty'
        ],
        answer: 'B. AWS Shield',
        explanation: 'AWS Shield provides DDoS protection for AWS applications by automatically detecting and mitigating DDoS attacks to ensure service availability.'
    },
    {
        id: 11,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Config Rules for Compliance',
        question: 'How does AWS Config help ensure compliance in your AWS environment?',
        options: [
            'A. It monitors and records changes to AWS resource configurations and checks them against compliance rules.',
            'B. It stores all configuration files for EC2 instances.',
            'C. It provides backup services for compliance.',
            'D. It automatically encrypts all S3 buckets.'
        ],
        answer: 'A. It monitors and records changes to AWS resource configurations and checks them against compliance rules.',
        explanation: 'AWS Config monitors and records changes to your resource configurations and can check them against predefined compliance rules to ensure adherence to security and governance policies.'
    },
    {
        id: 12,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Control Tower for Multi-Account Security',
        question: 'How does AWS Control Tower assist in securing multi-account environments?',
        options: [
            'A. It automatically encrypts EC2 instances.',
            'B. It provides a dashboard for managing account resources.',
            'C. It automates the setup and governance of multi-account AWS environments using guardrails.',
            'D. It manages the deployment of application code.'
        ],
        answer: 'C. It automates the setup and governance of multi-account AWS environments using guardrails.',
        explanation: 'AWS Control Tower automates the setup and governance of multi-account AWS environments and applies security guardrails to ensure compliance.'
    },
    {
        id: 13,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS KMS for Encryption',
        question: 'Which AWS service is used to manage encryption keys for securing data at rest in AWS services?',
        options: [
            'A. AWS Shield',
            'B. AWS Key Management Service (KMS)',
            'C. AWS Identity and Access Management (IAM)',
            'D. AWS Config'
        ],
        answer: 'B. AWS Key Management Service (KMS)',
        explanation: 'AWS KMS is used to create and manage encryption keys for securing data at rest across various AWS services, such as S3, EBS, and RDS.'
    },
    {
        id: 14,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'VPC Security Groups',
        question: 'How do VPC security groups enhance security in AWS?',
        options: [
            'A. They encrypt all network traffic.',
            'B. They act as virtual firewalls that control inbound and outbound traffic to AWS resources.',
            'C. They automatically backup resources in your VPC.',
            'D. They enforce IAM password policies.'
        ],
        answer: 'B. They act as virtual firewalls that control inbound and outbound traffic to AWS resources.',
        explanation: 'VPC security groups function as virtual firewalls, controlling the inbound and outbound traffic to resources in your AWS Virtual Private Cloud (VPC).'
    },
    {
        id: 15,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'Amazon Inspector for Vulnerability Management',
        question: 'What is the primary function of Amazon Inspector?',
        options: [
            'A. To monitor API activity',
            'B. To automatically deploy updates to EC2 instances',
            'C. To assess application security by identifying vulnerabilities in EC2 instances',
            'D. To back up EC2 instances to S3'
        ],
        answer: 'C. To assess application security by identifying vulnerabilities in EC2 instances',
        explanation: 'Amazon Inspector assesses EC2 instances for security vulnerabilities and helps you remediate potential security issues.'
    },
    {
        id: 16,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'S3 Bucket Policies',
        question: 'Which feature allows you to control access to Amazon S3 buckets?',
        options: [
            'A. S3 Lifecycle Policies',
            'B. S3 Versioning',
            'C. S3 Bucket Policies',
            'D. AWS Systems Manager'
        ],
        answer: 'C. S3 Bucket Policies',
        explanation: 'S3 bucket policies are JSON-based access control policies that allow you to define who can access your S3 buckets and what actions they can perform.'
    },
    {
        id: 17,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Secrets Manager',
        question: 'What is AWS Secrets Manager primarily used for?',
        options: [
            'A. To store and retrieve sensitive information such as database credentials and API keys securely',
            'B. To manage IAM password policies',
            'C. To monitor API calls across AWS resources',
            'D. To encrypt EC2 instance volumes'
        ],
        answer: 'A. To store and retrieve sensitive information such as database credentials and API keys securely',
        explanation: 'AWS Secrets Manager is used to securely store and retrieve sensitive information, such as database credentials and API keys, and rotate them automatically.'
    },
    {
        id: 18,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Organizations for Compliance',
        question: 'How does AWS Organizations help enforce compliance across multiple AWS accounts?',
        options: [
            'A. By creating encryption keys',
            'B. By consolidating billing across accounts',
            'C. By applying Service Control Policies (SCPs) to enforce security and compliance requirements',
            'D. By automating the patching of EC2 instances'
        ],
        answer: 'C. By applying Service Control Policies (SCPs) to enforce security and compliance requirements',
        explanation: 'AWS Organizations allows you to apply Service Control Policies (SCPs) across multiple AWS accounts to enforce security and compliance requirements.'
    },
    {
        id: 19,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS WAF',
        question: 'What is the primary function of AWS WAF (Web Application Firewall)?',
        options: [
            'A. To protect against DDoS attacks',
            'B. To monitor API usage',
            'C. To protect web applications from common security vulnerabilities such as SQL injection and cross-site scripting',
            'D. To enforce VPC security groups'
        ],
        answer: 'C. To protect web applications from common security vulnerabilities such as SQL injection and cross-site scripting',
        explanation: 'AWS WAF (Web Application Firewall) helps protect web applications from common vulnerabilities such as SQL injection, cross-site scripting (XSS), and other attack vectors.'
    },
    {
        id: 20,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'Amazon GuardDuty',
        question: 'What is the primary function of Amazon GuardDuty?',
        options: [
            'A. To perform vulnerability scans on EC2 instances',
            'B. To provide real-time threat detection and continuous monitoring of malicious activity in your AWS environment',
            'C. To back up RDS databases',
            'D. To monitor CloudWatch metrics'
        ],
        answer: 'B. To provide real-time threat detection and continuous monitoring of malicious activity in your AWS environment',
        explanation: 'Amazon GuardDuty is a threat detection service that continuously monitors your AWS environment for malicious activity and provides real-time alerts.'
    },
    {
        id: 21,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Policies vs. Resource Policies',
        question: 'How do IAM policies differ from resource policies in AWS?',
        options: [
            'A. IAM policies are attached to users or roles, while resource policies are attached directly to resources.',
            'B. Resource policies control access to AWS services, while IAM policies manage user accounts.',
            'C. Resource policies enforce encryption, while IAM policies manage permissions.',
            'D. IAM policies are used for regions, while resource policies are global.'
        ],
        answer: 'A. IAM policies are attached to users or roles, while resource policies are attached directly to resources.',
        explanation: 'IAM policies are attached to users, groups, or roles, while resource policies are attached directly to AWS resources like S3 buckets or KMS keys.'
    },
    {
        id: 22,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'Compliance Frameworks',
        question: 'Which AWS service helps automate auditing against common compliance frameworks such as PCI-DSS and HIPAA?',
        options: [
            'A. AWS Trusted Advisor',
            'B. AWS Security Hub',
            'C. Amazon Macie',
            'D. AWS CloudTrail'
        ],
        answer: 'B. AWS Security Hub',
        explanation: 'AWS Security Hub helps centralize security data and automates compliance checks against frameworks like PCI-DSS and HIPAA.'
    },
    {
        id: 23,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'IAM Policies and Permissions Boundaries',
        question: 'What is the purpose of setting a permissions boundary in AWS IAM?',
        options: [
            'A. To restrict which regions a user can access',
            'B. To define the maximum permissions a user or role can be granted',
            'C. To create a secure VPC for sensitive data',
            'D. To limit billing alerts for individual users'
        ],
        answer: 'B. To define the maximum permissions a user or role can be granted',
        explanation: 'A permissions boundary in AWS IAM limits the maximum permissions a user or role can be assigned, regardless of the policies attached.'
    },
    {
        id: 24,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'CloudTrail Insights',
        question: 'What does AWS CloudTrail Insights help detect in your AWS account?',
        options: [
            'A. Misconfigured security groups',
            'B. Unusual API activity patterns',
            'C. Data encryption errors',
            'D. Billing anomalies'
        ],
        answer: 'B. Unusual API activity patterns',
        explanation: 'CloudTrail Insights detects unusual activity in your account, such as a sudden increase in API calls or abnormal behaviors that might indicate security issues.'
    },
    {
        id: 25,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Control Tower Guardrails',
        question: 'How do guardrails in AWS Control Tower assist with compliance?',
        options: [
            'A. By enforcing automated security checks on resources',
            'B. By creating encryption keys for secure data storage',
            'C. By monitoring VPC configurations',
            'D. By restricting IAM user access'
        ],
        answer: 'A. By enforcing automated security checks on resources',
        explanation: 'Guardrails in AWS Control Tower provide automated governance and compliance checks, ensuring your multi-account environment adheres to security best practices.'
    },
    {
        id: 26,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Artifact',
        question: 'Which of the following is a primary use case for AWS Artifact?',
        options: [
            'A. To track real-time application performance',
            'B. To provide on-demand access to AWS compliance documentation and agreements',
            'C. To automate data encryption at rest',
            'D. To configure security groups across multiple VPCs'
        ],
        answer: 'B. To provide on-demand access to AWS compliance documentation and agreements',
        explanation: 'AWS Artifact provides access to security and compliance reports, certifications, and agreements to help meet regulatory compliance requirements.'
    },
    {
        id: 27,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Shield Advanced',
        question: 'What additional protection does AWS Shield Advanced provide beyond AWS Shield Standard?',
        options: [
            'A. Automatic encryption for all AWS resources',
            'B. Enhanced DDoS protection, detailed attack diagnostics, and cost protection during DDoS events',
            'C. Free usage of all EC2 instances during an attack',
            'D. Automatic deployment of WAF rules for DDoS attacks'
        ],
        answer: 'B. Enhanced DDoS protection, detailed attack diagnostics, and cost protection during DDoS events',
        explanation: 'AWS Shield Advanced provides enhanced protection, detailed diagnostics, and cost protection during DDoS events, beyond what Shield Standard offers.'
    },
    {
        id: 28,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Security Hub Insights',
        question: 'How does AWS Security Hub Insights help with security management?',
        options: [
            'A. By providing real-time logging of all security incidents',
            'B. By generating pre-built, actionable security recommendations based on security events',
            'C. By enforcing VPC security group rules across accounts',
            'D. By automatically rotating IAM roles'
        ],
        answer: 'B. By generating pre-built, actionable security recommendations based on security events',
        explanation: 'AWS Security Hub Insights provides pre-built security insights and recommendations, helping you prioritize and act on potential security risks.'
    },
    {
        id: 29,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'Cross-Account Access Management',
        question: 'What is the best way to manage cross-account access in AWS to ensure security and compliance?',
        options: [
            'A. Use IAM access keys',
            'B. Create cross-account IAM roles with least-privilege permissions',
            'C. Enable VPC Peering',
            'D. Use EC2 security groups to manage access'
        ],
        answer: 'B. Create cross-account IAM roles with least-privilege permissions',
        explanation: 'Cross-account IAM roles with least-privilege permissions help securely manage cross-account access without exposing long-term credentials.'
    },
    {
        id: 30,
        subDomain: '4.1 Implement and manage security and compliance policies',
        criticalTopic: 'AWS Inspector for Compliance',
        question: 'How does Amazon Inspector help with compliance requirements?',
        options: [
            'A. By encrypting EC2 instances',
            'B. By assessing security vulnerabilities and ensuring adherence to compliance policies',
            'C. By managing IAM roles and policies',
            'D. By auditing CloudWatch logs'
        ],
        answer: 'B. By assessing security vulnerabilities and ensuring adherence to compliance policies',
        explanation: 'Amazon Inspector assesses security vulnerabilities and helps you address compliance issues by providing reports on detected risks and security gaps.'
    }
];
