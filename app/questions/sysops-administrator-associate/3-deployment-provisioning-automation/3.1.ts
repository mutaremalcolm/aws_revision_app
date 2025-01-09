// Deployment, Provisioning, and Automation - Provision and maintain cloud resources

export const sysOpsProvisioning = [
    {
        id: 1,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Amazon Machine Image (AMI)",
        question: "What is an Amazon Machine Image (AMI) used for in AWS?",
        options: [
            "A. To store application logs",
            "B. To create new EC2 instances with a pre-configured operating system and applications",
            "C. To monitor EC2 instance performance",
            "D. To back up S3 data"
        ],
        answer: "B. To create new EC2 instances with a pre-configured operating system and applications",
        explanation: "An AMI is a template that contains the operating system, application server, and applications required to launch EC2 instances."
    },
    {
        id: 2,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Creating Custom AMIs",
        question: "What is the recommended method for creating a custom AMI from an existing EC2 instance?",
        options: [
            "A. Take an EBS snapshot and create a new AMI",
            "B. Stop the instance and take a backup",
            "C. Reboot the instance and export the logs",
            "D. Use CloudFormation to create an AMI"
        ],
        answer: "A. Take an EBS snapshot and create a new AMI",
        explanation: "You can create a custom AMI by taking an EBS snapshot of the instance's root volume and creating an AMI from that snapshot."
    },
    {
        id: 3,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "CloudFormation Stack Management",
        question: "What is a key benefit of using AWS CloudFormation for provisioning resources?",
        options: [
            "A. It automatically manages application code deployment.",
            "B. It enables the provisioning and management of AWS resources using infrastructure as code.",
            "C. It provides a web-based user interface for EC2 instances.",
            "D. It enhances EC2 network performance."
        ],
        answer: "B. It enables the provisioning and management of AWS resources using infrastructure as code.",
        explanation: "AWS CloudFormation allows you to define and provision infrastructure as code, making it easier to manage AWS resources in a consistent and repeatable manner."
    },
    {
        id: 4,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "CloudFormation Templates",
        question: "Which file format is used to write AWS CloudFormation templates?",
        options: [
            "A. XML",
            "B. JSON or YAML",
            "C. CSV",
            "D. HTML"
        ],
        answer: "B. JSON or YAML",
        explanation: "AWS CloudFormation templates are written in JSON or YAML formats, which define the resources and configurations needed for your stack."
    },
    {
        id: 5,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Provisioning Resources Across Regions",
        question: "Which service can be used to provision resources across multiple AWS regions from a single template?",
        options: [
            "A. AWS CloudFormation StackSets",
            "B. AWS CloudTrail",
            "C. AWS Config",
            "D. Amazon SNS"
        ],
        answer: "A. AWS CloudFormation StackSets",
        explanation: "AWS CloudFormation StackSets allows you to deploy CloudFormation stacks across multiple AWS accounts and regions using a single template."
    },
    {
        id: 6,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "IAM Role Provisioning",
        question: "Which AWS service is primarily used to manage permissions and access control for AWS resources?",
        options: [
            "A. AWS CloudFormation",
            "B. Amazon EC2",
            "C. AWS Identity and Access Management (IAM)",
            "D. AWS Auto Scaling"
        ],
        answer: "C. AWS Identity and Access Management (IAM)",
        explanation: "IAM is used to manage users, groups, and roles, and to control access to AWS resources using policies."
    },
    {
        id: 7,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "EC2 Auto Scaling Provisioning",
        question: "What is the purpose of an EC2 Auto Scaling group?",
        options: [
            "A. To automate the provisioning of EC2 instances based on demand",
            "B. To monitor EC2 instance health",
            "C. To reduce EC2 costs by automatically stopping instances",
            "D. To update EC2 instances with new AMIs"
        ],
        answer: "A. To automate the provisioning of EC2 instances based on demand",
        explanation: "An EC2 Auto Scaling group automatically adjusts the number of running EC2 instances based on demand to maintain application performance."
    },
    {
        id: 8,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Elastic Load Balancer",
        question: "How does an Elastic Load Balancer contribute to the availability of your application?",
        options: [
            "A. It scales EC2 instances automatically.",
            "B. It distributes incoming application traffic across multiple EC2 instances.",
            "C. It enhances application security.",
            "D. It caches web pages for faster access."
        ],
        answer: "B. It distributes incoming application traffic across multiple EC2 instances.",
        explanation: "An Elastic Load Balancer improves availability by distributing incoming traffic across multiple EC2 instances, ensuring no single instance becomes a bottleneck."
    },
    {
        id: 9,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "EC2 Image Builder",
        question: "Which service can automate the creation and management of custom AMIs for EC2 instances?",
        options: [
            "A. AWS Lambda",
            "B. EC2 Auto Scaling",
            "C. EC2 Image Builder",
            "D. AWS OpsWorks"
        ],
        answer: "C. EC2 Image Builder",
        explanation: "EC2 Image Builder automates the creation and management of custom AMIs, ensuring consistent configuration and faster deployment of EC2 instances."
    },
    {
        id: 10,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Cross-Account Resource Access",
        question: "How can you provision resources in multiple AWS accounts securely?",
        options: [
            "A. Use AWS Systems Manager Run Command",
            "B. Use IAM cross-account roles",
            "C. Use EC2 User Data",
            "D. Use Amazon S3 bucket policies"
        ],
        answer: "B. Use IAM cross-account roles",
        explanation: "You can use IAM cross-account roles to securely allow AWS resources in one account to access resources in another account."
    },
    {
        id: 11,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "CloudFormation Stack Updates",
        question: "How can you safely update a running CloudFormation stack without causing service interruptions?",
        options: [
            "A. Use CloudFormation Stack Policies",
            "B. Use AWS CodeCommit",
            "C. Apply changes directly in the AWS Management Console",
            "D. Use CloudFormation Change Sets"
        ],
        answer: "D. Use CloudFormation Change Sets",
        explanation: "CloudFormation Change Sets allow you to preview the impact of updates to your CloudFormation stack before applying them, ensuring minimal disruption."
    },
    {
        id: 12,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "AMI Lifecycle",
        question: "How can you manage the lifecycle of Amazon Machine Images (AMIs) to ensure old AMIs are deleted?",
        options: [
            "A. Use EC2 Auto Scaling",
            "B. Use AWS Backup",
            "C. Use AWS Systems Manager Automation",
            "D. Use Amazon S3 lifecycle policies"
        ],
        answer: "C. Use AWS Systems Manager Automation",
        explanation: "AWS Systems Manager Automation can be used to create and manage the lifecycle of AMIs, including the automated deletion of outdated AMIs."
    },
    {
        id: 13,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "CloudFormation StackSets",
        question: "What is the primary use case for AWS CloudFormation StackSets?",
        options: [
            "A. To monitor multiple CloudFormation stacks across regions",
            "B. To deploy resources to multiple AWS accounts and regions from a single template",
            "C. To reduce EC2 instance costs",
            "D. To automatically configure Amazon RDS"
        ],
        answer: "B. To deploy resources to multiple AWS accounts and regions from a single template",
        explanation: "AWS CloudFormation StackSets allows you to manage and deploy stacks across multiple AWS accounts and regions from a single template."
    },
    {
        id: 14,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Choosing Deployment Scenarios",
        question: "Which deployment strategy minimizes downtime by deploying a new version alongside the old one and then switching traffic to the new version?",
        options: [
            "A. Rolling Deployment",
            "B. Canary Deployment",
            "C. Blue/Green Deployment",
            "D. Immutable Deployment"
        ],
        answer: "C. Blue/Green Deployment",
        explanation: "A Blue/Green Deployment strategy minimizes downtime by deploying the new version in parallel with the old one, and then rerouting traffic to the new version."
    },
    {
        id: 15,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Rolling vs Blue/Green Deployments",
        question: "What is a key difference between Rolling and Blue/Green deployments?",
        options: [
            "A. Rolling deployment replaces instances one at a time, while Blue/Green deploys a new environment and switches traffic.",
            "B. Rolling deployment requires a full outage, while Blue/Green does not.",
            "C. Blue/Green requires more manual intervention compared to Rolling.",
            "D. Rolling deployment is faster than Blue/Green."
        ],
        answer: "A. Rolling deployment replaces instances one at a time, while Blue/Green deploys a new environment and switches traffic.",
        explanation: "Rolling deployments replace instances one at a time with the new version, while Blue/Green deployments switch traffic to a new environment running the updated version."
    },
    {
        id: 16,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Service Quotas",
        question: "How can you manage and track the resource limits for your AWS account?",
        options: [
            "A. Use Amazon CloudWatch",
            "B. Use AWS Systems Manager",
            "C. Use AWS Service Quotas",
            "D. Use AWS Trusted Advisor"
        ],
        answer: "C. Use AWS Service Quotas",
        explanation: "AWS Service Quotas allows you to view and manage your account's resource limits, and request increases if needed."
    },
    {
        id: 17,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "VPC Provisioning with CloudFormation",
        question: "How can you automate the provisioning of a Virtual Private Cloud (VPC) and its associated resources?",
        options: [
            "A. Use Amazon VPC Peering",
            "B. Use AWS CloudFormation templates",
            "C. Use AWS Direct Connect",
            "D. Use Elastic Load Balancing"
        ],
        answer: "B. Use AWS CloudFormation templates",
        explanation: "AWS CloudFormation can automate the provisioning of VPCs, subnets, route tables, and other networking resources using templates."
    },
    {
        id: 18,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "CloudFormation Drift Detection",
        question: "How can you identify if resources in your CloudFormation stack have been modified outside of CloudFormation?",
        options: [
            "A. Use AWS Config",
            "B. Use CloudTrail Logs",
            "C. Use CloudFormation Drift Detection",
            "D. Use Amazon SNS"
        ],
        answer: "C. Use CloudFormation Drift Detection",
        explanation: "CloudFormation Drift Detection identifies if any resources in your stack have been modified outside of CloudFormation, ensuring consistency with your template."
    },
    {
        id: 19,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Resource Tagging for Management",
        question: "Which AWS feature can you use to organize and manage your resources using custom labels?",
        options: [
            "A. AWS Cost Explorer",
            "B. AWS Resource Groups",
            "C. AWS Config",
            "D. Resource Tagging"
        ],
        answer: "D. Resource Tagging",
        explanation: "Resource Tagging allows you to assign custom labels to AWS resources, making it easier to organize and manage resources across your account."
    },
    {
        id: 20,
        subDomain: "3.1 Provision and maintain cloud resources",
        criticalTopic: "Provisioning Lambda Functions",
        question: "What is the best practice for provisioning AWS Lambda functions for production workloads?",
        options: [
            "A. Always provision a large memory size to avoid bottlenecks",
            "B. Use AWS Lambda Layers to share code across functions",
            "C. Use CloudWatch Events for all function triggers",
            "D. Use Elastic Beanstalk to provision Lambda"
        ],
        answer: "B. Use AWS Lambda Layers to share code across functions",
        explanation: "AWS Lambda Layers allow you to package and share common code across multiple Lambda functions, improving efficiency and reducing duplication."
    }
];
