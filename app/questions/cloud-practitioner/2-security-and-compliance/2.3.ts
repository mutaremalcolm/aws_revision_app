// Identify AWS access management capabilities

export const cloudPractitionerAccessManagement = [
    {
        id: 1,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS IAM Users and Groups",
        question: "What is an IAM user in AWS?",
        options: [
            "A. A group of permissions",
            "B. An entity that represents a person or service that interacts with AWS",
            "C. A way to organize AWS resources",
            "D. An AWS account root user"
        ],
        answer: "B. An entity that represents a person or service that interacts with AWS",
        explanation: "An IAM user is an identity with specific permissions for interacting with AWS services."
    },
    {
        id: 2,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Roles",
        question: "What is the purpose of an IAM role?",
        options: [
            "A. To grant temporary access to AWS resources",
            "B. To store user credentials",
            "C. To encrypt data at rest",
            "D. To provide root access to AWS accounts"
        ],
        answer: "A. To grant temporary access to AWS resources",
        explanation: "IAM roles allow you to delegate access with defined permissions to trusted entities without sharing credentials."
    },
    {
        id: 3,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Policies",
        question: "What is an IAM policy?",
        options: [
            "A. A document that defines permissions for an IAM user, group, or role",
            "B. A group of IAM users",
            "C. A way to encrypt data in transit",
            "D. A method to store data in AWS"
        ],
        answer: "A. A document that defines permissions for an IAM user, group, or role",
        explanation: "IAM policies are JSON documents that define permissions and are attached to users, groups, or roles."
    },
    {
        id: 4,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Multi-Factor Authentication (MFA)",
        question: "Why is enabling MFA important for AWS accounts?",
        options: [
            "A. It provides a single sign-on experience",
            "B. It adds an extra layer of security by requiring a second authentication factor",
            "C. It allows password recovery",
            "D. It simplifies the login process"
        ],
        answer: "B. It adds an extra layer of security by requiring a second authentication factor",
        explanation: "MFA enhances security by requiring users to provide a second form of authentication, reducing the risk of compromised credentials."
    },
    {
        id: 5,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Organizations",
        question: "What is AWS Organizations used for?",
        options: [
            "A. Managing access to AWS services at scale across multiple AWS accounts",
            "B. Deploying applications",
            "C. Encrypting data",
            "D. Monitoring application performance"
        ],
        answer: "A. Managing access to AWS services at scale across multiple AWS accounts",
        explanation: "AWS Organizations allows you to centrally manage policies across multiple AWS accounts."
    },
    {
        id: 6,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Service Control Policies (SCPs)",
        question: "What is the purpose of Service Control Policies in AWS Organizations?",
        options: [
            "A. To define permissions for individual users",
            "B. To enforce permissions boundaries across accounts in an organization",
            "C. To encrypt data at rest",
            "D. To manage billing and costs"
        ],
        answer: "B. To enforce permissions boundaries across accounts in an organization",
        explanation: "SCPs define the maximum permissions for member accounts in an AWS Organization."
    },
    {
        id: 7,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Identity Federation",
        question: "What is identity federation in AWS?",
        options: [
            "A. Combining multiple IAM users into one",
            "B. Allowing external identities to access AWS resources without creating IAM users",
            "C. Encrypting user credentials",
            "D. Managing AWS accounts"
        ],
        answer: "B. Allowing external identities to access AWS resources without creating IAM users",
        explanation: "Identity federation enables users from external identity providers to access AWS resources using temporary credentials."
    },
    {
        id: 8,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Access Analyzer",
        question: "What does IAM Access Analyzer help you do?",
        options: [
            "A. Analyze network traffic",
            "B. Identify resources that are shared with external entities",
            "C. Monitor application performance",
            "D. Encrypt data at rest"
        ],
        answer: "B. Identify resources that are shared with external entities",
        explanation: "IAM Access Analyzer helps you identify any policies that grant access to your resources from outside your account."
    },
    {
        id: 9,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Single Sign-On (SSO)",
        question: "What is the main purpose of AWS Single Sign-On (SSO)?",
        options: [
            "A. To manage encryption keys",
            "B. To provide centralized access management for multiple AWS accounts and business applications",
            "C. To deploy applications",
            "D. To monitor AWS resources"
        ],
        answer: "B. To provide centralized access management for multiple AWS accounts and business applications",
        explanation: "AWS SSO allows you to centrally manage access to multiple AWS accounts and applications with a single sign-on experience."
    },
    {
        id: 10,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Permission Boundaries",
        question: "What is an IAM permission boundary?",
        options: [
            "A. A limit on the number of users in an account",
            "B. A managed policy that sets the maximum permissions an IAM entity can have",
            "C. A way to encrypt data at rest",
            "D. A method to log user activity"
        ],
        answer: "B. A managed policy that sets the maximum permissions an IAM entity can have",
        explanation: "Permission boundaries are advanced features that allow you to set the maximum permissions an IAM entity can have."
    },
    {
        id: 11,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Resource Access Manager (RAM)",
        question: "What is the purpose of AWS Resource Access Manager?",
        options: [
            "A. To share AWS resources with other AWS accounts",
            "B. To encrypt data in transit",
            "C. To manage IAM users and groups",
            "D. To monitor application performance"
        ],
        answer: "A. To share AWS resources with other AWS accounts",
        explanation: "AWS RAM allows you to share your resources with any AWS account or within your AWS Organization."
    },
    {
        id: 12,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Best Practices",
        question: "Which of the following is an IAM best practice?",
        options: [
            "A. Use the root account for daily administrative tasks",
            "B. Share user credentials among multiple users",
            "C. Grant least privilege permissions",
            "D. Store access keys in code repositories"
        ],
        answer: "C. Grant least privilege permissions",
        explanation: "Granting least privilege means providing only the permissions required to perform a task, enhancing security."
    },
    {
        id: 13,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Cognito",
        question: "What is AWS Cognito used for?",
        options: [
            "A. Managing user access to AWS resources",
            "B. Adding user sign-up and sign-in to web and mobile apps",
            "C. Encrypting data at rest",
            "D. Deploying applications"
        ],
        answer: "B. Adding user sign-up and sign-in to web and mobile apps",
        explanation: "AWS Cognito provides authentication, authorization, and user management for web and mobile applications."
    },
    {
        id: 14,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Inline Policies",
        question: "What is an inline policy in IAM?",
        options: [
            "A. A standalone policy that can be attached to multiple entities",
            "B. A policy that is embedded directly into a single user, group, or role",
            "C. A policy that controls access to AWS Organizations",
            "D. A default policy provided by AWS"
        ],
        answer: "B. A policy that is embedded directly into a single user, group, or role",
        explanation: "Inline policies are policies that exist only in a single user, group, or role and are not reusable."
    },
    {
        id: 15,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Temporary Security Credentials",
        question: "Which AWS service provides temporary security credentials for accessing AWS resources?",
        options: [
            "A. AWS STS (Security Token Service)",
            "B. AWS KMS",
            "C. AWS Secrets Manager",
            "D. Amazon GuardDuty"
        ],
        answer: "A. AWS STS (Security Token Service)",
        explanation: "AWS STS issues temporary security credentials for federated users or IAM users."
    },
    {
        id: 16,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Credential Reports",
        question: "What information does an IAM credential report provide?",
        options: [
            "A. A list of active AWS services",
            "B. A report on the status of IAM users' credentials",
            "C. Billing information",
            "D. Application performance metrics"
        ],
        answer: "B. A report on the status of IAM users' credentials",
        explanation: "An IAM credential report lists all users in the account and the status of their credentials, helping identify unused or insecure credentials."
    },
    {
        id: 17,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM PassRole",
        question: "What does the iam:PassRole permission allow a user to do?",
        options: [
            "A. Change their own IAM permissions",
            "B. Delegate a role to an AWS service",
            "C. Reset another user's password",
            "D. Access AWS services without credentials"
        ],
        answer: "B. Delegate a role to an AWS service",
        explanation: "The iam:PassRole permission allows a user to pass an existing role to an AWS service so that the service can perform actions on behalf of the user."
    },
    {
        id: 18,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Directory Service",
        question: "What is the purpose of AWS Directory Service?",
        options: [
            "A. To store user credentials",
            "B. To integrate AWS resources with on-premises Active Directory",
            "C. To monitor network traffic",
            "D. To encrypt data at rest"
        ],
        answer: "B. To integrate AWS resources with on-premises Active Directory",
        explanation: "AWS Directory Service enables you to connect AWS resources with existing on-premises Microsoft Active Directory."
    },
    {
        id: 19,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Managed Policies",
        question: "What is an AWS managed policy?",
        options: [
            "A. A policy created and managed by the customer",
            "B. A policy created and managed by AWS",
            "C. A policy that applies only to root users",
            "D. A policy that cannot be attached to IAM roles"
        ],
        answer: "B. A policy created and managed by AWS",
        explanation: "AWS managed policies are pre-defined policies maintained by AWS, designed to provide permissions for common use cases."
    },
    {
        id: 20,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Conditions in IAM Policies",
        question: "How can conditions be used in IAM policies?",
        options: [
            "A. To specify when a policy is inactive",
            "B. To define specific circumstances under which a policy grants or denies permission",
            "C. To encrypt data at rest",
            "D. To create users"
        ],
        answer: "B. To define specific circumstances under which a policy grants or denies permission",
        explanation: "Conditions in IAM policies allow you to specify constraints, such as IP addresses or time of day, for when permissions are effective."
    },
    {
        id: 21,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Access Advisor",
        question: "What information does IAM Access Advisor provide?",
        options: [
            "A. Billing details",
            "B. Service usage data to help refine permissions",
            "C. Application performance metrics",
            "D. Encryption key status"
        ],
        answer: "B. Service usage data to help refine permissions",
        explanation: "IAM Access Advisor shows the services accessed by a user and when, helping you identify unused permissions."
    },
    {
        id: 22,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Least Privilege Principle",
        question: "What does the principle of least privilege entail in IAM?",
        options: [
            "A. Granting all users full access to all resources",
            "B. Providing users with only the permissions they need to perform their job functions",
            "C. Denying all access by default",
            "D. Ignoring user permissions"
        ],
        answer: "B. Providing users with only the permissions they need to perform their job functions",
        explanation: "The principle of least privilege ensures that users are granted only the permissions necessary, reducing security risks."
    },
    {
        id: 23,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "IAM Root User",
        question: "What is recommended regarding the use of the AWS root user?",
        options: [
            "A. Use it for daily administrative tasks",
            "B. Delete the root user",
            "C. Secure it with MFA and use it only when necessary",
            "D. Share it with trusted team members"
        ],
        answer: "C. Secure it with MFA and use it only when necessary",
        explanation: "The root user has unrestricted access and should be secured and used sparingly to reduce security risks."
    },
    {
        id: 24,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "AWS Security Token Service (STS)",
        question: "What is the AWS Security Token Service (STS) used for?",
        options: [
            "A. Encrypting data at rest",
            "B. Generating temporary security credentials",
            "C. Monitoring network traffic",
            "D. Managing IAM user passwords"
        ],
        answer: "B. Generating temporary security credentials",
        explanation: "AWS STS provides temporary, limited-privilege credentials for users to access AWS resources."
    },
    {
        id: 25,
        subDomain: "2.3 Identify AWS access management capabilities",
        criticalTopic: "Cross-Account Access",
        question: "How can you grant access to AWS resources in one account to a user in another account?",
        options: [
            "A. By sharing passwords",
            "B. By creating duplicate users",
            "C. By using IAM roles for cross-account access",
            "D. By merging AWS accounts"
        ],
        answer: "C. By using IAM roles for cross-account access",
        explanation: "You can set up IAM roles that users in other accounts can assume to access resources, providing secure cross-account access."
    }
];

