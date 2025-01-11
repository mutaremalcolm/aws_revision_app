// Security and Compliance - Implement data and infrastructure protection strategies

export const sysOpsDataProtection = [
    {
        id: 1,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Data Classification',
        question: 'Which of the following AWS services can help enforce data classification schemes across your AWS environment?',
        options: [
            'A. AWS Config',
            'B. AWS Macie',
            'C. Amazon S3',
            'D. AWS Systems Manager'
        ],
        answer: 'B. AWS Macie',
        explanation: 'AWS Macie helps automatically discover, classify, and protect sensitive data in AWS by using machine learning to detect Personally Identifiable Information (PII).'
    },
    {
        id: 2,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Encryption at Rest with KMS',
        question: 'Which AWS service is primarily used to manage encryption keys for data at rest in AWS services like S3 and RDS?',
        options: [
            'A. AWS KMS',
            'B. AWS Secrets Manager',
            'C. AWS CloudTrail',
            'D. AWS Config'
        ],
        answer: 'A. AWS KMS',
        explanation: 'AWS Key Management Service (KMS) allows you to create and manage encryption keys for encrypting data at rest in services such as Amazon S3, EBS, and RDS.'
    },
    {
        id: 3,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Encryption in Transit',
        question: 'Which AWS service is commonly used to implement encryption in transit using SSL/TLS certificates?',
        options: [
            'A. Amazon CloudWatch',
            'B. AWS Certificate Manager (ACM)',
            'C. AWS WAF',
            'D. Amazon EC2'
        ],
        answer: 'B. AWS Certificate Manager (ACM)',
        explanation: 'AWS Certificate Manager (ACM) provides SSL/TLS certificates to enable encryption in transit, protecting data during transmission between clients and AWS resources.'
    },
    {
        id: 4,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'S3 Encryption',
        question: 'Which of the following is NOT a supported encryption option for Amazon S3?',
        options: [
            'A. Server-side encryption with Amazon S3 managed keys (SSE-S3)',
            'B. Server-side encryption with AWS KMS managed keys (SSE-KMS)',
            'C. Client-side encryption',
            'D. Server-side encryption with IAM keys (SSE-IAM)'
        ],
        answer: 'D. Server-side encryption with IAM keys (SSE-IAM)',
        explanation: 'Amazon S3 supports SSE-S3, SSE-KMS, and client-side encryption, but does not have an option for server-side encryption with IAM keys.'
    },
    {
        id: 5,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS Secrets Manager',
        question: 'What is the primary function of AWS Secrets Manager?',
        options: [
            'A. To manage IAM password policies',
            'B. To securely store and rotate secrets such as database credentials and API keys',
            'C. To encrypt S3 buckets',
            'D. To backup EBS volumes'
        ],
        answer: 'B. To securely store and rotate secrets such as database credentials and API keys',
        explanation: 'AWS Secrets Manager is used to securely store, retrieve, and automatically rotate sensitive information such as database credentials and API keys.'
    },
    {
        id: 6,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'VPC Security',
        question: 'Which of the following features enhances security by controlling inbound and outbound traffic to AWS resources in a VPC?',
        options: [
            'A. AWS WAF',
            'B. VPC Security Groups',
            'C. AWS Secrets Manager',
            'D. AWS Macie'
        ],
        answer: 'B. VPC Security Groups',
        explanation: 'VPC Security Groups act as virtual firewalls that control inbound and outbound traffic to resources in your AWS Virtual Private Cloud (VPC).'
    },
    {
        id: 7,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Cross-Region Replication and Encryption',
        question: 'Which encryption method should be used to ensure data security when using S3 Cross-Region Replication?',
        options: [
            'A. AES-128 encryption',
            'B. Server-Side Encryption with KMS keys (SSE-KMS)',
            'C. Client-side encryption with user-provided keys',
            'D. VPC endpoint encryption'
        ],
        answer: 'B. Server-Side Encryption with KMS keys (SSE-KMS)',
        explanation: 'When using S3 Cross-Region Replication, Server-Side Encryption with KMS keys (SSE-KMS) ensures that data is encrypted both in transit and at rest.'
    },
    {
        id: 8,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'KMS Key Rotation',
        question: 'What is the benefit of enabling automatic key rotation in AWS KMS?',
        options: [
            'A. It reduces costs associated with key management.',
            'B. It automatically updates security policies across AWS accounts.',
            'C. It helps enhance security by regularly rotating encryption keys.',
            'D. It increases network throughput for encrypted data.'
        ],
        answer: 'C. It helps enhance security by regularly rotating encryption keys.',
        explanation: 'Enabling automatic key rotation in AWS KMS enhances security by regularly rotating encryption keys, which helps prevent potential key compromise over time.'
    },
    {
        id: 9,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'CloudTrail Logs Encryption',
        question: 'Which service can be used to encrypt AWS CloudTrail logs?',
        options: [
            'A. AWS Secrets Manager',
            'B. AWS Key Management Service (KMS)',
            'C. Amazon S3',
            'D. AWS CloudFormation'
        ],
        answer: 'B. AWS Key Management Service (KMS)',
        explanation: 'CloudTrail logs can be encrypted using AWS KMS, providing secure storage of log data by encrypting it at rest in Amazon S3.'
    },
    {
        id: 10,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Data Protection with AWS Shield',
        question: 'How does AWS Shield contribute to data protection in AWS?',
        options: [
            'A. By detecting and mitigating DDoS attacks that target your applications',
            'B. By providing encryption for EC2 instance volumes',
            'C. By automatically encrypting all traffic between AWS regions',
            'D. By enforcing security policies for IAM users'
        ],
        answer: 'A. By detecting and mitigating DDoS attacks that target your applications',
        explanation: 'AWS Shield helps protect your data by detecting and mitigating Distributed Denial of Service (DDoS) attacks, ensuring application availability and security.'
    },
    {
        id: 11,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'VPC Endpoints',
        question: 'Which feature allows you to securely connect to AWS services from within a VPC without using the public internet?',
        options: [
            'A. AWS Direct Connect',
            'B. VPC Peering',
            'C. VPC Endpoints',
            'D. VPN Gateway'
        ],
        answer: 'C. VPC Endpoints',
        explanation: 'VPC Endpoints allow you to securely connect to AWS services from within your VPC without sending traffic over the public internet, improving security.'
    },
    {
        id: 12,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Encryption for EBS Volumes',
        question: 'Which AWS service is used to manage encryption for Amazon Elastic Block Store (EBS) volumes?',
        options: [
            'A. AWS Certificate Manager (ACM)',
            'B. AWS KMS',
            'C. AWS Secrets Manager',
            'D. AWS CloudFormation'
        ],
        answer: 'B. AWS KMS',
        explanation: 'AWS Key Management Service (KMS) is used to manage encryption keys for securing data at rest in Amazon EBS volumes.'
    },
    {
        id: 13,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Amazon S3 Object Lock',
        question: 'How does Amazon S3 Object Lock help protect data from accidental or malicious deletion?',
        options: [
            'A. By enabling versioning on S3 objects',
            'B. By encrypting S3 objects with KMS keys',
            'C. By enforcing WORM (Write Once, Read Many) policies on S3 objects',
            'D. By enabling MFA for access to S3 objects'
        ],
        answer: 'C. By enforcing WORM (Write Once, Read Many) policies on S3 objects',
        explanation: 'Amazon S3 Object Lock allows you to enforce WORM policies, which prevent the deletion or modification of S3 objects for a defined retention period.'
    },
    {
        id: 14,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Amazon RDS Encryption',
        question: 'How can you ensure that your Amazon RDS data is encrypted at rest?',
        options: [
            'A. Enable encryption during RDS instance creation',
            'B. Use IAM policies to enforce encryption',
            'C. Enable AWS Shield for the RDS instance',
            'D. Create a VPC for your RDS instances'
        ],
        answer: 'A. Enable encryption during RDS instance creation',
        explanation: 'Amazon RDS encryption must be enabled at the time of instance creation, and the data is encrypted at rest using AWS KMS-managed encryption keys.'
    },
    {
        id: 15,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS Config for Security',
        question: 'Which service can help track changes to resource configurations for security and compliance purposes?',
        options: [
            'A. AWS CloudFormation',
            'B. AWS CloudTrail',
            'C. AWS Config',
            'D. AWS Macie'
        ],
        answer: 'C. AWS Config',
        explanation: 'AWS Config helps track changes to resource configurations, ensuring that security and compliance requirements are met.'
    },
    {
        id: 16,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Protecting Data with VPN',
        question: 'Which AWS service allows you to establish an encrypted connection between your on-premises network and AWS?',
        options: [
            'A. AWS Direct Connect',
            'B. AWS Transit Gateway',
            'C. AWS VPN',
            'D. AWS Route 53'
        ],
        answer: 'C. AWS VPN',
        explanation: 'AWS VPN allows you to establish a secure, encrypted connection between your on-premises network and your AWS environment, protecting data in transit.'
    },
    {
        id: 17,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS KMS for Multi-Region Key Management',
        question: 'How can AWS KMS be used to manage encryption keys across multiple AWS regions?',
        options: [
            'A. By using VPC Endpoints',
            'B. By enabling KMS multi-region keys',
            'C. By creating IAM roles in each region',
            'D. By replicating CloudWatch metrics'
        ],
        answer: 'B. By enabling KMS multi-region keys',
        explanation: 'AWS KMS supports multi-region keys, allowing you to use the same key to encrypt and decrypt data across multiple AWS regions.'
    },
    {
        id: 18,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Monitoring Data Protection',
        question: 'Which service helps monitor and identify security vulnerabilities in your AWS environment?',
        options: [
            'A. AWS Systems Manager',
            'B. Amazon GuardDuty',
            'C. AWS Config',
            'D. Amazon Macie'
        ],
        answer: 'B. Amazon GuardDuty',
        explanation: 'Amazon GuardDuty helps monitor your environment for potential security vulnerabilities and provides alerts for suspicious activity.'
    },
    {
        id: 19,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Cross-Account Access and KMS',
        question: 'How can you securely grant access to KMS-managed keys across different AWS accounts?',
        options: [
            'A. Use VPC peering',
            'B. Create cross-account IAM roles',
            'C. Use AWS Systems Manager Parameter Store',
            'D. Enable S3 cross-account access'
        ],
        answer: 'B. Create cross-account IAM roles',
        explanation: 'To securely grant access to KMS-managed keys across different AWS accounts, you can create cross-account IAM roles with appropriate permissions.'
    },
    {
        id: 20,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Amazon Inspector for EC2 Instances',
        question: 'Which AWS service is used to identify security vulnerabilities in EC2 instances and their applications?',
        options: [
            'A. AWS Macie',
            'B. Amazon GuardDuty',
            'C. Amazon Inspector',
            'D. AWS Config'
        ],
        answer: 'C. Amazon Inspector',
        explanation: 'Amazon Inspector is a security service that helps identify potential vulnerabilities in EC2 instances and applications, providing recommendations for remediation.'
    },
    {
        id: 21,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS KMS Policies',
        question: 'Which of the following is necessary to allow cross-account access to a KMS key in AWS?',
        options: [
            'A. Create a VPC Peering connection between the two accounts',
            'B. Modify the key policy to allow access from the target account',
            'C. Enable the \'Allow Cross-Account Access\' option in KMS',
            'D. Configure AWS Config rules to allow key usage'
        ],
        answer: 'B. Modify the key policy to allow access from the target account',
        explanation: 'To enable cross-account access to a KMS key, you need to modify the key policy to include permissions for the target account.'
    },
    {
        id: 22,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS WAF for Infrastructure Protection',
        question: 'How does AWS Web Application Firewall (WAF) help protect your infrastructure?',
        options: [
            'A. By encrypting data at rest in RDS instances',
            'B. By filtering malicious web traffic based on defined rules',
            'C. By automatically scaling instances in response to traffic spikes',
            'D. By enabling DDoS mitigation'
        ],
        answer: 'B. By filtering malicious web traffic based on defined rules',
        explanation: 'AWS WAF helps protect web applications by allowing you to define rules that filter incoming web traffic based on specific conditions like IP addresses or SQL injection patterns.'
    },
    {
        id: 23,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS Shield Advanced',
        question: 'Which feature does AWS Shield Advanced provide for enhanced DDoS protection?',
        options: [
            'A. Real-time threat detection and automatic application scaling',
            'B. Cost protection against scaling caused by DDoS attacks',
            'C. Automatic failover between AWS regions',
            'D. Full encryption of network traffic'
        ],
        answer: 'B. Cost protection against scaling caused by DDoS attacks',
        explanation: 'AWS Shield Advanced provides cost protection by covering scaling charges incurred due to DDoS attacks, in addition to enhanced detection and response mechanisms.'
    },
    {
        id: 24,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Encryption for RDS Snapshots',
        question: 'How can you ensure an Amazon RDS snapshot is encrypted?',
        options: [
            'A. Enable encryption on the RDS instance before taking the snapshot',
            'B. Use AWS KMS to encrypt the snapshot after it is created',
            'C. Copy the snapshot and enable encryption on the copy',
            'D. Encrypt the RDS instance using a custom IAM policy'
        ],
        answer: 'C. Copy the snapshot and enable encryption on the copy',
        explanation: 'If an RDS instance or snapshot wasn\'t originally encrypted, you can create a copy of the snapshot and enable encryption for the new copy.'
    },
    {
        id: 25,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'AWS GuardDuty',
        question: 'What kind of security threats can AWS GuardDuty detect in your AWS environment?',
        options: [
            'A. SQL injection and cross-site scripting (XSS)',
            'B. Unauthorized API calls, anomalous account behavior, and compromised instances',
            'C. Data breaches involving encrypted S3 objects',
            'D. Misconfigured IAM policies'
        ],
        answer: 'B. Unauthorized API calls, anomalous account behavior, and compromised instances',
        explanation: 'AWS GuardDuty uses threat intelligence to detect suspicious activity, such as unauthorized API calls, account anomalies, and potential EC2 instance compromises.'
    },
    {
        id: 26,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'IAM Policies for Data Encryption',
        question: 'Which of the following IAM actions must be allowed to enable an IAM user to encrypt and decrypt data using KMS keys?',
        options: [
            'A. kms:Encrypt, kms:Decrypt',
            'B. s3:PutObject, s3:GetObject',
            'C. kms:GenerateDataKey, kms:Encrypt',
            'D. ec2:AttachVolume, kms:Decrypt'
        ],
        answer: 'A. kms:Encrypt, kms:Decrypt',
        explanation: 'To encrypt and decrypt data using KMS keys, the IAM policy must allow the \'kms:Encrypt\' and \'kms:Decrypt\' actions.'
    },
    {
        id: 27,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'Data Security with Amazon Macie',
        question: 'What type of data does Amazon Macie specialize in identifying and protecting within your AWS environment?',
        options: [
            'A. Personally Identifiable Information (PII)',
            'B. Network traffic patterns',
            'C. EC2 instance configurations',
            'D. Log file metadata'
        ],
        answer: 'A. Personally Identifiable Information (PII)',
        explanation: 'Amazon Macie uses machine learning to automatically identify and protect sensitive data, such as Personally Identifiable Information (PII), in your AWS environment.'
    },
    {
        id: 28,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'CloudTrail Log File Validation',
        question: 'Which of the following ensures the integrity and validation of CloudTrail log files?',
        options: [
            'A. AWS Config',
            'B. CloudTrail Log File Integrity Validation',
            'C. AWS Shield',
            'D. VPC Flow Logs'
        ],
        answer: 'B. CloudTrail Log File Integrity Validation',
        explanation: 'CloudTrail log file integrity validation ensures that log files haven\'t been altered or deleted after delivery to Amazon S3.'
    },
    {
        id: 29,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'S3 Bucket Policies for Data Protection',
        question: 'Which feature can prevent objects in an S3 bucket from being overwritten or deleted accidentally?',
        options: [
            'A. Enabling versioning and MFA Delete',
            'B. Enabling encryption with KMS keys',
            'C. Disabling public access',
            'D. Creating a VPC endpoint for the bucket'
        ],
        answer: 'A. Enabling versioning and MFA Delete',
        explanation: 'Enabling versioning and MFA Delete on an S3 bucket protects objects from accidental deletion or overwriting by requiring multi-factor authentication for deletion actions.'
    },
    {
        id: 30,
        subDomain: '4.2 Implement data and infrastructure protection strategies',
        criticalTopic: 'CloudWatch for Security Monitoring',
        question: 'How can Amazon CloudWatch be used to monitor and alert on potential security incidents in your AWS environment?',
        options: [
            'A. By enabling encryption of CloudWatch logs',
            'B. By creating CloudWatch Alarms based on suspicious API activity detected by CloudTrail',
            'C. By creating CloudWatch metrics for all EC2 instances',
            'D. By routing CloudWatch metrics through AWS GuardDuty'
        ],
        answer: 'B. By creating CloudWatch Alarms based on suspicious API activity detected by CloudTrail',
        explanation: 'You can use CloudWatch Alarms to monitor CloudTrail logs for suspicious API activity and trigger alerts when certain thresholds are breached.'
    }
];
