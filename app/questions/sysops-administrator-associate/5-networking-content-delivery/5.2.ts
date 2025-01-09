// Networking and Content Delivery - Configure domains, DNS services, and content delivery

export const sysOpsDNSContentDelivery = [
    {
        id: 11,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Alias Records in Route 53",
        question: "What is one advantage of using an Alias record in Amazon Route 53 over a CNAME record?",
        options: [
            "A. Alias records can point to any external domain.",
            "B. Alias records can be used at the top-level domain (zone apex).",
            "C. Alias records are more secure than CNAME records.",
            "D. Alias records have lower DNS query costs."
        ],
        answer: "B. Alias records can be used at the top-level domain (zone apex).",
        explanation: "Alias records allow you to map to AWS resources like CloudFront distributions and are supported at the zone apex, unlike CNAME records."
    },
    {
        id: 12,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Traffic Flow",
        question: "What is the main benefit of using Route 53 Traffic Flow?",
        options: [
            "A. It provides automatic DNS query logging.",
            "B. It allows for advanced routing configurations using visual workflows.",
            "C. It enables IPv6 routing by default.",
            "D. It reduces the cost of DNS queries."
        ],
        answer: "B. It allows for advanced routing configurations using visual workflows.",
        explanation: "Route 53 Traffic Flow provides a visual editor to manage complex routing policies like geolocation, latency-based, and weighted routing."
    },
    {
        id: 13,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "S3 Static Website Hosting",
        question: "What must be configured for an S3 bucket to host a static website?",
        options: [
            "A. Enable versioning and encryption",
            "B. Set bucket permissions to private",
            "C. Configure the bucket for public read access and enable static website hosting",
            "D. Attach an SSL certificate"
        ],
        answer: "C. Configure the bucket for public read access and enable static website hosting",
        explanation: "To host a static website on S3, the bucket must be configured for public read access, and static website hosting must be enabled."
    },
    {
        id: 14,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "SSL/TLS with CloudFront",
        question: "What feature of CloudFront allows for SSL/TLS encryption when delivering content?",
        options: [
            "A. Origin Access Identity (OAI)",
            "B. SSL Termination",
            "C. SNI Custom SSL",
            "D. Latency-based routing"
        ],
        answer: "C. SNI Custom SSL",
        explanation: "Server Name Indication (SNI) Custom SSL allows CloudFront to deliver content using SSL/TLS without requiring a dedicated IP address."
    },
    {
        id: 15,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Private DNS in Route 53",
        question: "Which of the following allows you to configure private DNS for VPCs using Route 53?",
        options: [
            "A. Route 53 Public Hosted Zones",
            "B. Route 53 Resolver",
            "C. Route 53 Private Hosted Zones",
            "D. Route 53 Geolocation Routing"
        ],
        answer: "C. Route 53 Private Hosted Zones",
        explanation: "Route 53 Private Hosted Zones allow you to create DNS zones accessible only within a VPC, enabling private DNS functionality."
    },
    {
        id: 16,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Geoproximity Routing",
        question: "How does geoproximity routing differ from geolocation routing in Route 53?",
        options: [
            "A. Geoproximity routing is based on IP address range, while geolocation routing uses GPS coordinates.",
            "B. Geoproximity routing adjusts traffic flow based on user location relative to a resource, while geolocation routing directs traffic based on a user's location.",
            "C. Geoproximity routing requires a custom domain, while geolocation routing does not.",
            "D. Geoproximity routing offers better security compared to geolocation routing."
        ],
        answer: "B. Geoproximity routing adjusts traffic flow based on user location relative to a resource, while geolocation routing directs traffic based on a user's location.",
        explanation: "Geoproximity routing allows for dynamic adjustments in traffic flow based on the geographic distance between users and resources."
    },
    {
        id: 17,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "CloudFront Signed URLs",
        question: "What is the primary use of signed URLs in Amazon CloudFront?",
        options: [
            "A. To prevent DDoS attacks",
            "B. To restrict access to content for specific users or during a limited time period",
            "C. To enhance performance for edge locations",
            "D. To ensure encrypted communication"
        ],
        answer: "B. To restrict access to content for specific users or during a limited time period",
        explanation: "Signed URLs in CloudFront restrict access to content, allowing only authorized users or limiting access based on a time window."
    },
    {
        id: 18,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Health Checks",
        question: "What is the purpose of Route 53 health checks?",
        options: [
            "A. To monitor EC2 instance performance",
            "B. To automate DNS failover based on the health of resources",
            "C. To balance traffic across Availability Zones",
            "D. To encrypt DNS queries"
        ],
        answer: "B. To automate DNS failover based on the health of resources",
        explanation: "Route 53 health checks continuously monitor the health of endpoints and can trigger DNS failover when an endpoint becomes unhealthy."
    },
    {
        id: 19,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Multi-Origin CloudFront Distributions",
        question: "Which of the following allows CloudFront to deliver content from multiple origins?",
        options: [
            "A. Latency-based routing",
            "B. Origin Groups",
            "C. Weighted routing",
            "D. SNI Custom SSL"
        ],
        answer: "B. Origin Groups",
        explanation: "CloudFront Origin Groups allow you to configure multiple origins and automatically failover to a secondary origin if the primary origin becomes unavailable."
    },
    {
        id: 20,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "CloudFront Price Classes",
        question: "What is the purpose of CloudFront Price Classes?",
        options: [
            "A. To control the price of content caching by choosing specific regions where content is served",
            "B. To limit the size of objects cached at edge locations",
            "C. To define the number of users that can access the content",
            "D. To manage the security of SSL certificates used in CloudFront distributions"
        ],
        answer: "A. To control the price of content caching by choosing specific regions where content is served",
        explanation: "CloudFront Price Classes allow you to optimize content delivery costs by limiting the regions in which your content is cached and served."
    },
    {
        id: 21,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Query Logging",
        question: "What is the purpose of enabling query logging in Route 53?",
        options: [
            "A. To monitor API calls made to Route 53",
            "B. To log all DNS requests made to a specific hosted zone",
            "C. To track changes to DNS records",
            "D. To automate DNS failover"
        ],
        answer: "B. To log all DNS requests made to a specific hosted zone",
        explanation: "Route 53 query logging captures all DNS queries made to a specific hosted zone, helping in monitoring and troubleshooting DNS-related issues."
    },
    {
        id: 22,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Domain Registration",
        question: "Which service can be used to register domain names directly through AWS?",
        options: [
            "A. AWS Certificate Manager",
            "B. Amazon CloudFront",
            "C. Amazon Route 53",
            "D. AWS Direct Connect"
        ],
        answer: "C. Amazon Route 53",
        explanation: "Amazon Route 53 includes a domain registration service, allowing you to purchase and manage domain names directly through AWS."
    },
    {
        id: 23,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "DNS TTL (Time to Live)",
        question: "What does the TTL (Time to Live) setting in a DNS record specify?",
        options: [
            "A. The duration of time DNS queries will be logged",
            "B. The time period for which a DNS record is cached by DNS resolvers",
            "C. The amount of time it takes to propagate DNS changes",
            "D. The expiration time for a domain name"
        ],
        answer: "B. The time period for which a DNS record is cached by DNS resolvers",
        explanation: "TTL specifies how long a DNS resolver caches a DNS record before querying Route 53 again for updated information."
    },
    {
        id: 24,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "CloudFront Field-Level Encryption",
        question: "What is the purpose of Field-Level Encryption in Amazon CloudFront?",
        options: [
            "A. To encrypt all data between edge locations and users",
            "B. To encrypt specific fields in HTTPS requests before forwarding them to the origin",
            "C. To provide encryption at rest for data in CloudFront edge locations",
            "D. To enforce SSL certificates for secure communication"
        ],
        answer: "B. To encrypt specific fields in HTTPS requests before forwarding them to the origin",
        explanation: "Field-Level Encryption allows CloudFront to encrypt sensitive data in HTTPS requests at the edge, ensuring secure communication between users and the origin."
    },
    {
        id: 25,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Resolver Endpoints",
        question: "What is the purpose of creating outbound Route 53 Resolver endpoints?",
        options: [
            "A. To allow on-premises DNS queries to resolve AWS resources",
            "B. To forward DNS queries from VPCs to on-premises DNS servers",
            "C. To route traffic to multiple origins",
            "D. To provide latency-based DNS routing"
        ],
        answer: "B. To forward DNS queries from VPCs to on-premises DNS servers",
        explanation: "Outbound Route 53 Resolver endpoints allow DNS queries from VPCs to be forwarded to on-premises DNS servers, supporting hybrid cloud architectures."
    },
    {
        id: 26,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Latency Monitoring",
        question: "How can you monitor DNS latency for Route 53 hosted zones?",
        options: [
            "A. Enable CloudWatch Logs for Route 53",
            "B. Use AWS Lambda to monitor DNS queries",
            "C. Create CloudWatch metrics for Route 53 health checks",
            "D. Use Route 53 Resolver Query Logs"
        ],
        answer: "C. Create CloudWatch metrics for Route 53 health checks",
        explanation: "CloudWatch metrics can be created for Route 53 health checks, allowing you to monitor the latency and availability of DNS endpoints."
    },
    {
        id: 27,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "DNSSEC in Route 53",
        question: "What is the primary benefit of enabling DNSSEC in Amazon Route 53?",
        options: [
            "A. To encrypt DNS queries and responses",
            "B. To authenticate DNS responses to ensure they have not been tampered with",
            "C. To speed up DNS resolution times",
            "D. To provide latency-based routing"
        ],
        answer: "B. To authenticate DNS responses to ensure they have not been tampered with",
        explanation: "DNSSEC (Domain Name System Security Extensions) provides a way to authenticate DNS responses to prevent spoofing or tampering."
    },
    {
        id: 28,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "CloudFront and Lambda@Edge",
        question: "What is the purpose of Lambda@Edge in Amazon CloudFront?",
        options: [
            "A. To cache dynamic content",
            "B. To process HTTP requests and responses closer to users",
            "C. To encrypt data in transit",
            "D. To route traffic to the nearest edge location"
        ],
        answer: "B. To process HTTP requests and responses closer to users",
        explanation: "Lambda@Edge allows you to run custom code at AWS edge locations in response to CloudFront events, improving performance and enabling custom content processing."
    },
    {
        id: 29,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "Route 53 Public Hosted Zones",
        question: "What is the key difference between public and private hosted zones in Route 53?",
        options: [
            "A. Public hosted zones are used for domains reachable over the internet, while private hosted zones are used for internal domains in a VPC.",
            "B. Public hosted zones support SSL certificates, while private hosted zones do not.",
            "C. Private hosted zones can only be used with EC2 instances, while public hosted zones can be used with all AWS resources.",
            "D. Public hosted zones automatically provide DDoS protection, while private hosted zones do not."
        ],
        answer: "A. Public hosted zones are used for domains reachable over the internet, while private hosted zones are used for internal domains in a VPC.",
        explanation: "Public hosted zones are used for domains that need to be accessible via the internet, while private hosted zones are used for internal DNS resolution within VPCs."
    },
    {
        id: 30,
        subDomain: "5.2 Configure domains, DNS services, and content delivery",
        criticalTopic: "S3 Website with Route 53",
        question: "How can you configure an S3 bucket to serve as the website origin for a Route 53 domain?",
        options: [
            "A. Enable S3 Transfer Acceleration",
            "B. Create an Alias record in Route 53 pointing to the S3 bucket",
            "C. Attach an Elastic IP to the S3 bucket",
            "D. Use CloudFront to route traffic to the S3 bucket"
        ],
        answer: "B. Create an Alias record in Route 53 pointing to the S3 bucket",
        explanation: "An Alias record can be used to point a Route 53 domain directly to an S3 bucket configured for static website hosting."
    }
];
