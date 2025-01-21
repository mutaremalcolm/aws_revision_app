// Recognize the various account structures in relation to AWS billing and pricing

export const cloudPractitionerAccountStructures = [
    {
        id: 1,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "AWS Organizations",
        question: "What is AWS Organizations used for?",
        options: [
            "A. Managing access to AWS services through a single account",
            "B. Centrally managing billing and access across multiple AWS accounts",
            "C. Setting up on-premises data centers",
            "D. Managing AWS Marketplace subscriptions"
        ],
        answer: "B. Centrally managing billing and access across multiple AWS accounts",
        explanation: "AWS Organizations allows customers to create and manage multiple AWS accounts under a single organization and consolidate billing."
    },
    {
        id: 2,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Consolidated Billing",
        question: "What is a benefit of using AWS Consolidated Billing?",
        options: [
            "A. It provides a separate bill for each AWS account",
            "B. It offers volume discounts based on the combined usage of multiple accounts",
            "C. It limits the services that each account can access",
            "D. It applies flat rates to all AWS services"
        ],
        answer: "B. It offers volume discounts based on the combined usage of multiple accounts",
        explanation: "Consolidated Billing combines usage from all accounts in an organization, allowing the customer to benefit from volume pricing discounts."
    },
    {
        id: 3,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Service Control Policies (SCPs)",
        question: "How can Service Control Policies (SCPs) in AWS Organizations help manage billing and pricing?",
        options: [
            "A. By restricting access to specific services to control costs",
            "B. By applying discounts to individual accounts",
            "C. By generating detailed billing reports for each account",
            "D. By automatically scaling services to reduce costs"
        ],
        answer: "A. By restricting access to specific services to control costs",
        explanation: "SCPs can restrict access to certain AWS services across accounts within an organization, helping to control costs by limiting usage."
    },
    {
        id: 4,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Linked Accounts",
        question: "In AWS Consolidated Billing, what is a linked account?",
        options: [
            "A. A separate AWS account that is part of an organization and shares billing",
            "B. An AWS account that is managed by a third party",
            "C. An account used solely for administrative purposes",
            "D. A non-billable AWS account"
        ],
        answer: "A. A separate AWS account that is part of an organization and shares billing",
        explanation: "Linked accounts in AWS Organizations are individual AWS accounts that share billing with a management account under Consolidated Billing."
    },
    {
        id: 5,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Management Account",
        question: "What is the role of the management account in AWS Organizations?",
        options: [
            "A. It generates detailed billing reports for each account",
            "B. It handles security and monitoring for all linked accounts",
            "C. It controls the billing, access, and management of other accounts in the organization",
            "D. It is responsible for monitoring network traffic"
        ],
        answer: "C. It controls the billing, access, and management of other accounts in the organization",
        explanation: "The management account is the primary account in an AWS Organization, responsible for managing billing and controlling access for all linked accounts."
    },
    {
        id: 6,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Cost Allocation Tags",
        question: "How do cost allocation tags help with AWS billing and pricing?",
        options: [
            "A. They are used to track individual user activity",
            "B. They allow customers to categorize and track AWS costs by resource or project",
            "C. They generate pricing reports automatically",
            "D. They offer volume discounts based on resource tags"
        ],
        answer: "B. They allow customers to categorize and track AWS costs by resource or project",
        explanation: "Cost allocation tags enable customers to categorize and track costs by assigning metadata to AWS resources, which helps in cost management."
    },
    {
        id: 7,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Billing Alerts and Budgets",
        question: "What is the purpose of setting up billing alerts and budgets in AWS?",
        options: [
            "A. To apply discounts automatically",
            "B. To notify users when their AWS usage exceeds a specified threshold",
            "C. To restrict AWS service usage",
            "D. To offer free services"
        ],
        answer: "B. To notify users when their AWS usage exceeds a specified threshold",
        explanation: "Billing alerts and budgets help customers monitor AWS costs by sending notifications when spending exceeds predefined limits."
    },
    {
        id: 8,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "AWS Cost Explorer",
        question: "How does AWS Cost Explorer help in managing AWS billing?",
        options: [
            "A. It restricts service usage based on cost",
            "B. It provides detailed insights into historical AWS costs and usage",
            "C. It applies automatic discounts to high-usage accounts",
            "D. It predicts future AWS costs based on current usage"
        ],
        answer: "B. It provides detailed insights into historical AWS costs and usage",
        explanation: "AWS Cost Explorer allows customers to visualize and analyze their AWS costs and usage over time."
    },
    {
        id: 9,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "AWS Billing and Cost Management Dashboard",
        question: "What does the AWS Billing and Cost Management Dashboard provide?",
        options: [
            "A. Real-time monitoring of AWS service health",
            "B. A centralized view of billing and account usage information",
            "C. Automated cost reduction recommendations",
            "D. A marketplace for buying third-party services"
        ],
        answer: "B. A centralized view of billing and account usage information",
        explanation: "The AWS Billing and Cost Management Dashboard provides a centralized view for tracking usage, spending, and cost allocation."
    },
    {
        id: 10,
        subDomain: "4.2 Recognize the various account structures in relation to AWS billing and pricing",
        criticalTopic: "Volume Discounts",
        question: "How do volume discounts work in AWS?",
        options: [
            "A. AWS provides discounts based on resource usage within a single account only",
            "B. AWS applies volume discounts to an entire organization when the combined usage of multiple accounts exceeds certain thresholds",
            "C. Volume discounts apply automatically to all AWS services without limits",
            "D. Volume discounts are only available for S3 and EC2 services"
        ],
        answer: "B. AWS applies volume discounts to an entire organization when the combined usage of multiple accounts exceeds certain thresholds",
        explanation: "AWS applies volume discounts when the aggregated usage across all accounts in an organization exceeds certain thresholds."
    }
];

