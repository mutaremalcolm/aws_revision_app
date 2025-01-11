// Reliability and Business Continuity - Implement scalability and elasticity

export const sysOpsScalabilityElasticity = [
    {
        id: 1,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Auto Scaling Basics",
        question: "What is the primary benefit of using AWS Auto Scaling for your workloads?",
        options: [
            "A. It improves network security.",
            "B. It automatically adjusts capacity to maintain steady performance.",
            "C. It provides detailed cost optimization reports.",
            "D. It enables continuous delivery."
        ],
        answer: "B. It automatically adjusts capacity to maintain steady performance.",
        explanation: "Auto Scaling ensures that the right number of Amazon EC2 instances are running to handle the load for your application."
    },
    {
        id: 2,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Horizontal Scaling vs Vertical Scaling",
        question: "What is the main difference between horizontal scaling and vertical scaling?",
        options: [
            "A. Horizontal scaling increases the instance size, while vertical scaling adds more instances.",
            "B. Horizontal scaling adds more instances, while vertical scaling increases the instance size.",
            "C. Horizontal scaling improves performance, while vertical scaling increases storage.",
            "D. Horizontal scaling requires a multi-region setup, while vertical scaling is region-specific."
        ],
        answer: "B. Horizontal scaling adds more instances, while vertical scaling increases the instance size.",
        explanation: "Horizontal scaling involves adding more instances to distribute the load, while vertical scaling increases the size of the existing instance."
    },
    {
        id: 3,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Scaling Policies",
        question: "Which type of scaling policy would you use to increase the number of EC2 instances in response to a specific CloudWatch metric threshold?",
        options: [
            "A. Predictive Scaling",
            "B. Target Tracking Scaling",
            "C. Step Scaling",
            "D. Scheduled Scaling"
        ],
        answer: "C. Step Scaling",
        explanation: "Step Scaling increases or decreases the number of instances based on CloudWatch metric thresholds (e.g., CPU utilization)."
    },
    {
        id: 4,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Predictive Scaling",
        question: "Which scaling method allows AWS to forecast future traffic patterns and scale resources accordingly?",
        options: [
            "A. Manual Scaling",
            "B. Predictive Scaling",
            "C. Target Tracking Scaling",
            "D. Step Scaling"
        ],
        answer: "B. Predictive Scaling",
        explanation: "Predictive Scaling uses machine learning to predict future traffic and automatically scales the number of instances to meet the forecasted demand."
    },
    {
        id: 5,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "AWS Auto Scaling Plans",
        question: "Which AWS service allows you to create scaling plans across multiple resources, including EC2, ECS, and DynamoDB?",
        options: [
            "A. AWS Auto Scaling",
            "B. AWS CloudFormation",
            "C. AWS Systems Manager",
            "D. Amazon CloudWatch"
        ],
        answer: "A. AWS Auto Scaling",
        explanation: "AWS Auto Scaling allows you to create scaling plans for EC2, ECS, DynamoDB, and other resources, adjusting capacity to maintain optimal performance."
    },
    {
        id: 6,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elastic Load Balancing and Auto Scaling",
        question: "Which component is essential for distributing traffic evenly across Auto Scaling instances?",
        options: [
            "A. Amazon RDS",
            "B. Elastic Load Balancer (ELB)",
            "C. AWS CloudTrail",
            "D. Amazon SNS"
        ],
        answer: "B. Elastic Load Balancer (ELB)",
        explanation: "Elastic Load Balancing distributes traffic evenly across Auto Scaling instances to maintain performance during varying load conditions."
    },
    {
        id: 7,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Auto Scaling for High Availability",
        question: "How does using Auto Scaling across multiple Availability Zones improve high availability?",
        options: [
            "A. It balances traffic across instances.",
            "B. It ensures that instances are running only in one region.",
            "C. It allows automatic recovery of instances.",
            "D. It distributes instances across multiple data centers to minimize downtime."
        ],
        answer: "D. It distributes instances across multiple data centers to minimize downtime.",
        explanation: "Auto Scaling across multiple Availability Zones ensures that even if one data center goes down, your application remains available."
    },
    {
        id: 8,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elasticity and DynamoDB",
        question: "Which DynamoDB feature allows you to automatically adjust throughput capacity to accommodate changing traffic levels?",
        options: [
            "A. DynamoDB Streams",
            "B. On-Demand Mode",
            "C. Global Tables",
            "D. Provisioned Mode"
        ],
        answer: "B. On-Demand Mode",
        explanation: "In On-Demand Mode, DynamoDB automatically scales to accommodate your application's traffic patterns, providing elasticity without provisioning capacity."
    },
    {
        id: 9,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "RDS Read Replicas",
        question: "How can Amazon RDS Read Replicas help improve application performance?",
        options: [
            "A. By storing backups of your database",
            "B. By enabling automatic failover in case of failure",
            "C. By offloading read traffic from the primary database",
            "D. By encrypting database traffic"
        ],
        answer: "C. By offloading read traffic from the primary database",
        explanation: "RDS Read Replicas allow you to scale out read-heavy applications by offloading read requests from the primary database to the replicas."
    },
    {
        id: 10,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Scaling Amazon RDS",
        question: "Which of the following scaling options is available for Amazon RDS to accommodate increased demand?",
        options: [
            "A. Vertical scaling by modifying the instance type",
            "B. Horizontal scaling by adding more EC2 instances",
            "C. Horizontal scaling by adding additional subnets",
            "D. Vertical scaling by adding more read replicas"
        ],
        answer: "A. Vertical scaling by modifying the instance type",
        explanation: "Amazon RDS supports vertical scaling by modifying the instance type, which increases CPU, memory, and storage capacity to accommodate increased demand."
    },
    {
        id: 11,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elasticache for Caching",
        question: "How does using Amazon ElastiCache improve application performance?",
        options: [
            "A. By storing large volumes of data",
            "B. By distributing read traffic to different instances",
            "C. By caching frequently accessed data in-memory for faster retrieval",
            "D. By automatically scaling EC2 instances"
        ],
        answer: "C. By caching frequently accessed data in-memory for faster retrieval",
        explanation: "Amazon ElastiCache helps improve application performance by caching frequently accessed data in-memory, reducing the need to retrieve data from a database."
    },
    {
        id: 12,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Auto Scaling Termination Policies",
        question: "Which termination policy is used to decide which instance should be terminated first when scaling in an Auto Scaling group?",
        options: [
            "A. Closest to the next billing hour",
            "B. Random instance",
            "C. Oldest instance in the group",
            "D. Instance with the least CPU usage"
        ],
        answer: "A. Closest to the next billing hour",
        explanation: "When scaling in, the default termination policy terminates the instance that is closest to the next billing hour to reduce costs."
    },
    {
        id: 13,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "AWS Auto Scaling for ECS",
        question: "How does AWS Auto Scaling work for ECS services?",
        options: [
            "A. It scales the number of containers based on CPU or memory usage metrics.",
            "B. It automatically increases the size of EBS volumes.",
            "C. It scales only EC2 instances in the ECS cluster.",
            "D. It scales based on network traffic only."
        ],
        answer: "A. It scales the number of containers based on CPU or memory usage metrics.",
        explanation: "AWS Auto Scaling for ECS can scale the number of containers in a service based on metrics like CPU or memory usage."
    },
    {
        id: 14,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Spot Instances and Auto Scaling",
        question: "How can Spot Instances be used with Auto Scaling to optimize costs?",
        options: [
            "A. Spot Instances cannot be used with Auto Scaling.",
            "B. Spot Instances can be automatically added when demand increases and terminated when demand decreases.",
            "C. Spot Instances are added only during predictable traffic spikes.",
            "D. Spot Instances are only used when no other instance types are available."
        ],
        answer: "B. Spot Instances can be automatically added when demand increases and terminated when demand decreases.",
        explanation: "Spot Instances can be automatically added to an Auto Scaling group when demand increases, helping to optimize costs by using low-cost capacity."
    },
    {
        id: 15,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Scaling DynamoDB",
        question: "How does DynamoDB handle large traffic spikes in On-Demand mode?",
        options: [
            "A. It automatically scales read and write capacity to meet the traffic demand.",
            "B. It requires manual intervention to increase read/write capacity.",
            "C. It uses EC2 Auto Scaling groups to handle spikes.",
            "D. It fails over to a secondary database."
        ],
        answer: "A. It automatically scales read and write capacity to meet the traffic demand.",
        explanation: "In On-Demand mode, DynamoDB automatically scales its read and write capacity to handle sudden traffic spikes."
    },
    {
        id: 16,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Auto Scaling Groups and Health Checks",
        question: "What happens when an instance fails a health check in an Auto Scaling group?",
        options: [
            "A. It is stopped and manually restarted.",
            "B. It is automatically replaced with a new instance.",
            "C. An email notification is sent to the admin.",
            "D. The instance continues to run."
        ],
        answer: "B. It is automatically replaced with a new instance.",
        explanation: "If an instance in an Auto Scaling group fails a health check, it is automatically terminated and replaced with a new instance."
    },
    {
        id: 17,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elastic Load Balancer and Cross-Zone Load Balancing",
        question: "How does cross-zone load balancing improve performance with an Elastic Load Balancer?",
        options: [
            "A. It ensures traffic is distributed evenly across instances in multiple Availability Zones.",
            "B. It routes all traffic to the primary zone and fails over to the secondary zone.",
            "C. It increases the capacity of the load balancer.",
            "D. It sends all requests to the instance with the highest CPU."
        ],
        answer: "A. It ensures traffic is distributed evenly across instances in multiple Availability Zones.",
        explanation: "Cross-zone load balancing ensures traffic is evenly distributed across instances in multiple Availability Zones, which improves performance and reliability."
    },
    {
        id: 18,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elastic File System (EFS) and Scalability",
        question: "How does Amazon Elastic File System (EFS) provide scalability for workloads?",
        options: [
            "A. By automatically provisioning additional disk space as needed",
            "B. By scaling the number of EC2 instances",
            "C. By replicating data across multiple regions",
            "D. By providing object storage for high availability"
        ],
        answer: "A. By automatically provisioning additional disk space as needed",
        explanation: "Amazon EFS provides scalability by automatically provisioning additional disk space to accommodate growing workloads."
    },
    {
        id: 19,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Elastic IP and High Availability",
        question: "What is the benefit of using Elastic IP addresses for scalable, high availability workloads?",
        options: [
            "A. It allows traffic to be rerouted to another instance if one fails.",
            "B. It increases network throughput.",
            "C. It scales the number of network interfaces attached to an instance.",
            "D. It enables cross-region replication."
        ],
        answer: "A. It allows traffic to be rerouted to another instance if one fails.",
        explanation: "Elastic IP addresses allow traffic to be rerouted to a different instance if an instance fails, supporting high availability."
    },
    {
        id: 20,
        subDomain: "2.1 Implement scalability and elasticity",
        criticalTopic: "Spot Fleet and Scaling",
        question: "How does using a Spot Fleet with Auto Scaling help manage scaling and cost?",
        options: [
            "A. It only scales on weekends.",
            "B. It allows you to specify multiple instance types and automatically scale based on availability and cost.",
            "C. It stops scaling when prices go up.",
            "D. It requires manual intervention for scaling."
        ],
        answer: "B. It allows you to specify multiple instance types and automatically scale based on availability and cost.",
        explanation: "A Spot Fleet allows you to specify multiple instance types and dynamically scale based on availability and price, optimizing costs and performance."
    }
];
