// Subdomain 4.1: Design cost-optimized compute solutions

export const solutionsArchitectComputeSolutions = [
{
    id: 1,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Instance Purchasing Options",
    question: "Which EC2 purchasing option provides the highest discount compared to On-Demand instances?",
    options: [
        "A. Reserved Instances",
        "B. Spot Instances",
        "C. Dedicated Hosts",
        "D. Scheduled Reserved Instances"
    ],
    answer: "B. Spot Instances",
    explanation: "Spot Instances provide the highest potential discount (up to 90% off On-Demand prices) but can be interrupted with short notice when EC2 needs the capacity back. They are ideal for fault-tolerant, flexible workloads."
},
{
    id: 2,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Reserved Instances",
    question: "Which Reserved Instance offering provides the greatest discount with the most flexibility?",
    options: [
        "A. Standard Reserved Instances with no upfront payment",
        "B. Standard Reserved Instances with all upfront payment",
        "C. Convertible Reserved Instances with all upfront payment",
        "D. Scheduled Reserved Instances with all upfront payment"
    ],
    answer: "C. Convertible Reserved Instances with all upfront payment",
    explanation: "Convertible Reserved Instances with all upfront payment provide substantial discounts (slightly less than Standard RIs) while offering the flexibility to change instance families, operating systems, and tenancies during the term, which is ideal for evolving workloads."
},
{
    id: 3,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Auto Scaling",
    question: "How does EC2 Auto Scaling contribute to cost optimization?",
    options: [
        "A. By always maintaining a minimum number of instances",
        "B. By automatically adjusting capacity to match demand",
        "C. By using only Reserved Instances",
        "D. By limiting instance types to t2.micro"
    ],
    answer: "B. By automatically adjusting capacity to match demand",
    explanation: "EC2 Auto Scaling helps optimize costs by automatically scaling capacity up or down according to demand. This ensures you're not paying for idle resources during low-traffic periods while maintaining performance during high-traffic periods."
},
{
    id: 4,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Instance Right-sizing",
    question: "What AWS tool helps identify appropriate instance sizes based on performance metrics?",
    options: [
        "A. AWS Cost Explorer",
        "B. Amazon CloudWatch",
        "C. AWS Compute Optimizer",
        "D. AWS Trusted Advisor"
    ],
    answer: "C. AWS Compute Optimizer",
    explanation: "AWS Compute Optimizer uses machine learning to analyze the performance metrics of your existing resources and recommend optimal AWS compute resources for your workloads, helping you right-size your instances and reduce costs."
},
{
    id: 5,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Lambda Pricing Model",
    question: "Which factors affect the cost of running AWS Lambda functions?",
    options: [
        "A. Number of invocations, duration, and memory allocated",
        "B. Number of invocations and storage only",
        "C. CPU utilization and network usage only",
        "D. Storage, memory allocated, and Availability Zone"
    ],
    answer: "A. Number of invocations, duration, and memory allocated",
    explanation: "AWS Lambda pricing is based on three factors: number of requests (invocations), duration (time your code executes), and memory allocated (which also determines CPU allocation). Understanding these factors helps optimize Lambda costs."
},
{
    id: 6,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Graviton Instances",
    question: "Which EC2 instance type can help reduce costs while maintaining performance for compatible workloads?",
    options: [
        "A. Memory-optimized instances (R-family)",
        "B. Compute-optimized instances (C-family)",
        "C. ARM-based instances (Graviton)",
        "D. GPU instances (P-family)"
    ],
    answer: "C. ARM-based instances (Graviton)",
    explanation: "AWS Graviton processors (ARM-based) are designed by AWS to deliver the best price-performance for cloud workloads. Graviton2 and Graviton3 instances can provide up to 40% better price-performance compared to equivalent x86 instances for compatible workloads."
},
{
    id: 7,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Container Services",
    question: "Which AWS container service should you choose for maximum cost optimization if you need to run containers without managing infrastructure?",
    options: [
        "A. Amazon ECS with EC2 launch type",
        "B. Amazon EKS with EC2 nodes",
        "C. Amazon ECS with Fargate",
        "D. Amazon EKS with self-managed nodes"
    ],
    answer: "C. Amazon ECS with Fargate",
    explanation: "Amazon ECS with Fargate launch type allows you to run containers without managing the underlying infrastructure. Fargate allocates the exact compute resources needed by your containers, eliminating over-provisioning and reducing costs compared to maintaining EC2 instances."
},
{
    id: 8,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Spot Instance Interruptions",
    question: "Which service helps manage Spot Instance interruptions to optimize costs while maintaining availability?",
    options: [
        "A. EC2 Auto Scaling with multiple instance types",
        "B. AWS Batch",
        "C. Amazon EC2 Fleet",
        "D. All of the above"
    ],
    answer: "D. All of the above",
    explanation: "All these services can help manage Spot Instance interruptions: EC2 Auto Scaling with multiple instance types and purchase options, AWS Batch for batch computing jobs, and EC2 Fleet for managing diverse instance types and purchase options. The right choice depends on your specific workload."
},
{
    id: 9,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Serverless Computing",
    question: "Which serverless compute option would be most cost-effective for infrequent, short-duration processing tasks?",
    options: [
        "A. Amazon EC2 with Auto Scaling",
        "B. AWS Lambda",
        "C. Amazon ECS with Fargate",
        "D. Amazon EMR"
    ],
    answer: "B. AWS Lambda",
    explanation: "AWS Lambda is ideal for infrequent, short-duration tasks since you only pay for the compute time consumed (rounded to the nearest millisecond) and the number of invocations. For infrequent tasks, this eliminates paying for idle resources, unlike container-based or instance-based solutions."
},
{
    id: 10,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Compute Savings Plans",
    question: "Which AWS purchasing option provides savings on compute usage regardless of instance family, size, OS, or region?",
    options: [
        "A. Standard Reserved Instances",
        "B. Compute Savings Plans",
        "C. EC2 Instance Savings Plans",
        "D. Dedicated Hosts"
    ],
    answer: "B. Compute Savings Plans",
    explanation: "Compute Savings Plans provide flexible pricing in exchange for committing to a consistent amount of compute usage for 1 or 3 years. They apply to EC2, Fargate, and Lambda usage regardless of instance family, size, OS, region, or tenancy, offering greater flexibility than EC2 Instance Savings Plans."
},
{
    id: 11,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Idle Resource Management",
    question: "Which strategy can help reduce costs for non-production EC2 instances used only during business hours?",
    options: [
        "A. Using Reserved Instances",
        "B. Implementing start/stop automation based on schedules",
        "C. Switching to larger instance sizes",
        "D. Using Dedicated Hosts"
    ],
    answer: "B. Implementing start/stop automation based on schedules",
    explanation: "Implementing automation to start instances at the beginning of the workday and stop them after hours can reduce costs by up to 70% for development, testing, and staging environments that are only needed during business hours. This can be achieved using AWS Lambda functions, EventBridge, or Instance Scheduler."
},
{
    id: 12,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Lambda Function Optimization",
    question: "Which approach can help reduce AWS Lambda costs?",
    options: [
        "A. Always setting memory allocation to maximum",
        "B. Optimizing function code to reduce execution time",
        "C. Adding unnecessary dependencies to the deployment package",
        "D. Using synchronous invocations exclusively"
    ],
    answer: "B. Optimizing function code to reduce execution time",
    explanation: "Optimizing Lambda function code to reduce execution time directly lowers costs since Lambda charges are based on duration (execution time). Efficient code, minimal dependencies, and appropriate memory allocation all contribute to lower execution times and costs."
},
{
    id: 13,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Hibernation",
    question: "How can EC2 hibernation help optimize costs?",
    options: [
        "A. By reducing the hourly rate charged for instances",
        "B. By preserving RAM state, allowing faster instance startup without reprovisioning",
        "C. By automatically scaling instances based on demand",
        "D. By providing bulk discounts for large instance fleets"
    ],
    answer: "B. By preserving RAM state, allowing faster instance startup without reprovisioning",
    explanation: "EC2 hibernation saves the contents of RAM to the root EBS volume, allowing you to stop instances (and stop paying for compute) while preserving state. When restarted, the instance quickly resumes from where it left off, reducing time and resources needed for application initialization."
},
{
    id: 14,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "T-instance Burstable Performance",
    question: "Which EC2 instance type is designed to provide a baseline level of CPU performance with the ability to burst to higher levels when needed?",
    options: [
        "A. C-family instances",
        "B. M-family instances",
        "C. T-family instances",
        "D. R-family instances"
    ],
    answer: "C. T-family instances",
    explanation: "T-family instances (like t3 and t4g) are burstable performance instances that provide a baseline level of CPU performance with the ability to burst above the baseline when needed. They are cost-effective for workloads with variable CPU usage that don't need sustained high CPU performance."
},
{
    id: 15,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "EC2 Dedicated Instances vs. Dedicated Hosts",
    question: "Which option is more cost-effective for running a large number of instances that require host affinity or licensing based on cores/sockets?",
    options: [
        "A. On-Demand Instances",
        "B. EC2 Dedicated Instances",
        "C. EC2 Dedicated Hosts",
        "D. Spot Instances"
    ],
    answer: "C. EC2 Dedicated Hosts",
    explanation: "EC2 Dedicated Hosts provide physical servers dedicated for your use, offering visibility and control over physical cores for licensing purposes. While initially more expensive than Dedicated Instances, they are more cost-effective for large numbers of instances, especially with BYOL (Bring Your Own License) scenarios based on sockets or cores."
},
{
    id: 16,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Scheduled Reserved Instances",
    question: "Which EC2 purchasing option is most cost-effective for a predictable workload that runs for a fixed time period each day?",
    options: [
        "A. On-Demand Instances",
        "B. Standard Reserved Instances",
        "C. Scheduled Reserved Instances",
        "D. Spot Instances"
    ],
    answer: "C. Scheduled Reserved Instances",
    explanation: "Scheduled Reserved Instances allow you to reserve capacity for specific recurring time periods (daily, weekly, or monthly) with a minimum of 1,200 hours per year. They are ideal for predictable, time-bound workloads like batch processing or supplemental capacity for business hours."
},
{
    id: 17,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Spot Fleet",
    question: "What is the primary benefit of using Spot Fleet instead of individual Spot Instance requests?",
    options: [
        "A. Lower per-hour pricing",
        "B. Ability to request multiple instance types across multiple Availability Zones",
        "C. Guaranteed availability of instances",
        "D. Fixed instance pricing"
    ],
    answer: "B. Ability to request multiple instance types across multiple Availability Zones",
    explanation: "Spot Fleet allows you to diversify your request across multiple instance types and Availability Zones, improving the likelihood of fulfilling your capacity requirement and maintaining that capacity at the lowest possible cost as Spot prices fluctuate."
},
{
    id: 18,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Amazon Lightsail",
    question: "For which scenario would Amazon Lightsail be the most cost-effective compute option?",
    options: [
        "A. Running enterprise applications requiring high availability",
        "B. Hosting simple websites or small applications with predictable pricing",
        "C. Processing big data workloads",
        "D. Running containerized microservices"
    ],
    answer: "B. Hosting simple websites or small applications with predictable pricing",
    explanation: "Amazon Lightsail offers simple, predictable pricing for small-scale applications, blogs, and websites. It bundles compute, storage, and networking capabilities at a low, flat monthly rate, making it ideal for users who need simplicity and predictable costs over extensive configurability."
},
{
    id: 19,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Containerization Benefits",
    question: "How does containerizing applications on AWS help optimize costs?",
    options: [
        "A. Containers always require less compute resources than VMs",
        "B. Container images are always smaller than AMIs",
        "C. Higher density and resource utilization on host instances",
        "D. Elimination of all operational overhead"
    ],
    answer: "C. Higher density and resource utilization on host instances",
    explanation: "Containerization allows multiple applications to share underlying infrastructure efficiently, increasing density and resource utilization on host instances. This leads to cost savings through better infrastructure utilization compared to running separate VMs for each application."
},
{
    id: 20,
    subDomain: "4.1 Design cost-optimized compute solutions",
    criticalTopic: "Lambda Provisioned Concurrency",
    question: "When is it cost-effective to use Lambda Provisioned Concurrency?",
    options: [
        "A. For all Lambda functions to reduce costs",
        "B. For frequently invoked functions with strict latency requirements",
        "C. For functions that run for more than 15 minutes",
        "D. For functions that have unpredictable, sporadic traffic"
    ],
    answer: "B. For frequently invoked functions with strict latency requirements",
    explanation: "Lambda Provisioned Concurrency is cost-effective for functions with high invocation rates and latency sensitivity, as it eliminates cold starts. For infrequently invoked functions, on-demand Lambda is more cost-effective as you don't pay for idle capacity with standard Lambda."
},
];