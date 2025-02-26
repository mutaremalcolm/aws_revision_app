// Monitoring, Logging, and Remediation - Remediate issues based on monitoring and availability metrics

export const sysOpsRemediation = [
    {
        id: 1,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Alarms Troubleshooting",
        question: "Which CloudWatch alarm state indicates that insufficient data is available to determine if the alarm should trigger?",
        options: [
            "A. ALARM",
            "B. OK",
            "C. INSUFFICIENT_DATA",
            "D. PENDING"
        ],
        answer: "C. INSUFFICIENT_DATA",
        explanation: "The INSUFFICIENT_DATA state indicates that not enough data has been collected to evaluate whether the metric is in an ALARM or OK state."
    },
    {
        id: 2,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Automating Remediation with Systems Manager",
        question: "Which AWS service can be used to execute runbooks for automated remediation of issues detected by CloudWatch Alarms?",
        options: [
            "A. AWS Config",
            "B. AWS Lambda",
            "C. AWS Systems Manager Automation",
            "D. Amazon SNS"
        ],
        answer: "C. AWS Systems Manager Automation",
        explanation: "AWS Systems Manager Automation allows you to execute runbooks in response to CloudWatch Alarms to automatically remediate detected issues."
    },
    {
        id: 3,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "AWS Config and CloudWatch Alarms Integration",
        question: "How can you ensure that a CloudWatch Alarm triggers corrective actions when an AWS Config rule is violated?",
        options: [
            "A. Use EventBridge to invoke a Lambda function",
            "B. Create a CloudWatch dashboard",
            "C. Use Systems Manager Parameter Store",
            "D. Configure a VPC Endpoint"
        ],
        answer: "A. Use EventBridge to invoke a Lambda function",
        explanation: "AWS EventBridge can trigger a Lambda function or an SSM runbook when an AWS Config rule is violated, which can then trigger corrective actions."
    },
    {
        id: 4,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Troubleshooting EC2 Instance Issues",
        question: "If an EC2 instance fails a status check, which of the following is an appropriate first step for remediation?",
        options: [
            "A. Terminate the instance",
            "B. Reboot the instance",
            "C. Create a new AMI from the instance",
            "D. Change the instance type"
        ],
        answer: "B. Reboot the instance",
        explanation: "Rebooting the instance is often the first step to remediate an issue detected during a status check. Terminating or changing the instance type may be necessary later if the issue persists."
    },
    {
        id: 5,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Alarm Actions",
        question: "Which of the following actions can a CloudWatch Alarm initiate to remediate high CPU usage in an application?",
        options: [
            "A. Stop the instance",
            "B. Scale the Auto Scaling group",
            "C. Delete the CloudWatch logs",
            "D. Change the IAM role"
        ],
        answer: "B. Scale the Auto Scaling group",
        explanation: "When a CloudWatch Alarm detects high CPU usage, it can trigger an Auto Scaling policy to increase the number of instances in the group."
    },
    {
        id: 6,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "AWS Lambda and EventBridge for Remediation",
        question: "How can you use AWS Lambda in conjunction with EventBridge to remediate issues based on CloudWatch Alarms?",
        options: [
            "A. Trigger Lambda functions based on EventBridge rules when an alarm state changes",
            "B. Use Lambda to send notifications to SNS when an event occurs",
            "C. Use Lambda to delete the alarm",
            "D. Use Lambda to modify IAM roles"
        ],
        answer: "A. Trigger Lambda functions based on EventBridge rules when an alarm state changes",
        explanation: "You can use AWS Lambda to perform corrective actions by configuring EventBridge to invoke Lambda functions when CloudWatch Alarms change state."
    },
    {
        id: 7,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "AWS Systems Manager Automation Runbooks",
        question: "Which of the following AWS services can be used to automatically execute a Systems Manager runbook when a CloudWatch Alarm is triggered?",
        options: [
            "A. AWS Lambda",
            "B. AWS EventBridge",
            "C. Amazon SNS",
            "D. AWS SQS"
        ],
        answer: "B. AWS EventBridge",
        explanation: "AWS EventBridge can be used to automatically execute a Systems Manager runbook in response to a CloudWatch Alarm."
    },
    {
        id: 8,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Metrics for Remediation",
        question: "Which CloudWatch metric can be used to monitor and trigger remediation for EC2 instance disk I/O issues?",
        options: [
            "A. CPUUtilization",
            "B. NetworkIn",
            "C. DiskWriteOps",
            "D. StatusCheckFailed"
        ],
        answer: "C. DiskWriteOps",
        explanation: "DiskWriteOps is a CloudWatch metric that monitors the write operations for an EC2 instance's disk, and can trigger alarms for remediation if performance issues occur."
    },
    {
        id: 9,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Corrective Action with Auto Scaling",
        question: "Which Auto Scaling policy can be triggered by CloudWatch Alarms to automatically adjust the number of instances in response to changing load?",
        options: [
            "A. Scheduled scaling",
            "B. Step scaling",
            "C. Manual scaling",
            "D. Instance replacement"
        ],
        answer: "B. Step scaling",
        explanation: "Step scaling policies are triggered by CloudWatch Alarms and can automatically scale the number of instances in response to changes in monitored metrics like CPU usage."
    },
    {
        id: 10,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Logs for Troubleshooting",
        question: "How can you use CloudWatch Logs to troubleshoot a recurring application issue?",
        options: [
            "A. Delete old log files",
            "B. Configure a metric filter to monitor specific log patterns",
            "C. Set up an EventBridge rule to archive logs",
            "D. Use CloudFormation to deploy new instances"
        ],
        answer: "B. Configure a metric filter to monitor specific log patterns",
        explanation: "You can use CloudWatch Logs with a metric filter to monitor recurring log patterns that may indicate application issues, triggering alarms or corrective actions."
    },
    {
        id: 11,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Alarm Notifications",
        question: "Which AWS service is commonly used to send notifications when a CloudWatch Alarm state changes?",
        options: [
            "A. AWS Lambda",
            "B. Amazon SQS",
            "C. Amazon SNS",
            "D. AWS Config"
        ],
        answer: "C. Amazon SNS",
        explanation: "Amazon SNS is used to send notifications such as email or SMS messages when a CloudWatch Alarm state changes."
    },
    {
        id: 12,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "EventBridge Integration for Corrective Actions",
        question: "What is the primary function of AWS EventBridge in the context of CloudWatch Alarms?",
        options: [
            "A. To create log groups for CloudWatch",
            "B. To trigger automatic actions in response to alarm states",
            "C. To send notifications",
            "D. To schedule events"
        ],
        answer: "B. To trigger automatic actions in response to alarm states",
        explanation: "AWS EventBridge can invoke automated actions, such as triggering Lambda functions or Systems Manager Automation runbooks when CloudWatch Alarms change state."
    },
    {
        id: 13,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Troubleshooting Network Latency",
        question: "Which CloudWatch metric would be most useful in diagnosing network latency issues for an EC2 instance?",
        options: [
            "A. CPUUtilization",
            "B. NetworkOut",
            "C. NetworkPacketsIn",
            "D. Latency"
        ],
        answer: "C. NetworkPacketsIn",
        explanation: "NetworkPacketsIn measures the number of packets received by an instance, helping in diagnosing network traffic issues, which may contribute to network latency."
    },
    {
        id: 14,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "AWS Config Remediation",
        question: "What AWS service can be configured to automatically remediate resources that are non-compliant with AWS Config rules?",
        options: [
            "A. Amazon SNS",
            "B. AWS Lambda",
            "C. AWS Systems Manager",
            "D. AWS Auto Scaling"
        ],
        answer: "B. AWS Lambda",
        explanation: "AWS Config can trigger AWS Lambda functions to automatically remediate non-compliant resources based on predefined rules."
    },
    {
        id: 15,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "EC2 Auto Scaling Troubleshooting",
        question: "Which CloudWatch metric can be used to trigger an Auto Scaling event if CPU usage remains high for an extended period?",
        options: [
            "A. CPUUtilization",
            "B. NetworkIn",
            "C. DiskReadOps",
            "D. StatusCheckFailed"
        ],
        answer: "A. CPUUtilization",
        explanation: "The CPUUtilization metric is used to monitor the CPU usage of an EC2 instance. Auto Scaling can be triggered based on thresholds set on this metric."
    },
    {
        id: 16,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Auto Scaling Actions",
        question: "What type of Auto Scaling action should you configure to gradually increase the number of instances based on alarm thresholds?",
        options: [
            "A. Step Scaling",
            "B. Scheduled Scaling",
            "C. Predictive Scaling",
            "D. On-Demand Scaling"
        ],
        answer: "A. Step Scaling",
        explanation: "Step Scaling is designed to gradually scale resources based on CloudWatch alarm thresholds, which trigger scaling actions in defined steps."
    },
    {
        id: 17,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Disk I/O Troubleshooting",
        question: "Which CloudWatch metric can be used to monitor and troubleshoot disk read operations for an EC2 instance?",
        options: [
            "A. CPUUtilization",
            "B. DiskReadOps",
            "C. NetworkOut",
            "D. StatusCheckFailed"
        ],
        answer: "B. DiskReadOps",
        explanation: "DiskReadOps measures the number of read operations on an EC2 instance’s disk, helping to identify I/O issues."
    },
    {
        id: 18,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "EventBridge vs SNS",
        question: "What is the key difference between EventBridge and Amazon SNS when used with CloudWatch Alarms?",
        options: [
            "A. EventBridge is used to trigger actions, while SNS is used to send notifications.",
            "B. SNS is used to trigger actions, while EventBridge is used to send notifications.",
            "C. SNS can only send emails, while EventBridge can execute runbooks.",
            "D. EventBridge can be used for auto-scaling, while SNS cannot."
        ],
        answer: "A. EventBridge is used to trigger actions, while SNS is used to send notifications.",
        explanation: "EventBridge triggers automated actions, such as Lambda functions or SSM runbooks, while SNS is used for sending notifications."
    },
    {
        id: 19,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Lambda for Remediation",
        question: "What is a primary use case for AWS Lambda in conjunction with CloudWatch Alarms?",
        options: [
            "A. To automatically scale EC2 instances",
            "B. To send email notifications",
            "C. To execute corrective actions based on alarm state changes",
            "D. To store logs"
        ],
        answer: "C. To execute corrective actions based on alarm state changes",
        explanation: "AWS Lambda can be triggered by CloudWatch Alarms via EventBridge to execute corrective actions such as restarting instances or scaling services."
    },
    {
        id: 20,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Logs Insights for Troubleshooting",
        question: "Which query can be used in CloudWatch Logs Insights to detect errors in application logs?",
        options: [
            "A. filter @message like /ERROR/",
            "B. SELECT * FROM logs WHERE message = 'ERROR'",
            "C. filter message='ERROR'",
            "D. match(message, 'ERROR')"
        ],
        answer: "A. filter @message like /ERROR/",
        explanation: "The correct syntax for detecting errors in CloudWatch Logs Insights is 'filter @message like /ERROR/'."
    },
    {
        id: 21,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Using EventBridge to Automate Remediation",
        question: "Which service can trigger automatic remediation actions when a specific CloudWatch Alarm state is reached?",
        options: [
            "A. AWS Systems Manager",
            "B. AWS Lambda",
            "C. AWS EventBridge",
            "D. Amazon SNS"
        ],
        answer: "C. AWS EventBridge",
        explanation: "AWS EventBridge can trigger automation or remediation actions, such as invoking Lambda functions or Systems Manager runbooks when an alarm state changes."
    },
    {
        id: 22,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "AWS Systems Manager Runbooks",
        question: "How can AWS Systems Manager Automation Runbooks be used in conjunction with CloudWatch Alarms?",
        options: [
            "A. To archive logs",
            "B. To schedule scaling events",
            "C. To remediate operational issues automatically",
            "D. To enable EC2 Auto Scaling"
        ],
        answer: "C. To remediate operational issues automatically",
        explanation: "AWS Systems Manager Automation Runbooks can be used to remediate operational issues automatically, such as restarting instances or patching software, in response to CloudWatch Alarms."
    },
    {
        id: 23,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Troubleshooting High CPU Usage",
        question: "What is an appropriate first step in remediating consistently high CPU utilization on an EC2 instance?",
        options: [
            "A. Stop the instance",
            "B. Modify the IAM role",
            "C. Reboot the instance",
            "D. Increase instance size or scale out"
        ],
        answer: "D. Increase instance size or scale out",
        explanation: "If CPU utilization is consistently high, increasing the instance size or using Auto Scaling to add more instances is often a suitable remediation."
    },
    {
        id: 24,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "EventBridge Remediation",
        question: "How can you configure EventBridge to remediate resource issues detected by CloudWatch?",
        options: [
            "A. Send notifications to SNS",
            "B. Use EventBridge to trigger Lambda or SSM runbooks",
            "C. Use EventBridge to reboot the instance directly",
            "D. Configure EventBridge to modify IAM roles"
        ],
        answer: "B. Use EventBridge to trigger Lambda or SSM runbooks",
        explanation: "EventBridge can be configured to invoke AWS Lambda functions or SSM runbooks in response to CloudWatch Alarms, automating the remediation of resource issues."
    },
    {
        id: 25,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "CloudWatch Agent Troubleshooting",
        question: "What is the recommended way to install and configure the CloudWatch Agent for monitoring an EC2 instance?",
        options: [
            "A. Manually SSH into the instance and configure",
            "B. Use Systems Manager Run Command",
            "C. Use EC2 User Data scripts",
            "D. Use Auto Scaling"
        ],
        answer: "B. Use Systems Manager Run Command",
        explanation: "AWS Systems Manager Run Command can be used to install and configure the CloudWatch Agent on EC2 instances without the need to manually SSH into the instance."
    },
    {
        id: 26,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Monitoring EBS Volume Performance",
        question: "Which CloudWatch metric can be used to monitor the performance of an EBS volume attached to an EC2 instance?",
        options: [
            "A. EBSReadOps",
            "B. DiskWriteOps",
            "C. NetworkOut",
            "D. CPUUtilization"
        ],
        answer: "A. EBSReadOps",
        explanation: "EBSReadOps measures the number of read operations on an EBS volume, helping to identify performance bottlenecks."
    },
    {
        id: 27,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Remediation with Lambda",
        question: "Which of the following use cases is AWS Lambda best suited for in a CloudWatch Alarm remediation workflow?",
        options: [
            "A. Sending email notifications",
            "B. Starting EC2 instances",
            "C. Automatically scaling Auto Scaling groups",
            "D. Performing small corrective actions, such as restarting an instance"
        ],
        answer: "D. Performing small corrective actions, such as restarting an instance",
        explanation: "AWS Lambda is well-suited for lightweight, corrective actions, such as restarting instances or cleaning up resources, when triggered by CloudWatch Alarms."
    },
    {
        id: 28,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "Monitoring Disk Latency",
        question: "Which metric can be used to monitor disk latency in CloudWatch?",
        options: [
            "A. DiskReadOps",
            "B. DiskWriteBytes",
            "C. EBSReadLatency",
            "D. NetworkPacketsOut"
        ],
        answer: "C. EBSReadLatency",
        explanation: "EBSReadLatency measures the latency for read operations on EBS volumes, which is critical for diagnosing disk performance issues."
    },
    {
        id: 29,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "RDS Performance Remediation",
        question: "Which CloudWatch metric would you monitor to detect read performance issues on an Amazon RDS database instance?",
        options: [
            "A. CPUUtilization",
            "B. ReadIOPS",
            "C. NetworkPacketsIn",
            "D. StatusCheckFailed"
        ],
        answer: "B. ReadIOPS",
        explanation: "ReadIOPS monitors the read operations per second on an RDS instance, which helps in identifying read performance bottlenecks."
    },
    {
        id: 30,
        subDomain: "1.2 Remediate issues based on monitoring and availability metrics",
        criticalTopic: "High Availability Remediation",
        question: "Which action should be taken if a primary RDS instance becomes unavailable in a Multi-AZ deployment?",
        options: [
            "A. Restart the instance",
            "B. Promote the standby instance to primary",
            "C. Create a new RDS instance",
            "D. Increase storage capacity"
        ],
        answer: "B. Promote the standby instance to primary",
        explanation: "In a Multi-AZ deployment, the standby instance can be promoted to primary automatically if the primary instance becomes unavailable."
    }
];
