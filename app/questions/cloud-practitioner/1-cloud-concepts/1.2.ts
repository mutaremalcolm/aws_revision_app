// Identify aspects of AWS Cloud economics

export const cloudPractitionerCloudEconomics = [
    {
        id: 1,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Models - Pay-as-you-go",
        question: "Which AWS pricing model allows customers to pay only for the computing resources they consume without any upfront commitments?",
        options: [
            "A. Pay-as-you-go",
            "B. Reserved Instances",
            "C. Spot Instances",
            "D. Dedicated Hosts"
        ],
        answer: "A. Pay-as-you-go",
        explanation: "The pay-as-you-go model lets customers pay only for the resources they use, without long-term contracts or upfront payments."
    },
    {
        id: 2,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Models - Reserved Instances",
        question: "Which pricing option offers a significant discount compared to On-Demand pricing in exchange for a one- or three-year commitment?",
        options: [
            "A. Spot Instances",
            "B. Reserved Instances",
            "C. Pay-as-you-go",
            "D. Dedicated Instances"
        ],
        answer: "B. Reserved Instances",
        explanation: "Reserved Instances provide a discounted hourly rate and an optional capacity reservation for EC2 instances in exchange for a commitment to use for a one- or three-year term."
    },
    {
        id: 3,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Models - Spot Instances",
        question: "Which EC2 instance purchasing option allows you to bid on unused EC2 capacity at a significant discount?",
        options: [
            "A. On-Demand Instances",
            "B. Reserved Instances",
            "C. Spot Instances",
            "D. Dedicated Hosts"
        ],
        answer: "C. Spot Instances",
        explanation: "Spot Instances allow you to use spare Amazon EC2 computing capacity at up to a 90% discount compared to On-Demand prices."
    },
    {
        id: 4,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Total Cost of Ownership (TCO)",
        question: "What tool can help you estimate the cost savings of using AWS compared to an on-premises data center?",
        options: [
            "A. AWS Simple Monthly Calculator",
            "B. AWS Pricing Calculator",
            "C. AWS TCO Calculator",
            "D. AWS Cost Explorer"
        ],
        answer: "C. AWS TCO Calculator",
        explanation: "The AWS TCO Calculator helps you estimate the cost savings when using AWS and provides a detailed set of reports."
    },
    {
        id: 5,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Free Tier",
        question: "Which of the following offers customers the ability to explore AWS services free of charge up to specified limits for 12 months?",
        options: [
            "A. AWS Trial Services",
            "B. AWS Free Tier",
            "C. AWS Promotional Credits",
            "D. AWS Marketplace"
        ],
        answer: "B. AWS Free Tier",
        explanation: "The AWS Free Tier enables customers to explore and try out AWS services free of charge up to specified limits for 12 months."
    },
    {
        id: 6,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Economies of Scale",
        question: "How does AWS achieve lower variable costs compared to on-premises infrastructure?",
        options: [
            "A. By purchasing hardware in large volumes",
            "B. By reducing the quality of services",
            "C. By charging customers higher fees",
            "D. By limiting service availability"
        ],
        answer: "A. By purchasing hardware in large volumes",
        explanation: "AWS can achieve lower variable costs due to economies of scale, passing on the cost savings to customers."
    },
    {
        id: 7,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Allocation Tags",
        question: "Which feature allows you to categorize and track your AWS costs by assigning metadata to AWS resources?",
        options: [
            "A. AWS Resource Groups",
            "B. AWS Config Rules",
            "C. Cost Allocation Tags",
            "D. AWS CloudFormation Templates"
        ],
        answer: "C. Cost Allocation Tags",
        explanation: "Cost Allocation Tags help you organize your resource costs on your cost allocation report, making it easier to track expenses."
    },
    {
        id: 8,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Organizations and Consolidated Billing",
        question: "Which AWS feature allows you to consolidate billing and payment for multiple AWS accounts?",
        options: [
            "A. AWS Budgets",
            "B. AWS Cost Explorer",
            "C. AWS Organizations",
            "D. AWS Billing Dashboard"
        ],
        answer: "C. AWS Organizations",
        explanation: "AWS Organizations allows you to consolidate billing across multiple AWS accounts, enabling volume pricing discounts."
    },
    {
        id: 9,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Pricing Calculator",
        question: "Which tool can you use to get an estimate of the monthly costs of AWS services based on your expected usage?",
        options: [
            "A. AWS Trusted Advisor",
            "B. AWS Pricing Calculator",
            "C. AWS Cost and Usage Report",
            "D. AWS Budgets"
        ],
        answer: "B. AWS Pricing Calculator",
        explanation: "The AWS Pricing Calculator allows you to estimate your monthly AWS bill based on your anticipated usage."
    },
    {
        id: 10,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Explorer",
        question: "Which AWS tool helps you visualize and manage your AWS costs and usage over time?",
        options: [
            "A. AWS Cost Explorer",
            "B. AWS Billing Dashboard",
            "C. AWS Budget Alerts",
            "D. AWS Pricing Calculator"
        ],
        answer: "A. AWS Cost Explorer",
        explanation: "AWS Cost Explorer provides interactive graphs and reports to help you analyze your AWS spending over time."
    },
    {
        id: 11,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Support Plans - Basic",
        question: "Which AWS Support plan offers access to AWS customer service for account and billing questions at no cost?",
        options: [
            "A. Basic Support",
            "B. Developer Support",
            "C. Business Support",
            "D. Enterprise Support"
        ],
        answer: "A. Basic Support",
        explanation: "The Basic Support plan provides 24/7 access to customer service for account and billing inquiries at no additional cost."
    },
    {
        id: 12,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Support Plans - Comparison",
        question: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
        options: [
            "A. Basic Support",
            "B. Developer Support",
            "C. Business Support",
            "D. Enterprise Support"
        ],
        answer: "D. Enterprise Support",
        explanation: "Enterprise Support includes a Technical Account Manager (TAM) who provides guidance and best practices."
    },
    {
        id: 13,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Billing Alerts and Notifications",
        question: "Which AWS service can help you set custom cost and usage budgets and receive alerts when they are exceeded?",
        options: [
            "A. AWS Cost Explorer",
            "B. AWS Budgets",
            "C. AWS Trusted Advisor",
            "D. AWS Billing Dashboard"
        ],
        answer: "B. AWS Budgets",
        explanation: "AWS Budgets allows you to set custom budgets for your AWS costs and usage and receive alerts when thresholds are exceeded."
    },
    {
        id: 14,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Marketplace",
        question: "What is AWS Marketplace?",
        options: [
            "A. A physical store for purchasing AWS hardware",
            "B. An online catalog of third-party software and services",
            "C. A repository for AWS service documentation",
            "D. A platform for trading unused AWS resources"
        ],
        answer: "B. An online catalog of third-party software and services",
        explanation: "AWS Marketplace is a digital catalog where customers can find, buy, and deploy software and services that run on AWS."
    },
    {
        id: 15,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Trusted Advisor - Cost Optimization",
        question: "Which AWS service provides real-time guidance to help you provision resources following AWS best practices for cost optimization?",
        options: [
            "A. AWS Config",
            "B. AWS Cost Explorer",
            "C. AWS Trusted Advisor",
            "D. AWS CloudTrail"
        ],
        answer: "C. AWS Trusted Advisor",
        explanation: "AWS Trusted Advisor provides recommendations to optimize your AWS environment, including cost optimization."
    },
    {
        id: 16,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Compute Pricing - EC2 On-Demand",
        question: "Which EC2 pricing model allows you to pay for compute capacity by the hour or second with no long-term commitments?",
        options: [
            "A. On-Demand Instances",
            "B. Reserved Instances",
            "C. Spot Instances",
            "D. Dedicated Hosts"
        ],
        answer: "A. On-Demand Instances",
        explanation: "On-Demand Instances let you pay for compute capacity by the hour or second without long-term commitments."
    },
    {
        id: 17,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Storage Pricing - S3 Standard vs. S3 Infrequent Access",
        question: "Which Amazon S3 storage class offers lower storage costs for data that is accessed less frequently but requires rapid access when needed?",
        options: [
            "A. S3 Standard",
            "B. S3 Intelligent-Tiering",
            "C. S3 Standard-Infrequent Access",
            "D. S3 Glacier"
        ],
        answer: "C. S3 Standard-Infrequent Access",
        explanation: "S3 Standard-Infrequent Access offers lower storage costs for infrequently accessed data with rapid access when needed."
    },
    {
        id: 18,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Data Transfer Costs",
        question: "Which of the following incurs a charge in AWS data transfer costs?",
        options: [
            "A. Data transferred between services within the same AWS Region",
            "B. Data transferred out to the internet from AWS",
            "C. Data transferred into AWS from the internet",
            "D. Data transferred between EC2 instances in the same Availability Zone"
        ],
        answer: "B. Data transferred out to the internet from AWS",
        explanation: "AWS charges for data transferred out to the internet, while data transferred in is typically free."
    },
    {
        id: 19,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Pricing Philosophy",
        question: "What is AWS's pricing philosophy?",
        options: [
            "A. Pay less when you consume more",
            "B. Pay more for longer-term commitments",
            "C. Fixed pricing for all services",
            "D. Premium pricing for peak usage periods"
        ],
        answer: "A. Pay less when you consume more",
        explanation: "AWS pricing philosophy includes offering volume-based discounts, meaning you pay less per unit when you use more."
    },
    {
        id: 20,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Management Tools",
        question: "Which AWS tool provides a detailed view of your AWS costs and usage over time and includes forecasting capabilities?",
        options: [
            "A. AWS Billing Dashboard",
            "B. AWS Budgets",
            "C. AWS Cost Explorer",
            "D. AWS Trusted Advisor"
        ],
        answer: "C. AWS Cost Explorer",
        explanation: "AWS Cost Explorer allows you to analyze your costs and usage with filtering and grouping capabilities and includes forecasting."
    },
    {
        id: 21,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Rightsizing",
        question: "What does the term 'rightsizing' refer to in the context of AWS cost optimization?",
        options: [
            "A. Upgrading to larger instances for better performance",
            "B. Matching instance types.ts and sizes to workload performance and capacity requirements at the lowest possible cost",
            "C. Consolidating multiple instances into a single large instance",
            "D. Purchasing Reserved Instances for all workloads"
        ],
        answer: "B. Matching instance types.ts and sizes to workload performance and capacity requirements at the lowest possible cost",
        explanation: "Rightsizing involves adjusting resource types.ts and sizes to optimally meet workload requirements at minimal cost."
    },
    {
        id: 22,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Billing - Cost Allocation Reports",
        question: "Which AWS feature provides detailed information about your AWS bill and usage, including hourly usage and resource tags?",
        options: [
            "A. AWS Cost Explorer",
            "B. AWS Billing Dashboard",
            "C. AWS Cost and Usage Report",
            "D. AWS Budgets"
        ],
        answer: "C. AWS Cost and Usage Report",
        explanation: "The AWS Cost and Usage Report provides the most detailed information available about your AWS costs and usage."
    },
    {
        id: 23,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Support Plans - Business vs. Enterprise",
        question: "Which AWS Support plan is recommended if you have production workloads on AWS and require 24/7 phone support?",
        options: [
            "A. Basic Support",
            "B. Developer Support",
            "C. Business Support",
            "D. Enterprise Support"
        ],
        answer: "C. Business Support",
        explanation: "Business Support is recommended for production workloads and includes 24/7 phone, email, and chat access to AWS Support Engineers."
    },
    {
        id: 24,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Pricing Models - Dedicated Hosts",
        question: "What is the main benefit of using AWS Dedicated Hosts?",
        options: [
            "A. Lower costs compared to On-Demand Instances",
            "B. Compliance with software licensing that requires physical server-bound licenses",
            "C. Access to the latest instance types.ts",
            "D. Ability to bid on unused capacity"
        ],
        answer: "B. Compliance with software licensing that requires physical server-bound licenses",
        explanation: "Dedicated Hosts provide a physical server fully dedicated to your use, which can help meet compliance requirements."
    },
    {
        id: 25,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Optimization - Auto Scaling",
        question: "How can AWS Auto Scaling help reduce costs?",
        options: [
            "A. By running instances at full capacity at all times",
            "B. By automatically adjusting the number of resources to match demand",
            "C. By reserving capacity in advance",
            "D. By using fixed instance sizes"
        ],
        answer: "B. By automatically adjusting the number of resources to match demand",
        explanation: "AWS Auto Scaling helps optimize costs by scaling resources up or down based on real-time demand."
    },
    {
        id: 26,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Lambda Pricing",
        question: "How is AWS Lambda priced?",
        options: [
            "A. Based on the number of active users",
            "B. Based on the number of servers provisioned",
            "C. Based on the number of requests and compute time consumed",
            "D. Flat monthly fee"
        ],
        answer: "C. Based on the number of requests and compute time consumed",
        explanation: "AWS Lambda charges are based on the number of requests and the duration of code execution time."
    },
    {
        id: 27,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Optimization - Storage Classes",
        question: "Which AWS service offers various storage classes to optimize cost based on data access patterns?",
        options: [
            "A. Amazon EBS",
            "B. Amazon S3",
            "C. Amazon EFS",
            "D. AWS Storage Gateway"
        ],
        answer: "B. Amazon S3",
        explanation: "Amazon S3 provides multiple storage classes to help optimize costs based on how frequently data is accessed."
    },
    {
        id: 28,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Budgets - Cost Control",
        question: "Which AWS service can send notifications when forecasted costs exceed your budgeted amount?",
        options: [
            "A. AWS Cost Explorer",
            "B. AWS Budgets",
            "C. AWS Trusted Advisor",
            "D. AWS Billing Dashboard"
        ],
        answer: "B. AWS Budgets",
        explanation: "AWS Budgets allows you to set custom budgets and receive alerts when actual or forecasted costs exceed your thresholds."
    },
    {
        id: 29,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Pricing Models - Savings Plans",
        question: "What is AWS Savings Plans?",
        options: [
            "A. A discount program for purchasing AWS services in advance",
            "B. A flexible pricing model offering lower prices in exchange for a commitment to a consistent amount of usage",
            "C. A plan that offers free AWS services for 12 months",
            "D. A plan for spot instance pricing"
        ],
        answer: "B. A flexible pricing model offering lower prices in exchange for a commitment to a consistent amount of usage",
        explanation: "AWS Savings Plans provide significant savings on AWS compute usage in exchange for a commitment to a consistent amount of usage over a 1 or 3 year term."
    },
    {
        id: 30,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Pricing Models - Reserved Instances vs. Savings Plans",
        question: "Which of the following offers the most flexibility in terms of changing instance types.ts while still providing cost savings?",
        options: [
            "A. Standard Reserved Instances",
            "B. Convertible Reserved Instances",
            "C. Savings Plans",
            "D. Spot Instances"
        ],
        answer: "C. Savings Plans",
        explanation: "Savings Plans offer greater flexibility than Reserved Instances, allowing you to change instance types.ts, regions, and operating systems while still benefiting from cost savings."
    },
    {
        id: 31,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Optimization - Serverless Computing",
        question: "How does serverless computing help in reducing costs?",
        options: [
            "A. By requiring upfront server provisioning",
            "B. By charging only when the code is running",
            "C. By increasing management overhead",
            "D. By providing dedicated servers for workloads"
        ],
        answer: "B. By charging only when the code is running",
        explanation: "Serverless computing, such as AWS Lambda, charges only for compute time consumed, helping to reduce costs for intermittent workloads."
    },
    {
        id: 32,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Organizations - Volume Discounts",
        question: "How can consolidating AWS accounts under AWS Organizations help reduce costs?",
        options: [
            "A. By limiting resource usage",
            "B. By providing access to exclusive services",
            "C. By enabling volume discounts across accounts",
            "D. By offering free support"
        ],
        answer: "C. By enabling volume discounts across accounts",
        explanation: "Consolidated billing in AWS Organizations aggregates usage across accounts, potentially qualifying for volume pricing discounts."
    },
    {
        id: 33,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "Cost Optimization - Data Lifecycle Management",
        question: "Which AWS feature helps you automate moving data to different storage classes to optimize costs?",
        options: [
            "A. Amazon S3 Lifecycle Policies",
            "B. AWS Storage Gateway",
            "C. AWS Data Pipeline",
            "D. Amazon S3 Transfer Acceleration"
        ],
        answer: "A. Amazon S3 Lifecycle Policies",
        explanation: "S3 Lifecycle Policies enable you to automatically transition objects to different storage classes or expire them to optimize costs."
    },
    {
        id: 34,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Explorer - Reserved Instance Utilization",
        question: "Which tool can help you visualize Reserved Instance (RI) usage and identify opportunities for optimization?",
        options: [
            "A. AWS Budgets",
            "B. AWS Trusted Advisor",
            "C. AWS Cost Explorer",
            "D. AWS Billing Dashboard"
        ],
        answer: "C. AWS Cost Explorer",
        explanation: "AWS Cost Explorer includes RI utilization and coverage reports to help you optimize your Reserved Instances."
    },
    {
        id: 35,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Total Cost of Ownership (TCO)",
        question: "When calculating TCO for an on-premises environment, which costs should be considered?",
        options: [
            "A. Hardware only",
            "B. Hardware and software licenses",
            "C. Hardware, software licenses, facilities, and staff",
            "D. None, as on-premises has no TCO"
        ],
        answer: "C. Hardware, software licenses, facilities, and staff",
        explanation: "TCO includes all costs associated with owning and operating a system, including hardware, software, facilities, and personnel."
    },
    {
        id: 36,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cloud Economic Benefits",
        question: "Which of the following is a financial benefit of migrating to the AWS Cloud?",
        options: [
            "A. Increased capital expenditures",
            "B. Improved cash flow due to reduced upfront costs",
            "C. Higher operational costs",
            "D. Longer time to market"
        ],
        answer: "B. Improved cash flow due to reduced upfront costs",
        explanation: "Migrating to AWS reduces upfront capital expenditures, improving cash flow and financial flexibility."
    },
    {
        id: 37,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Optimization Pillar",
        question: "Which AWS Well-Architected Framework pillar focuses on avoiding unnecessary costs?",
        options: [
            "A. Operational Excellence",
            "B. Security",
            "C. Performance Efficiency",
            "D. Cost Optimization"
        ],
        answer: "D. Cost Optimization",
        explanation: "The Cost Optimization pillar focuses on running systems to deliver business value at the lowest price point."
    },
    {
        id: 38,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Billing Dashboard",
        question: "Which AWS tool provides a high-level view of your AWS spending and the ability to view detailed billing information?",
        options: [
            "A. AWS Billing Dashboard",
            "B. AWS Cost Explorer",
            "C. AWS Budgets",
            "D. AWS Trusted Advisor"
        ],
        answer: "A. AWS Billing Dashboard",
        explanation: "The AWS Billing Dashboard provides an overview of your AWS spending and access to detailed billing information."
    },
    {
        id: 39,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Free Tier - Types",
        question: "What are the types.ts of offerings included in the AWS Free Tier?",
        options: [
            "A. Trial services only",
            "B. Always free, 12 months free, and trials",
            "C. Only services with limited functionality",
            "D. Only for educational institutions"
        ],
        answer: "B. Always free, 12 months free, and trials",
        explanation: "The AWS Free Tier includes offerings that are always free, free for 12 months, and short-term trials."
    },
    {
        id: 40,
        subDomain: "1.2 Identify aspects of AWS Cloud economics",
        criticalTopic: "AWS Cost Optimization - Elasticity",
        question: "How does elasticity in AWS help with cost savings?",
        options: [
            "A. By keeping resources running continuously",
            "B. By enabling resources to scale up and down automatically based on demand",
            "C. By requiring manual scaling during peak times",
            "D. By limiting the ability to provision new resources"
        ],
        answer: "B. By enabling resources to scale up and down automatically based on demand",
        explanation: "Elasticity allows you to match supply with demand, reducing costs by not over-provisioning resources."
    }
];
