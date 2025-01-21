// Identify the core AWS services

export const cloudPractitionerCoreServices = [
    {
        id: 1,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - Amazon EC2",
        question: "What is Amazon EC2 primarily used for?",
        options: [
            "A. Object storage",
            "B. Relational database management",
            "C. Provisioning virtual servers",
            "D. Content delivery network"
        ],
        answer: "C. Provisioning virtual servers",
        explanation: "Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the AWS cloud, allowing users to run virtual servers."
    },
    {
        id: 2,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - AWS Lambda",
        question: "What is AWS Lambda?",
        options: [
            "A. A service for deploying and managing virtual machines",
            "B. A serverless compute service that runs code in response to events",
            "C. A managed database service",
            "D. A content delivery network"
        ],
        answer: "B. A serverless compute service that runs code in response to events",
        explanation: "AWS Lambda allows you to run code without provisioning or managing servers, executing code only when needed."
    },
    {
        id: 3,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Storage Services - Amazon S3",
        question: "What type of storage does Amazon S3 provide?",
        options: [
            "A. Block storage",
            "B. File storage",
            "C. Object storage",
            "D. Cache storage"
        ],
        answer: "C. Object storage",
        explanation: "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability and data availability."
    },
    {
        id: 4,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Database Services - Amazon RDS",
        question: "What is Amazon RDS used for?",
        options: [
            "A. Hosting a data warehouse",
            "B. Running managed relational databases",
            "C. Providing in-memory caching",
            "D. Analyzing big data"
        ],
        answer: "B. Running managed relational databases",
        explanation: "Amazon Relational Database Service (RDS) makes it easy to set up, operate, and scale a relational database in the cloud."
    },
    {
        id: 5,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Networking Services - Amazon VPC",
        question: "What is Amazon Virtual Private Cloud (VPC)?",
        options: [
            "A. A service for deploying virtual machines",
            "B. A service for creating a logically isolated section of the AWS cloud",
            "C. A content delivery network",
            "D. A managed DNS service"
        ],
        answer: "B. A service for creating a logically isolated section of the AWS cloud",
        explanation: "Amazon VPC allows you to launch AWS resources into a virtual network that you've defined."
    },
    {
        id: 6,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Storage Services - Amazon EBS",
        question: "What is Amazon Elastic Block Store (EBS) used for?",
        options: [
            "A. Providing scalable file storage",
            "B. Providing block-level storage volumes for use with EC2 instances",
            "C. Archiving data at low cost",
            "D. Distributing content globally"
        ],
        answer: "B. Providing block-level storage volumes for use with EC2 instances",
        explanation: "Amazon EBS provides persistent block storage volumes for use with Amazon EC2 instances."
    },
    {
        id: 7,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Database Services - Amazon DynamoDB",
        question: "What type of database is Amazon DynamoDB?",
        options: [
            "A. Relational database",
            "B. NoSQL key-value and document database",
            "C. Data warehouse",
            "D. In-memory data store"
        ],
        answer: "B. NoSQL key-value and document database",
        explanation: "Amazon DynamoDB is a fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency."
    },
    {
        id: 8,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - AWS Elastic Beanstalk",
        question: "What does AWS Elastic Beanstalk provide?",
        options: [
            "A. An easy way to deploy and scale web applications",
            "B. A service for data analytics",
            "C. A tool for monitoring resources",
            "D. A managed blockchain service"
        ],
        answer: "A. An easy way to deploy and scale web applications",
        explanation: "AWS Elastic Beanstalk simplifies the deployment of web applications by handling infrastructure details."
    },
    {
        id: 9,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Networking Services - Amazon Route 53",
        question: "What is Amazon Route 53 used for?",
        options: [
            "A. Managing virtual private clouds",
            "B. Registering domain names and routing internet traffic",
            "C. Delivering content globally",
            "D. Providing DDoS protection"
        ],
        answer: "B. Registering domain names and routing internet traffic",
        explanation: "Amazon Route 53 is a scalable and highly available Domain Name System (DNS) service."
    },
    {
        id: 10,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Storage Services - Amazon Glacier (Amazon S3 Glacier)",
        question: "What is Amazon S3 Glacier designed for?",
        options: [
            "A. Storing frequently accessed data",
            "B. Long-term, secure, and durable storage for data archiving",
            "C. Providing block-level storage volumes",
            "D. In-memory caching"
        ],
        answer: "B. Long-term, secure, and durable storage for data archiving",
        explanation: "Amazon S3 Glacier is a secure, durable, and low-cost storage class for data archiving and long-term backup."
    },
    {
        id: 11,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Database Services - Amazon Redshift",
        question: "What type of service is Amazon Redshift?",
        options: [
            "A. Relational database service",
            "B. Data warehousing service",
            "C. In-memory data store",
            "D. Key-value database"
        ],
        answer: "B. Data warehousing service",
        explanation: "Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze data."
    },
    {
        id: 12,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Application Integration - Amazon SQS",
        question: "What is the purpose of Amazon Simple Queue Service (SQS)?",
        options: [
            "A. Sending email notifications",
            "B. Running serverless code",
            "C. Decoupling and scaling microservices, distributed systems, and serverless applications",
            "D. Hosting web applications"
        ],
        answer: "C. Decoupling and scaling microservices, distributed systems, and serverless applications",
        explanation: "Amazon SQS is a fully managed message queuing service that enables decoupling of application components."
    },
    {
        id: 13,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Management Tools - Amazon CloudWatch",
        question: "What does Amazon CloudWatch provide?",
        options: [
            "A. Code deployment automation",
            "B. Monitoring and observability of AWS resources and applications",
            "C. Identity and access management",
            "D. Content delivery network"
        ],
        answer: "B. Monitoring and observability of AWS resources and applications",
        explanation: "Amazon CloudWatch collects monitoring and operational data to provide insights into AWS resources and applications."
    },
    {
        id: 14,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Security Services - AWS Identity and Access Management (IAM)",
        question: "What is AWS IAM used for?",
        options: [
            "A. Managing encryption keys",
            "B. Controlling user access and permissions to AWS services",
            "C. Monitoring AWS resources",
            "D. Deploying applications"
        ],
        answer: "B. Controlling user access and permissions to AWS services",
        explanation: "AWS IAM enables you to manage access to AWS services and resources securely."
    },
    {
        id: 15,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - Amazon ECS",
        question: "What is Amazon Elastic Container Service (ECS)?",
        options: [
            "A. A service for running and managing Docker containers",
            "B. A service for deploying code",
            "C. A managed NoSQL database service",
            "D. A machine learning service"
        ],
        answer: "A. A service for running and managing Docker containers",
        explanation: "Amazon ECS is a fully managed container orchestration service that makes it easy to run, stop, and manage containers."
    },
    {
        id: 16,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Analytics Services - Amazon Athena",
        question: "What is Amazon Athena used for?",
        options: [
            "A. Data warehousing",
            "B. Analyzing data in Amazon S3 using SQL",
            "C. Real-time data processing",
            "D. Machine learning model training"
        ],
        answer: "B. Analyzing data in Amazon S3 using SQL",
        explanation: "Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon S3 using standard SQL."
    },
    {
        id: 17,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Networking Services - Amazon CloudFront",
        question: "What is Amazon CloudFront?",
        options: [
            "A. A load balancing service",
            "B. A web application firewall",
            "C. A global content delivery network (CDN)",
            "D. A virtual private network service"
        ],
        answer: "C. A global content delivery network (CDN)",
        explanation: "Amazon CloudFront speeds up the distribution of static and dynamic web content to users by delivering content through a worldwide network of data centers."
    },
    {
        id: 18,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Security Services - AWS Key Management Service (KMS)",
        question: "What does AWS KMS provide?",
        options: [
            "A. A managed service for creating and controlling encryption keys",
            "B. User authentication",
            "C. Application deployment",
            "D. Data warehousing"
        ],
        answer: "A. A managed service for creating and controlling encryption keys",
        explanation: "AWS KMS enables you to create, manage, and control cryptographic keys across your applications."
    },
    {
        id: 19,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - Amazon EKS",
        question: "What is Amazon Elastic Kubernetes Service (EKS)?",
        options: [
            "A. A managed service for running Kubernetes on AWS",
            "B. A data migration service",
            "C. An email sending service",
            "D. A blockchain service"
        ],
        answer: "A. A managed service for running Kubernetes on AWS",
        explanation: "Amazon EKS is a fully managed service that makes it easy to run Kubernetes on AWS without needing to install and operate your own Kubernetes clusters."
    },
    {
        id: 20,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Management Tools - AWS CloudTrail",
        question: "What is AWS CloudTrail used for?",
        options: [
            "A. Monitoring application performance",
            "B. Auditing AWS account activity and API usage",
            "C. Managing user permissions",
            "D. Deploying applications"
        ],
        answer: "B. Auditing AWS account activity and API usage",
        explanation: "AWS CloudTrail records AWS API calls for your account and delivers log files for auditing."
    },
    {
        id: 21,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Application Integration - Amazon SNS",
        question: "What is the purpose of Amazon Simple Notification Service (SNS)?",
        options: [
            "A. Sending and managing notifications from the cloud",
            "B. Hosting web applications",
            "C. Managing user access",
            "D. Data warehousing"
        ],
        answer: "A. Sending and managing notifications from the cloud",
        explanation: "Amazon SNS is a fully managed messaging service for both application-to-application and application-to-person communication."
    },
    {
        id: 22,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Database Services - Amazon Aurora",
        question: "What is Amazon Aurora?",
        options: [
            "A. A MySQL and PostgreSQL-compatible relational database built for the cloud",
            "B. A NoSQL database service",
            "C. A data migration service",
            "D. An in-memory data store"
        ],
        answer: "A. A MySQL and PostgreSQL-compatible relational database built for the cloud",
        explanation: "Amazon Aurora is a relational database service that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open-source databases."
    },
    {
        id: 23,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Compute Services - AWS Fargate",
        question: "What is AWS Fargate?",
        options: [
            "A. A serverless compute engine for containers",
            "B. A tool for deploying applications",
            "C. A managed file storage service",
            "D. A monitoring service"
        ],
        answer: "A. A serverless compute engine for containers",
        explanation: "AWS Fargate allows you to run containers without having to manage servers or clusters."
    },
    {
        id: 24,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Machine Learning - Amazon SageMaker",
        question: "What does Amazon SageMaker enable developers to do?",
        options: [
            "A. Deploy and scale web applications",
            "B. Build, train, and deploy machine learning models at scale",
            "C. Monitor application performance",
            "D. Manage databases"
        ],
        answer: "B. Build, train, and deploy machine learning models at scale",
        explanation: "Amazon SageMaker is a fully managed service that provides every developer and data scientist with the ability to build, train, and deploy machine learning models quickly."
    },
    {
        id: 25,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Analytics Services - Amazon Kinesis",
        question: "What is Amazon Kinesis used for?",
        options: [
            "A. Data warehousing",
            "B. Processing and analyzing real-time streaming data",
            "C. Managing databases",
            "D. Content delivery"
        ],
        answer: "B. Processing and analyzing real-time streaming data",
        explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights."
    },
    {
        id: 26,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Security Services - AWS WAF",
        question: "What is AWS WAF (Web Application Firewall)?",
        options: [
            "A. A firewall for your Amazon VPC",
            "B. A service that helps protect web applications from common web exploits",
            "C. A network traffic monitoring tool",
            "D. A DDoS protection service"
        ],
        answer: "B. A service that helps protect web applications from common web exploits",
        explanation: "AWS WAF helps protect your web applications from common web exploits that could affect application availability and security."
    },
    {
        id: 27,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Storage Services - Amazon EFS",
        question: "What does Amazon Elastic File System (EFS) provide?",
        options: [
            "A. Object storage",
            "B. A scalable file storage for use with AWS Cloud services and on-premises resources",
            "C. Block storage",
            "D. In-memory caching"
        ],
        answer: "B. A scalable file storage for use with AWS Cloud services and on-premises resources",
        explanation: "Amazon EFS provides a simple, scalable, elastic file system for Linux-based workloads."
    },
    {
        id: 28,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Application Integration - Amazon EventBridge",
        question: "What is Amazon EventBridge?",
        options: [
            "A. A serverless event bus service that connects applications using data from your applications, SaaS, and AWS services",
            "B. A messaging service for queuing",
            "C. A service for sending email notifications",
            "D. A web hosting service"
        ],
        answer: "A. A serverless event bus service that connects applications using data from your applications, SaaS, and AWS services",
        explanation: "Amazon EventBridge is a serverless event bus that makes it easier to build event-driven applications."
    },
    {
        id: 29,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Developer Tools - AWS CodeCommit",
        question: "What is AWS CodeCommit?",
        options: [
            "A. A continuous integration service",
            "B. A source control service that hosts secure Git-based repositories",
            "C. A code deployment service",
            "D. A project management tool"
        ],
        answer: "B. A source control service that hosts secure Git-based repositories",
        explanation: "AWS CodeCommit is a fully-managed source control service that makes it easy to host secure and highly scalable private Git repositories."
    },
    {
        id: 30,
        subDomain: "3.3 Identify the core AWS services",
        criticalTopic: "Content Delivery - AWS Global Accelerator",
        question: "What is AWS Global Accelerator used for?",
        options: [
            "A. To optimize network traffic using Amazon's global network infrastructure",
            "B. To accelerate data transfer to Amazon S3",
            "C. To speed up the deployment of EC2 instances",
            "D. To provide caching for web applications"
        ],
        answer: "A. To optimize network traffic using Amazon's global network infrastructure",
        explanation: "AWS Global Accelerator improves the availability and performance of applications with local or global users by routing traffic through Amazon's global network infrastructure."
    }
];

