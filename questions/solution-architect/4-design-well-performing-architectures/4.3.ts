// Subdomain 4.3: Design cost-optimized database solutions

export const solutionsArchitectDatabaseSolutions = [
{
    id: 41,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Database Instance Sizing",
    question: "What is the most cost-effective approach to size RDS database instances?",
    options: [
        "A. Always choosing the largest available instance type",
        "B. Choosing the smallest instance type regardless of workload",
        "C. Right-sizing based on performance metrics and scaling when necessary",
        "D. Provisioning for peak capacity plus 100% buffer"
    ],
    answer: "C. Right-sizing based on performance metrics and scaling when necessary",
    explanation: "Right-sizing RDS instances based on actual performance metrics (CPU, memory, I/O, connections) and scaling only when necessary is the most cost-effective approach. This avoids both over-provisioning (wasting resources) and under-provisioning (risking performance issues)."
},
{
    id: 42,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Aurora Serverless",
    question: "Which database workload is most cost-effectively served by Amazon Aurora Serverless?",
    options: [
        "A. High-volume, steady-state production databases",
        "B. Databases with unpredictable, intermittent usage patterns",
        "C. Data warehousing applications with complex analytical queries",
        "D. Databases requiring the absolute lowest latency"
    ],
    answer: "B. Databases with unpredictable, intermittent usage patterns",
    explanation: "Aurora Serverless is most cost-effective for databases with unpredictable, intermittent usage patterns. It automatically scales capacity based on demand and scales to zero during idle periods, charging only for resources used, making it ideal for development, testing, and applications with variable workloads."
},
{
    id: 43,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "DynamoDB Provisioned Capacity",
    question: "Which approach helps optimize cost when using DynamoDB with Provisioned capacity mode?",
    options: [
        "A. Always setting capacity at maximum expected peak",
        "B. Using the same capacity for all tables",
        "C. Using Auto Scaling to adjust capacity based on actual usage",
        "D. Manually adjusting capacity multiple times per day"
    ],
    answer: "C. Using Auto Scaling to adjust capacity based on actual usage",
    explanation: "DynamoDB Auto Scaling adjusts provisioned capacity automatically in response to actual traffic patterns, maintaining performance while minimizing costs. This prevents over-provisioning for peak capacity that's rarely needed while ensuring sufficient capacity for traffic spikes."
},
{
    id: 44,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "RDS Read Replicas for Scaling",
    question: "How can Amazon RDS Read Replicas help optimize costs?",
    options: [
        "A. By reducing the instance size needed for the primary database",
        "B. By eliminating the need for a primary database",
        "C. By offloading read traffic from the primary database to improve performance",
        "D. By providing automatic failover in case of primary database failure"
    ],
    answer: "C. By offloading read traffic from the primary database to improve performance",
    explanation: "RDS Read Replicas can offload read operations from the primary database, allowing you to scale read capacity horizontally instead of vertically. This often allows you to use a smaller primary instance, reducing costs while maintaining or improving performance for read-heavy workloads."
},
{
    id: 45,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Multi-AZ Deployments",
    question: "For which type of database is a Multi-AZ deployment most cost-effective?",
    options: [
        "A. Development and testing databases",
        "B. Production databases requiring high availability",
        "C. Read-only analytical databases",
        "D. Temporary databases"
    ],
    answer: "B. Production databases requiring high availability",
    explanation: "Multi-AZ deployments are most cost-effective for production databases requiring high availability. While they increase costs (approximately 2x the Single-AZ cost), the automated failover capability and elimination of downtime during maintenance make them worth the investment for critical production workloads."
},
{
    id: 46,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "DynamoDB Global Tables",
    question: "Which approach can help optimize costs when using DynamoDB Global Tables?",
    options: [
        "A. Replicating all tables to all AWS regions",
        "B. Using on-demand capacity for all replica tables",
        "C. Replicating only to regions where low-latency access is required",
        "D. Disabling strong consistency for all read operations"
    ],
    answer: "C. Replicating only to regions where low-latency access is required",
    explanation: "To optimize costs with DynamoDB Global Tables, replicate data only to regions where your application requires low-latency access. Each replica region incurs charges for read/write capacity and storage, so adding unnecessary regions significantly increases costs without providing benefit."
},
{
    id: 47,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Aurora Database Cloning",
    question: "How does Aurora database cloning help reduce costs compared to traditional database copying?",
    options: [
        "A. By reducing the hourly rate charged for Aurora instances",
        "B. By using copy-on-write protocol that only stores incremental changes",
        "C. By automatically downgrading the database instance class",
        "D. By compressing all data during the clone operation"
    ],
    answer: "B. By using copy-on-write protocol that only stores incremental changes",
    explanation: "Aurora database cloning uses a copy-on-write protocol that creates a new database without copying data. Storage is shared between the source and clone until changes are made, and only the changed data is stored separately. This significantly reduces both the time and storage costs compared to traditional database copying."
},
{
    id: 48,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Amazon Redshift Pricing Models",
    question: "Which Amazon Redshift pricing model is most cost-effective for unpredictable, intermittent analytics workloads?",
    options: [
        "A. Reserved Instances",
        "B. On-Demand pricing",
        "C. Redshift Spectrum",
        "D. Redshift Serverless"
    ],
    answer: "D. Redshift Serverless",
    explanation: "Redshift Serverless automatically scales and charges based on the workload, making it ideal for unpredictable, intermittent analytics needs. It eliminates the need to provision and manage clusters, and you only pay for the compute capacity used, optimizing costs for variable workloads."
},
{
    id: 49,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "RDS Storage Types",
    question: "Which RDS storage type offers the best balance between cost and performance for general-purpose databases?",
    options: [
        "A. Provisioned IOPS SSD",
        "B. General Purpose SSD",
        "C. Magnetic storage",
        "D. Cold HDD"
    ],
    answer: "B. General Purpose SSD",
    explanation: "General Purpose SSD provides a cost-effective balance of price and performance for most database workloads. It offers baseline performance of 3 IOPS/GB and can burst up to 3,000 IOPS when needed. Provisioned IOPS is more expensive and usually only necessary for I/O-intensive applications."
},
{
    id: 50,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "ElastiCache Scaling",
    question: "Which ElastiCache engine supports dynamic scaling to optimize costs based on demand?",
    options: [
        "A. Both Redis and Memcached",
        "B. Redis only",
        "C. Memcached only",
        "D. Neither Redis nor Memcached"
    ],
    answer: "C. Memcached only",
    explanation: "ElastiCache for Memcached supports dynamic scaling by adding or removing nodes as demand changes, which helps optimize costs by adjusting capacity based on need. ElastiCache for Redis supports scaling but requires more planning as it doesn't support automatic dynamic scaling in the same way."
},
{
    id: 51,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Database Migration Cost",
    question: "Which AWS service helps reduce costs when migrating databases to AWS?",
    options: [
        "A. AWS Database Migration Service (DMS)",
        "B. Amazon RDS Multi-AZ",
        "C. AWS Direct Connect",
        "D. Amazon Aurora"
    ],
    answer: "A. AWS Database Migration Service (DMS)",
    explanation: "AWS Database Migration Service (DMS) helps reduce migration costs by minimizing downtime during migrations, supporting heterogeneous migrations between different database platforms, and offering a free tier for migrations lasting six months or less, significantly reducing the cost and complexity of database migrations."
},
{
    id: 52,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "RDS Performance Insights",
    question: "How does RDS Performance Insights help optimize database costs?",
    options: [
        "A. By automatically scaling instance sizes",
        "B. By identifying performance issues and resource bottlenecks",
        "C. By compressing database storage",
        "D. By providing reserved instance recommendations"
    ],
    answer: "B. By identifying performance issues and resource bottlenecks",
    explanation: "RDS Performance Insights helps identify performance bottlenecks and resource constraints, allowing you to optimize database configuration and query performance. By pinpointing issues, you can avoid unnecessary instance scaling and focus on fixing specific problems, optimizing costs while improving performance."
},
{
    id: 53,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Database Backups",
    question: "Which approach provides the most cost-effective RDS backup strategy?",
    options: [
        "A. Taking full manual snapshots every hour",
        "B. Using automated backups with appropriate retention periods",
        "C. Disabling all backups to save on storage costs",
        "D. Creating cross-region copies of all snapshots"
    ],
    answer: "B. Using automated backups with appropriate retention periods",
    explanation: "Automated backups with appropriate retention periods provide a cost-effective backup strategy. They include daily backups and transaction logs allowing point-in-time recovery, with the first storage-size worth of backup storage included free. Setting appropriate retention periods (typically 7-14 days) prevents unnecessary storage costs."
},
{
    id: 54,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Aurora Capacity Units",
    question: "How do Aurora Serverless v2 capacity units help optimize database costs?",
    options: [
        "A. By requiring larger minimum instance sizes",
        "B. By charging a flat fee regardless of usage",
        "C. By scaling capacity in fine-grained increments to match workload",
        "D. By eliminating the need for storage altogether"
    ],
    answer: "C. By scaling capacity in fine-grained increments to match workload",
    explanation: "Aurora Serverless v2 capacity units allow the database to scale in 0.5 ACU increments, providing fine-grained scaling that closely matches your workload requirements. This results in better cost optimization compared to traditional instance-based scaling where you must choose from fixed instance sizes."
},
{
    id: 55,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Data Access Patterns",
    question: "Which database engine is most cost-effective for applications with key-value data access patterns?",
    options: [
        "A. Amazon RDS for MySQL",
        "B. Amazon RDS for PostgreSQL",
        "C. Amazon DynamoDB",
        "D. Amazon Neptune"
    ],
    answer: "C. Amazon DynamoDB",
    explanation: "DynamoDB is typically the most cost-effective option for key-value data access patterns. Its serverless NoSQL design eliminates the need to provision server capacity for relational database engines, and it automatically scales based on your access patterns, optimizing costs for key-value workloads."
},
{
    id: 56,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Data Archiving",
    question: "Which approach provides the most cost-effective solution for archiving rarely accessed relational database data?",
    options: [
        "A. Keeping all data in the primary database",
        "B. Moving historical data to a separate, smaller RDS instance",
        "C. Exporting historical data to S3 in a queryable format",
        "D. Replicating all data to multiple regions"
    ],
    answer: "C. Exporting historical data to S3 in a queryable format",
    explanation: "Exporting rarely accessed historical data to S3 in a queryable format (like Parquet) significantly reduces costs compared to keeping it in a database. You can use services like Athena or Redshift Spectrum to query this data when needed, paying only for storage and actual queries rather than continuously running database instances."
},
{
    id: 57,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Database Connection Pooling",
    question: "How does implementing connection pooling help optimize database costs?",
    options: [
        "A. By reducing the number of database instances needed",
        "B. By improving application performance without requiring larger instances",
        "C. By automatically backing up database changes",
        "D. By reducing storage costs through compression"
    ],
    answer: "B. By improving application performance without requiring larger instances",
    explanation: "Connection pooling improves efficiency by reusing database connections rather than creating new ones for each request. This reduces CPU and memory overhead on the database, improving performance without requiring larger, more expensive instance types, which directly translates to cost savings."
},
{
    id: 58,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Vertical vs. Horizontal Scaling",
    question: "Which scaling approach is generally more cost-effective for database workloads with heavy read requirements?",
    options: [
        "A. Vertical scaling (increasing instance size)",
        "B. Horizontal scaling (adding read replicas)",
        "C. Multi-AZ deployments",
        "D. Cross-region replication"
    ],
    answer: "B. Horizontal scaling (adding read replicas)",
    explanation: "Horizontal scaling with read replicas is generally more cost-effective for read-heavy workloads than vertical scaling. It allows you to distribute read traffic across multiple smaller instances (which have better price-performance) rather than continually increasing the size of a single primary instance."
},
{
    id: 59,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "DynamoDB Reserved Capacity",
    question: "When is purchasing DynamoDB Reserved Capacity most cost-effective?",
    options: [
        "A. For tables with unpredictable, highly variable traffic",
        "B. For tables with steady, predictable traffic",
        "C. For tables using on-demand capacity mode",
        "D. For temporary tables that will be deleted within a few months"
    ],
    answer: "B. For tables with steady, predictable traffic",
    explanation: "DynamoDB Reserved Capacity is most cost-effective for tables with steady, predictable traffic in provisioned capacity mode. It offers up to 77% discount on the normal price of provisioned capacity in exchange for a one-year or three-year commitment, significantly reducing costs for stable workloads."
},
{
    id: 60,
    subDomain: "4.3 Design cost-optimized database solutions",
    criticalTopic: "Redshift Query Optimization",
    question: "Which Redshift feature helps reduce costs by optimizing query performance?",
    options: [
        "A. Workload Management (WLM)",
        "B. Multi-AZ deployment",
        "C. Automatic table optimization",
        "D. Cross-region replication"
    ],
    answer: "A. Workload Management (WLM)",
    explanation: "Redshift Workload Management (WLM) helps optimize costs by managing resource allocation across different query types and user groups. By prioritizing critical queries, limiting resource-intensive operations, and preventing long-running queries from consuming excessive resources, WLM improves performance without requiring cluster scaling."
}
];