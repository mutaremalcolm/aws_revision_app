// Subdomain 3.1: Design high-performing and scalable solutions

export const solutionsArchitectScaleableSolutions = [
{
    id: 1,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "EC2 Instance Types",
    question: "Which EC2 instance family is optimized for compute-intensive workloads?",
    options: [
        "A. T instance family",
        "B. R instance family",
        "C. C instance family",
        "D. D instance family"
    ],
    answer: "C. C instance family",
    explanation: "The C (Compute) instance family is optimized for compute-intensive workloads and delivers high-performance processors. They are ideal for batch processing, scientific modeling, machine learning, and other compute-bound applications."
},
{
    id: 2,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "EC2 Instance Memory Optimization",
    question: "Which EC2 instance family is designed for memory-intensive applications like in-memory databases?",
    options: [
        "A. C instance family",
        "B. R instance family",
        "C. I instance family",
        "D. G instance family"
    ],
    answer: "B. R instance family",
    explanation: "The R (Memory) instance family is optimized for memory-intensive applications. They are well-suited for high-performance databases, distributed in-memory caches, and real-time big data analytics."
},
{
    id: 3,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon RDS Performance",
    question: "Which feature of Amazon RDS can help improve read performance for read-heavy database workloads?",
    options: [
        "A. Multi-AZ deployment",
        "B. Read Replicas",
        "C. Automatic backups",
        "D. Encryption at rest"
    ],
    answer: "B. Read Replicas",
    explanation: "Read Replicas allow you to create read-only copies of your database that can serve read queries. This offloads read traffic from the primary database, improving performance for read-heavy workloads and scaling read capacity."
},
{
    id: 4,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon S3 Performance",
    question: "Which S3 feature should you use to improve performance for frequently accessed data?",
    options: [
        "A. S3 Transfer Acceleration",
        "B. S3 Standard-IA storage class",
        "C. S3 Glacier storage class",
        "D. S3 Cross-Region Replication"
    ],
    answer: "A. S3 Transfer Acceleration",
    explanation: "S3 Transfer Acceleration enables fast, easy, and secure transfers of files to and from Amazon S3 by taking advantage of Amazon CloudFront's globally distributed edge locations, improving performance for frequently accessed data."
},
{
    id: 5,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon CloudFront Performance",
    question: "How does Amazon CloudFront improve application performance?",
    options: [
        "A. By distributing content to edge locations closer to users",
        "B. By automatically scaling database instances",
        "C. By compressing application code",
        "D. By providing dedicated compute capacity"
    ],
    answer: "A. By distributing content to edge locations closer to users",
    explanation: "Amazon CloudFront is a content delivery network (CDN) that delivers content from edge locations closest to users, reducing latency and improving performance. It caches content at these edge locations, reducing the load on origin servers."
},
{
    id: 6,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon DynamoDB Performance",
    question: "Which DynamoDB feature provides in-memory acceleration for tables?",
    options: [
        "A. DynamoDB Streams",
        "B. DynamoDB Accelerator (DAX)",
        "C. DynamoDB Global Tables",
        "D. DynamoDB Auto Scaling"
    ],
    answer: "B. DynamoDB Accelerator (DAX)",
    explanation: "DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement by reducing response times from milliseconds to microseconds, even at millions of requests per second."
},
{
    id: 7,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "AWS Global Accelerator",
    question: "Which AWS service improves global application performance by optimizing the path from users to your applications?",
    options: [
        "A. Amazon CloudFront",
        "B. AWS Global Accelerator",
        "C. Amazon Route 53",
        "D. AWS PrivateLink"
    ],
    answer: "B. AWS Global Accelerator",
    explanation: "AWS Global Accelerator is a networking service that improves the availability and performance of applications by using the AWS global network to optimize the path from users to your applications, directing traffic to the optimal AWS endpoint."
},
{
    id: 8,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "EBS Volume Types",
    question: "Which EBS volume type provides the highest performance for workloads requiring low latency and high throughput?",
    options: [
        "A. General Purpose SSD (gp2)",
        "B. Provisioned IOPS SSD (io1/io2)",
        "C. Throughput Optimized HDD (st1)",
        "D. Cold HDD (sc1)"
    ],
    answer: "B. Provisioned IOPS SSD (io1/io2)",
    explanation: "Provisioned IOPS SSD (io1/io2) volumes are designed to meet the needs of I/O-intensive workloads that require consistent and low-latency performance. They provide the highest performance of all EBS volume types, with the ability to provision specific IOPS levels."
},
{
    id: 9,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "EC2 Instance Store",
    question: "Which storage option provides the highest I/O performance for EC2 instances?",
    options: [
        "A. Amazon EBS General Purpose SSD volumes",
        "B. Amazon EFS",
        "C. EC2 Instance Store volumes",
        "D. Amazon S3"
    ],
    answer: "C. EC2 Instance Store volumes",
    explanation: "EC2 Instance Store volumes provide the highest I/O performance for EC2 instances as they are physically attached to the host computer. They provide block-level storage with very low latency, but are ephemeral, meaning data is lost when the instance stops."
},
{
    id: 10,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon Aurora Performance",
    question: "Which statement accurately describes Amazon Aurora's performance characteristics compared to standard MySQL or PostgreSQL?",
    options: [
        "A. Aurora provides up to 5x the throughput of standard MySQL and 3x the throughput of standard PostgreSQL",
        "B. Aurora is slower but more cost-effective than standard MySQL and PostgreSQL",
        "C. Aurora and standard MySQL/PostgreSQL have identical performance profiles",
        "D. Aurora is only faster when deployed in multiple regions"
    ],
    answer: "A. Aurora provides up to 5x the throughput of standard MySQL and 3x the throughput of standard PostgreSQL",
    explanation: "Amazon Aurora is designed for high performance, providing up to 5x the throughput of standard MySQL and up to 3x the throughput of standard PostgreSQL. This is achieved through a distributed, fault-tolerant, self-healing storage system that auto-scales up to 128TB per database instance."
},
{
    id: 11,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Network Performance",
    question: "Which EC2 networking feature provides enhanced networking with significantly higher packet per second (PPS) performance?",
    options: [
        "A. VPC Flow Logs",
        "B. Elastic Network Adapter (ENA)",
        "C. Security Groups",
        "D. Network ACLs"
    ],
    answer: "B. Elastic Network Adapter (ENA)",
    explanation: "Elastic Network Adapter (ENA) provides enhanced networking capabilities with higher bandwidth, packet per second (PPS) performance, and lower inter-instance latencies. ENA supports network speeds of up to 100 Gbps for supported instance types."
},
{
    id: 12,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Lambda Performance",
    question: "How can you improve the cold start performance of AWS Lambda functions?",
    options: [
        "A. Increase the function timeout",
        "B. Use Provisioned Concurrency",
        "C. Enable Lambda@Edge",
        "D. Use smaller deployment packages"
    ],
    answer: "B. Use Provisioned Concurrency",
    explanation: "Provisioned Concurrency keeps functions initialized and ready to respond to requests with consistent performance. This eliminates cold starts by ensuring that your function is always ready to respond to requests without initialization delay."
},
{
    id: 13,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon API Gateway Performance",
    question: "Which feature of Amazon API Gateway can improve performance by caching API responses?",
    options: [
        "A. API Gateway Stages",
        "B. API Gateway Throttling",
        "C. API Gateway Cache",
        "D. API Gateway Mapping Templates"
    ],
    answer: "C. API Gateway Cache",
    explanation: "API Gateway's caching feature allows you to cache endpoint responses, reducing the number of calls made to your backend integration and improving the latency of requests to your API. This is particularly useful for endpoints that return relatively static data."
},
{
    id: 14,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon ElastiCache Performance",
    question: "Which Amazon ElastiCache engine is best suited for complex data types and advanced data structures?",
    options: [
        "A. Memcached",
        "B. Redis",
        "C. Neptune",
        "D. DynamoDB"
    ],
    answer: "B. Redis",
    explanation: "Redis supports complex data structures like sorted sets, hashes, lists, and more, making it ideal for applications that need these advanced features. Memcached is simpler and is best for caching basic key-value pairs."
},
{
    id: 15,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "S3 Request Optimization",
    question: "Which technique should you use to improve Amazon S3 performance for high-request rates?",
    options: [
        "A. Using a single prefix for all objects",
        "B. Implementing sequential naming patterns",
        "C. Randomizing prefixes to distribute objects across partitions",
        "D. Limiting the number of objects per bucket"
    ],
    answer: "C. Randomizing prefixes to distribute objects across partitions",
    explanation: "Amazon S3 automatically partitions your bucket based on prefixes. Randomizing prefixes in object keys distributes requests across multiple partitions, allowing S3 to achieve higher request rates and better performance for high-request-rate workloads."
},
{
    id: 16,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Auto Scaling Policies",
    question: "Which Auto Scaling policy type should you use for workloads with predictable patterns based on time?",
    options: [
        "A. Target tracking scaling policy",
        "B. Step scaling policy",
        "C. Scheduled scaling policy",
        "D. Simple scaling policy"
    ],
    answer: "C. Scheduled scaling policy",
    explanation: "Scheduled scaling policies allow you to scale your application based on predictable load changes by setting your own scaling schedule. For example, you might increase capacity during business hours or weekly peaks, optimizing performance and cost."
},
{
    id: 17,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Database Indexing",
    question: "How do database indexes improve performance?",
    options: [
        "A. By compressing data to reduce storage costs",
        "B. By allowing faster data retrieval for specific queries",
        "C. By automatically encrypting sensitive data",
        "D. By distributing data across multiple regions"
    ],
    answer: "B. By allowing faster data retrieval for specific queries",
    explanation: "Database indexes improve query performance by allowing the database engine to find and retrieve specific rows much faster without scanning the entire table. However, they add overhead for write operations, so they should be strategically implemented."
},
{
    id: 18,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Amazon FSx Performance",
    question: "Which AWS storage service provides high-performance file systems for compute-intensive workloads?",
    options: [
        "A. Amazon EFS",
        "B. Amazon FSx",
        "C. Amazon S3",
        "D. Amazon EBS"
    ],
    answer: "B. Amazon FSx",
    explanation: "Amazon FSx provides high-performance, fully managed file systems. FSx for Lustre is designed for compute-intensive workloads like high-performance computing, machine learning, and media processing, offering high throughput and low latencies."
},
{
    id: 19,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "AWS Transit Gateway Performance",
    question: "How does AWS Transit Gateway help improve network performance in complex architectures?",
    options: [
        "A. By providing content caching at edge locations",
        "B. By enabling centralized routing between multiple VPCs and on-premises networks",
        "C. By automatically encrypting all network traffic",
        "D. By providing dedicated fiber connections to AWS"
    ],
    answer: "B. By enabling centralized routing between multiple VPCs and on-premises networks",
    explanation: "AWS Transit Gateway acts as a network transit hub that simplifies management and reduces operational costs by connecting VPCs and on-premises networks through a central point. This allows for better bandwidth utilization and reduced latency compared to individual peering connections."
},
{
    id: 20,
    subDomain: "3.1 Design high-performing and scalable solutions",
    criticalTopic: "Performance Efficiency Pillar",
    question: "According to AWS Well-Architected Framework, which best practice helps achieve performance efficiency?",
    options: [
        "A. Using managed services whenever possible",
        "B. Always choosing the largest instance sizes available",
        "C. Avoiding caching mechanisms to ensure data consistency",
        "D. Limiting the number of Availability Zones used"
    ],
    answer: "A. Using managed services whenever possible",
    explanation: "The Performance Efficiency pillar of the AWS Well-Architected Framework recommends using managed services whenever possible to reduce the operational burden of maintaining servers and optimize performance. This allows your team to focus on product development rather than infrastructure management."
},
];