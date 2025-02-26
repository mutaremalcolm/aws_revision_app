// Reliability and Business Continuity - Implement backup and restore strategies

export const sysOpsBackupRestore = [
    {
        id: 1,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "AWS Backup Service",
        question: "Which AWS service provides centralized backup management for multiple AWS services?",
        options: [
            "A. Amazon S3",
            "B. AWS Backup",
            "C. Amazon EBS",
            "D. AWS CloudTrail"
        ],
        answer: "B. AWS Backup",
        explanation: "AWS Backup is a centralized backup service that allows you to automate and manage backups across multiple AWS services like EBS, RDS, DynamoDB, and S3."
    },
    {
        id: 2,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Automating Backups with AWS Backup",
        question: "Which of the following AWS services can be managed through AWS Backup for automated backups?",
        options: [
            "A. EC2 instances",
            "B. Amazon CloudFront",
            "C. Amazon RDS, Amazon S3, Amazon EFS",
            "D. Amazon Route 53"
        ],
        answer: "C. Amazon RDS, Amazon S3, Amazon EFS",
        explanation: "AWS Backup can be used to automate backups for multiple services, including Amazon RDS, Amazon S3, Amazon EFS, DynamoDB, and more."
    },
    {
        id: 3,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Amazon RDS Snapshots",
        question: "Which backup method is used to create a backup of an Amazon RDS instance?",
        options: [
            "A. Volume Snapshots",
            "B. Incremental Backups",
            "C. RDS Snapshots",
            "D. CloudFormation Stacks"
        ],
        answer: "C. RDS Snapshots",
        explanation: "Amazon RDS provides the ability to create snapshots of your database, which are stored as backups and can be used for restoring the database."
    },
    {
        id: 4,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "RDS Point-in-Time Restore",
        question: "What is the benefit of using the Point-in-Time Restore feature for Amazon RDS?",
        options: [
            "A. It enables automatic scaling of the database.",
            "B. It allows restoring the database to any specific time within the retention period.",
            "C. It provides a multi-region failover solution.",
            "D. It ensures the database is always encrypted."
        ],
        answer: "B. It allows restoring the database to any specific time within the retention period.",
        explanation: "RDS Point-in-Time Restore enables you to restore the database to any point in time within the specified retention period, providing flexibility in case of data loss or corruption."
    },
    {
        id: 5,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "S3 Versioning",
        question: "How does S3 Versioning help in recovering from accidental data deletion or overwrites?",
        options: [
            "A. It enables encryption for all objects.",
            "B. It creates multiple versions of an object, allowing recovery of a previous version.",
            "C. It automatically replicates data across regions.",
            "D. It increases storage capacity based on demand."
        ],
        answer: "B. It creates multiple versions of an object, allowing recovery of a previous version.",
        explanation: "S3 Versioning keeps multiple versions of an object, enabling you to recover a previous version in case of accidental deletion or overwrites."
    },
    {
        id: 6,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Cross-Region Replication (CRR)",
        question: "How does Amazon S3 Cross-Region Replication (CRR) improve disaster recovery capabilities?",
        options: [
            "A. By enabling automatic replication of objects to another AWS region for disaster recovery.",
            "B. By creating automatic backups within the same region.",
            "C. By reducing network latency for users in different regions.",
            "D. By increasing the storage size of the S3 bucket."
        ],
        answer: "A. By enabling automatic replication of objects to another AWS region for disaster recovery.",
        explanation: "S3 Cross-Region Replication automatically replicates objects from one AWS region to another, improving disaster recovery by maintaining backups in different geographical locations."
    },
    {
        id: 7,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "AWS Data Lifecycle Manager (DLM)",
        question: "What is the primary purpose of AWS Data Lifecycle Manager (DLM) when used with Amazon EBS?",
        options: [
            "A. To replicate data across Availability Zones.",
            "B. To automate the creation and deletion of EBS snapshots based on defined policies.",
            "C. To increase the performance of EBS volumes.",
            "D. To provide encryption for EBS snapshots."
        ],
        answer: "B. To automate the creation and deletion of EBS snapshots based on defined policies.",
        explanation: "AWS DLM helps automate the creation, retention, and deletion of EBS snapshots based on pre-defined lifecycle policies, simplifying backup management."
    },
    {
        id: 8,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Amazon EBS Snapshots",
        question: "Which of the following statements is true about Amazon EBS Snapshots?",
        options: [
            "A. EBS Snapshots are created manually and are not incremental.",
            "B. EBS Snapshots are incremental and only store changes made since the last snapshot.",
            "C. EBS Snapshots are stored in Amazon RDS.",
            "D. EBS Snapshots require the instance to be stopped during the backup process."
        ],
        answer: "B. EBS Snapshots are incremental and only store changes made since the last snapshot.",
        explanation: "EBS Snapshots are incremental, meaning they store only the blocks that have changed since the last snapshot, reducing the overall storage space required."
    },
    {
        id: 9,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Backup Retention Policy",
        question: "Which AWS service can be used to define and enforce backup retention policies across AWS resources?",
        options: [
            "A. AWS IAM",
            "B. AWS Backup",
            "C. AWS CloudFormation",
            "D. Amazon CloudFront"
        ],
        answer: "B. AWS Backup",
        explanation: "AWS Backup allows you to define backup retention policies for various AWS services and ensures compliance by automatically deleting backups that exceed the retention period."
    },
    {
        id: 10,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Disaster Recovery and AWS Backup",
        question: "How does AWS Backup improve disaster recovery capabilities?",
        options: [
            "A. By increasing the capacity of EC2 instances.",
            "B. By enabling automated backups and cross-region replication for disaster recovery.",
            "C. By enabling encryption for backups in Amazon S3.",
            "D. By providing high availability for Amazon RDS."
        ],
        answer: "B. By enabling automated backups and cross-region replication for disaster recovery.",
        explanation: "AWS Backup can automatically perform backups and replicate them across regions, providing a robust disaster recovery strategy for critical workloads."
    },
    {
        id: 11,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "AWS Backup Vault",
        question: "What is the purpose of AWS Backup Vault?",
        options: [
            "A. To provide a secure storage location for encrypted backups.",
            "B. To automatically delete old backups.",
            "C. To monitor network traffic for backups.",
            "D. To increase the performance of backups."
        ],
        answer: "A. To provide a secure storage location for encrypted backups.",
        explanation: "AWS Backup Vault provides a secure location for storing encrypted backups, ensuring that data is protected during storage and retrieval."
    },
    {
        id: 12,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Amazon S3 Glacier",
        question: "Which Amazon S3 storage class is best suited for long-term data retention and archival purposes?",
        options: [
            "A. S3 Standard",
            "B. S3 Intelligent-Tiering",
            "C. S3 One Zone-IA",
            "D. S3 Glacier"
        ],
        answer: "D. S3 Glacier",
        explanation: "Amazon S3 Glacier is designed for long-term data retention and archival, providing low-cost storage for infrequently accessed data."
    },
    {
        id: 13,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Amazon DynamoDB Backup and Restore",
        question: "How can you back up and restore an Amazon DynamoDB table?",
        options: [
            "A. Use S3 Cross-Region Replication",
            "B. Enable continuous backups with Point-in-Time Recovery (PITR)",
            "C. Use EBS Snapshots",
            "D. Configure a multi-region RDS instance"
        ],
        answer: "B. Enable continuous backups with Point-in-Time Recovery (PITR)",
        explanation: "DynamoDB's Point-in-Time Recovery (PITR) enables continuous backups, allowing you to restore a table to any point in time within the last 35 days."
    },
    {
        id: 14,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "RTO and RPO",
        question: "Which of the following best describes the Recovery Point Objective (RPO) for a disaster recovery plan?",
        options: [
            "A. The amount of data loss acceptable after a disaster.",
            "B. The time it takes to recover from a disaster.",
            "C. The geographic location of the recovery site.",
            "D. The maximum amount of time services can be unavailable."
        ],
        answer: "A. The amount of data loss acceptable after a disaster.",
        explanation: "RPO refers to the maximum amount of data that can be lost during a disaster and is usually measured in time (e.g., minutes or hours)."
    },
    {
        id: 15,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Backup Encryption",
        question: "Which service can be used to encrypt backups stored in AWS?",
        options: [
            "A. AWS Certificate Manager",
            "B. AWS Key Management Service (KMS)",
            "C. Amazon S3",
            "D. Amazon EBS"
        ],
        answer: "B. AWS Key Management Service (KMS)",
        explanation: "AWS KMS provides encryption keys that can be used to encrypt backups stored in AWS services like S3, EBS, and RDS."
    },
    {
        id: 16,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "RDS Automated Backups",
        question: "What is a key feature of RDS automated backups?",
        options: [
            "A. They allow continuous data replication across regions.",
            "B. They enable point-in-time recovery and are retained based on the backup retention period.",
            "C. They must be manually initiated by the user.",
            "D. They improve the read performance of the database."
        ],
        answer: "B. They enable point-in-time recovery and are retained based on the backup retention period.",
        explanation: "RDS automated backups provide point-in-time recovery and are automatically retained based on the specified backup retention period."
    },
    {
        id: 17,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Cross-Region Disaster Recovery",
        question: "Which AWS feature allows you to store backups in a different AWS region for disaster recovery?",
        options: [
            "A. Amazon CloudWatch Logs",
            "B. Cross-Region Replication",
            "C. Elastic Load Balancing",
            "D. EC2 Auto Scaling"
        ],
        answer: "B. Cross-Region Replication",
        explanation: "Cross-Region Replication (CRR) allows you to replicate S3 objects and backups to another AWS region, ensuring redundancy for disaster recovery."
    },
    {
        id: 18,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Data Lifecycle Policies",
        question: "Which AWS service helps enforce lifecycle policies for backups and snapshots?",
        options: [
            "A. AWS Lambda",
            "B. AWS Data Lifecycle Manager (DLM)",
            "C. Amazon RDS",
            "D. AWS Global Accelerator"
        ],
        answer: "B. AWS Data Lifecycle Manager (DLM)",
        explanation: "AWS DLM helps enforce lifecycle policies for snapshots and backups by automatically managing the creation and expiration of these resources."
    },
    {
        id: 19,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Amazon RDS Restore",
        question: "What is the first step in restoring an Amazon RDS instance from a snapshot?",
        options: [
            "A. Stop the current database instance.",
            "B. Create a new database instance from the snapshot.",
            "C. Reboot the instance.",
            "D. Manually copy the snapshot to another region."
        ],
        answer: "B. Create a new database instance from the snapshot.",
        explanation: "To restore an Amazon RDS instance from a snapshot, the first step is to create a new database instance from the snapshot."
    },
    {
        id: 20,
        subDomain: "2.3 Implement backup and restore strategies",
        criticalTopic: "Backup Retention",
        question: "How can you enforce a backup retention policy for Amazon RDS?",
        options: [
            "A. By configuring AWS CloudTrail",
            "B. By enabling Multi-AZ deployment",
            "C. By setting the backup retention period in the RDS configuration",
            "D. By increasing the storage capacity"
        ],
        answer: "C. By setting the backup retention period in the RDS configuration.",
        explanation: "The backup retention period for Amazon RDS can be configured to retain automated backups for a specified number of days, ensuring compliance with backup policies."
    }
];
