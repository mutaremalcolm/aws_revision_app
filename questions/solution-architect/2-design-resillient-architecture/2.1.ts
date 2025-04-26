// Subdomain 2.1: Design scalable and loosely coupled architectures

export const solutionsArchitectScalableArchitectures = [
{
    id: 1,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Auto Scaling",
    question: "Which AWS service automatically adjusts the number of EC2 instances based on demand?",
    options: [
        "A. AWS Elastic Load Balancing",
        "B. Amazon EC2 Auto Scaling",
        "C. AWS CloudFormation",
        "D. Amazon CloudFront"
    ],
    answer: "B. Amazon EC2 Auto Scaling",
    explanation: "Amazon EC2 Auto Scaling helps you maintain application availability and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. You can use EC2 Auto Scaling to help ensure you're running the desired number of instances, even if an instance fails."
},
{
    id: 2,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Elastic Load Balancing",
    question: "Which type of Elastic Load Balancer is best suited for applications that need to support WebSockets and HTTP/2 protocols?",
    options: [
        "A. Classic Load Balancer",
        "B. Network Load Balancer",
        "C. Application Load Balancer",
        "D. Gateway Load Balancer"
    ],
    answer: "C. Application Load Balancer",
    explanation: "Application Load Balancer operates at the application layer (Layer 7) and is ideal for HTTP/HTTPS traffic. It supports advanced routing, WebSockets, HTTP/2, and can direct requests to specific target groups based on content of the request."
},
{
    id: 3,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon SQS",
    question: "Which AWS service should you use to decouple application components for asynchronous processing?",
    options: [
        "A. Amazon SNS",
        "B. Amazon SQS",
        "C. AWS Lambda",
        "D. Amazon EventBridge"
    ],
    answer: "B. Amazon SQS",
    explanation: "Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS allows different components to communicate asynchronously, improving scalability and fault tolerance."
},
{
    id: 4,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon SNS",
    question: "Which AWS service should you use to notify multiple subscribers about events in your AWS environment?",
    options: [
        "A. Amazon SQS",
        "B. Amazon SNS",
        "C. AWS Lambda",
        "D. Amazon Kinesis"
    ],
    answer: "B. Amazon SNS",
    explanation: "Amazon Simple Notification Service (SNS) is a fully managed messaging service for both application-to-application (A2A) and application-to-person (A2P) communication. It enables you to distribute messages to multiple subscribers (fan-out) through various protocols."
},
{
    id: 5,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon EventBridge",
    question: "Which AWS service enables event-driven architectures by connecting applications using events from AWS services, SaaS applications, and custom sources?",
    options: [
        "A. Amazon SQS",
        "B. Amazon SNS",
        "C. Amazon EventBridge",
        "D. AWS Step Functions"
    ],
    answer: "C. Amazon EventBridge",
    explanation: "Amazon EventBridge is a serverless event bus service that makes it easier to build event-driven applications at scale. EventBridge delivers a stream of real-time data from event sources and routes that data to targets like AWS Lambda."
},
{
    id: 6,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Microservices Architecture",
    question: "Which AWS service is most suitable for running microservices in containers with automatic scaling and load balancing?",
    options: [
        "A. Amazon EC2",
        "B. AWS Lambda",
        "C. Amazon ECS/EKS",
        "D. AWS Elastic Beanstalk"
    ],
    answer: "C. Amazon ECS/EKS",
    explanation: "Amazon Elastic Container Service (ECS) and Elastic Kubernetes Service (EKS) are container orchestration services that make it easy to run, scale, and manage containerized applications. They are ideal for microservices architectures, providing automatic scaling, load balancing, and task scheduling."
},
{
    id: 7,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "AWS Step Functions",
    question: "Which AWS service orchestrates multiple AWS services into serverless workflows?",
    options: [
        "A. AWS Glue",
        "B. AWS Step Functions",
        "C. Amazon SWF",
        "D. AWS AppSync"
    ],
    answer: "B. AWS Step Functions",
    explanation: "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows through a visual interface. You can design and run workflows that stitch together services such as AWS Lambda, AWS Fargate, and Amazon SageMaker."
},
{
    id: 8,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon API Gateway",
    question: "Which AWS service can be used to create, publish, maintain, monitor, and secure APIs at any scale?",
    options: [
        "A. AWS AppSync",
        "B. Amazon API Gateway",
        "C. AWS Direct Connect",
        "D. Amazon Route 53"
    ],
    answer: "B. Amazon API Gateway",
    explanation: "Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale. It handles all the tasks involved in accepting and processing up to hundreds of thousands of concurrent API calls."
},
{
    id: 9,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon DynamoDB",
    question: "Which AWS database service automatically scales to adjust for capacity and maintains consistent performance?",
    options: [
        "A. Amazon RDS",
        "B. Amazon ElastiCache",
        "C. Amazon DynamoDB",
        "D. Amazon Neptune"
    ],
    answer: "C. Amazon DynamoDB",
    explanation: "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. DynamoDB automatically scales throughput capacity to meet workload demands with zero downtime or performance degradation."
},
{
    id: 10,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon ElastiCache",
    question: "Which AWS service should you use to improve application performance by adding an in-memory data store?",
    options: [
        "A. Amazon DynamoDB Accelerator",
        "B. Amazon ElastiCache",
        "C. Amazon RDS Read Replicas",
        "D. Amazon CloudFront"
    ],
    answer: "B. Amazon ElastiCache",
    explanation: "Amazon ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud. It improves the performance of web applications by allowing you to retrieve information from fast, managed, in-memory caches instead of relying on slower disk-based databases."
},
{
    id: 11,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "AWS Lambda",
    question: "Which characteristic of AWS Lambda contributes to building scalable architectures?",
    options: [
        "A. Pre-allocated capacity",
        "B. Automatic scaling based on the number of requests",
        "C. Fixed runtime environments",
        "D. Long-running processes"
    ],
    answer: "B. Automatic scaling based on the number of requests",
    explanation: "AWS Lambda automatically scales by running code in response to each trigger. Your code runs in parallel and processes each trigger individually, scaling precisely with the size of the workload, from a few requests per day to hundreds of thousands per second."
},
{
    id: 12,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon CloudFront",
    question: "Which AWS service can help improve the performance of your application by caching content closer to users worldwide?",
    options: [
        "A. Amazon Route 53",
        "B. Amazon CloudFront",
        "C. AWS Global Accelerator",
        "D. Amazon ElastiCache"
    ],
    answer: "B. Amazon CloudFront",
    explanation: "Amazon CloudFront is a content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds, improving application performance by caching content at edge locations worldwide."
},
{
    id: 13,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon Kinesis",
    question: "Which AWS service should you use to collect, process, and analyze real-time streaming data?",
    options: [
        "A. Amazon EMR",
        "B. Amazon Kinesis",
        "C. AWS Glue",
        "D. Amazon Redshift"
    ],
    answer: "B. Amazon Kinesis",
    explanation: "Amazon Kinesis makes it easy to collect, process, and analyze real-time, streaming data so you can get timely insights and react quickly to new information. It offers services like Kinesis Data Streams, Data Firehose, Data Analytics, and Video Streams for various streaming data scenarios."
},
{
    id: 14,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Horizontal vs. Vertical Scaling",
    question: "Which scaling approach involves adding more instances of the same resource type?",
    options: [
        "A. Vertical scaling",
        "B. Horizontal scaling",
        "C. Diagonal scaling",
        "D. Depth scaling"
    ],
    answer: "B. Horizontal scaling",
    explanation: "Horizontal scaling (or scaling out) involves adding more instances of resources to your architecture, such as adding more EC2 instances. This is often more resilient and cost-effective than vertical scaling, which involves increasing the power of individual resources."
},
{
    id: 15,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Auto Scaling Policies",
    question: "Which Auto Scaling policy should you use to scale based on the average CPU utilization across your instances?",
    options: [
        "A. Simple scaling policy",
        "B. Target tracking scaling policy",
        "C. Step scaling policy",
        "D. Scheduled scaling policy"
    ],
    answer: "B. Target tracking scaling policy",
    explanation: "Target tracking scaling policies allow you to set a target value for a specific metric, like CPU utilization. Auto Scaling creates and manages the CloudWatch alarms that trigger the scaling policy and calculates the scaling adjustment based on the metric and the target value."
},
{
    id: 16,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Application Integration",
    question: "A company has multiple applications that need to share data in real-time. Which AWS service should they use to implement a publish-subscribe messaging pattern?",
    options: [
        "A. Amazon SQS",
        "B. Amazon SNS",
        "C. AWS AppSync",
        "D. Amazon MQ"
    ],
    answer: "B. Amazon SNS",
    explanation: "Amazon SNS implements the publish-subscribe messaging paradigm, where publishers send messages to topics and subscribers receive messages from topics they're interested in. This allows for real-time communication between multiple applications."
},
{
    id: 17,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "DynamoDB Auto Scaling",
    question: "How can you configure Amazon DynamoDB to automatically adjust throughput capacity based on actual traffic patterns?",
    options: [
        "A. Use DynamoDB Streams",
        "B. Enable DynamoDB Auto Scaling",
        "C. Use DynamoDB Transactions",
        "D. Configure Global Tables"
    ],
    answer: "B. Enable DynamoDB Auto Scaling",
    explanation: "DynamoDB Auto Scaling uses the AWS Application Auto Scaling service to dynamically adjust provisioned throughput capacity on your behalf in response to actual traffic patterns. This helps you provision adequate capacity for unpredictable workloads."
},
{
    id: 18,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Amazon AppSync",
    question: "Which AWS service should you use to build GraphQL APIs that securely access, manipulate, and combine data from multiple sources?",
    options: [
        "A. Amazon API Gateway",
        "B. AWS AppSync",
        "C. AWS Amplify",
        "D. Amazon EventBridge"
    ],
    answer: "B. AWS AppSync",
    explanation: "AWS AppSync is a fully managed service that makes it easy to develop GraphQL APIs by handling the heavy lifting of securely connecting to data sources like AWS DynamoDB, Lambda, and more. It includes features like real-time data synchronization and offline data access."
},
{
    id: 19,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "Queue-Based Load Leveling",
    question: "Which pattern should you implement to handle varying workloads and prevent overwhelming downstream services?",
    options: [
        "A. Circuit Breaker Pattern",
        "B. Queue-Based Load Leveling",
        "C. Throttling Pattern",
        "D. Retry Pattern"
    ],
    answer: "B. Queue-Based Load Leveling",
    explanation: "Queue-Based Load Leveling uses a queue as a buffer between a task and a service that it invokes. This can help minimize the impact of peaks in demand on availability and responsiveness, improving scalability and resilience."
},
{
    id: 20,
    subDomain: "2.1 Design scalable and loosely coupled architectures",
    criticalTopic: "AWS Transit Gateway",
    question: "Which AWS service simplifies network architecture by acting as a central hub for connecting VPCs and on-premises networks?",
    options: [
        "A. AWS Direct Connect",
        "B. AWS Transit Gateway",
        "C. AWS PrivateLink",
        "D. Amazon Route 53"
    ],
    answer: "B. AWS Transit Gateway",
    explanation: "AWS Transit Gateway is a service that enables customers to connect their Amazon VPCs and on-premises networks to a single gateway. It acts as a hub that controls how traffic is routed among all connected networks, simplifying network architecture."
},
];