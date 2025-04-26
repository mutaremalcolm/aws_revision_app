// Subdomain 1.2: Design secure workloads and applications

export const solutionsArchitectSecureWorkloads = [
    {
    id: 21,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Security Groups",
    question: "Which statement about security groups in AWS is correct?",
    options: [
        "A. Security groups act as a firewall at the subnet level",
        "B. Security groups are stateless",
        "C. Security groups support allow rules only",
        "D. Security groups can filter traffic based on domain names",
    ],
    answer: "C. Security groups support allow rules only",
    explanation: "Security groups in AWS are stateful virtual firewalls that control inbound and outbound traffic at the instance level. They only support allow rules (implicit deny for anything not explicitly allowed), making them a key component in securing workloads."
},
{
    id: 22,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Network ACLs",
    question: "How do Network ACLs differ from Security Groups?",
    options: [
        "A. Network ACLs operate at the subnet level, while Security Groups operate at the instance level",
        "B. Network ACLs are stateful, while Security Groups are stateless",
        "C. Network ACLs can only filter inbound traffic",
        "D. Network ACLs support only IPv4"
    ],
    answer: "A. Network ACLs operate at the subnet level, while Security Groups operate at the instance level",
    explanation: "Network ACLs act as a firewall at the subnet level, controlling traffic in and out of subnets, while Security Groups act at the instance level. Additionally, NACLs are stateless and support both allow and deny rules."
},
{
    id: 23,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Certificate Manager",
    question: "Which service should you use to provision, manage, and deploy SSL/TLS certificates for use with AWS services?",
    options: [
        "A. AWS KMS",
        "B. AWS Certificate Manager (ACM)",
        "C. AWS Secrets Manager",
        "D. AWS CloudHSM"
    ],
    answer: "B. AWS Certificate Manager (ACM)",
    explanation: "AWS Certificate Manager (ACM) makes it easy to provision, manage, and deploy public and private SSL/TLS certificates for use with AWS services and your internal connected resources."
},
{
    id: 24,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Secrets Manager",
    question: "Which AWS service helps you protect secrets such as database credentials and API keys?",
    options: [
        "A. AWS Key Management Service",
        "B. AWS Secrets Manager",
        "C. AWS Systems Manager Parameter Store",
        "D. Amazon Cognito"
    ],
    answer: "B. AWS Secrets Manager",
    explanation: "AWS Secrets Manager helps you protect secrets needed to access your applications, services, and IT resources. It enables rotating, managing, and retrieving database credentials, API keys, and other secrets throughout their lifecycle."
},
{
    id: 25,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Web Application Firewall (WAF)",
    question: "Which AWS service can help protect your web applications from common web exploits like SQL injection and cross-site scripting?",
    options: [
        "A. AWS Shield",
        "B. Amazon GuardDuty",
        "C. AWS Web Application Firewall (WAF)",
        "D. AWS Firewall Manager"
    ],
    answer: "C. AWS Web Application Firewall (WAF)",
    explanation: "AWS WAF helps protect web applications from common web exploits by giving you control over which traffic to allow or block by defining customizable security rules."
},
{
    id: 26,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Amazon Inspector",
    question: "Which AWS service can automatically assess applications for vulnerabilities and deviations from best practices?",
    options: [
        "A. Amazon Inspector",
        "B. AWS Config",
        "C. Amazon GuardDuty",
        "D. AWS Trusted Advisor"
    ],
    answer: "A. Amazon Inspector",
    explanation: "Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS by automatically assessing them for vulnerabilities and deviations from best practices."
},
{
    id: 27,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Amazon GuardDuty",
    question: "Which AWS service provides intelligent threat detection for your AWS accounts and workloads?",
    options: [
        "A. Amazon Macie",
        "B. Amazon Inspector",
        "C. Amazon GuardDuty",
        "D. AWS Security Hub"
    ],
    answer: "C. Amazon GuardDuty",
    explanation: "Amazon GuardDuty is a threat detection service that continuously monitors for malicious activity and unauthorized behavior to protect your AWS accounts, workloads, and data stored in Amazon S3."
},
{
    id: 28,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Shield",
    question: "Which AWS service provides protection against Distributed Denial of Service (DDoS) attacks?",
    options: [
        "A. AWS WAF",
        "B. AWS Shield",
        "C. Amazon Inspector",
        "D. AWS Firewall Manager"
    ],
    answer: "B. AWS Shield",
    explanation: "AWS Shield provides protection against DDoS attacks for applications running on AWS. It offers two tiers: Standard (free for all AWS customers) and Advanced (paid service with enhanced protection and 24/7 support)."
},
{
    id: 29,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Network Firewall",
    question: "Which AWS service provides stateful, managed network firewall and intrusion detection and prevention for your VPCs?",
    options: [
        "A. AWS WAF",
        "B. AWS Firewall Manager",
        "C. AWS Network Firewall",
        "D. Security Groups"
    ],
    answer: "C. AWS Network Firewall",
    explanation: "AWS Network Firewall is a managed service that makes it easy to deploy essential network protections for all of your Amazon VPCs, providing stateful firewall functionality, intrusion prevention, and intrusion detection capabilities."
},
{
    id: 30,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Amazon Macie",
    question: "Which AWS service helps you discover and protect sensitive data in S3 buckets?",
    options: [
        "A. Amazon Macie",
        "B. Amazon GuardDuty",
        "C. AWS Inspector",
        "D. AWS Security Hub"
    ],
    answer: "A. Amazon Macie",
    explanation: "Amazon Macie is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover, classify, and protect sensitive data in AWS, particularly in S3 buckets."
},
{
    id: 31,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Security Hub",
    question: "Which AWS service provides a comprehensive view of security alerts and security posture across your AWS accounts?",
    options: [
        "A. AWS CloudTrail",
        "B. Amazon GuardDuty",
        "C. AWS Security Hub",
        "D. AWS Config"
    ],
    answer: "C. AWS Security Hub",
    explanation: "AWS Security Hub provides a comprehensive view of your security alerts and security posture across your AWS accounts. It aggregates, organizes, and prioritizes security alerts from multiple AWS services and partner solutions."
},
{
    id: 32,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "VPC Endpoints",
    question: "How can you securely access Amazon S3 from your VPC without sending traffic over the internet?",
    options: [
        "A. Use a NAT Gateway",
        "B. Use a VPC Endpoint for S3",
        "C. Use AWS Direct Connect",
        "D. Use an Internet Gateway"
    ],
    answer: "B. Use a VPC Endpoint for S3",
    explanation: "VPC Endpoints for S3 allow you to privately connect your VPC to Amazon S3 without requiring an internet gateway, NAT device, or VPN connection. Traffic between your VPC and S3 remains within the AWS network, enhancing security."
},
{
    id: 33,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Private Subnets",
    question: "Which component should be placed in a private subnet for enhanced security?",
    options: [
        "A. Internet-facing Application Load Balancer",
        "B. NAT Gateway",
        "C. Database servers",
        "D. Public website servers"
    ],
    answer: "C. Database servers",
    explanation: "Database servers should be placed in private subnets to protect them from direct internet access. Private subnets don't have a route to the internet via an Internet Gateway, providing an additional layer of security."
},
{
    id: 34,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Config",
    question: "Which AWS service can help you assess, audit, and evaluate the configurations of your AWS resources?",
    options: [
        "A. AWS CloudTrail",
        "B. AWS Config",
        "C. Amazon Inspector",
        "D. AWS Security Hub"
    ],
    answer: "B. AWS Config",
    explanation: "AWS Config provides a detailed view of the resources in your AWS account and their configurations. It continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations."
},
{
    id: 35,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Security through Separation",
    question: "What is a best practice for designing secure multi-tier web applications in AWS?",
    options: [
        "A. Place all components in a single subnet",
        "B. Implement separation of concerns by using different security groups for different tiers",
        "C. Make all instances directly accessible from the internet",
        "D. Use a single security group for all instances"
    ],
    answer: "B. Implement separation of concerns by using different security groups for different tiers",
    explanation: "Implementing separation of concerns by using different security groups for different tiers (web, application, database) enhances security by limiting access between tiers to only what is necessary."
},
{
    id: 36,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Firewall Manager",
    question: "Which AWS service helps you centrally configure and manage firewall rules across your accounts and applications?",
    options: [
        "A. AWS Shield",
        "B. AWS WAF",
        "C. AWS Firewall Manager",
        "D. AWS Network Firewall"
    ],
    answer: "C. AWS Firewall Manager",
    explanation: "AWS Firewall Manager simplifies your AWS WAF, AWS Shield Advanced, and VPC security groups administration and maintenance tasks across multiple accounts and resources, providing centralized security management."
},
{
    id: 37,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS Systems Manager",
    question: "Which AWS service can you use to securely manage and configure your EC2 instances without the need for direct SSH access?",
    options: [
        "A. AWS Config",
        "B. AWS Systems Manager",
        "C. AWS CloudFormation",
        "D. AWS OpsWorks"
    ],
    answer: "B. AWS Systems Manager",
    explanation: "AWS Systems Manager provides a unified interface for securely managing your AWS resources, including EC2 instances, without requiring direct SSH access. It allows you to automate operational tasks and enforce compliance."
},
{
    id: 38,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "Security Budget",
    question: "Which service should you use to set up alerts when AWS service usage exceeds security budget thresholds?",
    options: [
        "A. AWS Budgets",
        "B. AWS Cost Explorer",
        "C. Amazon QuickSight",
        "D. AWS CloudTrail"
    ],
    answer: "A. AWS Budgets",
    explanation: "AWS Budgets allows you to set custom cost and usage budgets, including security-related services. You can receive alerts when your costs or usage exceed your budgeted amount, helping manage security expenditures."
},
{
    id: 39,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "CloudWatch Alarms for Security",
    question: "Which AWS service should you use to create alerts for unusual API activity in your AWS account?",
    options: [
        "A. AWS Config",
        "B. Amazon CloudWatch",
        "C. AWS Trusted Advisor",
        "D. AWS Systems Manager"
    ],
    answer: "B. Amazon CloudWatch",
    explanation: "Amazon CloudWatch can be used to set up alarms that watch metrics and send notifications or automatically make changes when a threshold is breached. Combined with CloudTrail logs, it can alert on unusual API activity."
},
{
    id: 40,
    subDomain: "1.2 Design secure workloads and applications",
    criticalTopic: "AWS CloudTrail Insights",
    question: "Which feature helps automatically identify unusual API activity in your AWS accounts?",
    options: [
        "A. CloudTrail Log File Validation",
        "B. CloudTrail Insights",
        "C. CloudTrail Event History",
        "D. CloudTrail Organization Trails"
    ],
    answer: "B. CloudTrail Insights",
    explanation: "CloudTrail Insights helps AWS users identify and respond to unusual activity associated with API calls by automatically analyzing CloudTrail management events, continuously monitoring for unusual patterns, and generating Insights events when they are detected."
},
];