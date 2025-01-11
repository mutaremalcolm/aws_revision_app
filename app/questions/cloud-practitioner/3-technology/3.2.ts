// Define the AWS global infrastructure

export const cloudPractitionerGlobalInfrastructure = [
    {
        id: 1,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Regions",
        question: "What is an AWS Region?",
        options: [
            "A. A physical data center",
            "B. A collection of data centers in a specific geographical location",
            "C. A group of Edge Locations",
            "D. A virtual network within AWS"
        ],
        answer: "B. A collection of data centers in a specific geographical location",
        explanation: "An AWS Region is a physical location in the world where AWS has multiple Availability Zones. Each Region consists of multiple, isolated, and physically separate Availability Zones within a geographic area."
    },
    {
        id: 2,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Availability Zones",
        question: "What is an AWS Availability Zone?",
        options: [
            "A. A single data center or group of data centers within a Region",
            "B. A collection of AWS Regions",
            "C. A network security group",
            "D. An AWS data warehouse service"
        ],
        answer: "A. A single data center or group of data centers within a Region",
        explanation: "An Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity within an AWS Region."
    },
    {
        id: 3,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Edge Locations",
        question: "What is the primary purpose of AWS Edge Locations?",
        options: [
            "A. To host AWS management consoles",
            "B. To provide a secure location for storing data backups",
            "C. To cache content for faster delivery to end users",
            "D. To host Amazon EC2 instances"
        ],
        answer: "C. To cache content for faster delivery to end users",
        explanation: "Edge Locations are endpoints for AWS services like Amazon CloudFront to cache content closer to end users, reducing latency."
    },
    {
        id: 4,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Global Accelerator",
        question: "What is AWS Global Accelerator used for?",
        options: [
            "A. To improve availability and performance of applications with local users",
            "B. To accelerate the global expansion of AWS Regions",
            "C. To provide DDoS protection",
            "D. To optimize costs for AWS resources"
        ],
        answer: "A. To improve availability and performance of applications with local users",
        explanation: "AWS Global Accelerator directs traffic through AWS's global network infrastructure to improve the performance and availability of applications."
    },
    {
        id: 5,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Local Zones",
        question: "What are AWS Local Zones?",
        options: [
            "A. Data centers located in remote areas",
            "B. Extensions of an AWS Region that are closer to large population centers",
            "C. Additional Availability Zones within a Region",
            "D. Edge Locations used for caching content"
        ],
        answer: "B. Extensions of an AWS Region that are closer to large population centers",
        explanation: "AWS Local Zones place compute, storage, database, and other services closer to end users for applications that require single-digit millisecond latency."
    },
    {
        id: 6,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Outposts",
        question: "What is AWS Outposts?",
        options: [
            "A. A fully managed service that extends AWS infrastructure to on-premises locations",
            "B. A tool for monitoring AWS resources",
            "C. A type of Availability Zone",
            "D. An AWS networking service"
        ],
        answer: "A. A fully managed service that extends AWS infrastructure to on-premises locations",
        explanation: "AWS Outposts brings native AWS services, infrastructure, and operating models to virtually any data center or on-premises facility."
    },
    {
        id: 7,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Benefits of Multiple Availability Zones",
        question: "Why does AWS recommend deploying applications across multiple Availability Zones?",
        options: [
            "A. To increase application performance",
            "B. To provide high availability and fault tolerance",
            "C. To reduce costs",
            "D. To simplify application deployment"
        ],
        answer: "B. To provide high availability and fault tolerance",
        explanation: "Deploying across multiple Availability Zones ensures that if one data center fails, the application can continue running from another."
    },
    {
        id: 8,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Wavelength",
        question: "What is AWS Wavelength designed for?",
        options: [
            "A. Delivering ultra-low latency applications for 5G devices",
            "B. Storing large amounts of data",
            "C. Managing user permissions",
            "D. Encrypting data at rest"
        ],
        answer: "A. Delivering ultra-low latency applications for 5G devices",
        explanation: "AWS Wavelength embeds AWS compute and storage services within telecommunications providers’ data centers at the edge of the 5G network."
    },
    {
        id: 9,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Global Infrastructure Map",
        question: "Where can customers find up-to-date information on AWS Regions, Availability Zones, and Edge Locations?",
        options: [
            "A. AWS Management Console",
            "B. AWS Global Infrastructure website",
            "C. AWS Billing Dashboard",
            "D. AWS Marketplace"
        ],
        answer: "B. AWS Global Infrastructure website",
        explanation: "The AWS Global Infrastructure page provides detailed and current information about AWS Regions, Availability Zones, and Edge Locations."
    },
    {
        id: 10,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Choosing an AWS Region",
        question: "Which factors should be considered when choosing an AWS Region?",
        options: [
            "A. Latency to end users, compliance requirements, and available services",
            "B. Number of Edge Locations, AWS pricing, and weather conditions",
            "C. Proximity to AWS headquarters, language preferences, and currency exchange rates",
            "D. Local tax laws, time zones, and holidays"
        ],
        answer: "A. Latency to end users, compliance requirements, and available services",
        explanation: "Choosing a Region involves considering factors like proximity to users, data sovereignty laws, and the AWS services offered in that Region."
    },
    {
        id: 11,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Data Residency",
        question: "How does the AWS global infrastructure support data residency requirements?",
        options: [
            "A. By replicating data to all Regions automatically",
            "B. By allowing customers to choose the Region where their data is stored",
            "C. By encrypting data at rest",
            "D. By offering data deletion services"
        ],
        answer: "B. By allowing customers to choose the Region where their data is stored",
        explanation: "AWS allows customers to select the Region(s) where their data will be stored, helping meet data residency and compliance requirements."
    },
    {
        id: 12,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Inter-Region Connectivity",
        question: "What service does AWS provide to enable secure connectivity between AWS Regions?",
        options: [
            "A. AWS Direct Connect",
            "B. Amazon VPC Peering",
            "C. AWS Global Accelerator",
            "D. AWS Transit Gateway"
        ],
        answer: "D. AWS Transit Gateway",
        explanation: "AWS Transit Gateway allows customers to connect their Amazon VPCs and on-premises networks through a central hub."
    },
    {
        id: 13,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Direct Connect",
        question: "What is the purpose of AWS Direct Connect?",
        options: [
            "A. To provide a dedicated network connection from your premises to AWS",
            "B. To connect AWS resources within a Region",
            "C. To encrypt data in transit",
            "D. To monitor AWS services"
        ],
        answer: "A. To provide a dedicated network connection from your premises to AWS",
        explanation: "AWS Direct Connect enables customers to establish a dedicated, private network connection between their data center and AWS."
    },
    {
        id: 14,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Latency Considerations",
        question: "Why is latency an important consideration when selecting an AWS Region?",
        options: [
            "A. Because AWS charges more for low-latency Regions",
            "B. To ensure fast response times for end users",
            "C. To comply with AWS policies",
            "D. Because not all services are available in every Region"
        ],
        answer: "B. To ensure fast response times for end users",
        explanation: "Selecting a Region close to end users reduces latency, improving application performance and user experience."
    },
    {
        id: 15,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Service Availability by Region",
        question: "Do all AWS services available in one Region automatically become available in all other Regions?",
        options: [
            "A. Yes, all services are available in all Regions",
            "B. No, service availability varies by Region",
            "C. Only if requested by the customer",
            "D. Only for Enterprise Support customers"
        ],
        answer: "B. No, service availability varies by Region",
        explanation: "AWS services are launched in Regions over time, so not all services are available in every Region."
    },
    {
        id: 16,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Global Network",
        question: "What is a key characteristic of the AWS global network infrastructure?",
        options: [
            "A. It uses the public internet exclusively",
            "B. It is a redundant, private global network backbone",
            "C. It is limited to North America",
            "D. It relies on customer networks"
        ],
        answer: "B. It is a redundant, private global network backbone",
        explanation: "AWS operates a global network infrastructure, including private fiber links between Regions and Availability Zones, enhancing performance and security."
    },
    {
        id: 17,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS CloudFront",
        question: "What is Amazon CloudFront?",
        options: [
            "A. A global content delivery network (CDN) service",
            "B. A data storage service",
            "C. A database migration tool",
            "D. A virtual private network service"
        ],
        answer: "A. A global content delivery network (CDN) service",
        explanation: "Amazon CloudFront speeds up the distribution of static and dynamic web content to users by delivering it through a worldwide network of data centers called Edge Locations."
    },
    {
        id: 18,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Fault Isolation",
        question: "How does the AWS global infrastructure help with fault isolation?",
        options: [
            "A. By sharing resources across all Regions",
            "B. By isolating failures to specific Availability Zones or Regions",
            "C. By disabling services during failures",
            "D. By automatically deleting data during outages"
        ],
        answer: "B. By isolating failures to specific Availability Zones or Regions",
        explanation: "The AWS global infrastructure is designed to limit the impact of failures by isolating them to individual Availability Zones or Regions."
    },
    {
        id: 19,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Scalability",
        question: "How does the AWS global infrastructure support scalability?",
        options: [
            "A. By limiting resources to a single data center",
            "B. By providing virtually unlimited on-demand capacity across Regions and Availability Zones",
            "C. By requiring customers to manage hardware",
            "D. By restricting the use of multiple services"
        ],
        answer: "B. By providing virtually unlimited on-demand capacity across Regions and Availability Zones",
        explanation: "AWS's global infrastructure allows customers to scale resources up or down as needed, using the vast capacity available in multiple Regions and Availability Zones."
    },
    {
        id: 20,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Regions and Pricing",
        question: "How can the choice of AWS Region affect service pricing?",
        options: [
            "A. All AWS services cost the same in every Region",
            "B. Pricing can vary between Regions due to factors like operational costs and taxes",
            "C. Regions with more Availability Zones are always cheaper",
            "D. Enterprise Support customers get the same pricing in all Regions"
        ],
        answer: "B. Pricing can vary between Regions due to factors like operational costs and taxes",
        explanation: "Service pricing may differ between AWS Regions based on factors such as infrastructure costs, taxes, and local market conditions."
    },
    {
        id: 21,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "Compliance Considerations",
        question: "Why might compliance requirements influence the choice of an AWS Region?",
        options: [
            "A. Because some Regions have stricter security controls",
            "B. To ensure data residency and compliance with local laws",
            "C. Because compliance is managed by AWS globally",
            "D. Compliance does not affect Region choice"
        ],
        answer: "B. To ensure data residency and compliance with local laws",
        explanation: "Customers may need to store data in specific locations to comply with regulatory requirements, influencing their choice of Region."
    },
    {
        id: 22,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS GovCloud (US)",
        question: "What is AWS GovCloud (US) designed for?",
        options: [
            "A. General public use",
            "B. Hosting government workloads that require strict regulatory and compliance requirements",
            "C. Providing services at a lower cost",
            "D. Academic and research institutions only"
        ],
        answer: "B. Hosting government workloads that require strict regulatory and compliance requirements",
        explanation: "AWS GovCloud (US) Regions are isolated and designed to host sensitive data and regulated workloads for U.S. government agencies and customers."
    },
    {
        id: 23,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Edge Services",
        question: "Which of the following services leverages the AWS global network of Edge Locations?",
        options: [
            "A. Amazon CloudFront",
            "B. Amazon RDS",
            "C. AWS Lambda",
            "D. AWS CloudFormation"
        ],
        answer: "A. Amazon CloudFront",
        explanation: "Amazon CloudFront uses Edge Locations to cache content closer to end users, reducing latency and improving performance."
    },
    {
        id: 24,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "High Availability",
        question: "How does deploying resources across multiple AWS Regions enhance high availability?",
        options: [
            "A. By reducing resource costs",
            "B. By ensuring resources are available even if an entire Region becomes unavailable",
            "C. By simplifying deployment",
            "D. By increasing latency"
        ],
        answer: "B. By ensuring resources are available even if an entire Region becomes unavailable",
        explanation: "Using multiple Regions can protect applications from regional disruptions, providing higher availability."
    },
    {
        id: 25,
        subDomain: "3.2 Define the AWS global infrastructure",
        criticalTopic: "AWS Data Centers",
        question: "Which statement best describes AWS data centers?",
        options: [
            "A. They are owned and operated by third-party companies",
            "B. They are highly secure facilities with multiple layers of physical and operational security",
            "C. Customers can access data centers directly",
            "D. They are only located in the United States"
        ],
        answer: "B. They are highly secure facilities with multiple layers of physical and operational security",
        explanation: "AWS data centers are designed with state-of-the-art security, including physical and operational measures to protect customer data."
    }
];

