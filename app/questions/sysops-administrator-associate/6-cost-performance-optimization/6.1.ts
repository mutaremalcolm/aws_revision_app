// Cost and Performance Optimization - Implement cost optimization strategies

export const sysOpsCostOptimization = [
    {
        id: 1,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Cost Allocation Tags',
        question: 'How do cost allocation tags help with cost optimization in AWS?',
        options: [
            'A. They are used to allocate storage across AWS services.',
            'B. They allow you to categorize and track AWS costs by tagging resources.',
            'C. They provide automatic savings for tagged resources.',
            'D. They increase performance by optimizing network usage.'
        ],
        answer: 'B. They allow you to categorize and track AWS costs by tagging resources.',
        explanation: 'Cost allocation tags help categorize AWS resources, making it easier to track and manage costs across projects or teams.'
    },
    {
        id: 2,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Underutilized Resources',
        question: 'Which AWS service helps identify underutilized resources to optimize costs?',
        options: [
            'A. AWS Compute Optimizer',
            'B. AWS Systems Manager',
            'C. Amazon CloudWatch',
            'D. AWS CloudFormation'
        ],
        answer: 'A. AWS Compute Optimizer',
        explanation: 'AWS Compute Optimizer analyzes your workloads and helps identify underutilized resources, recommending ways to optimize their usage.'
    },
    {
        id: 3,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Trusted Advisor',
        question: 'Which AWS tool provides real-time guidance to help reduce costs, improve performance, and enhance security?',
        options: [
            'A. AWS CloudTrail',
            'B. AWS Trusted Advisor',
            'C. AWS Identity and Access Management (IAM)',
            'D. Amazon RDS'
        ],
        answer: 'B. AWS Trusted Advisor',
        explanation: 'AWS Trusted Advisor offers real-time insights on how to reduce costs, optimize performance, and improve the overall health of your AWS resources.'
    },
    {
        id: 4,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Budgets',
        question: 'Which AWS service allows you to set cost budgets and send alerts when usage exceeds predefined limits?',
        options: [
            'A. AWS Cost Explorer',
            'B. AWS Budgets',
            'C. Amazon CloudWatch',
            'D. AWS Config'
        ],
        answer: 'B. AWS Budgets',
        explanation: 'AWS Budgets lets you define custom cost and usage budgets and receive alerts when you exceed the set thresholds.'
    },
    {
        id: 5,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Spot Instances',
        question: 'How can EC2 Spot Instances help reduce costs?',
        options: [
            'A. By running tasks only during off-peak hours',
            'B. By providing high availability',
            'C. By offering unused EC2 capacity at a lower price',
            'D. By scaling automatically based on traffic'
        ],
        answer: 'C. By offering unused EC2 capacity at a lower price',
        explanation: 'EC2 Spot Instances allow you to run instances using unused EC2 capacity at a significantly lower cost than On-Demand pricing.'
    },
    {
        id: 6,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Reserved Instances',
        question: 'What is the main advantage of using Reserved Instances (RIs) for cost savings in AWS?',
        options: [
            'A. RIs provide full refunds for unused instances.',
            'B. RIs offer a lower hourly rate for a committed term.',
            'C. RIs automatically scale based on demand.',
            'D. RIs do not require any upfront payment.'
        ],
        answer: 'B. RIs offer a lower hourly rate for a committed term.',
        explanation: 'Reserved Instances allow you to commit to a specific instance type for a 1 or 3-year term, offering substantial savings over On-Demand instances.'
    },
    {
        id: 7,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Cost Explorer',
        question: 'Which AWS tool provides cost and usage reports to help you analyze your AWS expenditures?',
        options: [
            'A. AWS Trusted Advisor',
            'B. AWS Cost Explorer',
            'C. AWS Budgets',
            'D. AWS Lambda'
        ],
        answer: 'B. AWS Cost Explorer',
        explanation: 'AWS Cost Explorer helps you visualize and analyze your AWS cost and usage over time to identify spending patterns and areas for optimization.'
    },
    {
        id: 8,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Managed Services for Cost Optimization',
        question: 'How can using AWS managed services like Amazon RDS or AWS Fargate help optimize costs?',
        options: [
            'A. By eliminating the need to manage the underlying infrastructure',
            'B. By providing detailed performance metrics',
            'C. By automatically scaling based on traffic',
            'D. By providing discounts on large volumes of data transfer'
        ],
        answer: 'A. By eliminating the need to manage the underlying infrastructure',
        explanation: 'Using managed services like Amazon RDS or AWS Fargate can help reduce costs by shifting infrastructure management to AWS, allowing you to focus on optimizing your applications.'
    },
    {
        id: 9,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Instance Purchasing Options',
        question: 'Which of the following purchasing options can provide significant savings for steady-state workloads?',
        options: [
            'A. On-Demand Instances',
            'B. Spot Instances',
            'C. Reserved Instances',
            'D. Savings Plans'
        ],
        answer: 'C. Reserved Instances',
        explanation: 'Reserved Instances provide cost savings for predictable, steady-state workloads by allowing you to commit to a 1 or 3-year term.'
    },
    {
        id: 10,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Savings Plans',
        question: 'What is the key benefit of AWS Savings Plans?',
        options: [
            'A. They allow you to automatically scale based on traffic patterns.',
            'B. They offer lower prices for commitments to consistent usage over 1 or 3 years.',
            'C. They provide discounts for data transfer across regions.',
            'D. They automatically enable multi-region failover.'
        ],
        answer: 'B. They offer lower prices for commitments to consistent usage over 1 or 3 years.',
        explanation: 'AWS Savings Plans allow you to commit to consistent usage across EC2, Lambda, and Fargate, offering significant cost savings.'
    },
    // Additional questions to enhance coverage and understanding

    {
        id: 11,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Compute Optimizer Recommendations',
        question: 'Which type of recommendation does AWS Compute Optimizer provide to help reduce costs?',
        options: [
            'A. Switching to more secure EC2 instances',
            'B. Recommending better performing instance types',
            'C. Reducing EBS volume sizes',
            'D. Replacing underutilized EC2 instances with smaller instances'
        ],
        answer: 'D. Replacing underutilized EC2 instances with smaller instances',
        explanation: 'AWS Compute Optimizer helps reduce costs by recommending underutilized EC2 instances to be replaced with smaller instance types.'
    },
    {
        id: 12,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'S3 Lifecycle Policies',
        question: 'How can you use S3 Lifecycle Policies to reduce storage costs?',
        options: [
            'A. By automatically deleting old objects after a certain time period',
            'B. By creating access logs for all objects',
            'C. By transitioning objects to cheaper storage classes like Glacier',
            'D. By enabling versioning for all objects'
        ],
        answer: 'C. By transitioning objects to cheaper storage classes like Glacier',
        explanation: 'S3 Lifecycle Policies help reduce costs by automatically transitioning objects to cheaper storage classes like S3 Glacier for infrequently accessed data.'
    },
    {
        id: 13,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Elastic Beanstalk Cost Optimization',
        question: 'How can you optimize costs when using AWS Elastic Beanstalk for application hosting?',
        options: [
            'A. Use multiple environments for high availability',
            'B. Use Auto Scaling to adjust capacity based on demand',
            'C. Deploy the application in all AWS regions',
            'D. Use on-demand instances exclusively'
        ],
        answer: 'B. Use Auto Scaling to adjust capacity based on demand',
        explanation: 'Using Auto Scaling in Elastic Beanstalk helps control costs by scaling your application environment to match the demand, preventing over-provisioning.'
    },
    {
        id: 14,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Data Transfer Optimization',
        question: 'Which AWS service helps reduce data transfer costs for applications serving global users?',
        options: [
            'A. AWS CloudFront',
            'B. AWS Global Accelerator',
            'C. AWS Elastic Load Balancing',
            'D. Amazon Route 53'
        ],
        answer: 'A. AWS CloudFront',
        explanation: 'AWS CloudFront helps reduce data transfer costs by caching content at edge locations around the world, allowing users to access data from closer locations.'
    },
    {
        id: 15,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Auto Scaling and Cost Optimization',
        question: 'How does EC2 Auto Scaling help optimize costs?',
        options: [
            'A. It automatically increases instance sizes based on usage',
            'B. It adjusts the number of running instances based on demand',
            'C. It provisions Reserved Instances when demand spikes',
            'D. It enables pay-per-use pricing for EC2 instances'
        ],
        answer: 'B. It adjusts the number of running instances based on demand',
        explanation: 'EC2 Auto Scaling helps optimize costs by automatically adjusting the number of running instances to meet demand, ensuring you only pay for what you use.'
    },
    {
        id: 16,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Spot Fleets',
        question: 'How do EC2 Spot Fleets help reduce costs for large-scale workloads?',
        options: [
            'A. By automatically adjusting instance size based on CPU utilization',
            'B. By distributing workloads across multiple instance types and purchasing options',
            'C. By ensuring uninterrupted access to reserved capacity',
            'D. By enabling automatic backups of Spot Instances'
        ],
        answer: 'B. By distributing workloads across multiple instance types and purchasing options',
        explanation: 'EC2 Spot Fleets allow you to distribute workloads across different instance types and pricing options (Spot, On-Demand, Reserved), helping optimize costs.'
    },
    {
        id: 17,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Cross-Region Data Transfer Costs',
        question: 'How can you minimize data transfer costs when working across multiple AWS regions?',
        options: [
            'A. Enable Amazon CloudFront',
            'B. Use VPC Peering to transfer data between regions',
            'C. Use S3 Cross-Region Replication',
            'D. Transfer data using Amazon Route 53'
        ],
        answer: 'A. Enable Amazon CloudFront',
        explanation: 'Using Amazon CloudFront can help reduce data transfer costs between regions by caching content at global edge locations and reducing the need for repeated cross-region data transfers.'
    },
    {
        id: 18,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Organizations',
        question: 'How does AWS Organizations help in reducing costs for large enterprises?',
        options: [
            'A. By creating cost allocation tags for each account',
            'B. By consolidating billing across multiple accounts for volume discounts',
            'C. By ensuring all accounts use the same Reserved Instances',
            'D. By applying a single security policy across multiple accounts'
        ],
        answer: 'B. By consolidating billing across multiple accounts for volume discounts',
        explanation: 'AWS Organizations helps reduce costs by consolidating billing across multiple AWS accounts, enabling volume discounts and cost optimization across the organization.'
    },
    {
        id: 19,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Cost Optimization Reports',
        question: 'Which AWS tool can help visualize long-term spending trends and identify cost-saving opportunities?',
        options: [
            'A. AWS Cost Explorer',
            'B. AWS Trusted Advisor',
            'C. AWS CloudWatch',
            'D. AWS Identity and Access Management (IAM)'
        ],
        answer: 'A. AWS Cost Explorer',
        explanation: 'AWS Cost Explorer provides detailed visual reports and allows you to analyze spending trends over time, helping identify cost-saving opportunities.'
    },
    {
        id: 20,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Right-Sizing EC2 Instances',
        question: 'What is the primary goal of right-sizing EC2 instances?',
        options: [
            'A. To reduce security vulnerabilities in your instances',
            'B. To match instance types to workload requirements for cost optimization',
            'C. To scale instances automatically based on traffic',
            'D. To provide higher fault tolerance across regions'
        ],
        answer: 'B. To match instance types to workload requirements for cost optimization',
        explanation: 'Right-sizing involves selecting EC2 instance types that best fit the performance and workload requirements, helping reduce costs by avoiding over-provisioning.'
    },
    {
        id: 21,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Free Tier Usage',
        question: 'How can using the AWS Free Tier contribute to cost optimization for new users?',
        options: [
            'A. By allowing unlimited usage of AWS services at no cost',
            'B. By offering limited free usage of specific services for the first 12 months',
            'C. By providing a 50% discount on all services for the first 6 months',
            'D. By giving free support for all AWS services for the first year'
        ],
        answer: 'B. By offering limited free usage of specific services for the first 12 months',
        explanation: 'The AWS Free Tier allows new users to explore and use specific AWS services with limited free usage for the first 12 months.'
    },
    {
        id: 22,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Consolidated Billing in AWS Organizations',
        question: 'What is a key benefit of using consolidated billing in AWS Organizations?',
        options: [
            'A. It allows sharing Reserved Instances across accounts for volume discounts',
            'B. It provides separate invoices for each account under the organization',
            'C. It automatically scales resources across member accounts',
            'D. It enables automatic compliance checks across all accounts'
        ],
        answer: 'A. It allows sharing Reserved Instances across accounts for volume discounts',
        explanation: 'Consolidated billing in AWS Organizations allows multiple accounts to share Reserved Instances and benefit from volume discounts, optimizing costs across the organization.'
    },
    {
        id: 23,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Spot Instances vs. On-Demand Instances',
        question: 'What is the primary difference between Spot Instances and On-Demand Instances in terms of cost optimization?',
        options: [
            'A. Spot Instances can be interrupted by AWS but are cheaper than On-Demand Instances.',
            'B. Spot Instances offer unlimited uptime, while On-Demand Instances do not.',
            'C. On-Demand Instances are more cost-effective for batch processing workloads.',
            'D. Spot Instances have a higher cost during peak hours compared to On-Demand Instances.'
        ],
        answer: 'A. Spot Instances can be interrupted by AWS but are cheaper than On-Demand Instances.',
        explanation: 'Spot Instances offer significant cost savings compared to On-Demand Instances but can be interrupted by AWS with little notice.'
    },
    {
        id: 24,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'Auto Scaling Policies',
        question: 'How can Auto Scaling policies help optimize costs in a dynamic workload environment?',
        options: [
            'A. By keeping a fixed number of instances running at all times',
            'B. By automatically scaling resources up and down based on demand',
            'C. By switching to Reserved Instances during peak hours',
            'D. By allowing unused instances to be reserved for future use'
        ],
        answer: 'B. By automatically scaling resources up and down based on demand',
        explanation: 'Auto Scaling policies optimize costs by automatically adjusting the number of running instances based on real-time demand, ensuring efficient use of resources.'
    },
    {
        id: 25,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Instance Hibernation',
        question: 'How does enabling EC2 Instance Hibernation contribute to cost optimization?',
        options: [
            'A. It reduces instance startup time, improving overall performance.',
            'B. It allows instances to resume from a saved state, reducing idle costs.',
            'C. It increases the number of instances running during off-peak hours.',
            'D. It automatically converts instances to Spot Instances.'
        ],
        answer: 'B. It allows instances to resume from a saved state, reducing idle costs.',
        explanation: 'EC2 Hibernation allows instances to be paused and resumed from their saved state, reducing the costs associated with keeping instances idle.'
    },
    {
        id: 26,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'S3 Intelligent-Tiering',
        question: 'How does Amazon S3 Intelligent-Tiering help optimize storage costs?',
        options: [
            'A. By automatically moving data between two access tiers based on usage patterns',
            'B. By compressing objects before storage',
            'C. By providing lower costs for larger objects',
            'D. By deleting infrequently accessed data after 30 days'
        ],
        answer: 'A. By automatically moving data between two access tiers based on usage patterns',
        explanation: 'S3 Intelligent-Tiering automatically moves data between frequent and infrequent access tiers based on changing access patterns, optimizing storage costs.'
    },
    {
        id: 27,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Reserved Instances vs. Savings Plans',
        question: 'Which of the following best describes the difference between EC2 Reserved Instances and AWS Savings Plans?',
        options: [
            'A. Reserved Instances apply only to EC2, while Savings Plans cover multiple services like Lambda and Fargate.',
            'B. Reserved Instances offer higher discounts than Savings Plans.',
            'C. Reserved Instances are more flexible in terms of instance types compared to Savings Plans.',
            'D. Savings Plans require upfront payments, while Reserved Instances do not.'
        ],
        answer: 'A. Reserved Instances apply only to EC2, while Savings Plans cover multiple services like Lambda and Fargate.',
        explanation: 'Reserved Instances are specific to EC2, while Savings Plans provide cost savings across multiple services like EC2, Lambda, and Fargate.'
    },
    {
        id: 28,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'AWS Cost Explorer Reports',
        question: 'How can AWS Cost Explorer help optimize costs for Reserved Instances?',
        options: [
            'A. By automatically purchasing additional Reserved Instances based on usage patterns',
            'B. By providing reports on Reserved Instance utilization and recommending modifications',
            'C. By converting unused Reserved Instances into Spot Instances',
            'D. By reducing costs for On-Demand Instances based on Reserved Instance usage'
        ],
        answer: 'B. By providing reports on Reserved Instance utilization and recommending modifications',
        explanation: 'AWS Cost Explorer offers insights into how well Reserved Instances are being utilized and can recommend modifications to maximize savings.'
    },
    {
        id: 29,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'EC2 Spot Fleet',
        question: 'How does an EC2 Spot Fleet contribute to cost savings?',
        options: [
            'A. By automatically switching to On-Demand Instances during peak traffic',
            'B. By launching a group of Spot Instances across different instance types and Availability Zones',
            'C. By enabling more frequent Auto Scaling actions',
            'D. By converting On-Demand Instances to Reserved Instances'
        ],
        answer: 'B. By launching a group of Spot Instances across different instance types and Availability Zones',
        explanation: 'An EC2 Spot Fleet enables cost savings by allowing you to request multiple Spot Instances across different instance types and Availability Zones, reducing the overall cost of running instances.'
    },
    {
        id: 30,
        subDomain: '6.1 Implement cost optimization strategies',
        criticalTopic: 'RDS Cost Optimization',
        question: 'What is one way to optimize costs for Amazon RDS?',
        options: [
            'A. By switching to Provisioned IOPS storage',
            'B. By enabling Multi-AZ deployments for all instances',
            'C. By using Reserved Instances for predictable workloads',
            'D. By running RDS instances in different regions'
        ],
        answer: 'C. By using Reserved Instances for predictable workloads',
        explanation: 'Using Reserved Instances for Amazon RDS can provide significant cost savings for workloads with predictable usage patterns.'
    }
];
