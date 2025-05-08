// Subdomain 4.2: Design cost-optimized storage solutions

export const solutionsArchitectStorageSolutions = [
{
    id: 21,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Storage Classes",
    question: "Which S3 storage class provides the lowest cost for data that is accessed once per quarter?",
    options: [
        "A. S3 Standard",
        "B. S3 Intelligent-Tiering",
        "C. S3 One Zone-IA",
        "D. S3 Glacier"
    ],
    answer: "D. S3 Glacier",
    explanation: "S3 Glacier is designed for data archiving with very infrequent access patterns (quarterly access qualifies). It offers the lowest storage costs among the options listed, though it has higher retrieval costs and longer retrieval times compared to more frequently accessed storage classes."
},
{
    id: 22,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Lifecycle Policies",
    question: "How can S3 Lifecycle policies help optimize storage costs?",
    options: [
        "A. By automatically deleting all objects after a fixed period",
        "B. By automatically transitioning objects to less expensive storage classes based on age",
        "C. By compressing objects to reduce storage size",
        "D. By deduplicating identical objects"
    ],
    answer: "B. By automatically transitioning objects to less expensive storage classes based on age",
    explanation: "S3 Lifecycle policies allow you to automatically transition objects to less expensive storage classes as they age (e.g., from Standard to Infrequent Access after 30 days, then to Glacier after 90 days), or expire (delete) objects, reducing storage costs without manual intervention."
},
{
    id: 23,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "EBS Volume Types",
    question: "Which EBS volume type provides the lowest cost per GB for infrequently accessed workloads?",
    options: [
        "A. General Purpose SSD (gp2/gp3)",
        "B. Provisioned IOPS SSD (io1/io2)",
        "C. Throughput Optimized HDD (st1)",
        "D. Cold HDD (sc1)"
    ],
    answer: "D. Cold HDD (sc1)",
    explanation: "Cold HDD (sc1) volumes provide the lowest cost per GB of all EBS volume types. They are designed for less frequently accessed workloads where the lowest storage cost is important, such as colder data requiring fewer scans per day."
},
{
    id: 24,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "EBS Snapshots",
    question: "Which practice helps optimize costs when using EBS snapshots?",
    options: [
        "A. Taking snapshots every hour",
        "B. Using incremental snapshots and deleting unnecessary snapshots",
        "C. Always creating full snapshots",
        "D. Storing all snapshots indefinitely"
    ],
    answer: "B. Using incremental snapshots and deleting unnecessary snapshots",
    explanation: "EBS snapshots are incremental; only the blocks that have changed since your last snapshot are saved. To optimize costs, regularly delete unnecessary snapshots and implement lifecycle policies to automate snapshot management, retaining only what you need for your recovery objectives."
},
{
    id: 25,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Request Pricing",
    question: "Which S3 access pattern would result in higher costs?",
    options: [
        "A. Fewer large objects",
        "B. Many small objects",
        "C. Both access patterns cost the same",
        "D. Access pattern has no impact on cost"
    ],
    answer: "B. Many small objects",
    explanation: "S3 charges for both storage and requests. Storing many small objects costs more than storing fewer large objects of the same total size because you pay for each PUT, GET, and other API requests. With many small objects, you'll have more requests, increasing your cost."
},
{
    id: 26,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Intelligent-Tiering",
    question: "Which S3 storage class is designed to automatically optimize costs for data with unknown or changing access patterns?",
    options: [
        "A. S3 Standard",
        "B. S3 One Zone-IA",
        "C. S3 Intelligent-Tiering",
        "D. S3 Glacier Deep Archive"
    ],
    answer: "C. S3 Intelligent-Tiering",
    explanation: "S3 Intelligent-Tiering automatically moves objects between two access tiers (frequent and infrequent) based on changing access patterns. This class is ideal when access patterns are unknown or unpredictable, as it optimizes costs automatically without performance impact or operational overhead."
},
{
    id: 27,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "RDS Storage Optimization",
    question: "Which feature helps optimize storage costs for Amazon RDS databases?",
    options: [
        "A. Multi-AZ deployments",
        "B. Read Replicas",
        "C. Storage autoscaling",
        "D. Automated backups with storage optimization"
    ],
    answer: "C. Storage autoscaling",
    explanation: "RDS Storage autoscaling automatically increases storage when the system detects you are running out of free database space. This helps optimize costs by letting you start with minimal storage and scale only when needed, avoiding over-provisioning storage upfront."
},
{
    id: 28,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "DynamoDB On-Demand Capacity",
    question: "Under which scenario is DynamoDB On-Demand capacity mode more cost-effective than Provisioned capacity?",
    options: [
        "A. Predictable application traffic",
        "B. Steady, consistent database traffic",
        "C. Applications with consistent, heavy traffic",
        "D. Unpredictable workloads with variable traffic patterns"
    ],
    answer: "D. Unpredictable workloads with variable traffic patterns",
    explanation: "DynamoDB On-Demand capacity mode is more cost-effective for unpredictable workloads with variable traffic patterns, as you only pay for what you use without needing to provision for peak capacity. For consistent, predictable traffic, Provisioned capacity typically costs less."
},
{
    id: 29,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "EFS Storage Classes",
    question: "Which EFS storage class should you use for files that are accessed less than once per month?",
    options: [
        "A. EFS Standard",
        "B. EFS Standard-IA",
        "C. EFS One Zone",
        "D. EFS One Zone-IA"
    ],
    answer: "B. EFS Standard-IA",
    explanation: "EFS Standard-IA (Infrequent Access) provides cost-optimized storage for files not accessed every day, with lower storage costs but higher retrieval costs. For files accessed less than once per month, the storage cost savings of Standard-IA would outweigh the higher access costs."
},
{
    id: 30,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Transfer Acceleration",
    question: "When is S3 Transfer Acceleration a cost-effective solution?",
    options: [
        "A. For all S3 data transfers",
        "B. For transferring small objects within the same region",
        "C. For transferring large files across geographical distances",
        "D. For accessing objects from a CloudFront distribution"
    ],
    answer: "C. For transferring large files across geographical distances",
    explanation: "S3 Transfer Acceleration is cost-effective for transferring large files across geographic distances, as the performance benefits outweigh the additional cost. It uses edge locations to accelerate uploads to S3, which is particularly valuable when transferring data across continents."
},
{
    id: 31,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Cross-Region Replication",
    question: "Which practice helps reduce costs when using S3 Cross-Region Replication (CRR)?",
    options: [
        "A. Replicating all objects to all AWS regions",
        "B. Using S3 Standard storage class for all replicated objects",
        "C. Using replication rules with object filters to replicate only necessary objects",
        "D. Enabling replication for objects stored in S3 Glacier"
    ],
    answer: "C. Using replication rules with object filters to replicate only necessary objects",
    explanation: "Using S3 replication rules with prefix or tag filters allows you to selectively replicate only the necessary objects rather than entire buckets. This reduces the amount of data transferred and stored in the destination region, optimizing cross-region data transfer and storage costs."
},
{
    id: 32,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "AWS Storage Gateway",
    question: "Which AWS Storage Gateway type is most cost-effective for keeping frequently accessed files stored locally while backing up to S3?",
    options: [
        "A. File Gateway",
        "B. Volume Gateway in stored mode",
        "C. Volume Gateway in cached mode",
        "D. Tape Gateway"
    ],
    answer: "A. File Gateway",
    explanation: "File Gateway provides a cost-effective way to store frequently accessed files locally while backing up to S3. It maintains a local cache of recently used data for low-latency access while using S3 for durable, cost-effective backup storage, optimizing both performance and cost."
},
{
    id: 33,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "DynamoDB Time to Live (TTL)",
    question: "How does DynamoDB's Time to Live (TTL) feature help optimize costs?",
    options: [
        "A. By automatically rotating encryption keys",
        "B. By compressing data to reduce storage size",
        "C. By automatically deleting expired items from tables",
        "D. By optimizing read/write capacity units"
    ],
    answer: "C. By automatically deleting expired items from tables",
    explanation: "DynamoDB Time to Live (TTL) automatically deletes expired items from your tables, helping to reduce storage costs by removing data that's no longer needed. This is particularly useful for session data, event logs, and temporary data that has a limited relevant lifespan."
},
{
    id: 34,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "Amazon FSx vs. EFS",
    question: "Which AWS storage service is more cost-effective for Windows file shares?",
    options: [
        "A. Amazon EBS",
        "B. Amazon EFS",
        "C. Amazon FSx for Windows File Server",
        "D. Amazon S3"
    ],
    answer: "C. Amazon FSx for Windows File Server",
    explanation: "Amazon FSx for Windows File Server is more cost-effective for Windows file shares compared to adapting other AWS storage services, as it natively supports SMB protocol, Windows NTFS, and Active Directory integration, providing better performance and compatibility for Windows workloads."
},
{
    id: 35,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "RDS Reserved Instances",
    question: "Which approach can help optimize the cost of running Amazon RDS databases?",
    options: [
        "A. Always using Multi-AZ deployments",
        "B. Purchasing RDS Reserved Instances for steady-state databases",
        "C. Using Standard storage for all databases",
        "D. Running all databases on the largest available instance class"
    ],
    answer: "B. Purchasing RDS Reserved Instances for steady-state databases",
    explanation: "For databases with predictable, steady-state usage, purchasing RDS Reserved Instances can provide significant discounts (up to 72%) compared to On-Demand pricing. This is ideal for production databases with stable workloads that will run for extended periods."
},
{
    id: 36,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "S3 Multipart Upload",
    question: "How can using S3 Multipart Upload help optimize costs?",
    options: [
        "A. By automatically compressing files before upload",
        "B. By reducing the storage cost per GB",
        "C. By reducing failed uploads and the need to restart large uploads",
        "D. By automatically selecting the cheapest storage class"
    ],
    answer: "C. By reducing failed uploads and the need to restart large uploads",
    explanation: "S3 Multipart Upload allows you to upload large objects in parts, providing better fault tolerance. If a part fails during transmission, you only need to retransmit that part rather than the entire object. This reduces data transfer costs associated with failed uploads and improves the efficiency of large data transfers."
},
{
    id: 37,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "EBS Snapshot Archive",
    question: "Which EBS snapshot feature provides the lowest cost for long-term retention?",
    options: [
        "A. Standard snapshot tier",
        "B. Snapshot archive tier",
        "C. Fast snapshot restore",
        "D. Snapshot lifecycle policies"
    ],
    answer: "B. Snapshot archive tier",
    explanation: "The EBS Snapshot Archive tier offers a 75% cost reduction for snapshots that need to be retained for long periods (months or years) but rarely need to be restored. It has a 24-72 hour restoration period but significantly reduces the cost of long-term snapshot storage."
},
{
    id: 38,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "Glacier Retrieval Options",
    question: "Which S3 Glacier retrieval option provides the lowest cost?",
    options: [
        "A. Expedited retrievals",
        "B. Standard retrievals",
        "C. Bulk retrievals",
        "D. All retrieval options cost the same"
    ],
    answer: "C. Bulk retrievals",
    explanation: "Bulk retrievals from S3 Glacier provide the lowest cost option for accessing archived data, with retrieval times of 5-12 hours. This is ideal for cost-sensitive use cases where retrieval time is not critical, as it offers significant savings compared to faster retrieval options."
},
{
    id: 39,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "Data Transfer Costs",
    question: "Which data transfer method incurs the lowest cost when transferring large amounts of data from an on-premises data center to Amazon S3?",
    options: [
        "A. Direct internet transfer",
        "B. AWS Direct Connect",
        "C. AWS Snowball",
        "D. AWS Storage Gateway"
    ],
    answer: "C. AWS Snowball",
    explanation: "For very large data transfers (terabytes to petabytes), AWS Snowball typically provides the lowest cost by avoiding internet data transfer fees. While it includes service and device fees, the elimination of bandwidth costs for large transfers usually makes it more economical than internet-based transfers."
},
{
    id: 40,
    subDomain: "4.2 Design cost-optimized storage solutions",
    criticalTopic: "Backup Optimization",
    question: "Which AWS service can help optimize backup costs across multiple AWS services?",
    options: [
        "A. AWS Backup",
        "B. Amazon S3",
        "C. AWS Storage Gateway",
        "D. Amazon EBS"
    ],
    answer: "A. AWS Backup",
    explanation: "AWS Backup provides a centralized backup service that helps optimize costs through policy-based backup management across multiple AWS services. It enables centralized lifecycle management, cross-region/account backup, and consistent backup policies, reducing administrative overhead and preventing over-retention of backups."
},
];