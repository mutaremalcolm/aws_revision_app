// Define methods of deploying and operating in the AWS Cloud

export const cloudPractitionerDeployingOperating = [
    {
        id: 1,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Management Console",
        question: "What is the AWS Management Console?",
        options: [
            "A. A web-based user interface for accessing and managing AWS services",
            "B. A command-line tool for automating AWS operations",
            "C. A desktop application for monitoring AWS resources",
            "D. A programming library for integrating AWS services"
        ],
        answer: "A. A web-based user interface for accessing and managing AWS services",
        explanation: "The AWS Management Console is a web-based interface that allows users to access and manage AWS services through a graphical user interface."
    },
    {
        id: 2,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Command Line Interface (CLI)",
        question: "What is the primary purpose of the AWS Command Line Interface (CLI)?",
        options: [
            "A. To provide a web-based interface for AWS services",
            "B. To allow users to write applications using AWS services",
            "C. To enable scripting and automation of AWS services through commands",
            "D. To deploy applications to mobile devices"
        ],
        answer: "C. To enable scripting and automation of AWS services through commands",
        explanation: "The AWS CLI allows users to control multiple AWS services from the command line and automate them through scripts."
    },
    {
        id: 3,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Database Migration Service (DMS)",
        question: "What is the primary use of AWS Database Migration Service (DMS)?",
        options: [
            "A. Migrate data warehouses to Amazon Redshift",
            "B. Migrate databases to AWS with minimal downtime",
            "C. Monitor the health of your databases",
            "D. Automatically scale your databases"
        ],
        answer: "B. Migrate databases to AWS with minimal downtime",
        explanation: "AWS DMS is used to migrate databases from on-premises to AWS with minimal downtime and without the need for manual processes."
    },
    {
        id: 4,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Elastic Beanstalk",
        question: "What is AWS Elastic Beanstalk?",
        options: [
            "A. A service for deploying and scaling web applications and services developed with various programming languages",
            "B. A tool for monitoring application performance",
            "C. A service for data warehousing",
            "D. A content delivery network"
        ],
        answer: "A. A service for deploying and scaling web applications and services developed with various programming languages",
        explanation: "AWS Elastic Beanstalk allows developers to upload their code, and it automatically handles deployment, from capacity provisioning to load balancing."
    },
    {
        id: 5,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CloudFormation",
        question: "What is the primary function of AWS CloudFormation?",
        options: [
            "A. To provide machine learning capabilities",
            "B. To model and provision AWS resources using infrastructure as code",
            "C. To deploy containerized applications",
            "D. To manage user access and permissions"
        ],
        answer: "B. To model and provision AWS resources using infrastructure as code",
        explanation: "AWS CloudFormation allows you to define and provision AWS resources using templates, enabling infrastructure as code."
    },
    {
        id: 6,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS OpsWorks",
        question: "Which AWS service uses Chef and Puppet to automate how servers are configured, deployed, and managed across EC2 instances or on-premises compute environments?",
        options: [
            "A. AWS CloudFormation",
            "B. AWS OpsWorks",
            "C. AWS Elastic Beanstalk",
            "D. AWS CodeDeploy"
        ],
        answer: "B. AWS OpsWorks",
        explanation: "AWS OpsWorks is a configuration management service that uses Chef and Puppet to automate server configurations."
    },
    {
        id: 7,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeDeploy",
        question: "What is the purpose of AWS CodeDeploy?",
        options: [
            "A. To store and version control code",
            "B. To automate code deployments to any instance, including EC2 instances and on-premises servers",
            "C. To provide continuous integration services",
            "D. To monitor application performance"
        ],
        answer: "B. To automate code deployments to any instance, including EC2 instances and on-premises servers",
        explanation: "AWS CodeDeploy automates application deployments to various compute services, helping avoid downtime during deployment."
    },
    {
        id: 8,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodePipeline",
        question: "What is AWS CodePipeline used for?",
        options: [
            "A. Automating the release pipelines for fast and reliable application updates",
            "B. Hosting source code repositories",
            "C. Monitoring infrastructure health",
            "D. Managing user permissions"
        ],
        answer: "A. Automating the release pipelines for fast and reliable application updates",
        explanation: "AWS CodePipeline is a continuous delivery service that automates release pipelines for application and infrastructure updates."
    },
    {
        id: 9,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Glue",
        question: "What is the purpose of AWS Glue in data operations?",
        options: [
            "A. Provisioning virtual servers",
            "B. Extracting, transforming, and loading data for analytics",
            "C. Providing object storage for applications",
            "D. Monitoring AWS infrastructure"
        ],
        answer: "B. Extracting, transforming, and loading data for analytics",
        explanation: "AWS Glue is a fully managed ETL service that helps you prepare and transform data for analytics."
    },
    {
        id: 10,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Systems Manager",
        question: "What is AWS Systems Manager used for?",
        options: [
            "A. Managing EC2 instances and on-premises servers at scale",
            "B. Deploying web applications",
            "C. Providing data analytics",
            "D. Managing IAM users and groups"
        ],
        answer: "A. Managing EC2 instances and on-premises servers at scale",
        explanation: "AWS Systems Manager provides a unified user interface to view operational data and automate tasks across AWS resources."
    },
    {
        id: 11,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CloudShell",
        question: "What is AWS CloudShell?",
        options: [
            "A. A browser-based shell for managing AWS resources",
            "B. A desktop application for AWS management",
            "C. A mobile app for AWS services",
            "D. A physical device for data transfer"
        ],
        answer: "A. A browser-based shell for managing AWS resources",
        explanation: "AWS CloudShell is a browser-based shell that provides a pre-authenticated environment for managing AWS resources using the AWS CLI."
    },
    {
        id: 12,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Amazon Athena",
        question: "What is Amazon Athena primarily used for in operations?",
        options: [
            "A. Monitoring and managing EC2 instances",
            "B. Querying data stored in Amazon S3 using SQL",
            "C. Performing batch processing workloads",
            "D. Managing user access to resources"
        ],
        answer: "B. Querying data stored in Amazon S3 using SQL",
        explanation: "Amazon Athena is an interactive query service that allows you to use SQL to analyze data directly in Amazon S3."
    },
    {
        id: 13,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Infrastructure as Code",
        question: "Which AWS service supports the practice of Infrastructure as Code (IaC)?",
        options: [
            "A. AWS CloudFormation",
            "B. Amazon S3",
            "C. AWS Lambda",
            "D. Amazon RDS"
        ],
        answer: "A. AWS CloudFormation",
        explanation: "AWS CloudFormation allows you to model and provision AWS resources using code, supporting the IaC approach."
    },
    {
        id: 14,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeCommit",
        question: "What is AWS CodeCommit?",
        options: [
            "A. A source control service for hosting private Git repositories",
            "B. A service for deploying applications",
            "C. A tool for monitoring AWS resources",
            "D. A service for managing databases"
        ],
        answer: "A. A source control service for hosting private Git repositories",
        explanation: "AWS CodeCommit is a fully-managed source control service that hosts secure Git-based repositories."
    },
    {
        id: 15,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeBuild",
        question: "What is the primary function of AWS CodeBuild?",
        options: [
            "A. Compiling source code, running tests, and producing software packages",
            "B. Deploying code to production environments",
            "C. Monitoring application performance",
            "D. Managing AWS accounts"
        ],
        answer: "A. Compiling source code, running tests, and producing software packages",
        explanation: "AWS CodeBuild is a fully managed build service that compiles code, runs tests, and produces deployable artifacts."
    },
    {
        id: 16,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Cloud9",
        question: "What is AWS Cloud9?",
        options: [
            "A. A fully-featured cloud-based IDE for writing, running, and debugging code",
            "B. A storage service",
            "C. A database migration tool",
            "D. A virtual private network service"
        ],
        answer: "A. A fully-featured cloud-based IDE for writing, running, and debugging code",
        explanation: "AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug code with just a browser."
    },
    {
        id: 17,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeStar",
        question: "What does AWS CodeStar provide to developers?",
        options: [
            "A. A unified user interface to manage software development activities",
            "B. A database management service",
            "C. A tool for data analytics",
            "D. A monitoring service for network traffic"
        ],
        answer: "A. A unified user interface to manage software development activities",
        explanation: "AWS CodeStar provides a unified user interface, enabling you to easily manage your software development activities in one place."
    },
    {
        id: 18,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Elastic Container Service (ECS)",
        question: "What is AWS Elastic Container Service (ECS) used for?",
        options: [
            "A. Running containerized applications at scale",
            "B. Storing container images",
            "C. Monitoring application performance",
            "D. Managing user permissions"
        ],
        answer: "A. Running containerized applications at scale",
        explanation: "AWS ECS is a fully managed container orchestration service that helps you run and scale containerized applications."
    },
    {
        id: 19,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Elastic Kubernetes Service (EKS)",
        question: "What is AWS Elastic Kubernetes Service (EKS)?",
        options: [
            "A. A managed service for running Kubernetes on AWS",
            "B. A data warehousing service",
            "C. A content delivery network",
            "D. A service for deploying serverless functions"
        ],
        answer: "A. A managed service for running Kubernetes on AWS",
        explanation: "AWS EKS is a fully managed service that makes it easy to run Kubernetes on AWS without needing to install and operate Kubernetes clusters."
    },
    {
        id: 20,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Automation in AWS",
        question: "Which AWS service can automate operational tasks across AWS resources?",
        options: [
            "A. AWS Systems Manager",
            "B. Amazon S3",
            "C. AWS Lambda",
            "D. Amazon DynamoDB"
        ],
        answer: "A. AWS Systems Manager",
        explanation: "AWS Systems Manager enables automation of operational tasks across AWS resources, such as patching and configuration updates."
    },
    {
        id: 21,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Monitoring AWS Resources",
        question: "Which AWS service is used for monitoring AWS resources and applications in real-time?",
        options: [
            "A. AWS CloudTrail",
            "B. Amazon CloudWatch",
            "C. AWS Config",
            "D. AWS Trusted Advisor"
        ],
        answer: "B. Amazon CloudWatch",
        explanation: "Amazon CloudWatch is a monitoring service for AWS resources and applications, providing data and actionable insights."
    },
    {
        id: 22,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Logging in AWS",
        question: "Which service provides a record of AWS API calls for an account?",
        options: [
            "A. Amazon CloudWatch",
            "B. AWS CloudTrail",
            "C. AWS Config",
            "D. AWS X-Ray"
        ],
        answer: "B. AWS CloudTrail",
        explanation: "AWS CloudTrail records AWS API calls for your account and delivers log files, providing visibility into user activity."
    },
    {
        id: 23,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeArtifact",
        question: "What is AWS CodeArtifact used for?",
        options: [
            "A. Storing and retrieving application dependencies",
            "B. Deploying applications",
            "C. Monitoring network traffic",
            "D. Managing databases"
        ],
        answer: "A. Storing and retrieving application dependencies",
        explanation: "AWS CodeArtifact is a managed artifact repository service that makes it easy to securely store and share software packages."
    },
    {
        id: 24,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Batch",
        question: "What is the purpose of AWS Batch?",
        options: [
            "A. Running batch computing workloads on AWS",
            "B. Processing real-time data streams",
            "C. Managing user permissions",
            "D. Hosting web applications"
        ],
        answer: "A. Running batch computing workloads on AWS",
        explanation: "AWS Batch enables developers to run batch computing workloads on the AWS Cloud, efficiently and at any scale."
    },
    {
        id: 25,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "Deployment Methods",
        question: "Which of the following is a method of deploying applications in AWS that involves manual processes?",
        options: [
            "A. Manual deployment using the AWS Management Console",
            "B. Automated deployment using AWS CodeDeploy",
            "C. Infrastructure as Code using AWS CloudFormation",
            "D. Continuous integration using AWS CodePipeline"
        ],
        answer: "A. Manual deployment using the AWS Management Console",
        explanation: "Manual deployment involves using the AWS Management Console to set up and deploy resources without automation."
    },
    {
        id: 26,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS App Runner",
        question: "What is AWS App Runner designed for?",
        options: [
            "A. Building and running containerized web applications without managing infrastructure",
            "B. Monitoring application performance",
            "C. Managing user access",
            "D. Storing data in the cloud"
        ],
        answer: "A. Building and running containerized web applications without managing infrastructure",
        explanation: "AWS App Runner is a fully managed service that makes it easy for developers to quickly deploy containerized web applications."
    },
    {
        id: 27,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Amplify",
        question: "What is AWS Amplify used for?",
        options: [
            "A. Developing and deploying full-stack web and mobile applications",
            "B. Managing databases",
            "C. Monitoring network traffic",
            "D. Encrypting data at rest"
        ],
        answer: "A. Developing and deploying full-stack web and mobile applications",
        explanation: "AWS Amplify provides tools and services to help developers build, deploy, and host scalable full-stack applications."
    },
    {
        id: 28,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS CodeStar",
        question: "Which AWS service provides a unified interface for managing software development activities and enables continuous delivery?",
        options: [
            "A. AWS CodeStar",
            "B. AWS CodeCommit",
            "C. AWS CodeBuild",
            "D. AWS CodeDeploy"
        ],
        answer: "A. AWS CodeStar",
        explanation: "AWS CodeStar provides a unified interface for managing software development activities, including continuous delivery."
    },
    {
        id: 29,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS Elastic Beanstalk vs. AWS CloudFormation",
        question: "What is a key difference between AWS Elastic Beanstalk and AWS CloudFormation?",
        options: [
            "A. Elastic Beanstalk is used for data storage, while CloudFormation is for computing",
            "B. Elastic Beanstalk simplifies application deployment, while CloudFormation provides granular control over infrastructure provisioning",
            "C. Elastic Beanstalk is for serverless applications, while CloudFormation is for containerized applications",
            "D. There is no difference; they serve the same purpose"
        ],
        answer: "B. Elastic Beanstalk simplifies application deployment, while CloudFormation provides granular control over infrastructure provisioning",
        explanation: "Elastic Beanstalk abstracts infrastructure details to simplify deployment, whereas CloudFormation allows detailed specification of resources."
    },
    {
        id: 30,
        subDomain: "3.1 Define methods of deploying and operating in the AWS Cloud",
        criticalTopic: "AWS App Mesh",
        question: "What is AWS App Mesh used for?",
        options: [
            "A. Providing application-level networking to standardize communication between services",
            "B. Managing user permissions",
            "C. Deploying mobile applications",
            "D. Storing large amounts of data"
        ],
        answer: "A. Providing application-level networking to standardize communication between services",
        explanation: "AWS App Mesh is a service mesh that provides application-level networking to make it easy for services to communicate with each other."
    }
];
