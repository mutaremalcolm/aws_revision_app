 // Subdomain 3.2: Design high-performing networking solutions
 
 export const solutionsArchitectNetworkingSolutions = [
 {
    id: 21,
    subDomain: "3.2 Design high-performing networking solutions",
    criticalTopic: "Amazon CloudFront Optimization",
    question: "Which CloudFront feature can improve performance for dynamic content?",
    options: [
        "A. Origin Access Identity",
        "B. Cache-Control headers",
        "C. Origin Shield",
        "D. Field-level encryption"
    ],
    answer: "C. Origin Shield",
    explanation: "CloudFront Origin Shield is an additional layer in the CloudFront caching infrastructure that helps minimize your origin's load, improve its availability, and reduce its operating costs. It helps improve performance for both dynamic and static content by reducing the number of redundant origin requests."
},
{
    id: 22,
    subDomain: "3.2 Design high-performing networking solutions",
    criticalTopic: "AWS Direct Connect",
    question: "Which AWS networking service provides a dedicated private connection from on-premises to AWS?",
    options: [
        "A. Amazon VPC peering",
        "B. AWS Direct Connect",
        "C. AWS VPN",
        "D. AWS Transit Gateway"
    ],
    answer: "B. AWS Direct Connect",
    explanation: "AWS Direct Connect provides a dedicated private connection from your on-premises data center to AWS, offering more consistent network performance, reduced bandwidth costs, and increased throughput compared to internet-based connections."
},
{
    id: 23,
    subDomain: "3.2 Design high-performing networking solutions",
    criticalTopic: "Amazon Route 53 Performance",
    question: "Which Route 53 routing policy should you use to route traffic to multiple resources in proportions that you specify?",
    options: [
        "A. Latency-based routing",
        "B. Geolocation routing",
        "C. Weighted routing",
        "D. Simple routing"
    ],
    answer: "C. Weighted routing",
    explanation: "Route 53 Weighted routing lets you assign weights to resource record sets to specify the frequency with which different resources are selected. This is useful for load balancing, testing new versions of software, or active-active failover configurations."
},
{
    id: 24,
    subDomain: "3.2 Design high-performing networking solutions",
    criticalTopic: "VPC Endpoint Gateway",
    question: "Which AWS service allows private connectivity between your VPC and supported AWS services without using the internet?",
    options: [
        "A. Internet Gateway",
        "B. NAT Gateway",
        "C. VPC Endpoint",
        "D. Transit Gateway"
    ],
    answer: "C. VPC Endpoint",
    explanation: "VPC Endpoints allow you to privately connect your VPC to supported AWS services without requiring an internet gateway, NAT device, VPN connection, or Direct Connect connection. Traffic between your VPC and the service does not leave the Amazon network, improving security and reducing latency."
},
{
    id: 25,
    subDomain: "3.2 Design high-performing networking solutions",
    criticalTopic: "Placement Groups",
    question: "Which EC2 placement group strategy provides the lowest network latency and highest network throughput?",
    options: [
            "A. Cluster placement group",
            "B. Spread placement group",
            "C. Partition placement group",
            "D. Availability Zone placement group"
        ],
        answer: "A. Cluster placement group",
        explanation: "Cluster placement groups pack instances close together inside an Availability Zone, providing the lowest latency and highest packet-per-second network performance for instances. They are ideal for applications that benefit from low network latency, high network throughput, or both."
    },
    {
        id: 26,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Enhanced Networking",
        question: "Which EC2 instance feature significantly improves packet-per-second (PPS) performance and provides lower network jitter?",
        options: [
            "A. AWS Nitro System",
            "B. Enhanced Networking",
            "C. VPC Flow Logs",
            "D. Elastic IP addresses"
        ],
        answer: "B. Enhanced Networking",
        explanation: "Enhanced Networking uses single root I/O virtualization (SR-IOV) to provide high-performance networking capabilities on supported instance types. It offers higher bandwidth, higher packet per second (PPS) performance, and consistently lower inter-instance latencies."
    },
    {
        id: 27,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Network Load Balancer",
        question: "Which Elastic Load Balancer type offers the lowest latency and highest performance for TCP traffic?",
        options: [
            "A. Application Load Balancer",
            "B. Network Load Balancer",
            "C. Classic Load Balancer",
            "D. Gateway Load Balancer"
        ],
        answer: "B. Network Load Balancer",
        explanation: "Network Load Balancer operates at the transport layer (Layer 4) and can handle millions of requests per second with ultra-low latencies. It's designed for handling TCP, UDP, and TLS traffic where extreme performance is required."
    },
    {
        id: 28,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Transit Gateway Connect",
        question: "Which AWS networking feature simplifies connecting thousands of VPCs and on-premises networks?",
        options: [
            "A. VPC Peering",
            "B. AWS PrivateLink",
            "C. AWS Transit Gateway",
            "D. AWS Direct Connect Gateway"
        ],
        answer: "C. AWS Transit Gateway",
        explanation: "AWS Transit Gateway is a highly scalable network transit hub that lets you interconnect thousands of VPCs and on-premises networks as a single network. It simplifies network architecture and eliminates complex peering relationships, improving performance and manageability."
    },
    {
        id: 29,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "PrivateLink",
        question: "Which service enables private connectivity between VPCs and services without exposing traffic to the public internet?",
        options: [
            "A. VPC Peering",
            "B. AWS PrivateLink",
            "C. Transit Gateway",
            "D. Site-to-Site VPN"
        ],
        answer: "B. AWS PrivateLink",
        explanation: "AWS PrivateLink provides private connectivity between VPCs, AWS services, and on-premises applications, securely on the Amazon network. It eliminates the exposure of traffic to the public internet, reducing threat vectors and improving performance."
    },
    {
        id: 30,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Accelerated Site-to-Site VPN",
        question: "Which AWS feature can improve the performance of VPN connections between on-premises networks and AWS?",
        options: [
            "A. Accelerated Site-to-Site VPN",
            "B. Internet Gateway",
            "C. NAT Gateway",
            "D. VPC Endpoints"
        ],
        answer: "A. Accelerated Site-to-Site VPN",
        explanation: "Accelerated Site-to-Site VPN uses AWS Global Accelerator to route traffic from your on-premises network to the closest AWS edge location, improving VPN performance. It provides a more consistent network experience with lower latency compared to standard Site-to-Site VPN."
    },
    {
        id: 31,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Route Tables",
        question: "In a VPC with multiple subnets, what is the recommended approach for optimizing network traffic flow?",
        options: [
            "A. Use a single route table for all subnets",
            "B. Use separate route tables for public and private subnets",
            "C. Avoid using route tables and rely on security groups",
            "D. Use the default route table only"
        ],
        answer: "B. Use separate route tables for public and private subnets",
        explanation: "Using separate route tables for public and private subnets provides better control over traffic flow and security. Public subnets can route to the internet via an Internet Gateway, while private subnets can use NAT Gateways for outbound internet access, optimizing network design."
    },
    {
        id: 32,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "CloudFront Edge Locations",
        question: "How do CloudFront edge locations improve application performance?",
        options: [
            "A. By running application code closer to users",
            "B. By replicating databases across regions",
            "C. By caching content closer to users, reducing latency",
            "D. By automatically scaling EC2 instances"
        ],
        answer: "C. By caching content closer to users, reducing latency",
        explanation: "CloudFront edge locations cache copies of your content close to your users, reducing latency when users request objects. When a user requests content, CloudFront serves it from the edge location with the lowest latency, improving overall application performance."
    },
    {
        id: 33,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Lambda@Edge",
        question: "Which AWS service allows you to run code at edge locations in response to CloudFront events?",
        options: [
            "A. AWS Lambda",
            "B. Lambda@Edge",
            "C. AWS Outposts",
            "D. Amazon EC2"
        ],
        answer: "B. Lambda@Edge",
        explanation: "Lambda@Edge allows you to run lightweight Lambda functions at AWS edge locations in response to CloudFront events. This enables customized content delivery with reduced latency, as processing happens closer to users rather than at the origin server."
    },
    {
        id: 34,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Network MTU",
        question: "What is the maximum MTU size supported by AWS for EC2 instances within a VPC?",
        options: [
            "A. 1500 bytes",
            "B. 9001 bytes (jumbo frames)",
            "C. 64000 bytes",
            "D. 1200 bytes"
        ],
        answer: "B. 9001 bytes (jumbo frames)",
        explanation: "AWS supports jumbo frames with an MTU size of up to 9001 bytes for traffic within a VPC, which can provide higher network throughput for compatible workloads by reducing overhead from packet headers and processing."
    },
    {
        id: 35,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "VPC Flow Logs",
        question: "How can VPC Flow Logs help optimize network performance?",
        options: [
            "A. By automatically blocking malicious traffic",
            "B. By compressing network traffic",
            "C. By providing insights into traffic patterns for analysis and troubleshooting",
            "D. By encrypting network traffic"
        ],
        answer: "C. By providing insights into traffic patterns for analysis and troubleshooting",
        explanation: "VPC Flow Logs capture information about IP traffic going to and from network interfaces in your VPC. This data can be analyzed to understand traffic patterns, identify bottlenecks, and optimize network configurations for better performance."
    },
    {
        id: 36,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "S3 Transfer Acceleration",
        question: "Which S3 feature improves transfer speeds when uploading large objects from distant locations?",
        options: [
            "A. S3 Multipart Upload",
            "B. S3 Transfer Acceleration",
            "C. S3 Cross-Region Replication",
            "D. S3 Versioning"
        ],
        answer: "B. S3 Transfer Acceleration",
        explanation: "S3 Transfer Acceleration leverages Amazon CloudFront's globally distributed edge locations to accelerate uploads to S3. When uploading to an acceleration-enabled bucket, data is routed through the optimal network path, improving transfer speeds from distant locations."
    },
    {
        id: 37,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Direct Connect SLA",
        question: "Which AWS Direct Connect configuration provides the highest availability with a 99.99% SLA?",
        options: [
            "A. Single connection to a single location",
            "B. Multiple connections to a single location",
            "C. Single connections to multiple locations",
            "D. Multiple connections to multiple locations"
        ],
        answer: "D. Multiple connections to multiple locations",
        explanation: "To achieve the highest availability with a 99.99% SLA for AWS Direct Connect, you should establish multiple connections to multiple Direct Connect locations. This configuration provides resilience against both connection failures and entire location outages."
    },
    {
        id: 38,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Gateway Load Balancer",
        question: "Which AWS load balancer is specifically designed for third-party virtual appliances like firewalls and intrusion detection systems?",
        options: [
            "A. Application Load Balancer",
            "B. Network Load Balancer",
            "C. Classic Load Balancer",
            "D. Gateway Load Balancer"
        ],
        answer: "D. Gateway Load Balancer",
        explanation: "Gateway Load Balancer makes it easy to deploy, scale, and manage third-party virtual appliances like firewalls, intrusion detection systems, and deep packet inspection systems. It provides transparent network gateway functionality together with load balancing."
    },
    {
        id: 39,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "AWS Global Accelerator",
        question: "How does AWS Global Accelerator improve application performance?",
        options: [
            "A. By caching content at edge locations",
            "B. By routing traffic through the AWS global network instead of the public internet",
            "C. By compressing data before transmission",
            "D. By automatically scaling compute resources"
        ],
        answer: "B. By routing traffic through the AWS global network instead of the public internet",
        explanation: "AWS Global Accelerator improves availability and performance by routing traffic through AWS's global network infrastructure rather than the public internet. It uses anycast IP addresses to direct traffic to the optimal endpoint based on health, geography, and routing policies."
    },
    {
        id: 40,
        subDomain: "3.2 Design high-performing networking solutions",
        criticalTopic: "Transit VPC Design",
        question: "What is a key advantage of using AWS Transit Gateway over a transit VPC design with VPN connections?",
        options: [
            "A. Lower cost",
            "B. Simplified architecture and higher bandwidth",
            "C. Better encryption",
            "D. More availability zones"
        ],
        answer: "B. Simplified architecture and higher bandwidth",
        explanation: "AWS Transit Gateway simplifies network architecture by eliminating the need to create and manage multiple VPN connections in a transit VPC design. It also provides higher bandwidth capabilities (up to 50 Gbps per Availability Zone) and reduced latency compared to VPN-based transit VPC solutions."
    }
];