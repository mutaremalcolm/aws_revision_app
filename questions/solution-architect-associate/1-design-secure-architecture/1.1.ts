// Domain 1: Design Secure Architectures

export const solutionsArchitectSecureArchitecturesQuestions = [
    // Subdomain 1.1: Design secure access to AWS resources
    {
        id: 1,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Identity and Access Management (IAM)",
        question: "Which AWS service should you use to create and manage permissions for AWS resources?",
        options: [
            "A. Amazon Cognito",
            "B. AWS Identity and Access Management (IAM)",
            "C. AWS Key Management Service (KMS)",
            "D. AWS Security Hub"
        ],
        answer: "B. AWS Identity and Access Management (IAM)",
        explanation: "AWS IAM is the primary service for creating and managing permissions for AWS resources. It allows you to control who is authenticated and authorized to use resources."
    },
    {
        id: 2,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Policies",
        question: "What is the most secure approach when creating IAM policies?",
        options: [
            "A. Grant all permissions initially, then remove unnecessary ones",
            "B. Start with no permissions and grant only what is required",
            "C. Use only AWS managed policies",
            "D. Create a single policy for all users"
        ],
        answer: "B. Start with no permissions and grant only what is required",
        explanation: "Following the principle of least privilege, you should start with no permissions and add only those that are required for the specific use case. This minimizes potential security vulnerabilities."
    },
    {
        id: 3,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Roles",
        question: "What AWS feature should be used to grant temporary access to your AWS resources to an EC2 instance?",
        options: [
            "A. IAM User credentials stored on the instance",
            "B. IAM Roles",
            "C. Security Group rules",
            "D. Access Control Lists"
        ],
        answer: "B. IAM Roles",
        explanation: "IAM Roles are the most secure way to grant temporary access to AWS resources from an EC2 instance. Roles provide temporary credentials and eliminate the need to store long-term credentials on the instance."
    },
    {
        id: 4,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Amazon Cognito",
        question: "Which AWS service should be used to add user sign-up, sign-in, and access control to your web and mobile applications?",
        options: [
            "A. AWS IAM",
            "B. AWS Directory Service",
            "C. Amazon Cognito",
            "D. AWS Single Sign-On"
        ],
        answer: "C. Amazon Cognito",
        explanation: "Amazon Cognito provides authentication, authorization, and user management for web and mobile applications. It supports social identity providers and enterprise identity federation."
    },
    {
        id: 5,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Federation",
        question: "A company wants to allow employees to use their existing corporate credentials to access AWS resources. Which approach is most appropriate?",
        options: [
            "A. Create IAM users for each employee",
            "B. Use AWS Single Sign-On",
            "C. Set up IAM federation with their corporate identity provider",
            "D. Store corporate credentials in AWS Secrets Manager"
        ],
        answer: "C. Set up IAM federation with their corporate identity provider",
        explanation: "IAM federation allows users to access AWS resources using existing corporate credentials through identity federation. This eliminates the need to create separate IAM users for each employee."
    },
    {
        id: 6,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Security Token Service (STS)",
        question: "Which AWS service provides temporary security credentials for IAM users or federated users?",
        options: [
            "A. AWS Key Management Service",
            "B. AWS Secrets Manager",
            "C. AWS Security Token Service (STS)",
            "D. AWS Certificate Manager"
        ],
        answer: "C. AWS Security Token Service (STS)",
        explanation: "AWS Security Token Service (STS) provides temporary, limited-privilege credentials for IAM users or federated users who need access to AWS resources."
    },
    {
        id: 7,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Resource-Based Policies",
        question: "Which AWS resource supports both identity-based policies and resource-based policies for access control?",
        options: [
            "A. Amazon EC2",
            "B. Amazon S3",
            "C. Amazon RDS",
            "D. Amazon VPC"
        ],
        answer: "B. Amazon S3",
        explanation: "Amazon S3 supports both identity-based policies (attached to IAM users, groups, or roles) and resource-based policies (attached directly to the bucket) for comprehensive access control."
    },
    {
        id: 8,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Cross-Account Access",
        question: "A company has multiple AWS accounts and wants to allow an EC2 instance in Account A to access an S3 bucket in Account B. What is the most secure way to achieve this?",
        options: [
            "A. Create an IAM user in Account B and store its credentials on the EC2 instance",
            "B. Make the S3 bucket public",
            "C. Create an IAM role in Account B with the necessary permissions and allow Account A to assume it",
            "D. Use the same root account credentials for both accounts"
        ],
        answer: "C. Create an IAM role in Account B with the necessary permissions and allow Account A to assume it",
        explanation: "Creating an IAM role in Account B and allowing Account A to assume it is the most secure approach for cross-account access. It leverages temporary credentials and avoids storing permanent credentials on the EC2 instance."
    },
    {
        id: 9,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Access Analyzer",
        question: "Which AWS service helps identify resources that are shared with external entities?",
        options: [
            "A. AWS Config",
            "B. AWS IAM Access Analyzer",
            "C. AWS Trusted Advisor",
            "D. Amazon Inspector"
        ],
        answer: "B. AWS IAM Access Analyzer",
        explanation: "IAM Access Analyzer helps identify resources in your organization and accounts that are shared with external entities. It uses mathematical proof to analyze resource policies to identify potential unintended access."
    },
    {
        id: 10,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS Organizations Service Control Policies",
        question: "Which feature of AWS Organizations can be used to centrally control permissions for multiple AWS accounts?",
        options: [
            "A. Organizational Units (OUs)",
            "B. Service Control Policies (SCPs)",
            "C. Tagging Policies",
            "D. Backup Policies"
        ],
        answer: "B. Service Control Policies (SCPs)",
        explanation: "Service Control Policies (SCPs) in AWS Organizations allow you to centrally control the maximum available permissions for all accounts in your organization, providing an additional layer of access control."
    },
    {
        id: 11,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS Single Sign-On",
        question: "A company wants to provide users with single sign-on access to multiple AWS accounts and business applications. Which AWS service should they use?",
        options: [
            "A. Amazon Cognito",
            "B. AWS IAM",
            "C. AWS Single Sign-On (AWS SSO)",
            "D. AWS Directory Service"
        ],
        answer: "C. AWS Single Sign-On (AWS SSO)",
        explanation: "AWS Single Sign-On (AWS SSO) enables users to sign in once and access multiple AWS accounts and business applications with centralized access management."
    },
    {
        id: 12,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Permission Boundaries",
        question: "What AWS IAM feature allows administrators to set the maximum permissions that can be granted to an IAM entity?",
        options: [
            "A. IAM Access Analyzer",
            "B. IAM Permission Boundaries",
            "C. Service Control Policies",
            "D. IAM Policy Conditions"
        ],
        answer: "B. IAM Permission Boundaries",
        explanation: "IAM Permission Boundaries set the maximum permissions that an identity-based policy can grant to an IAM entity (user or role), helping administrators delegate permissions management while ensuring users cannot exceed certain permission limits."
    },
    {
        id: 13,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS Resource Access Manager",
        question: "Which AWS service enables you to share AWS resources with other AWS accounts securely?",
        options: [
            "A. AWS Resource Access Manager (RAM)",
            "B. AWS Resource Groups",
            "C. AWS License Manager",
            "D. AWS Transfer Family"
        ],
        answer: "A. AWS Resource Access Manager (RAM)",
        explanation: "AWS Resource Access Manager (RAM) lets you share resources such as VPC subnets, Transit Gateways, and more with other AWS accounts securely and efficiently."
    },
    {
        id: 14,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS Directory Service",
        question: "A company wants to run Microsoft Active Directory-aware workloads in AWS. Which AWS service should they use?",
        options: [
            "A. Amazon Cognito",
            "B. AWS Directory Service for Microsoft Active Directory",
            "C. Amazon IAM Identity Center",
            "D. AWS Managed Microsoft AD"
        ],
        answer: "D. AWS Managed Microsoft AD",
        explanation: "AWS Managed Microsoft AD (which is part of AWS Directory Service) provides a fully managed, highly available Microsoft Active Directory in the AWS Cloud, making it ideal for running AD-aware workloads."
    },
    {
        id: 15,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Policy Variables",
        question: "Which IAM feature allows you to create policies that include variables that are substituted when the policy is evaluated?",
        options: [
            "A. Policy Conditions",
            "B. Policy Variables",
            "C. Dynamic References",
            "D. Policy Versioning"
        ],
        answer: "B. Policy Variables",
        explanation: "IAM Policy Variables allow you to specify placeholders in your policies that are replaced with values from the request context when the policy is evaluated, providing more dynamic access control."
    },
    {
        id: 16,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS CloudTrail",
        question: "Which AWS service helps you monitor API calls and track user activity in your AWS account?",
        options: [
            "A. Amazon CloudWatch",
            "B. AWS CloudTrail",
            "C. AWS Config",
            "D. Amazon GuardDuty"
        ],
        answer: "B. AWS CloudTrail",
        explanation: "AWS CloudTrail monitors and records account activity across your AWS infrastructure, providing visibility into user activity by recording AWS API calls for your account."
    },
    {
        id: 17,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "IAM Conditions",
        question: "Which IAM policy element can restrict access based on time of day?",
        options: [
            "A. Principal",
            "B. Resource",
            "C. Action",
            "D. Condition"
        ],
        answer: "D. Condition",
        explanation: "The Condition element in IAM policies allows you to specify conditions for when a policy is in effect, including time-based conditions that restrict access based on the time of day."
    },
    {
        id: 18,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "AWS Control Tower",
        question: "Which AWS service helps you set up and govern a secure, multi-account AWS environment based on best practices?",
        options: [
            "A. AWS Organizations",
            "B. AWS Control Tower",
            "C. AWS Landing Zone",
            "D. AWS Config"
        ],
        answer: "B. AWS Control Tower",
        explanation: "AWS Control Tower provides a simplified way to set up and govern a secure, compliant multi-account AWS environment based on best practices and automates the setup of core accounts, identity management, and governance."
    },
    {
        id: 19,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Resource Tags for Access Control",
        question: "A company wants to control access to specific EC2 instances based on project assignments. Which approach is most appropriate?",
        options: [
            "A. Create separate VPCs for each project",
            "B. Use attribute-based access control with resource tags",
            "C. Create separate AWS accounts for each project",
            "D. Use network ACLs to control access"
        ],
        answer: "B. Use attribute-based access control with resource tags",
        explanation: "Using attribute-based access control with resource tags allows you to create IAM policies that grant access based on tags attached to resources, enabling fine-grained access control based on project assignments."
    },
    {
        id: 20,
        subDomain: "1.1 Design secure access to AWS resources",
        criticalTopic: "Service-Linked Roles",
        question: "What is the purpose of service-linked roles in AWS IAM?",
        options: [
            "A. To provide credentials for cross-service integration",
            "B. To grant AWS services permissions to call other AWS services on your behalf",
            "C. To link multiple AWS services under a single administrative role",
            "D. To provide access to the AWS Management Console"
        ],
        answer: "B. To grant AWS services permissions to call other AWS services on your behalf",
        explanation: "Service-linked roles provide the necessary permissions for AWS services to call other AWS services on your behalf. They are predefined by the service and include all the permissions the service requires to interact with other AWS services."
    },
    
    // Subdomain 1.2: Design secure workloads and applications
    {
        id: 21,
        subDomain: "1.2 Design secure workloads and applications",
        criticalTopic: "Security Groups",
        question: "Which statement about security groups in AWS is correct?",
        options: [
            "A. Security groups act as a firewall at the subnet level",
            "B. Security groups are stateless",
            "C. Security groups support allow rules only",
            "D. Security groups can filter traffic based on domain names"
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
]