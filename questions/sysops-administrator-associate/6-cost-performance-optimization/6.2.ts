// Cost and Performance Optimization - Implement performance optimization strategies

export const sysOpsPerformanceOptimization = [
    {
        id: 1,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Compute Resources Optimization",
        question: "How can you recommend the right compute resources for your workloads?",
        options: [
            "A. By reviewing AWS Config Rules",
            "B. By using AWS Compute Optimizer to analyze performance metrics",
            "C. By checking the number of EC2 instances manually",
            "D. By using Elastic Beanstalk scaling policies"
        ],
        answer: "B. By using AWS Compute Optimizer to analyze performance metrics",
        explanation: "AWS Compute Optimizer provides recommendations for optimizing compute resources based on workload performance data."
    },
    {
        id: 2,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon EBS Performance",
        question: "Which metric is most useful for identifying potential performance bottlenecks in Amazon Elastic Block Store (EBS)?",
        options: [
            "A. VolumeWriteOps",
            "B. VolumeIdleTime",
            "C. VolumeReadOps",
            "D. VolumeQueueLength"
        ],
        answer: "D. VolumeQueueLength",
        explanation: "The VolumeQueueLength metric indicates how many pending I/O requests are waiting to be processed, which can highlight performance bottlenecks."
    },
    {
        id: 3,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "S3 Transfer Acceleration",
        question: "How does Amazon S3 Transfer Acceleration improve performance?",
        options: [
            "A. By automatically adjusting bucket size",
            "B. By speeding up data uploads to S3 using CloudFront’s global edge locations",
            "C. By reducing storage costs",
            "D. By enabling versioning on all S3 buckets"
        ],
        answer: "B. By speeding up data uploads to S3 using CloudFront’s global edge locations",
        explanation: "S3 Transfer Acceleration uses Amazon CloudFront edge locations to speed up data transfers to and from S3, especially over long distances."
    },
    {
        id: 4,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "S3 Multipart Uploads",
        question: "Why should you use S3 Multipart Uploads for large objects?",
        options: [
            "A. To increase data encryption strength",
            "B. To improve upload performance and reliability",
            "C. To reduce overall storage costs",
            "D. To automatically archive data to Glacier"
        ],
        answer: "B. To improve upload performance and reliability",
        explanation: "S3 Multipart Uploads allows large objects to be uploaded in smaller, more manageable parts, improving the reliability and speed of uploads."
    },
    {
        id: 5,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon RDS Performance Insights",
        question: "What feature of Amazon RDS provides real-time insights into database performance issues?",
        options: [
            "A. Amazon RDS Proxy",
            "B. Amazon CloudWatch",
            "C. Amazon RDS Performance Insights",
            "D. AWS Config"
        ],
        answer: "C. Amazon RDS Performance Insights",
        explanation: "Amazon RDS Performance Insights provides real-time database performance metrics, helping identify bottlenecks and improve overall performance."
    },
    {
        id: 6,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon RDS Proxy",
        question: "How does Amazon RDS Proxy help optimize database performance?",
        options: [
            "A. By encrypting all data at rest",
            "B. By improving application scalability by pooling database connections",
            "C. By reducing overall storage costs",
            "D. By automatically scaling read replicas"
        ],
        answer: "B. By improving application scalability by pooling database connections",
        explanation: "Amazon RDS Proxy helps optimize performance by pooling database connections, reducing the overhead of opening and closing connections frequently."
    },
    {
        id: 7,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Enhanced Networking for EC2",
        question: "What is the key benefit of enabling Elastic Network Adapter (ENA) on EC2 instances?",
        options: [
            "A. It increases the number of vCPUs available",
            "B. It provides high throughput and low latency networking",
            "C. It allows automatic scaling based on network traffic",
            "D. It reduces EC2 instance costs"
        ],
        answer: "B. It provides high throughput and low latency networking",
        explanation: "Enabling ENA on EC2 instances enhances network performance by providing high throughput and low latency connections, making it ideal for high-performance workloads."
    },
    {
        id: 8,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "EC2 Instance Store",
        question: "What is a key difference between EC2 Instance Store and EBS volumes?",
        options: [
            "A. Instance Store data persists after instance termination",
            "B. Instance Store provides lower-latency access compared to EBS",
            "C. EBS provides faster data read/write speeds than Instance Store",
            "D. EBS is automatically backed up to S3"
        ],
        answer: "B. Instance Store provides lower-latency access compared to EBS",
        explanation: "Instance Store provides temporary block storage directly attached to EC2 instances with lower-latency access, ideal for temporary data or high-performance workloads."
    },
    {
        id: 9,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Placement Groups",
        question: "How do placement groups improve performance for EC2 instances?",
        options: [
            "A. By spreading instances across different regions",
            "B. By grouping instances in a single Availability Zone for low-latency communication",
            "C. By automatically scaling instances based on demand",
            "D. By allowing instances to share a single IAM role"
        ],
        answer: "B. By grouping instances in a single Availability Zone for low-latency communication",
        explanation: "Placement groups allow EC2 instances to be placed in close proximity to each other in a single Availability Zone, optimizing network performance for low-latency communication."
    },
    {
        id: 10,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "EBS Volume Types",
        question: "Which Amazon EBS volume type provides the best performance for high-throughput workloads?",
        options: [
            "A. General Purpose SSD (gp2)",
            "B. Provisioned IOPS SSD (io1)",
            "C. Magnetic (standard)",
            "D. Throughput Optimized HDD (st1)"
        ],
        answer: "B. Provisioned IOPS SSD (io1)",
        explanation: "Provisioned IOPS SSD (io1) is designed for high-performance applications requiring high throughput and low-latency access, making it ideal for intensive workloads."
    },
    {
        id: 11,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Auto Scaling Groups",
        question: "What is the primary function of an Auto Scaling Group in AWS?",
        options: [
            "A. To automatically monitor network traffic",
            "B. To distribute traffic across regions",
            "C. To scale EC2 instances up and down based on demand",
            "D. To replicate data across Availability Zones"
        ],
        answer: "C. To scale EC2 instances up and down based on demand",
        explanation: "An Auto Scaling Group automatically adjusts the number of EC2 instances based on demand, ensuring optimal performance and cost efficiency."
    },
    {
        id: 12,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Elastic Load Balancing",
        question: "How can an Elastic Load Balancer improve the performance of an application?",
        options: [
            "A. By distributing incoming traffic across multiple instances",
            "B. By scaling instances vertically",
            "C. By compressing network traffic",
            "D. By automatically upgrading instances to the latest version"
        ],
        answer: "A. By distributing incoming traffic across multiple instances",
        explanation: "An Elastic Load Balancer distributes incoming application traffic across multiple EC2 instances, improving availability and performance."
    },
    {
        id: 13,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "AWS Lambda Cold Start",
        question: "What is the 'cold start' problem in AWS Lambda?",
        options: [
            "A. It refers to the delay when scaling EC2 instances in response to increased load.",
            "B. It is the delay when a Lambda function is invoked after a period of inactivity.",
            "C. It is a network delay when sending requests to S3.",
            "D. It refers to a delay in Route 53 DNS propagation."
        ],
        answer: "B. It is the delay when a Lambda function is invoked after a period of inactivity.",
        explanation: "The 'cold start' problem occurs when a Lambda function is invoked after a period of inactivity, causing a slight delay as the container is initialized."
    },
    {
        id: 14,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Provisioned Throughput in DynamoDB",
        question: "How can you avoid throttling issues in Amazon DynamoDB when handling increased traffic?",
        options: [
            "A. Enable DynamoDB Accelerator (DAX)",
            "B. Increase the provisioned throughput for the table",
            "C. Use AWS Lambda to handle the additional load",
            "D. Implement CloudFront caching"
        ],
        answer: "B. Increase the provisioned throughput for the table",
        explanation: "By increasing the provisioned throughput in DynamoDB, you can ensure the table can handle the increased traffic without causing throttling issues."
    },
    {
        id: 15,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Enhanced Networking for EC2",
        question: "Which Amazon EC2 feature provides lower latency and higher packet-per-second performance?",
        options: [
            "A. Amazon EC2 Auto Scaling",
            "B. Enhanced Networking with Elastic Network Adapter (ENA)",
            "C. Amazon CloudFront",
            "D. Placement Groups"
        ],
        answer: "B. Enhanced Networking with Elastic Network Adapter (ENA)",
        explanation: "Enhanced Networking with ENA provides higher bandwidth and lower latency, making it suitable for high-performance applications."
    },
    {
        id: 16,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Instance Types",
        question: "Which EC2 instance family is most suitable for memory-intensive workloads?",
        options: [
            "A. M5",
            "B. T3",
            "C. R5",
            "D. C5"
        ],
        answer: "C. R5",
        explanation: "The R5 instance family is optimized for memory-intensive applications and provides high memory-to-vCPU ratios."
    },
    {
        id: 17,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "AWS Global Accelerator",
        question: "What is the primary purpose of AWS Global Accelerator?",
        options: [
            "A. To improve application availability by routing traffic to multiple AWS regions",
            "B. To scale EC2 instances globally",
            "C. To accelerate database queries across regions",
            "D. To increase the performance of Lambda functions"
        ],
        answer: "A. To improve application availability by routing traffic to multiple AWS regions",
        explanation: "AWS Global Accelerator improves application availability and performance by routing traffic to the optimal AWS region."
    },
    {
        id: 18,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Elastic File System (EFS) Throughput Modes",
        question: "Which throughput mode for Amazon EFS is best suited for applications with high performance requirements?",
        options: [
            "A. Bursting Throughput",
            "B. Provisioned Throughput",
            "C. Elastic Throughput",
            "D. Standard Throughput"
        ],
        answer: "B. Provisioned Throughput",
        explanation: "Provisioned Throughput allows you to specify the throughput you want for your file system, making it ideal for applications with high performance requirements."
    },
    {
        id: 19,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "EC2 Auto Scaling Cooldowns",
        question: "What is the purpose of a cooldown period in an EC2 Auto Scaling Group?",
        options: [
            "A. To prevent instances from being terminated",
            "B. To avoid launching or terminating instances too frequently",
            "C. To automatically upgrade instances",
            "D. To control the maximum number of EC2 instances"
        ],
        answer: "B. To avoid launching or terminating instances too frequently",
        explanation: "A cooldown period helps prevent excessive scaling activities by allowing time for newly launched instances to become stable before triggering further scaling actions."
    },
    {
        id: 20,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "AWS CloudFront Caching",
        question: "How can you optimize performance for frequently requested content using CloudFront?",
        options: [
            "A. By enabling Transfer Acceleration",
            "B. By using a higher TTL value for cached objects",
            "C. By enabling versioning for S3 objects",
            "D. By increasing the number of CloudFront edge locations"
        ],
        answer: "B. By using a higher TTL value for cached objects",
        explanation: "Using a higher TTL value for cached objects in CloudFront ensures that content is cached longer at the edge locations, reducing latency for frequently requested content."
    },
    {
        id: 21,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon EC2 Instance Types",
        question: "Which EC2 instance family is optimized for compute-intensive applications?",
        options: [
            "A. T2",
            "B. C5",
            "C. R5",
            "D. M5"
        ],
        answer: "B. C5",
        explanation: "C5 instances are optimized for compute-intensive workloads, offering high performance for applications such as batch processing and high-performance computing (HPC)."
    },
    {
        id: 22,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon RDS Read Replicas",
        question: "How can you improve the read performance of an RDS database?",
        options: [
            "A. By creating Amazon RDS Read Replicas",
            "B. By upgrading to a larger instance size",
            "C. By switching to Amazon S3 for storage",
            "D. By using a different region"
        ],
        answer: "A. By creating Amazon RDS Read Replicas",
        explanation: "Read Replicas can be created in Amazon RDS to offload read operations from the primary instance, improving overall read performance."
    },
    {
        id: 23,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon EC2 Spot Instances",
        question: "What is one drawback of using EC2 Spot Instances for performance optimization?",
        options: [
            "A. Spot Instances have limited availability",
            "B. Spot Instances cannot be terminated manually",
            "C. Spot Instances are only available in specific regions",
            "D. Spot Instances can be interrupted by AWS with short notice"
        ],
        answer: "D. Spot Instances can be interrupted by AWS with short notice",
        explanation: "While EC2 Spot Instances offer cost savings, they come with the drawback of being interruptible if AWS needs the capacity."
    },
    {
        id: 24,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "DynamoDB Auto Scaling",
        question: "How does Auto Scaling in DynamoDB help optimize performance?",
        options: [
            "A. By automatically adjusting throughput capacity based on traffic patterns",
            "B. By reducing storage costs",
            "C. By distributing traffic across multiple tables",
            "D. By compressing data before storage"
        ],
        answer: "A. By automatically adjusting throughput capacity based on traffic patterns",
        explanation: "DynamoDB Auto Scaling dynamically adjusts the provisioned read and write throughput capacity based on actual traffic patterns, optimizing performance without manual intervention."
    },
    {
        id: 25,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "EC2 Instance Refresh",
        question: "How can EC2 Auto Scaling Instance Refresh improve the performance of your application?",
        options: [
            "A. By replacing outdated EC2 instances with new ones in a controlled manner",
            "B. By automatically resizing instances based on CPU utilization",
            "C. By refreshing S3 data stored by the instance",
            "D. By reattaching EBS volumes for improved performance"
        ],
        answer: "A. By replacing outdated EC2 instances with new ones in a controlled manner",
        explanation: "Instance Refresh allows you to update Auto Scaling group instances in a controlled manner, improving performance and applying updates with minimal disruption."
    },
    {
        id: 26,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon ElastiCache",
        question: "How does Amazon ElastiCache improve the performance of applications?",
        options: [
            "A. By caching frequently accessed data in memory",
            "B. By storing backup data for disaster recovery",
            "C. By compressing data before sending it over the network",
            "D. By automatically scaling EC2 instances"
        ],
        answer: "A. By caching frequently accessed data in memory",
        explanation: "Amazon ElastiCache improves application performance by caching frequently accessed data in memory, reducing the time it takes to retrieve data from databases or other sources."
    },
    {
        id: 27,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon CloudWatch Alarms",
        question: "How can CloudWatch Alarms be used to improve performance optimization?",
        options: [
            "A. By automatically deleting underutilized resources",
            "B. By notifying you when resource utilization crosses certain thresholds",
            "C. By optimizing EBS performance",
            "D. By creating backups based on performance metrics"
        ],
        answer: "B. By notifying you when resource utilization crosses certain thresholds",
        explanation: "CloudWatch Alarms can notify you when resource utilization crosses specified thresholds, enabling you to take corrective actions to optimize performance."
    },
    {
        id: 28,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon CloudFront",
        question: "How can Amazon CloudFront improve application performance?",
        options: [
            "A. By storing application backups across regions",
            "B. By caching content at edge locations closer to users",
            "C. By dynamically resizing EC2 instances based on load",
            "D. By reducing storage costs"
        ],
        answer: "B. By caching content at edge locations closer to users",
        explanation: "Amazon CloudFront caches content at globally distributed edge locations, reducing latency by serving content from locations closer to users."
    },
    {
        id: 29,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "Amazon RDS Multi-AZ",
        question: "How does enabling Multi-AZ deployments in Amazon RDS optimize database performance?",
        options: [
            "A. It allows read queries to be handled by both instances in the deployment",
            "B. It automatically scales storage based on demand",
            "C. It improves database availability by providing a standby replica in another Availability Zone",
            "D. It allows automatic backup to S3 for performance gains"
        ],
        answer: "C. It improves database availability by providing a standby replica in another Availability Zone",
        explanation: "Multi-AZ deployments in Amazon RDS improve availability and durability by automatically creating a standby replica in another Availability Zone, ensuring failover in the event of an outage."
    },
    {
        id: 30,
        subDomain: "6.2 Implement performance optimization strategies",
        criticalTopic: "EC2 Hibernate",
        question: "How can EC2 Hibernate optimize performance for stateful applications?",
        options: [
            "A. By reducing the time it takes to start an EC2 instance with a previously saved state",
            "B. By automatically scaling instances based on traffic",
            "C. By reducing storage costs by compressing memory data",
            "D. By improving networking performance by caching IP addresses"
        ],
        answer: "A. By reducing the time it takes to start an EC2 instance with a previously saved state",
        explanation: "EC2 Hibernate preserves the state of an instance and quickly restarts it from where it left off, improving performance for stateful applications that require faster restarts."
    }
];
