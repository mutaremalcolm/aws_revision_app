// Subdomain 1.3: Determine appropriate data security controls

export const cloudPractionerDataSecurity = [
{
    id: 41,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Encryption at Rest",
    question: "Which AWS service provides a hardware security module (HSM) that enables you to generate and use your own encryption keys in the AWS Cloud?",
    options: [
        "A. AWS KMS",
        "B. AWS CloudHSM",
        "C. AWS Secrets Manager",
        "D. AWS Certificate Manager"
    ],
    answer: "B. AWS CloudHSM",
    explanation: "AWS CloudHSM provides dedicated hardware security modules in the AWS Cloud, allowing you to generate and use your own encryption keys on AWS. It helps you meet corporate, contractual, and regulatory compliance requirements for data security."
},
{
    id: 42,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "AWS Key Management Service",
    question: "Which AWS service allows you to create and control the encryption keys used to encrypt your data?",
    options: [
        "A. AWS Certificate Manager",
        "B. AWS Key Management Service (KMS)",
        "C. AWS Secrets Manager",
        "D. Amazon Cognito"
    ],
    answer: "B. AWS Key Management Service (KMS)",
    explanation: "AWS Key Management Service (KMS) makes it easy for you to create and manage cryptographic keys and control their use across a wide range of AWS services and in your applications."
},
{
    id: 43,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "S3 Encryption",
    question: "Which S3 encryption method uses keys that you create and manage?",
    options: [
        "A. Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)",
        "B. Server-Side Encryption with AWS KMS-Managed Keys (SSE-KMS)",
        "C. Server-Side Encryption with Customer-Provided Keys (SSE-C)",
        "D. Client-Side Encryption"
    ],
    answer: "C. Server-Side Encryption with Customer-Provided Keys (SSE-C)",
    explanation: "With Server-Side Encryption with Customer-Provided Keys (SSE-C), you manage the encryption keys and Amazon S3 manages the encryption as it writes to disks and decryption when you access your objects."
},
{
    id: 44,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "EBS Encryption",
    question: "What happens when you create an encrypted EBS volume?",
    options: [
        "A. AWS uses the default service key for encryption unless you specify a customer-managed CMK",
        "B. You must always provide your own encryption key",
        "C. EBS volumes can only be encrypted at creation time",
        "D. Encryption is only available for certain EBS volume types"
    ],
    answer: "A. AWS uses the default service key for encryption unless you specify a customer-managed CMK",
    explanation: "When you create an encrypted EBS volume, AWS KMS uses the AWS-managed default CMK for Amazon EBS unless you select a customer-managed CMK. This allows for easy encryption without requiring you to manage the keys yourself."
},
{
    id: 45,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "RDS Encryption",
    question: "Which statement about Amazon RDS encryption is correct?",
    options: [
        "A. You can encrypt an unencrypted RDS instance directly",
        "B. You must create an encrypted snapshot and restore it to encrypt an existing unencrypted database",
        "C. RDS encryption is only available for Oracle and SQL Server databases",
        "D. Encrypted RDS instances cannot be shared across AWS accounts"
    ],
    answer: "B. You must create an encrypted snapshot and restore it to encrypt an existing unencrypted database",
    explanation: "You cannot encrypt an existing unencrypted RDS instance directly. To encrypt an existing unencrypted database, you must create a snapshot, create an encrypted copy of the snapshot, and then restore a database from the encrypted snapshot."
},
{
    id: 46,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "S3 Bucket Policies",
    question: "Which feature should you use to prevent accidental deletion of objects in an S3 bucket?",
    options: [
        "A. S3 Bucket Policies",
        "B. S3 Object Lock",
        "C. S3 Versioning",
        "D. S3 Lifecycle Policies"
    ],
    answer: "B. S3 Object Lock",
    explanation: "S3 Object Lock enables you to store objects using a write-once-read-many (WORM) model, preventing objects from being deleted or overwritten for a fixed time or indefinitely, protecting against accidental or malicious deletion."
},
{
    id: 47,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "S3 Block Public Access",
    question: "Which S3 feature provides a centralized way to limit public access to S3 buckets and objects?",
    options: [
        "A. S3 Bucket Policies",
        "B. S3 Block Public Access",
        "C. S3 Access Points",
        "D. S3 ACLs"
    ],
    answer: "B. S3 Block Public Access",
    explanation: "S3 Block Public Access provides settings to help you avoid inadvertently exposing your S3 resources. You can apply these settings to individual buckets or to all buckets in your account."
},
{
    id: 48,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "DynamoDB Encryption",
    question: "Which statement about Amazon DynamoDB encryption is correct?",
    options: [
        "A. Encryption must be enabled when creating a DynamoDB table and cannot be changed later",
        "B. All new DynamoDB tables are encrypted by default",
        "C. DynamoDB only supports encryption using customer-managed keys",
        "D. Encryption in DynamoDB requires additional latency overhead"
    ],
    answer: "B. All new DynamoDB tables are encrypted by default",
    explanation: "All new DynamoDB tables are encrypted by default using AWS-owned keys. You can choose to use AWS managed keys in AWS KMS or your customer managed keys in AWS KMS when creating the table."
},
{
    id: 49,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Encryption in Transit",
    question: "Which protocol should be used to ensure data is encrypted in transit when connecting to an Amazon RDS database?",
    options: [
        "A. HTTP",
        "B. FTP",
        "C. SSL/TLS",
        "D. Telnet"
    ],
    answer: "C. SSL/TLS",
    explanation: "SSL/TLS (Secure Sockets Layer/Transport Layer Security) should be used to encrypt the connection to an RDS database, ensuring that data in transit is protected from eavesdropping."
},
{
    id: 50,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Data Classification",
    question: "Which AWS service can automatically discover and classify sensitive data stored in S3 buckets?",
    options: [
        "A. AWS Security Hub",
        "B. Amazon Inspector",
        "C. Amazon Macie",
        "D. AWS Config"
    ],
    answer: "C. Amazon Macie",
    explanation: "Amazon Macie uses machine learning and pattern matching to discover, classify, and protect sensitive data stored in S3 buckets, such as personally identifiable information (PII) or financial data."
},
{
    id: 51,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "S3 Access Points",
    question: "Which S3 feature allows you to create different access control policies for different applications sharing the same bucket?",
    options: [
        "A. S3 Bucket Policies",
        "B. S3 Access Points",
        "C. S3 VPC Endpoints",
        "D. S3 Presigned URLs"
    ],
    answer: "B. S3 Access Points",
    explanation: "S3 Access Points are unique hostnames with dedicated access policies that describe how data can be accessed using that endpoint. This allows you to create different access control policies for different applications or user groups accessing the same bucket."
},
{
    id: 52,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "AWS Systems Manager Parameter Store",
    question: "Which AWS service can be used to store and manage configuration data like database strings and API keys with different encryption levels?",
    options: [
        "A. AWS AppConfig",
        "B. AWS Secrets Manager",
        "C. AWS Systems Manager Parameter Store",
        "D. AWS CodeDeploy"
    ],
    answer: "C. AWS Systems Manager Parameter Store",
    explanation: "AWS Systems Manager Parameter Store provides secure, hierarchical storage for configuration data and secrets management. You can store data such as passwords, database strings, API keys as parameter values that can be stored as plaintext or encrypted."
},
{
    id: 53,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "AWS Secrets Manager Rotation",
    question: "Which AWS service can automatically rotate database credentials periodically?",
    options: [
        "A. AWS Key Management Service",
        "B. AWS Certificate Manager",
        "C. AWS Secrets Manager",
        "D. AWS Systems Manager Parameter Store"
    ],
    answer: "C. AWS Secrets Manager",
    explanation: "AWS Secrets Manager can automatically rotate secrets for supported services like RDS, DocumentDB, and Redshift, helping you meet compliance requirements and improve security posture."
},
{
    id: 54,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "S3 Versioning",
    question: "Which S3 feature allows you to preserve, retrieve, and restore every version of every object in a bucket?",
    options: [
        "A. S3 Object Lock",
        "B. S3 Versioning",
        "C. S3 Lifecycle Policies",
        "D. S3 Intelligent-Tiering"
    ],
    answer: "B. S3 Versioning",
    explanation: "S3 Versioning keeps multiple versions of an object in the same bucket, allowing you to preserve, retrieve, and restore every version of every object stored in your bucket, protecting against accidental overwrites and deletions."
},
{
    id: 55,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Amazon Glacier Vault Lock",
    question: "Which feature provides WORM (Write Once Read Many) protection for data stored in Amazon S3 Glacier?",
    options: [
        "A. S3 Object Lock",
        "B. S3 Glacier Vault Lock",
        "C. S3 Lifecycle Policies",
        "D. IAM Policies"
    ],
    answer: "B. S3 Glacier Vault Lock",
    explanation: "S3 Glacier Vault Lock allows you to deploy and enforce compliance controls for individual S3 Glacier vaults with a Vault Lock policy. Once locked, the policy cannot be changed, providing WORM protection."
},
{
    id: 56,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "CloudTrail Log File Validation",
    question: "Which CloudTrail feature helps you determine whether a log file was modified or deleted after CloudTrail delivered it?",
    options: [
        "A. CloudTrail Insights",
        "B. Log File Validation",
        "C. CloudTrail Lake",
        "D. Organization Trails"
    ],
    answer: "B. Log File Validation",
    explanation: "Log File Validation enables you to determine whether a CloudTrail log file was modified, deleted, or unchanged after CloudTrail delivered it, helping ensure the integrity of your log files."
},
{
    id: 57,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Database Auditing",
    question: "Which feature of Amazon RDS allows you to track database activity for security and troubleshooting?",
    options: [
        "A. RDS Event Notifications",
        "B. RDS Enhanced Monitoring",
        "C. RDS Performance Insights",
        "D. RDS Database Activity Streams"
    ],
    answer: "D. RDS Database Activity Streams",
    explanation: "RDS Database Activity Streams provide a near real-time stream of database activity that can be monitored for security and compliance auditing, helping you protect your database from internal and external threats."
},
{
    id: 58,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "AWS Config Rules",
    question: "Which AWS service can help you evaluate the configuration settings of your AWS resources and check if they comply with your organization's policies?",
    options: [
        "A. AWS CloudTrail",
        "B. AWS Config",
        "C. Amazon Inspector",
        "D. AWS Security Hub"
    ],
    answer: "B. AWS Config",
    explanation: "AWS Config provides a detailed view of the configuration of AWS resources in your account and how they relate to one another. You can use AWS Config Rules to evaluate whether your resources comply with your desired configurations."
},
{
    id: 59,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "AWS Lambda Environment Variables",
    question: "What is the recommended approach for storing sensitive data that needs to be accessed by AWS Lambda functions?",
    options: [
        "A. Store them as plaintext environment variables",
        "B. Hard-code them in the Lambda function code",
        "C. Store them in AWS Secrets Manager and retrieve them at runtime",
        "D. Store them in a public S3 bucket"
    ],
    answer: "C. Store them in AWS Secrets Manager and retrieve them at runtime",
    explanation: "Storing sensitive information in AWS Secrets Manager or Parameter Store and retrieving it at runtime is more secure than storing it as environment variables or hard-coding it in the Lambda function code."
},
{
    id: 60,
    subDomain: "1.3 Determine appropriate data security controls",
    criticalTopic: "Key Rotation",
    question: "Which statement about AWS KMS key rotation is correct?",
    options: [
        "A. AWS-managed CMKs are automatically rotated every year",
        "B. Customer-managed CMKs can be configured for automatic rotation every 90 days",
        "C. AWS-owned CMKs cannot be rotated",
        "D. Key rotation requires manual re-encryption of all data"
    ],
    answer: "A. AWS-managed CMKs are automatically rotated every year",
    explanation: "AWS-managed CMKs are automatically rotated every year. For customer-managed CMKs, you can enable automatic key rotation, which rotates the key material once per year. Key rotation preserves the properties of the CMK, so it doesn't affect applications using the CMK."
}
]