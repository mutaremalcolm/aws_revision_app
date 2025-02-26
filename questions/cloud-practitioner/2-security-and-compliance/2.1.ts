// Define the AWS shared responsibility model

export const cloudPractitionerSharedResponsibilityModel = [
    {
        id: 1,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Shared Responsibility Model - Concept",
        question: "What is the AWS Shared Responsibility Model?",
        options: [
            "A. A model where AWS is responsible for security in the cloud, and customers are responsible for security of the cloud",
            "B. A model where security responsibilities are entirely AWS's responsibility",
            "C. A model where security responsibilities are entirely the customer's responsibility",
            "D. A model that outlines the division of security responsibilities between AWS and the customer"
        ],
        answer: "D. A model that outlines the division of security responsibilities between AWS and the customer",
        explanation: "The AWS Shared Responsibility Model defines the division of security responsibilities between AWS and its customers."
    },
    {
        id: 2,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "AWS Responsibility - Security of the Cloud",
        question: "Which of the following is AWS responsible for under the Shared Responsibility Model?",
        options: [
            "A. Managing customer data and applications",
            "B. Securing the global infrastructure and underlying hardware",
            "C. Configuring security groups and network ACLs",
            "D. Managing customer IAM users and roles"
        ],
        answer: "B. Securing the global infrastructure and underlying hardware",
        explanation: "AWS is responsible for protecting the infrastructure that runs all of the services offered in the AWS Cloud."
    },
    {
        id: 3,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Customer Responsibility - Security in the Cloud",
        question: "Under the Shared Responsibility Model, what is the customer responsible for?",
        options: [
            "A. Physical security of data centers",
            "B. Securing customer data and applications",
            "C. Maintaining AWS global infrastructure",
            "D. Patching the underlying hypervisor"
        ],
        answer: "B. Securing customer data and applications",
        explanation: "Customers are responsible for managing the security of their data, applications, and operating systems within the AWS environment."
    },
    {
        id: 4,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Shared Controls",
        question: "What are shared controls in the AWS Shared Responsibility Model?",
        options: [
            "A. Controls that are solely managed by AWS",
            "B. Controls that are solely managed by the customer",
            "C. Controls that apply to both the infrastructure and the customer's configuration",
            "D. Controls that neither AWS nor the customer are responsible for"
        ],
        answer: "C. Controls that apply to both the infrastructure and the customer's configuration",
        explanation: "Shared controls are areas where both AWS and the customer share responsibilities, such as patch management and configuration."
    },
    {
        id: 5,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Customer Responsibility - Patching EC2 Instances",
        question: "Who is responsible for patching the operating system on Amazon EC2 instances?",
        options: [
            "A. AWS",
            "B. The customer",
            "C. Shared between AWS and the customer",
            "D. Third-party vendors"
        ],
        answer: "B. The customer",
        explanation: "The customer is responsible for managing and patching the guest operating system and applications on EC2 instances."
    },
    {
        id: 6,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "AWS Responsibility - Managed Services",
        question: "In AWS managed services like Amazon S3, who is responsible for infrastructure maintenance and security?",
        options: [
            "A. AWS",
            "B. The customer",
            "C. Shared between AWS and the customer",
            "D. Independent third parties"
        ],
        answer: "A. AWS",
        explanation: "For managed services, AWS is responsible for the security and maintenance of the infrastructure that runs the service."
    },
    {
        id: 7,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Customer Responsibility - Data Encryption",
        question: "Who is responsible for enabling data encryption at rest in Amazon S3?",
        options: [
            "A. AWS automatically encrypts all data at rest",
            "B. The customer must enable and manage data encryption",
            "C. Encryption is not available for Amazon S3",
            "D. Encryption is a shared responsibility"
        ],
        answer: "B. The customer must enable and manage data encryption",
        explanation: "While AWS provides encryption options, the customer is responsible for configuring and managing data encryption at rest."
    },
    {
        id: 8,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "AWS Responsibility - Physical Security",
        question: "Who is responsible for the physical security of AWS data centers?",
        options: [
            "A. AWS",
            "B. The customer",
            "C. Both AWS and the customer",
            "D. Data center contractors"
        ],
        answer: "A. AWS",
        explanation: "AWS is solely responsible for the physical security and environmental controls of its data centers."
    },
    {
        id: 9,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Customer Responsibility - Access Management",
        question: "Under the Shared Responsibility Model, who manages IAM user permissions and access keys?",
        options: [
            "A. AWS",
            "B. The customer",
            "C. Shared between AWS and the customer",
            "D. IAM manages itself automatically"
        ],
        answer: "B. The customer",
        explanation: "Customers are responsible for managing IAM users, groups, policies, and access keys to control access to their AWS resources."
    },
    {
        id: 10,
        subDomain: "2.1 Define the AWS shared responsibility model",
        criticalTopic: "Shared Responsibility - Network Configuration",
        question: "Which network security configurations are shared responsibilities between AWS and the customer?",
        options: [
            "A. Physical network infrastructure",
            "B. Protection of the global network infrastructure",
            "C. Configuring security groups and network ACLs",
            "D. Monitoring network traffic between AWS services"
        ],
        answer: "C. Configuring security groups and network ACLs",
        explanation: "AWS provides the infrastructure and basic protection, but customers are responsible for configuring network controls like security groups."
    }
];
