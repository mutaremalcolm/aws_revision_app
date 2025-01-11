// Monitoring, Logging, and Remediation - Implement metrics, alarms, and filters by using AWS monitoring and logging services

export const sysOpsMonitoringLogging = [
    {
        id: 1,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Collect and monitor logs using CloudWatch Logs",
        question: "What is the maximum size of a single CloudWatch Logs event?",
        options: [
            "A. 256 KB",
            "B. 128 KB",
            "C. 1 MB",
            "D. 64 KB"
        ],
        answer: "A. 256 KB",
        explanation: "The maximum size of a single CloudWatch Logs event is 256 KB. Larger log events will be truncated."
    },
    {
        id: 2,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudTrail vs CloudWatch Logs",
        question: "Which of the following is a key difference between AWS CloudTrail and AWS CloudWatch Logs?",
        options: [
            "A. CloudTrail captures API calls, while CloudWatch Logs captures system and application logs.",
            "B. CloudWatch Logs captures API calls, while CloudTrail captures system and application logs.",
            "C. Both services capture API calls.",
            "D. CloudWatch Logs is only available for EC2 instances."
        ],
        answer: "A. CloudTrail captures API calls, while CloudWatch Logs captures system and application logs.",
        explanation: "CloudTrail is used to capture API calls made within the AWS environment, while CloudWatch Logs collects system and application log data."
    },
    {
        id: 3,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Querying logs with CloudWatch Logs Insights",
        question: "Which query language is used in CloudWatch Logs Insights for log analysis?",
        options: [
            "A. SQL",
            "B. JSON",
            "C. AWS CLI",
            "D. A SQL-like query language specific to CloudWatch Logs Insights"
        ],
        answer: "D. A SQL-like query language specific to CloudWatch Logs Insights",
        explanation: "CloudWatch Logs Insights provides a powerful query language similar to SQL that allows users to analyze log data interactively."
    },
    {
        id: 4,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Exporting logs to S3",
        question: "What is the primary method to export CloudWatch Logs to Amazon S3?",
        options: [
            "A. Create a VPC Endpoint",
            "B. Use the 'Export to S3' option in the CloudWatch Console",
            "C. Set up a CloudTrail event",
            "D. Use Amazon SNS"
        ],
        answer: "B. Use the 'Export to S3' option in the CloudWatch Console",
        explanation: "CloudWatch Logs can be exported to S3 using the 'Export to S3' feature, enabling long-term storage or further analysis."
    },
    {
        id: 5,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "AWS CloudTrail",
        question: "Which of the following log data is captured by AWS CloudTrail?",
        options: [
            "A. Data plane events such as file reads in S3",
            "B. Only errors occurring in applications",
            "C. API calls made within an AWS account",
            "D. EC2 instance logs"
        ],
        answer: "C. API calls made within an AWS account",
        explanation: "AWS CloudTrail captures API calls made in an AWS account, which helps in auditing and tracking account activity."
    },
    {
        id: 6,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Agent Setup",
        question: "Which file format is used to configure the CloudWatch agent for custom log and metric collection?",
        options: [
            "A. YAML",
            "B. JSON",
            "C. XML",
            "D. CSV"
        ],
        answer: "B. JSON",
        explanation: "The CloudWatch agent configuration file uses the JSON format to define which logs and metrics are to be collected."
    },
    {
        id: 7,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Agent Installation",
        question: "Which method is the most appropriate for installing the CloudWatch agent on an EC2 instance?",
        options: [
            "A. Use EC2 user data",
            "B. Manually SSH into the instance and install it",
            "C. Use Systems Manager Run Command to install the agent",
            "D. Use AWS Lambda"
        ],
        answer: "C. Use Systems Manager Run Command to install the agent",
        explanation: "AWS Systems Manager Run Command can be used to install the CloudWatch agent across multiple instances without manual SSH access."
    },
    {
        id: 8,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Agent Configuration",
        question: "What is the most efficient way to deploy a CloudWatch Agent configuration file across multiple EC2 instances?",
        options: [
            "A. Use CloudFormation",
            "B. Manually copy the configuration file to each instance",
            "C. Use AWS Systems Manager Parameter Store and Run Command",
            "D. Create a custom AMI with the CloudWatch Agent pre-installed"
        ],
        answer: "C. Use AWS Systems Manager Parameter Store and Run Command",
        explanation: "By storing the CloudWatch Agent configuration file in Parameter Store and using Run Command, you can efficiently deploy it across multiple instances."
    },

    // Create CloudWatch alarms
    {
        id: 9,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Creating CloudWatch Alarms",
        question: "Which of the following can trigger a CloudWatch Alarm?",
        options: [
            "A. High latency in Route 53",
            "B. CPU utilization exceeding 80%",
            "C. An EC2 instance reboot",
            "D. The creation of a new IAM user"
        ],
        answer: "B. CPU utilization exceeding 80%",
        explanation: "CloudWatch Alarms can be triggered by crossing thresholds of metrics, such as CPU utilization, that are being monitored in CloudWatch."
    },
    {
        id: 10,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Alarms States",
        question: "What are the possible states of a CloudWatch Alarm?",
        options: [
            "A. Normal, Warning, Error",
            "B. Active, Standby, Offline",
            "C. OK, ALARM, INSUFFICIENT_DATA",
            "D. Up, Down, Maintenance"
        ],
        answer: "C. OK, ALARM, INSUFFICIENT_DATA",
        explanation: "CloudWatch Alarms can exist in three states: OK (when the monitored metric is within the threshold), ALARM (when it breaches the threshold), and INSUFFICIENT_DATA (when there isn’t enough data)."
    },
    {
        id: 11,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Alarm Actions",
        question: "Which of the following actions can a CloudWatch Alarm trigger when a threshold is breached?",
        options: [
            "A. Send a message to an SQS queue",
            "B. Execute an EC2 Auto Scaling policy",
            "C. Restart the AWS Management Console",
            "D. Stop an RDS instance"
        ],
        answer: "B. Execute an EC2 Auto Scaling policy",
        explanation: "CloudWatch Alarms can trigger Auto Scaling policies, send notifications, or invoke Lambda functions based on the alarm state."
    },
    {
        id: 12,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Metric Filters",
        question: "Which service allows you to create metric filters to turn log data into CloudWatch metrics?",
        options: [
            "A. AWS CloudTrail",
            "B. AWS CloudWatch",
            "C. AWS Trusted Advisor",
            "D. AWS Config"
        ],
        answer: "B. AWS CloudWatch",
        explanation: "Metric filters allow you to extract metric data from log events and store it in CloudWatch Metrics."
    },
    {
        id: 13,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Dashboards",
        question: "Which of the following statements is true about CloudWatch Dashboards?",
        options: [
            "A. They can display data only for one AWS region.",
            "B. They can display multiple widgets, including graphs, for any AWS region.",
            "C. They can only show system logs.",
            "D. They are automatically created for every AWS account."
        ],
        answer: "B. They can display multiple widgets, including graphs, for any AWS region.",
        explanation: "CloudWatch Dashboards are customizable and can display widgets from multiple AWS regions for easy monitoring."
    },
    {
        id: 14,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Notifications with SNS",
        question: "How do you configure CloudWatch Alarms to send notifications?",
        options: [
            "A. Use Amazon CloudFront",
            "B. Set up an SNS topic and configure the CloudWatch alarm to publish to that topic",
            "C. Use IAM roles",
            "D. Use AWS Lambda"
        ],
        answer: "B. Set up an SNS topic and configure the CloudWatch alarm to publish to that topic",
        explanation: "You can configure CloudWatch alarms to send notifications by using Amazon SNS to deliver messages to email, SMS, or other endpoints."
    },
    {
        id: 15,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Retention",
        question: "What is the default retention period for CloudWatch Logs if no retention policy is configured?",
        options: [
            "A. 30 days",
            "B. 5 days",
            "C. 90 days",
            "D. Never expire"
        ],
        answer: "D. Never expire",
        explanation: "By default, CloudWatch Logs have no expiration. You must explicitly configure a retention policy if you want to control how long logs are stored."
    },
    {
        id: 16,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Logs Insights Query Duration",
        question: "How long can CloudWatch Logs Insights query and retrieve log data?",
        options: [
            "A. Up to 7 days",
            "B. Up to 90 days",
            "C. Up to 2 years",
            "D. As long as the logs are retained based on your configuration"
        ],
        answer: "D. As long as the logs are retained based on your configuration",
        explanation: "CloudWatch Logs Insights can query log data as long as the logs are retained, based on your configured retention policy."
    },
    {
        id: 17,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Insights Performance",
        question: "What is the primary factor affecting the performance of queries in CloudWatch Logs Insights?",
        options: [
            "A. The number of metrics being monitored",
            "B. The complexity of the query",
            "C. The size of the logs and time range queried",
            "D. The region the logs are stored in"
        ],
        answer: "C. The size of the logs and time range queried",
        explanation: "CloudWatch Logs Insights query performance is primarily affected by the size of the logs and the time range being queried."
    },
    {
        id: 18,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Metric Filters Limitations",
        question: "What is the maximum number of metric filters you can create per log group in CloudWatch?",
        options: [
            "A. 5",
            "B. 10",
            "C. 20",
            "D. 50"
        ],
        answer: "B. 10",
        explanation: "CloudWatch allows a maximum of 10 metric filters per log group."
    },
    {
        id: 19,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "High Availability in Alarms",
        question: "Which service can you use in conjunction with CloudWatch Alarms to achieve automatic recovery of an EC2 instance?",
        options: [
            "A. AWS Lambda",
            "B. AWS Auto Scaling",
            "C. Amazon SNS",
            "D. EC2 Recovery Actions"
        ],
        answer: "D. EC2 Recovery Actions",
        explanation: "CloudWatch Alarms can trigger EC2 recovery actions to automatically recover an EC2 instance when certain alarms are triggered."
    },
    {
        id: 20,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Retention",
        question: "How can you reduce costs associated with CloudWatch Logs storage?",
        options: [
            "A. Create an S3 lifecycle policy",
            "B. Set a log retention policy",
            "C. Enable data tiering",
            "D. Compress logs before storing them"
        ],
        answer: "B. Set a log retention policy",
        explanation: "Setting a retention policy can help control costs by automatically deleting logs that are older than a specified time."
    },
    {
        id: 21,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Cross-Account CloudWatch Logs Access",
        question: "How can you enable cross-account access for CloudWatch Logs?",
        options: [
            "A. Use an S3 bucket with cross-account access",
            "B. Use AWS Resource Access Manager",
            "C. Create an IAM role with proper policies",
            "D. Use AWS Lambda"
        ],
        answer: "C. Create an IAM role with proper policies",
        explanation: "To enable cross-account access for CloudWatch Logs, you can create an IAM role in the target account and grant the necessary permissions."
    },
    {
        id: 22,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Filter Patterns",
        question: "Which of the following is a valid filter pattern for CloudWatch Logs Metric Filters?",
        options: [
            "A. \"ERROR\"",
            "B. { $.statusCode = 200 }",
            "C. statusCode = '200'",
            "D. \"{ $.statusCode = '200' }\""
        ],
        answer: "B. { $.statusCode = 200 }",
        explanation: "CloudWatch Metric Filters use JSON-based filter patterns to search for specific values in logs."
    },
    {
        id: 23,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "VPC Flow Logs",
        question: "Which type of log data can you collect using VPC Flow Logs?",
        options: [
            "A. DNS query logs",
            "B. Data transfer logs",
            "C. IP traffic logs",
            "D. Application-level logs"
        ],
        answer: "C. IP traffic logs",
        explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC."
    },
    {
        id: 24,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Log Data Encryption",
        question: "Which service can you use to encrypt CloudWatch Logs at rest?",
        options: [
            "A. AWS Shield",
            "B. AWS KMS",
            "C. AWS Secrets Manager",
            "D. AWS Config"
        ],
        answer: "B. AWS KMS",
        explanation: "CloudWatch Logs can be encrypted at rest using AWS KMS (Key Management Service)."
    },
    {
        id: 25,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Insights Fields",
        question: "Which function allows you to extract specific fields from logs in CloudWatch Logs Insights?",
        options: [
            "A. extract()",
            "B. filter()",
            "C. fields()",
            "D. match()"
        ],
        answer: "C. fields()",
        explanation: "The `fields()` function in CloudWatch Logs Insights allows you to extract specific fields from log data for analysis."
    },
    {
        id: 26,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Data Retention",
        question: "How can you reduce storage costs for CloudWatch Logs?",
        options: [
            "A. Migrate logs to Glacier",
            "B. Set a retention policy",
            "C. Use S3 as the default log storage",
            "D. Compress the logs"
        ],
        answer: "B. Set a retention policy",
        explanation: "By setting a retention policy, you can automatically delete old logs to reduce storage costs."
    },
    {
        id: 27,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Filtering",
        question: "What is the maximum size of a filter pattern in CloudWatch Logs Metric Filters?",
        options: [
            "A. 256 bytes",
            "B. 1 KB",
            "C. 5 KB",
            "D. 10 KB"
        ],
        answer: "D. 10 KB",
        explanation: "CloudWatch Logs Metric Filters have a maximum size limit of 10 KB for filter patterns."
    },
    {
        id: 28,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Logs Event Ingestion",
        question: "What is the maximum rate at which you can ingest log events into CloudWatch Logs?",
        options: [
            "A. 2,000 log events per second",
            "B. 5,000 log events per second",
            "C. 10,000 log events per second",
            "D. 100,000 log events per second"
        ],
        answer: "C. 10,000 log events per second",
        explanation: "The maximum ingestion rate for CloudWatch Logs is 10,000 log events per second per account per region."
    },
    {
        id: 29,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "Metric Data Retention",
        question: "How long does CloudWatch retain standard metrics?",
        options: [
            "A. 14 days",
            "B. 30 days",
            "C. 63 days",
            "D. 15 months"
        ],
        answer: "D. 15 months",
        explanation: "CloudWatch retains standard metrics for 15 months, allowing you to view and analyze historical performance data."
    },
    {
        id: 30,
        subDomain: "1.1 Implement metrics, alarms, and filters by using AWS monitoring and logging services",
        criticalTopic: "CloudWatch Anomaly Detection",
        question: "Which of the following is true about CloudWatch Anomaly Detection?",
        options: [
            "A. It automatically fixes detected anomalies",
            "B. It uses machine learning to detect anomalous metric behavior",
            "C. It only works with EC2 instances",
            "D. It requires manual setup of anomaly thresholds"
        ],
        answer: "B. It uses machine learning to detect anomalous metric behavior",
        explanation: "CloudWatch Anomaly Detection uses machine learning models to automatically detect anomalies in metric data, based on patterns of historical data."
    }
];
