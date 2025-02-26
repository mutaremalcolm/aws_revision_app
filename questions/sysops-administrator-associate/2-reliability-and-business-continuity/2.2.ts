// Reliability and Business Continuity - Implement high availability and resilient environments

export const sysOpsHighAvailability = [
    {
        id: 1,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Multi-AZ Deployments for RDS",
        question: "What is the primary benefit of using a Multi-AZ deployment for Amazon RDS?",
        options: [
            "A. Improved read performance",
            "B. Increased storage capacity",
            "C. High availability through automatic failover",
            "D. Lower costs for backups"
        ],
        answer: "C. High availability through automatic failover",
        explanation: "In a Multi-AZ RDS deployment, a standby replica is automatically promoted to primary in case of a failure, ensuring high availability."
    },
    {
        id: 2,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Elastic Load Balancer and Health Checks",
        question: "What role do health checks play in an Elastic Load Balancer setup?",
        options: [
            "A. They increase the capacity of the load balancer.",
            "B. They route traffic to only healthy instances.",
            "C. They improve storage efficiency.",
            "D. They replicate traffic across multiple regions."
        ],
        answer: "B. They route traffic to only healthy instances.",
        explanation: "ELB uses health checks to determine which instances are healthy and can receive traffic, thereby improving fault tolerance."
    },
    {
        id: 3,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon Route 53 Health Checks",
        question: "How does Amazon Route 53 use health checks to improve availability?",
        options: [
            "A. By routing traffic to the nearest data center",
            "B. By redirecting traffic to healthy endpoints when the primary endpoint fails",
            "C. By increasing DNS resolution speed",
            "D. By backing up DNS records in another region"
        ],
        answer: "B. By redirecting traffic to healthy endpoints when the primary endpoint fails",
        explanation: "Route 53 health checks ensure that traffic is routed to healthy endpoints. If an endpoint fails a health check, traffic is redirected to a healthy one."
    },
    {
        id: 4,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Multi-AZ vs Read Replicas",
        question: "What is a key difference between RDS Multi-AZ and Read Replicas?",
        options: [
            "A. Multi-AZ improves performance, while Read Replicas provide automatic failover.",
            "B. Multi-AZ is for high availability, while Read Replicas are for improving read performance.",
            "C. Read Replicas are automatically promoted to primary in case of failure.",
            "D. Multi-AZ is for read-heavy workloads."
        ],
        answer: "B. Multi-AZ is for high availability, while Read Replicas are for improving read performance.",
        explanation: "Multi-AZ provides high availability with automatic failover, while Read Replicas are used to improve performance by offloading read traffic."
    },
    {
        id: 5,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Route 53 Failover Routing",
        question: "Which Route 53 routing policy is best for providing high availability in case of endpoint failure?",
        options: [
            "A. Weighted Routing",
            "B. Latency-Based Routing",
            "C. Failover Routing",
            "D. Geolocation Routing"
        ],
        answer: "C. Failover Routing",
        explanation: "Failover Routing redirects traffic to a secondary resource when the primary resource is unavailable, providing high availability."
    },
    {
        id: 6,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Fault-Tolerant Workloads",
        question: "Which AWS service provides a fully fault-tolerant file storage solution that spans multiple Availability Zones?",
        options: [
            "A. Amazon S3",
            "B. Amazon RDS",
            "C. Amazon EC2",
            "D. Amazon EFS"
        ],
        answer: "D. Amazon EFS",
        explanation: "Amazon EFS is a fully managed, highly available, and fault-tolerant file storage system that spans multiple Availability Zones."
    },
    {
        id: 7,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon S3 Cross-Region Replication",
        question: "How does Cross-Region Replication in Amazon S3 improve data availability?",
        options: [
            "A. By reducing latency for users in different regions",
            "B. By automatically increasing storage capacity",
            "C. By providing backups in different regions",
            "D. By reducing costs"
        ],
        answer: "A. By reducing latency for users in different regions",
        explanation: "Cross-Region Replication in S3 enables automatic copying of objects to a different AWS region, reducing latency and improving availability for global users."
    },
    {
        id: 8,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Auto Scaling Across AZs",
        question: "How does configuring Auto Scaling across multiple Availability Zones improve fault tolerance?",
        options: [
            "A. It increases the overall storage capacity.",
            "B. It distributes instances across different data centers to prevent a single point of failure.",
            "C. It automatically increases read/write throughput.",
            "D. It provides cost savings during off-peak hours."
        ],
        answer: "B. It distributes instances across different data centers to prevent a single point of failure.",
        explanation: "Auto Scaling across multiple Availability Zones ensures that if one Availability Zone fails, instances in another zone can continue handling traffic."
    },
    {
        id: 9,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Elastic IP for High Availability",
        question: "What role does Elastic IP play in ensuring high availability?",
        options: [
            "A. It allows you to route traffic to different instances in case of failure.",
            "B. It increases network performance.",
            "C. It enables cross-region replication.",
            "D. It automates instance recovery."
        ],
        answer: "A. It allows you to route traffic to different instances in case of failure.",
        explanation: "Elastic IP addresses enable you to route traffic to another instance in case of failure, ensuring that services remain accessible."
    },
    {
        id: 10,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon CloudFront for Availability",
        question: "How does Amazon CloudFront contribute to high availability?",
        options: [
            "A. By caching content at edge locations globally",
            "B. By increasing EC2 instance size",
            "C. By managing DNS records for high availability",
            "D. By scaling database capacity automatically"
        ],
        answer: "A. By caching content at edge locations globally",
        explanation: "Amazon CloudFront caches content at edge locations, ensuring low latency and high availability for users worldwide."
    },
    {
        id: 11,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Route 53 Latency-Based Routing",
        question: "How does Latency-Based Routing in Amazon Route 53 improve application performance and availability?",
        options: [
            "A. By routing traffic to the region with the least latency",
            "B. By caching DNS records globally",
            "C. By replicating data across regions",
            "D. By automatically scaling EC2 instances"
        ],
        answer: "A. By routing traffic to the region with the least latency",
        explanation: "Latency-Based Routing directs traffic to the region that provides the lowest latency, improving both performance and availability."
    },
    {
        id: 12,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon RDS Automatic Backups",
        question: "How do automatic backups in Amazon RDS contribute to high availability?",
        options: [
            "A. By enabling multi-region access",
            "B. By allowing point-in-time recovery in case of failure",
            "C. By improving read performance",
            "D. By distributing traffic across regions"
        ],
        answer: "B. By allowing point-in-time recovery in case of failure",
        explanation: "Amazon RDS automatic backups enable point-in-time recovery, ensuring that data can be restored in case of failure, contributing to high availability."
    },
    {
        id: 13,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Disaster Recovery with Multi-AZ",
        question: "Which of the following AWS services supports automatic failover in a Multi-AZ setup?",
        options: [
            "A. Amazon DynamoDB",
            "B. Amazon RDS",
            "C. Amazon S3",
            "D. Amazon EC2"
        ],
        answer: "B. Amazon RDS",
        explanation: "In a Multi-AZ deployment, Amazon RDS automatically fails over to a standby instance in case of a failure, ensuring disaster recovery."
    },
    {
        id: 14,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon Aurora Replicas",
        question: "How do Amazon Aurora Replicas contribute to high availability?",
        options: [
            "A. By providing automatic backups",
            "B. By distributing traffic across multiple regions",
            "C. By replicating data across different Availability Zones for read scalability and automatic failover",
            "D. By increasing database storage capacity"
        ],
        answer: "C. By replicating data across different Availability Zones for read scalability and automatic failover",
        explanation: "Aurora Replicas improve high availability by replicating data across Availability Zones, allowing for automatic failover and read scalability."
    },
    {
        id: 15,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "AWS Global Accelerator for High Availability",
        question: "What is the role of AWS Global Accelerator in improving high availability?",
        options: [
            "A. It distributes application traffic across multiple AWS regions to ensure fault tolerance.",
            "B. It scales EC2 instances automatically.",
            "C. It replicates data across Availability Zones.",
            "D. It increases storage capacity."
        ],
        answer: "A. It distributes application traffic across multiple AWS regions to ensure fault tolerance.",
        explanation: "AWS Global Accelerator routes application traffic across multiple AWS regions, ensuring high availability and fault tolerance."
    },
    {
        id: 16,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Fault-Tolerant Amazon EC2",
        question: "What feature can be used to automatically recover an EC2 instance in the event of a failure?",
        options: [
            "A. Elastic Load Balancer",
            "B. EC2 Auto Recovery",
            "C. Amazon S3 replication",
            "D. Amazon VPC"
        ],
        answer: "B. EC2 Auto Recovery",
        explanation: "EC2 Auto Recovery automatically recovers an instance if it fails a system status check, ensuring high availability."
    },
    {
        id: 17,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Multi-AZ for High Availability",
        question: "What is the primary purpose of configuring a workload to span multiple Availability Zones?",
        options: [
            "A. To increase storage capacity",
            "B. To improve fault tolerance and high availability",
            "C. To replicate data across regions",
            "D. To reduce network latency"
        ],
        answer: "B. To improve fault tolerance and high availability",
        explanation: "Distributing workloads across multiple Availability Zones ensures that if one AZ experiences a failure, the others can continue to handle traffic, improving fault tolerance."
    },
    {
        id: 18,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Amazon S3 Availability Zones",
        question: "How does Amazon S3 ensure high availability for stored objects?",
        options: [
            "A. By replicating data across multiple Availability Zones",
            "B. By providing cross-region replication",
            "C. By automatically scaling storage",
            "D. By increasing object storage limits"
        ],
        answer: "A. By replicating data across multiple Availability Zones",
        explanation: "Amazon S3 stores data redundantly across multiple Availability Zones within a region to ensure high availability."
    },
    {
        id: 19,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Elastic Load Balancing and Failover",
        question: "How does Elastic Load Balancing ensure high availability in the event of instance failure?",
        options: [
            "A. It terminates failed instances.",
            "B. It distributes traffic only to healthy instances.",
            "C. It replicates instances across Availability Zones.",
            "D. It automatically scales the instances."
        ],
        answer: "B. It distributes traffic only to healthy instances.",
        explanation: "Elastic Load Balancing uses health checks to route traffic only to healthy instances, ensuring high availability during instance failures."
    },
    {
        id: 20,
        subDomain: "2.2 Implement high availability and resilient environments",
        criticalTopic: "Fault-Tolerant Amazon S3",
        question: "Which Amazon S3 storage class is designed for long-term, infrequent access but offers high availability?",
        options: [
            "A. S3 Intelligent-Tiering",
            "B. S3 One Zone-IA",
            "C. S3 Standard-IA",
            "D. S3 Glacier"
        ],
        answer: "C. S3 Standard-IA",
        explanation: "S3 Standard-IA (Infrequent Access) is designed for long-term storage with infrequent access but still provides high availability and durability."
    }
];
