// Subdomain 2.2: Design highly available and/or fault-tolerant architectures

export const solutionsArchitectAvailableArchitectures = [
{
    id: 21,
    subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
    criticalTopic: "Multiple Availability Zones",
    question: "What is a best practice to increase the availability of an application running on Amazon EC2?",
    options: [
        "A. Run all EC2 instances in a single Availability Zone",
        "B. Run EC2 instances across multiple Availability Zones",
        "C. Run all EC2 instances in a single Region",
        "D. Use a single large EC2 instance type"
    ],
    answer: "B. Run EC2 instances across multiple Availability Zones",
    explanation: "Distributing EC2 instances across multiple Availability Zones increases availability and fault tolerance. If one AZ fails, instances in other AZs can continue to serve traffic, minimizing downtime."
},
{
    id: 22,
    subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
    criticalTopic: "Amazon RDS Multi-AZ",
    question: "Which Amazon RDS feature provides high availability and automatic failover in case of a database failure?",
    options: [
        "A. Read Replicas",
        "B. Multi-AZ deployment",
        "C. Reserved Instances",
        "D. Performance Insights"
    ],
    answer: "B. Multi-AZ deployment",
    explanation: "In a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different AZ. If the primary database fails, RDS automatically fails over to the standby, usually within 60-120 seconds, with no manual intervention required."
},
{
    id: 23,
    subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
    criticalTopic: "Amazon S3 Replication",
    question: "Which S3 feature should you enable to automatically replicate objects across different regions for disaster recovery?",
    options: [
        "A. S3 Versioning",
        "B. S3 Cross-Region Replication (CRR)",
        "C. S3 Same-Region Replication (SRR)",
        "D. S3 Lifecycle Policies"
    ],
    answer: "B. S3 Cross-Region Replication (CRR)",
    explanation: "S3 Cross-Region Replication (CRR) automatically replicates data between buckets in different AWS Regions, providing geographic redundancy for disaster recovery and compliance requirements."
},
{
    id: 24,
    subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
    criticalTopic: "Elastic Load Balancer Health Checks",
    question: "How do Elastic Load Balancers contribute to application availability?",
    options: [
        "A. By caching content closer to users",
        "B. By distributing traffic across multiple instances",
        "C. By automatically scaling the number of instances",
        "D. By providing static IP addresses"
    ],
    answer: "B. By distributing traffic across multiple instances",
    explanation: "Elastic Load Balancers distribute incoming application traffic across multiple targets, such as EC2 instances, in multiple AZs. They also perform health checks on targets and route traffic only to healthy instances, improving availability."
},
{

        id: 25,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Route 53 Routing Policies",
        question: "Which Amazon Route 53 routing policy should you use to route traffic to the lowest-latency endpoint?",
        options: [
            "A. Weighted routing",
            "B. Failover routing",
            "C. Latency-based routing",
            "D. Geolocation routing"
        ],
        answer: "C. Latency-based routing",
        explanation: "Route 53 Latency-based routing policy routes your users to the AWS Region that provides the lowest latency. This helps improve the speed and responsiveness of your application for your users, regardless of where they are located."
    },
    {
        id: 26,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon Aurora High Availability",
        question: "Which Aurora feature provides the highest level of database availability?",
        options: [
            "A. Aurora Serverless",
            "B. Aurora Global Database",
            "C. Aurora Auto Scaling",
            "D. Aurora Backtrack"
        ],
        answer: "B. Aurora Global Database",
        explanation: "Aurora Global Database spans multiple AWS Regions, with automatic fast replication to secondary regions. This enables low-latency global reads and provides disaster recovery from region-wide outages, offering the highest level of availability."
    },
    {
        id: 27,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Stateless Applications",
        question: "Why are stateless applications generally more fault-tolerant than stateful applications?",
        options: [
            "A. Stateless applications always run faster",
            "B. Stateless applications can be easily replaced if they fail",
            "C. Stateless applications use less compute resources",
            "D. Stateless applications don't need databases"
        ],
        answer: "B. Stateless applications can be easily replaced if they fail",
        explanation: "Stateless applications don't store any client session data locally, making each instance identical and interchangeable. This means instances can be replaced without affecting user experience if one fails, improving fault tolerance."
    },
    {
        id: 28,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "DynamoDB Global Tables",
        question: "Which DynamoDB feature provides multi-region, multi-master replication?",
        options: [
            "A. DynamoDB Accelerator (DAX)",
            "B. DynamoDB Streams",
            "C. DynamoDB Auto Scaling",
            "D. DynamoDB Global Tables"
        ],
        answer: "D. DynamoDB Global Tables",
        explanation: "DynamoDB Global Tables provide a fully managed solution for deploying a multi-region, multi-master database. This enables low-latency reads and writes in multiple regions, along with resilience against regional outages."
    },
    {
        id: 29,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Disaster Recovery Strategies",
        question: "Which disaster recovery strategy has the lowest RTO (Recovery Time Objective)?",
        options: [
            "A. Backup and Restore",
            "B. Pilot Light",
            "C. Warm Standby",
            "D. Multi-Site Active/Active"
        ],
        answer: "D. Multi-Site Active/Active",
        explanation: "Multi-Site Active/Active (also known as Hot-Hot) involves running systems at full capacity in multiple regions simultaneously, allowing for immediate failover with minimal or no downtime. This provides the lowest RTO among disaster recovery strategies."
    },
    {
        id: 30,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon EFS",
        question: "Which AWS storage service provides a shared file system that can be accessed by multiple EC2 instances across different Availability Zones?",
        options: [
            "A. Amazon EBS",
            "B. Amazon S3",
            "C. Amazon EFS",
            "D. AWS Storage Gateway"
        ],
        answer: "C. Amazon EFS",
        explanation: "Amazon Elastic File System (EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It can be accessed by multiple EC2 instances across different AZs, supporting high availability architectures."
    },
    {
        id: 31,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "AWS Systems Manager Session Manager",
        question: "Which AWS service provides secure EC2 instance management without the need to open inbound ports or maintain bastion hosts?",
        options: [
            "A. AWS Systems Manager Session Manager",
            "B. AWS Direct Connect",
            "C. AWS OpsWorks",
            "D. AWS Config"
        ],
        answer: "A. AWS Systems Manager Session Manager",
        explanation: "AWS Systems Manager Session Manager provides secure and auditable instance management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. This improves security posture while maintaining management capabilities."
    },
    {
        id: 32,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Lambda Function Retries",
        question: "If a Lambda function fails while processing an event from an asynchronous source like SNS, what happens by default?",
        options: [
            "A. The function is immediately terminated",
            "B. The function retries twice before sending the event to a Dead Letter Queue",
            "C. The event is discarded and not processed",
            "D. The function continues to retry indefinitely"
        ],
        answer: "B. The function retries twice before sending the event to a Dead Letter Queue",
        explanation: "For asynchronous invocations, if the function returns an error, Lambda retries the function twice by default. If the function still fails, the event can be sent to a configured Dead Letter Queue (DLQ), which helps with handling failed processing attempts."
    },
    {
        id: 33,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon CloudWatch Alarms",
        question: "How can Amazon CloudWatch Alarms help improve application availability?",
        options: [
            "A. By automatically scaling AWS resources based on demand",
            "B. By providing detailed metrics about AWS services",
            "C. By automatically detecting and alerting on abnormal conditions",
            "D. By recording API calls made on your account"
        ],
        answer: "C. By automatically detecting and alerting on abnormal conditions",
        explanation: "CloudWatch Alarms watch metrics over a time period you specify and perform actions based on the value of the metric relative to a threshold. This enables quick detection and response to issues, improving application availability."
    },
    {
        id: 34,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "AWS CloudFormation",
        question: "How does AWS CloudFormation contribute to infrastructure resilience?",
        options: [
            "A. By automatically scaling resources based on demand",
            "B. By enabling infrastructure as code and consistent deployments",
            "C. By providing real-time monitoring of resources",
            "D. By automatically routing traffic to healthy endpoints"
        ],
        answer: "B. By enabling infrastructure as code and consistent deployments",
        explanation: "AWS CloudFormation provides a common language to describe and provision all the infrastructure resources in your cloud environment using code. This ensures consistent, reproducible deployments, making disaster recovery more reliable and reducing human error."
    },
    {
        id: 35,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Dead Letter Queues",
        question: "What is the purpose of a Dead Letter Queue (DLQ) in Amazon SQS?",
        options: [
            "A. To store messages that couldn't be processed successfully",
            "B. To route messages to multiple subscribers",
            "C. To delay message delivery",
            "D. To encrypt message contents"
        ],
        answer: "A. To store messages that couldn't be processed successfully",
        explanation: "A Dead Letter Queue (DLQ) in Amazon SQS is used to capture messages that can't be processed successfully after a specified number of attempts. This helps isolate problematic messages for debugging while allowing the main queue to continue processing other messages."
    },
    {
        id: 36,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon RDS Read Replicas",
        question: "How can Amazon RDS Read Replicas improve database availability?",
        options: [
            "A. By automatically failing over to a standby instance if the primary fails",
            "B. By scaling read capacity and reducing load on the primary database",
            "C. By automatically backing up the database",
            "D. By encrypting data at rest"
        ],
        answer: "B. By scaling read capacity and reducing load on the primary database",
        explanation: "RDS Read Replicas allow you to create read-only copies of your database, offloading read traffic from the primary database. This improves performance and availability by reducing the load on the primary instance and providing additional capacity for read operations."
    },
    {
        id: 37,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "AWS Direct Connect Resiliency",
        question: "What is the recommended approach for achieving maximum resiliency with AWS Direct Connect?",
        options: [
            "A. Single connection to a single AWS Direct Connect location",
            "B. Multiple connections to a single AWS Direct Connect location",
            "C. Multiple connections to multiple AWS Direct Connect locations",
            "D. VPN connection as a backup to a single Direct Connect connection"
        ],
        answer: "C. Multiple connections to multiple AWS Direct Connect locations",
        explanation: "For maximum resiliency, AWS recommends establishing multiple Direct Connect connections to multiple Direct Connect locations. This approach provides resilience against device failures, connectivity issues, and complete location failures."
    },
    {
        id: 38,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon Route 53 Health Checks",
        question: "How do Amazon Route 53 health checks contribute to high availability?",
        options: [
            "A. By monitoring the health of resources and routing traffic only to healthy endpoints",
            "B. By automatically scaling resources based on traffic patterns",
            "C. By caching content at edge locations",
            "D. By encrypting data in transit"
        ],
        answer: "A. By monitoring the health of resources and routing traffic only to healthy endpoints",
        explanation: "Route 53 health checks monitor the health of your resources such as web servers and email servers. When a resource becomes unhealthy, Route 53 can route traffic away from it to healthy resources, improving application availability."
    },
    {
        id: 39,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Application Recovery Controller",
        question: "Which AWS service helps you quickly and reliably recover applications by moving traffic away from affected Availability Zones or Regions?",
        options: [
            "A. AWS Elastic Disaster Recovery",
            "B. AWS Application Recovery Controller (ARC)",
            "C. AWS Backup",
            "D. AWS Global Accelerator"
        ],
        answer: "B. AWS Application Recovery Controller (ARC)",
        explanation: "AWS Application Recovery Controller (ARC) helps you quickly and reliably recover applications by continuously monitoring application readiness and enabling rapid traffic shifting away from affected Availability Zones or Regions when needed."
    },
    {
        id: 40,
        subDomain: "2.2 Design highly available and/or fault-tolerant architectures",
        criticalTopic: "Amazon S3 Durability",
        question: "What is the designed durability of objects stored in Amazon S3 Standard storage class?",
        options: [
            "A. 99.9%",
            "B. 99.99%",
            "C. 99.999999999% (eleven 9's)",
            "D. 99.9999%"
        ],
        answer: "C. 99.999999999% (eleven 9's)",
        explanation: "Amazon S3 Standard storage is designed for 99.999999999% (11 nines) durability, which means for 10,000,000 objects stored, you can expect to lose a single object once every 10,000 years. This extreme durability is achieved by storing data redundantly across multiple facilities and devices."
    }
];