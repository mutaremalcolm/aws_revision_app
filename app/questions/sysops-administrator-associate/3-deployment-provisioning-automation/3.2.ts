// Deployment, Provisioning, and Automation - Automate manual or repeatable processes

export const sysOpsAutomation = [
    {
        id: 1,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Systems Manager Automation',
        question: 'What is the primary use of AWS Systems Manager Automation?',
        options: [
            'A. To automate recurring tasks such as instance updates and resource configurations',
            'B. To monitor application logs',
            'C. To automate user authentication processes',
            'D. To manage S3 object lifecycles'
        ],
        answer: 'A. To automate recurring tasks such as instance updates and resource configurations',
        explanation: 'AWS Systems Manager Automation is used to automate common operational tasks, such as patching, resource configuration, and instance management.'
    },
    {
        id: 2,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'CloudFormation for Automation',
        question: 'How can AWS CloudFormation be used to automate resource deployment?',
        options: [
            'A. By manually provisioning resources',
            'B. By automating the deployment of resources using infrastructure as code templates',
            'C. By running scripts directly on EC2 instances',
            'D. By automating CloudWatch alarms'
        ],
        answer: 'B. By automating the deployment of resources using infrastructure as code templates',
        explanation: 'AWS CloudFormation automates the provisioning and management of AWS resources using infrastructure as code, defined in JSON or YAML templates.'
    },
    {
        id: 3,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Automated Patching with AWS Systems Manager',
        question: 'Which AWS service can be used to automate the patching of EC2 instances across an environment?',
        options: [
            'A. AWS CloudFormation',
            'B. AWS Systems Manager Patch Manager',
            'C. Amazon Inspector',
            'D. AWS CloudWatch'
        ],
        answer: 'B. AWS Systems Manager Patch Manager',
        explanation: 'AWS Systems Manager Patch Manager allows you to automate the patching process for EC2 instances, ensuring they stay up-to-date with the latest security updates.'
    },
    {
        id: 4,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Scheduling Automation Tasks',
        question: 'Which service can be used to schedule recurring tasks such as backups, patching, and snapshots?',
        options: [
            'A. AWS Lambda',
            'B. AWS Systems Manager Automation with Amazon EventBridge',
            'C. AWS CodePipeline',
            'D. AWS IAM'
        ],
        answer: 'B. AWS Systems Manager Automation with Amazon EventBridge',
        explanation: 'AWS Systems Manager Automation combined with Amazon EventBridge allows you to schedule recurring tasks, such as backups, patching, and snapshots, on a predefined schedule.'
    },
    {
        id: 5,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Systems Manager Run Command',
        question: 'How can AWS Systems Manager Run Command help in automating processes?',
        options: [
            'A. By enabling remote configuration and management of EC2 instances without SSH access',
            'B. By providing version control for code deployments',
            'C. By monitoring EC2 instance performance',
            'D. By configuring IAM roles'
        ],
        answer: 'A. By enabling remote configuration and management of EC2 instances without SSH access',
        explanation: 'AWS Systems Manager Run Command allows you to remotely execute commands on EC2 instances without needing SSH access, automating configuration and management tasks.'
    },
    {
        id: 6,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Lambda Automation',
        question: 'Which AWS service is commonly used to automate event-driven processes in AWS?',
        options: [
            'A. AWS EC2',
            'B. AWS Lambda',
            'C. Amazon RDS',
            'D. Amazon S3'
        ],
        answer: 'B. AWS Lambda',
        explanation: 'AWS Lambda is a serverless computing service that runs code in response to events, automating event-driven processes without needing to provision servers.'
    },
    {
        id: 7,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Automation Documents (Runbooks)',
        question: 'What is an AWS Systems Manager Automation document (runbook) used for?',
        options: [
            'A. It provides predefined templates for automating recurring operational tasks',
            'B. It logs AWS CloudTrail events',
            'C. It automates EC2 instance scaling',
            'D. It is used for managing IAM policies'
        ],
        answer: 'A. It provides predefined templates for automating recurring operational tasks',
        explanation: 'AWS Systems Manager Automation documents (runbooks) are predefined automation workflows that execute operational tasks, such as patching or configuration updates.'
    },
    {
        id: 8,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Automating Resource Management with AWS Systems Manager',
        question: 'Which Systems Manager feature allows you to automate operational tasks such as patching, software installation, and configuration management?',
        options: [
            'A. Systems Manager Patch Manager',
            'B. Systems Manager Parameter Store',
            'C. Systems Manager Automation',
            'D. Systems Manager Run Command'
        ],
        answer: 'C. Systems Manager Automation',
        explanation: 'AWS Systems Manager Automation enables you to create, manage, and execute workflows to automate operational tasks such as patching, software installation, and configuration management.'
    },
    {
        id: 9,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS OpsWorks for Configuration Management',
        question: 'Which AWS service is used to automate server configuration and deployment using Chef or Puppet?',
        options: [
            'A. AWS OpsWorks',
            'B. AWS Elastic Beanstalk',
            'C. AWS CloudFormation',
            'D. AWS Lambda'
        ],
        answer: 'A. AWS OpsWorks',
        explanation: 'AWS OpsWorks provides managed instances of Chef and Puppet for automating server configuration, deployment, and management across your infrastructure.'
    },
    {
        id: 10,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Elastic Beanstalk for Automated Deployments',
        question: 'How does AWS Elastic Beanstalk simplify the automation of application deployments?',
        options: [
            'A. It automates the entire infrastructure and application stack deployment.',
            'B. It provides direct access to EC2 instances for manual scaling.',
            'C. It replaces EC2 instances with serverless components.',
            'D. It directly integrates with Amazon CloudWatch for performance monitoring.'
        ],
        answer: 'A. It automates the entire infrastructure and application stack deployment.',
        explanation: 'AWS Elastic Beanstalk automates the deployment of infrastructure and application stacks, reducing the need for manual provisioning and scaling.'
    },
    {
        id: 11,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'CloudFormation for Repeatable Infrastructure',
        question: 'How does AWS CloudFormation help automate repeatable infrastructure deployments?',
        options: [
            'A. By creating AMIs for each deployment',
            'B. By providing infrastructure as code templates that can be reused for consistent deployments',
            'C. By enabling direct manual control over resources',
            'D. By providing backup and restore functionalities'
        ],
        answer: 'B. By providing infrastructure as code templates that can be reused for consistent deployments',
        explanation: 'CloudFormation enables repeatable infrastructure deployments by allowing users to define resources in templates, which can be reused to consistently provision AWS environments.'
    },
    {
        id: 12,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Patch Manager for Compliance',
        question: 'How does AWS Systems Manager Patch Manager help ensure compliance for your infrastructure?',
        options: [
            'A. By automating patch application across EC2 instances and providing patch compliance reports',
            'B. By manually updating software and providing logging',
            'C. By managing backups and snapshots',
            'D. By scheduling automated data retention policies'
        ],
        answer: 'A. By automating patch application across EC2 instances and providing patch compliance reports',
        explanation: 'AWS Systems Manager Patch Manager automates patch management and compliance across your EC2 instances, ensuring that your infrastructure is secure and up-to-date.'
    },
    {
        id: 13,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Systems Manager State Manager',
        question: 'What is the purpose of AWS Systems Manager State Manager?',
        options: [
            'A. To monitor EC2 instance logs',
            'B. To automate the application of desired configurations across EC2 instances',
            'C. To back up EC2 instances',
            'D. To provide on-demand compute capacity'
        ],
        answer: 'B. To automate the application of desired configurations across EC2 instances',
        explanation: 'AWS Systems Manager State Manager allows you to define and automate the application of desired configurations across EC2 instances, ensuring consistency.'
    },
    {
        id: 14,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Lambda Scheduled Events',
        question: 'Which AWS service can be used to trigger AWS Lambda functions at scheduled intervals?',
        options: [
            'A. Amazon S3',
            'B. Amazon SNS',
            'C. Amazon EventBridge',
            'D. Amazon CloudTrail'
        ],
        answer: 'C. Amazon EventBridge',
        explanation: 'Amazon EventBridge can be used to trigger AWS Lambda functions on a scheduled basis, allowing for automated execution of recurring tasks.'
    },
    {
        id: 15,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS CodePipeline for Deployment Automation',
        question: 'How does AWS CodePipeline help automate deployment processes?',
        options: [
            'A. By automating the building, testing, and deployment of applications across environments',
            'B. By managing patch updates',
            'C. By monitoring application performance',
            'D. By providing direct access to EC2 instances'
        ],
        answer: 'A. By automating the building, testing, and deployment of applications across environments',
        explanation: 'AWS CodePipeline automates the end-to-end deployment process, including building, testing, and deploying applications in multiple environments.'
    },
    {
        id: 16,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Lambda Layers',
        question: 'What is the role of AWS Lambda Layers in automating processes?',
        options: [
            'A. To automate the scaling of Lambda functions',
            'B. To reduce the deployment package size by sharing common code across multiple Lambda functions',
            'C. To schedule backups for Lambda functions',
            'D. To provide monitoring for Lambda functions'
        ],
        answer: 'B. To reduce the deployment package size by sharing common code across multiple Lambda functions',
        explanation: 'AWS Lambda Layers allow you to share common code across multiple Lambda functions, reducing deployment package size and promoting code reuse.'
    },
    {
        id: 17,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS CodeBuild for Automation',
        question: 'How does AWS CodeBuild automate the build process for applications?',
        options: [
            'A. It scales compute resources to match demand.',
            'B. It automates the process of building, testing, and packaging application code.',
            'C. It automates code versioning and rollback.',
            'D. It provides backup and restore services for source code.'
        ],
        answer: 'B. It automates the process of building, testing, and packaging application code.',
        explanation: 'AWS CodeBuild is a fully managed build service that automates the process of compiling, testing, and packaging your application code.'
    },
    {
        id: 18,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'CloudWatch for Automation',
        question: 'Which AWS service can be used to trigger automation tasks based on performance metrics?',
        options: [
            'A. Amazon RDS',
            'B. AWS CloudFormation',
            'C. Amazon CloudWatch',
            'D. AWS Auto Scaling'
        ],
        answer: 'C. Amazon CloudWatch',
        explanation: 'Amazon CloudWatch can monitor performance metrics and trigger actions, such as invoking Lambda functions or adjusting Auto Scaling groups, based on predefined thresholds.'
    },
    {
        id: 19,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Elastic Beanstalk for Application Lifecycle',
        question: 'Which service can automate the full application lifecycle, from deployment to scaling?',
        options: [
            'A. AWS Elastic Beanstalk',
            'B. AWS Lambda',
            'C. Amazon EC2',
            'D. AWS OpsWorks'
        ],
        answer: 'A. AWS Elastic Beanstalk',
        explanation: 'AWS Elastic Beanstalk automates the entire application lifecycle, from deployment and scaling to monitoring, reducing the need for manual intervention.'
    },
    {
        id: 20,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS CloudTrail for Automation',
        question: 'How does AWS CloudTrail contribute to automating security and compliance in your AWS environment?',
        options: [
            'A. It provides real-time security monitoring.',
            'B. It automates the process of triggering actions based on API activity.',
            'C. It reduces EC2 instance costs.',
            'D. It automates the deployment of serverless applications.'
        ],
        answer: 'B. It automates the process of triggering actions based on API activity.',
        explanation: 'AWS CloudTrail records API activity in your AWS environment, and this data can be used to trigger automated actions or compliance audits using AWS services like Lambda and EventBridge.'
    },
    {
        id: 21,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Systems Manager Automation Scaling',
        question: 'How can AWS Systems Manager Automation be used to scale EC2 instances automatically?',
        options: [
            'A. By configuring Run Command to increase instance capacity',
            'B. By scheduling EC2 Auto Scaling policies with Systems Manager Automation documents',
            'C. By running EC2 instance snapshots on demand',
            'D. By using AWS CodeDeploy to update instance configurations'
        ],
        answer: 'B. By scheduling EC2 Auto Scaling policies with Systems Manager Automation documents',
        explanation: 'AWS Systems Manager Automation can be used to execute EC2 Auto Scaling policies via Automation documents (runbooks) to automatically scale resources.'
    },
    {
        id: 22,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Patch Manager Baseline',
        question: 'What is a patch baseline in AWS Systems Manager Patch Manager used for?',
        options: [
            'A. It defines the priority order for patch application.',
            'B. It specifies the operating systems and types of patches allowed for EC2 instances.',
            'C. It monitors patch application activity.',
            'D. It logs patch failures for manual intervention.'
        ],
        answer: 'B. It specifies the operating systems and types of patches allowed for EC2 instances.',
        explanation: 'A patch baseline defines the types of patches (e.g., critical, security) that are approved for specific operating systems when automating patching in AWS Systems Manager Patch Manager.'
    },
    {
        id: 23,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Event-Driven Automation',
        question: 'How can Amazon EventBridge be used to trigger automation workflows in AWS?',
        options: [
            'A. By monitoring CloudTrail logs',
            'B. By triggering Lambda functions or Systems Manager Automation based on predefined events',
            'C. By running EC2 instances on demand',
            'D. By applying patches to running EC2 instances'
        ],
        answer: 'B. By triggering Lambda functions or Systems Manager Automation based on predefined events',
        explanation: 'Amazon EventBridge can detect events in AWS services and trigger actions such as invoking Lambda functions or starting Systems Manager Automation runbooks.'
    },
    {
        id: 24,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Config for Automation',
        question: 'How can AWS Config be integrated into automation processes?',
        options: [
            'A. It directly automates resource provisioning.',
            'B. It triggers remediation actions automatically when a resource becomes non-compliant.',
            'C. It runs scripts on EC2 instances.',
            'D. It automates patch management.'
        ],
        answer: 'B. It triggers remediation actions automatically when a resource becomes non-compliant.',
        explanation: 'AWS Config monitors resource configurations for compliance and can automatically trigger remediation actions through Systems Manager Automation or Lambda.'
    },
    {
        id: 25,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS CodeDeploy for Automation',
        question: 'How does AWS CodeDeploy help automate application deployments?',
        options: [
            'A. It provides automatic scaling of EC2 instances.',
            'B. It automates the deployment of application updates across EC2 instances or Lambda functions.',
            'C. It manages the lifecycle of containerized applications.',
            'D. It creates new instances for each deployment.'
        ],
        answer: 'B. It automates the deployment of application updates across EC2 instances or Lambda functions.',
        explanation: 'AWS CodeDeploy automates the process of deploying application updates across a fleet of EC2 instances or Lambda functions, helping streamline application management.'
    },
    {
        id: 26,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Lambda and CloudWatch Integration',
        question: 'How can Amazon CloudWatch be used to trigger Lambda functions for automation?',
        options: [
            'A. By monitoring API Gateway logs',
            'B. By creating alarms based on performance metrics to invoke Lambda functions',
            'C. By scheduling backups of CloudWatch data',
            'D. By managing EC2 instance security groups'
        ],
        answer: 'B. By creating alarms based on performance metrics to invoke Lambda functions',
        explanation: 'Amazon CloudWatch can trigger Lambda functions based on performance thresholds, allowing for automated remediation or scaling actions when specific alarms are triggered.'
    },
    {
        id: 27,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'AWS Service Catalog Automation',
        question: 'What is the primary use of AWS Service Catalog in automating resource provisioning?',
        options: [
            'A. It provides pre-configured templates for launching EC2 instances.',
            'B. It allows organizations to create and manage catalogs of approved AWS resources for automated deployment.',
            'C. It automates the scaling of application resources.',
            'D. It monitors application performance.'
        ],
        answer: 'B. It allows organizations to create and manage catalogs of approved AWS resources for automated deployment.',
        explanation: 'AWS Service Catalog allows organizations to centrally manage commonly deployed AWS services, making it easier to automate provisioning using approved resources.'
    },
    {
        id: 28,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'OpsWorks for Configuration Management',
        question: 'What is AWS OpsWorks primarily used for in automating infrastructure management?',
        options: [
            'A. To run containerized applications',
            'B. To automate configuration management using Chef or Puppet',
            'C. To monitor CloudFormation stacks',
            'D. To perform on-demand snapshots of EBS volumes'
        ],
        answer: 'B. To automate configuration management using Chef or Puppet',
        explanation: 'AWS OpsWorks provides a managed instance of Chef and Puppet for automating the deployment and configuration of infrastructure.'
    },
    {
        id: 29,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Automation through AMI Management',
        question: 'How can AWS Systems Manager Automation be used to automate the creation and management of AMIs?',
        options: [
            'A. By deploying instances using CloudFormation templates',
            'B. By running automation documents to create and manage AMIs based on EC2 instances',
            'C. By performing rolling updates of AMIs',
            'D. By encrypting AMIs automatically'
        ],
        answer: 'B. By running automation documents to create and manage AMIs based on EC2 instances',
        explanation: 'AWS Systems Manager Automation can be used to automate the creation and maintenance of Amazon Machine Images (AMIs) for EC2 instances using predefined workflows.'
    },
    {
        id: 30,
        subDomain: '3.2 Automate manual or repeatable processes',
        criticalTopic: 'Patch Manager Automation',
        question: 'How can Patch Manager help automate security compliance?',
        options: [
            'A. By encrypting instance data',
            'B. By automatically applying security patches across EC2 instances and generating compliance reports',
            'C. By updating IAM roles for EC2 instances',
            'D. By scaling EC2 instances based on patch availability'
        ],
        answer: 'B. By automatically applying security patches across EC2 instances and generating compliance reports',
        explanation: 'AWS Systems Manager Patch Manager automates the patching of EC2 instances to ensure they remain secure and compliant, and it generates compliance reports for auditing.'
    }
];
