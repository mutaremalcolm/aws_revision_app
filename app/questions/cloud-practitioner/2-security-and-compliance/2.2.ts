// Define AWS Cloud security and compliance concepts

export const cloudPractitionerSecurityComplianceConcepts = [
    {
        id: 1,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Identity and Access Management (IAM)",
        question: "What is the primary purpose of AWS Identity and Access Management (IAM)?",
        options: [
            "A. To manage encryption keys",
            "B. To control user access and permissions to AWS services and resources",
            "C. To monitor AWS resources",
            "D. To deploy applications on AWS"
        ],
        answer: "B. To control user access and permissions to AWS services and resources",
        explanation: "AWS IAM enables you to manage access to AWS services and resources securely."
    },
    {
        id: 2,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Key Management Service (KMS)",
        question: "Which AWS service is used for creating and managing encryption keys?",
        options: [
            "A. AWS Certificate Manager",
            "B. AWS Key Management Service (KMS)",
            "C. AWS Secrets Manager",
            "D. Amazon GuardDuty"
        ],
        answer: "B. AWS Key Management Service (KMS)",
        explanation: "AWS KMS is a managed service that enables you to create and control encryption keys used to encrypt your data."
    },
    {
        id: 3,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Compliance Programs",
        question: "Which AWS program helps customers understand the robust controls in place at AWS to maintain security and compliance in the cloud?",
        options: [
            "A. AWS Artifact",
            "B. AWS Shield",
            "C. AWS Compliance Program",
            "D. AWS WAF"
        ],
        answer: "C. AWS Compliance Program",
        explanation: "The AWS Compliance Program enables customers to understand the controls in place and how they relate to compliance frameworks."
    },
    {
        id: 4,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Artifact",
        question: "What is AWS Artifact?",
        options: [
            "A. A service for deploying applications",
            "B. A repository of AWS's security and compliance reports",
            "C. A tool for managing encryption keys",
            "D. A monitoring and logging service"
        ],
        answer: "B. A repository of AWS's security and compliance reports",
        explanation: "AWS Artifact provides on-demand access to AWS's security and compliance documents."
    },
    {
        id: 5,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Security Groups",
        question: "What is the function of a security group in AWS?",
        options: [
            "A. To encrypt data at rest",
            "B. To control inbound and outbound traffic to AWS resources",
            "C. To manage user permissions",
            "D. To distribute traffic across instances"
        ],
        answer: "B. To control inbound and outbound traffic to AWS resources",
        explanation: "Security groups act as virtual firewalls for your instances to control incoming and outgoing traffic."
    },
    {
        id: 6,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Shield",
        question: "Which AWS service provides protection against Distributed Denial of Service (DDoS) attacks?",
        options: [
            "A. AWS WAF",
            "B. AWS Shield",
            "C. Amazon GuardDuty",
            "D. AWS Firewall Manager"
        ],
        answer: "B. AWS Shield",
        explanation: "AWS Shield provides managed DDoS protection for applications running on AWS."
    },
    {
        id: 7,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Amazon GuardDuty",
        question: "What is Amazon GuardDuty used for?",
        options: [
            "A. Encrypting data at rest",
            "B. Managing access keys",
            "C. Continuous security monitoring to detect threats",
            "D. Distributing content globally"
        ],
        answer: "C. Continuous security monitoring to detect threats",
        explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity."
    },
    {
        id: 8,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS WAF (Web Application Firewall)",
        question: "What is the purpose of AWS WAF?",
        options: [
            "A. To provide firewall protection for Amazon VPC",
            "B. To monitor network traffic",
            "C. To protect web applications from common web exploits",
            "D. To manage security groups"
        ],
        answer: "C. To protect web applications from common web exploits",
        explanation: "AWS WAF helps protect web applications from common attacks like SQL injection and cross-site scripting."
    },
    {
        id: 9,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Compliance Certifications",
        question: "Which of the following is a compliance certification achieved by AWS?",
        options: [
            "A. PCI DSS",
            "B. ISO 27001",
            "C. SOC 1, SOC 2, and SOC 3",
            "D. All of the above"
        ],
        answer: "D. All of the above",
        explanation: "AWS holds multiple compliance certifications, including PCI DSS, ISO 27001, and SOC reports."
    },
    {
        id: 10,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Encryption at Rest",
        question: "Which AWS service provides encryption at rest by default?",
        options: [
            "A. Amazon S3",
            "B. Amazon EBS",
            "C. AWS Lambda",
            "D. AWS KMS"
        ],
        answer: "D. AWS KMS",
        explanation: "AWS KMS provides key management and encryption for data at rest; services like S3 and EBS can integrate with KMS for encryption."
    },
    {
        id: 11,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Network Access Control Lists (NACLs)",
        question: "What is the role of Network Access Control Lists (NACLs) in AWS?",
        options: [
            "A. To act as stateless firewalls at the subnet level",
            "B. To manage user permissions",
            "C. To encrypt data in transit",
            "D. To distribute traffic across instances"
        ],
        answer: "A. To act as stateless firewalls at the subnet level",
        explanation: "NACLs control inbound and outbound traffic at the subnet level and are stateless."
    },
    {
        id: 12,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS CloudTrail",
        question: "What is AWS CloudTrail used for?",
        options: [
            "A. Monitoring application performance",
            "B. Auditing API calls and user activity",
            "C. Managing encryption keys",
            "D. Distributing content globally"
        ],
        answer: "B. Auditing API calls and user activity",
        explanation: "AWS CloudTrail records AWS API calls for your account and delivers log files for auditing."
    },
    {
        id: 13,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Security Hub",
        question: "What is the purpose of AWS Security Hub?",
        options: [
            "A. To encrypt data at rest",
            "B. To provide a comprehensive view of security alerts and compliance status",
            "C. To manage user permissions",
            "D. To deploy web applications"
        ],
        answer: "B. To provide a comprehensive view of security alerts and compliance status",
        explanation: "AWS Security Hub aggregates security findings from multiple AWS services to provide a unified view."
    },
    {
        id: 14,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Trusted Advisor - Security Checks",
        question: "How does AWS Trusted Advisor help improve security?",
        options: [
            "A. By automatically fixing security issues",
            "B. By providing recommendations to close security gaps",
            "C. By deploying firewalls",
            "D. By managing IAM users"
        ],
        answer: "B. By providing recommendations to close security gaps",
        explanation: "AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations, including security improvements."
    },
    {
        id: 15,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Config",
        question: "What is AWS Config used for in terms of security and compliance?",
        options: [
            "A. Encrypting data at rest",
            "B. Assessing, auditing, and evaluating configurations of your AWS resources",
            "C. Managing user access",
            "D. Deploying applications"
        ],
        answer: "B. Assessing, auditing, and evaluating configurations of your AWS resources",
        explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your AWS account."
    },
    {
        id: 16,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Secrets Manager",
        question: "Which AWS service is used to manage and retrieve secrets such as database credentials and API keys?",
        options: [
            "A. AWS Secrets Manager",
            "B. AWS Key Management Service",
            "C. AWS Certificate Manager",
            "D. AWS IAM"
        ],
        answer: "A. AWS Secrets Manager",
        explanation: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources."
    },
    {
        id: 17,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Encryption in Transit",
        question: "Which protocol is commonly used to encrypt data in transit between AWS services and clients?",
        options: [
            "A. HTTP",
            "B. FTP",
            "C. SSL/TLS",
            "D. SMTP"
        ],
        answer: "C. SSL/TLS",
        explanation: "SSL/TLS protocols are used to encrypt data in transit, ensuring secure communication between clients and AWS services."
    },
    {
        id: 18,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Certificate Manager",
        question: "What is the primary function of AWS Certificate Manager (ACM)?",
        options: [
            "A. To manage SSL/TLS certificates for AWS services",
            "B. To manage database credentials",
            "C. To monitor network traffic",
            "D. To deploy web applications"
        ],
        answer: "A. To manage SSL/TLS certificates for AWS services",
        explanation: "ACM helps you provision, manage, and deploy SSL/TLS certificates for use with AWS services and your internal connected resources."
    },
    {
        id: 19,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Amazon Inspector",
        question: "What is Amazon Inspector used for?",
        options: [
            "A. Analyzing application performance",
            "B. Assessing applications for security vulnerabilities and deviations from best practices",
            "C. Managing encryption keys",
            "D. Distributing content globally"
        ],
        answer: "B. Assessing applications for security vulnerabilities and deviations from best practices",
        explanation: "Amazon Inspector helps improve the security and compliance of applications by automatically assessing them for vulnerabilities."
    },
    {
        id: 20,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Organizations",
        question: "How does AWS Organizations help with security and compliance?",
        options: [
            "A. By centralizing management of multiple AWS accounts",
            "B. By encrypting data at rest",
            "C. By providing DDoS protection",
            "D. By deploying applications"
        ],
        answer: "A. By centralizing management of multiple AWS accounts",
        explanation: "AWS Organizations allows you to centrally manage policies and consolidate billing across multiple AWS accounts."
    },
    {
        id: 21,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Firewall Manager",
        question: "What is the purpose of AWS Firewall Manager?",
        options: [
            "A. To configure security groups for EC2 instances",
            "B. To centrally configure and manage firewall rules across accounts and applications",
            "C. To provide DDoS protection",
            "D. To manage IAM users"
        ],
        answer: "B. To centrally configure and manage firewall rules across accounts and applications",
        explanation: "AWS Firewall Manager simplifies the administration and maintenance of your firewall rules across your AWS organization."
    },
    {
        id: 22,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Systems Manager",
        question: "How does AWS Systems Manager contribute to security and compliance?",
        options: [
            "A. By providing a unified interface for managing AWS resources",
            "B. By automating operational tasks and patch management",
            "C. By monitoring application performance",
            "D. By distributing content globally"
        ],
        answer: "B. By automating operational tasks and patch management",
        explanation: "AWS Systems Manager helps automate common tasks like patching, improving security and compliance."
    },
    {
        id: 23,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "Amazon Macie",
        question: "What is Amazon Macie used for?",
        options: [
            "A. Encrypting data at rest",
            "B. Discovering and protecting sensitive data stored in Amazon S3",
            "C. Managing user permissions",
            "D. Deploying web applications"
        ],
        answer: "B. Discovering and protecting sensitive data stored in Amazon S3",
        explanation: "Amazon Macie uses machine learning to automatically discover, classify, and protect sensitive data."
    },
    {
        id: 24,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Security Bulletins",
        question: "Where can customers find important security and privacy notifications about AWS services?",
        options: [
            "A. AWS Security Hub",
            "B. AWS Security Bulletins",
            "C. AWS Artifact",
            "D. AWS Management Console"
        ],
        answer: "B. AWS Security Bulletins",
        explanation: "AWS Security Bulletins provide the latest security and privacy notifications about AWS services."
    },
    {
        id: 25,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Penetration Testing Policies",
        question: "What must customers do before performing penetration testing on their AWS resources?",
        options: [
            "A. Nothing, it's not allowed",
            "B. Obtain approval from AWS",
            "C. Perform the testing without notifying AWS",
            "D. Use only AWS-approved third-party vendors"
        ],
        answer: "B. Obtain approval from AWS",
        explanation: "Customers must request and obtain authorization from AWS before performing penetration testing on their resources."
    },
    {
        id: 26,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Detective",
        question: "What is AWS Detective used for?",
        options: [
            "A. Simplifying the process of investigating security findings",
            "B. Encrypting data at rest",
            "C. Managing user permissions",
            "D. Deploying applications"
        ],
        answer: "A. Simplifying the process of investigating security findings",
        explanation: "AWS Detective helps analyze, investigate, and quickly identify the root cause of potential security issues."
    },
    {
        id: 27,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Security Compliance",
        question: "How does AWS help customers meet compliance requirements?",
        options: [
            "A. By taking full responsibility for customer compliance",
            "B. By providing compliance reports and certifications through AWS Artifact",
            "C. By offering legal advice on regulatory matters",
            "D. By limiting services to non-regulated industries"
        ],
        answer: "B. By providing compliance reports and certifications through AWS Artifact",
        explanation: "AWS Artifact gives customers access to AWS's compliance documentation to help them validate compliance requirements."
    },
    {
        id: 28,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Well-Architected Framework - Security Pillar",
        question: "What is the focus of the Security Pillar in the AWS Well-Architected Framework?",
        options: [
            "A. Operational Excellence",
            "B. Performance Efficiency",
            "C. Cost Optimization",
            "D. Protecting information and systems",
        ],
        answer: "D. Protecting information and systems",
        explanation: "The Security Pillar focuses on protecting information and systems, and includes best practices for implementing security in AWS."
    },
    {
        id: 29,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Multi-Factor Authentication (MFA)",
        question: "What is the purpose of enabling Multi-Factor Authentication (MFA) on AWS accounts?",
        options: [
            "A. To encrypt data at rest",
            "B. To add an extra layer of security during login",
            "C. To manage encryption keys",
            "D. To monitor network traffic"
        ],
        answer: "B. To add an extra layer of security during login",
        explanation: "MFA enhances account security by requiring an additional authentication factor beyond username and password."
    },
    {
        id: 30,
        subDomain: "2.2 Define AWS Cloud security and compliance concepts",
        criticalTopic: "AWS Personal Health Dashboard",
        question: "How does the AWS Personal Health Dashboard assist with security and compliance?",
        options: [
            "A. By providing real-time alerts on AWS service disruptions that may affect your resources",
            "B. By managing user permissions",
            "C. By encrypting data in transit",
            "D. By distributing content globally"
        ],
        answer: "A. By providing real-time alerts on AWS service disruptions that may affect your resources",
        explanation: "The AWS Personal Health Dashboard offers proactive and personalized alerts to help you manage events that may impact your security and compliance posture."
    }
];

