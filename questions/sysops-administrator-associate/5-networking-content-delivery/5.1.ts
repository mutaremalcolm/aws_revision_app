// Networking and Content Delivery - Implement networking features and connectivity

export const sysOpsNetworkingConnectivity = [
    {
        id: 1,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Configuration",
        question: "Which of the following components is required to create a Virtual Private Cloud (VPC) in AWS?",
        options: [
            "A. Elastic Load Balancer",
            "B. Internet Gateway",
            "C. Subnets",
            "D. Route Tables"
        ],
        answer: "C. Subnets",
        explanation: "Subnets are required to segment your VPC into smaller, manageable sections, while components like an Internet Gateway and Route Tables are optional."
    },
    {
        id: 2,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Security Groups",
        question: "What is the purpose of VPC security groups?",
        options: [
            "A. To encrypt data at rest",
            "B. To act as virtual firewalls controlling inbound and outbound traffic for resources",
            "C. To monitor application performance",
            "D. To configure DNS routing policies"
        ],
        answer: "B. To act as virtual firewalls controlling inbound and outbound traffic for resources",
        explanation: "Security groups control the inbound and outbound traffic for AWS resources within your VPC, providing security at the instance level."
    },
    {
        id: 3,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "NAT Gateway",
        question: "Which AWS resource allows instances in a private subnet to access the internet without being directly exposed?",
        options: [
            "A. Internet Gateway",
            "B. Elastic IP",
            "C. VPC Peering",
            "D. NAT Gateway"
        ],
        answer: "D. NAT Gateway",
        explanation: "A NAT Gateway allows instances in a private subnet to access the internet or other AWS services while preventing incoming internet traffic from directly accessing those instances."
    },
    {
        id: 4,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Peering",
        question: "What is the primary use of VPC Peering?",
        options: [
            "A. To enable direct connectivity between VPCs",
            "B. To connect on-premises environments to AWS",
            "C. To implement multi-region disaster recovery",
            "D. To provide load balancing between VPCs"
        ],
        answer: "A. To enable direct connectivity between VPCs",
        explanation: "VPC Peering allows you to connect two VPCs, enabling direct network traffic between resources in both VPCs without using the internet."
    },
    {
        id: 5,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Flow Logs",
        question: "What is the primary purpose of VPC Flow Logs?",
        options: [
            "A. To monitor API calls in the VPC",
            "B. To capture IP traffic information for network interfaces",
            "C. To log all EC2 instance traffic",
            "D. To monitor data transfer rates"
        ],
        answer: "B. To capture IP traffic information for network interfaces",
        explanation: "VPC Flow Logs capture information about the IP traffic going to and from network interfaces in your VPC, which helps in monitoring and troubleshooting."
    },
    {
        id: 6,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Private Connectivity Options",
        question: "Which of the following enables private connectivity between AWS services without sending traffic over the internet?",
        options: [
            "A. VPC Peering",
            "B. VPC Endpoints",
            "C. NAT Gateway",
            "D. Internet Gateway"
        ],
        answer: "B. VPC Endpoints",
        explanation: "VPC Endpoints enable private connectivity between your VPC and supported AWS services, ensuring traffic does not go over the public internet."
    },
    {
        id: 7,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Route Tables",
        question: "What is the primary function of a route table in a VPC?",
        options: [
            "A. To control access to S3 buckets",
            "B. To define the allowed traffic between subnets and external networks",
            "C. To encrypt data in transit",
            "D. To monitor API calls"
        ],
        answer: "B. To define the allowed traffic between subnets and external networks",
        explanation: "Route tables define how traffic is directed between subnets and external networks like the internet or other VPCs."
    },
    {
        id: 8,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Network ACLs",
        question: "Which of the following is true about Network Access Control Lists (ACLs) in a VPC?",
        options: [
            "A. They control traffic at the instance level.",
            "B. They are stateful by default.",
            "C. They are stateless and control traffic at the subnet level.",
            "D. They automatically allow all traffic by default."
        ],
        answer: "C. They are stateless and control traffic at the subnet level.",
        explanation: "Network ACLs in a VPC are stateless, meaning they do not remember previous traffic decisions, and control traffic at the subnet level."
    },
    {
        id: 9,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Elastic IP Address",
        question: "What is the purpose of an Elastic IP address in AWS?",
        options: [
            "A. To enable IP traffic logging",
            "B. To provide a static IPv4 address for dynamic cloud computing",
            "C. To distribute traffic across multiple instances",
            "D. To enable private networking"
        ],
        answer: "B. To provide a static IPv4 address for dynamic cloud computing",
        explanation: "Elastic IP addresses provide a static public IPv4 address that you can associate with dynamic cloud resources, ensuring consistent connectivity."
    },
    {
        id: 10,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "AWS Direct Connect",
        question: "Which AWS service enables a dedicated network connection between your on-premises environment and AWS?",
        options: [
            "A. VPC Endpoints",
            "B. AWS Direct Connect",
            "C. AWS VPN",
            "D. VPC Peering"
        ],
        answer: "B. AWS Direct Connect",
        explanation: "AWS Direct Connect enables a dedicated network connection from your on-premises environment to AWS, providing lower latency and higher bandwidth."
    },
    // Additional Questions
    {
        id: 11,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Endpoints",
        question: "Which type of VPC Endpoint allows private connections to Amazon S3?",
        options: [
            "A. Interface Endpoint",
            "B. Gateway Endpoint",
            "C. NAT Gateway",
            "D. VPN Connection"
        ],
        answer: "B. Gateway Endpoint",
        explanation: "Gateway Endpoints enable private connectivity between your VPC and supported AWS services such as Amazon S3 and DynamoDB."
    },
    {
        id: 12,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Internet Gateway vs. NAT Gateway",
        question: "What is a key difference between an Internet Gateway and a NAT Gateway?",
        options: [
            "A. Internet Gateway is used for inbound traffic, NAT Gateway is used for outbound traffic.",
            "B. Internet Gateway connects instances to the internet, NAT Gateway allows instances in private subnets to access the internet.",
            "C. NAT Gateway can only be used in public subnets, while Internet Gateway can only be used in private subnets.",
            "D. Both Internet Gateway and NAT Gateway can be used interchangeably."
        ],
        answer: "B. Internet Gateway connects instances to the internet, NAT Gateway allows instances in private subnets to access the internet.",
        explanation: "Internet Gateways provide direct internet connectivity, whereas NAT Gateways enable instances in private subnets to access the internet while keeping them secure."
    },
    {
        id: 13,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Elastic Load Balancer",
        question: "How does an Elastic Load Balancer improve network connectivity?",
        options: [
            "A. By distributing incoming application traffic across multiple EC2 instances",
            "B. By providing a dedicated network connection to AWS",
            "C. By creating multiple VPCs for redundancy",
            "D. By encrypting traffic across subnets"
        ],
        answer: "A. By distributing incoming application traffic across multiple EC2 instances",
        explanation: "Elastic Load Balancers distribute incoming traffic across multiple EC2 instances, ensuring high availability and fault tolerance for applications."
    },
    {
        id: 14,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Network Load Balancer",
        question: "What is a key advantage of using a Network Load Balancer (NLB) in AWS?",
        options: [
            "A. NLB provides low-latency and high throughput at the transport layer (Layer 4)",
            "B. NLB operates at the application layer and provides SSL termination",
            "C. NLB can distribute traffic across multiple regions",
            "D. NLB allows DNS-based routing"
        ],
        answer: "A. NLB provides low-latency and high throughput at the transport layer (Layer 4)",
        explanation: "A Network Load Balancer operates at the transport layer (Layer 4) and is optimized for high-performance, low-latency connections, ideal for high-throughput workloads."
    },
    {
        id: 15,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Security Groups vs. Network ACLs",
        question: "What is a key difference between VPC Security Groups and Network ACLs?",
        options: [
            "A. Security Groups are stateless, while Network ACLs are stateful.",
            "B. Security Groups operate at the instance level, while Network ACLs operate at the subnet level.",
            "C. Network ACLs allow only inbound traffic, while Security Groups allow both inbound and outbound traffic.",
            "D. Security Groups and Network ACLs are applied to different regions."
        ],
        answer: "B. Security Groups operate at the instance level, while Network ACLs operate at the subnet level.",
        explanation: "Security Groups are stateful and control traffic at the instance level, while Network ACLs are stateless and control traffic at the subnet level."
    },
    {
        id: 16,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Multi-AZ VPC Design",
        question: "Why is it recommended to design VPCs across multiple Availability Zones (AZs)?",
        options: [
            "A. To ensure data encryption across zones",
            "B. To improve fault tolerance and availability",
            "C. To enhance performance of VPC Endpoints",
            "D. To reduce data transfer costs"
        ],
        answer: "B. To improve fault tolerance and availability",
        explanation: "By distributing resources across multiple Availability Zones, VPCs can achieve higher availability and fault tolerance, reducing the impact of any single AZ failure."
    },
    {
        id: 17,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPN Connection",
        question: "Which AWS service allows you to securely connect an on-premises data center to a VPC using the internet?",
        options: [
            "A. AWS Direct Connect",
            "B. VPC Peering",
            "C. AWS VPN",
            "D. AWS Transit Gateway"
        ],
        answer: "C. AWS VPN",
        explanation: "AWS VPN allows you to create secure connections between your on-premises network and AWS VPCs over the public internet using encrypted VPN tunnels."
    },
    {
        id: 18,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Sizing",
        question: "How is the size of a VPC determined in AWS?",
        options: [
            "A. By the number of security groups attached",
            "B. By the number of EC2 instances running in it",
            "C. By the size of the CIDR block associated with the VPC",
            "D. By the number of Availability Zones it spans"
        ],
        answer: "C. By the size of the CIDR block associated with the VPC",
        explanation: "The size of a VPC is determined by the CIDR block (range of IP addresses) allocated to the VPC. The larger the CIDR block, the more resources the VPC can contain."
    },
    {
        id: 19,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "VPC Peering Limits",
        question: "Which of the following is a limitation of VPC Peering?",
        options: [
            "A. VPC Peering does not support encrypted communication.",
            "B. VPC Peering does not allow communication between different AWS accounts.",
            "C. VPC Peering does not allow transitive routing between VPCs.",
            "D. VPC Peering is only available in the same Availability Zone."
        ],
        answer: "C. VPC Peering does not allow transitive routing between VPCs.",
        explanation: "VPC Peering allows direct connections between VPCs, but it does not support transitive routing, meaning VPC A cannot communicate with VPC C through VPC B."
    },
    {
        id: 20,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "AWS Transit Gateway",
        question: "What is a key benefit of using AWS Transit Gateway in a large AWS environment?",
        options: [
            "A. It enables transitive routing between VPCs and on-premises networks.",
            "B. It provides DNS resolution between VPCs.",
            "C. It reduces data transfer costs between regions.",
            "D. It simplifies instance provisioning across Availability Zones."
        ],
        answer: "A. It enables transitive routing between VPCs and on-premises networks.",
        explanation: "AWS Transit Gateway enables transitive routing, allowing multiple VPCs and on-premises networks to communicate with each other through a central gateway."
    },
    {
        id: 21,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Elastic Network Interfaces (ENI)",
        question: "What is the primary function of an Elastic Network Interface (ENI) in AWS?",
        options: [
            "A. To provide internet access to EC2 instances",
            "B. To provide a static MAC address and private IP for EC2 instances",
            "C. To route traffic between different subnets",
            "D. To monitor network traffic across instances"
        ],
        answer: "B. To provide a static MAC address and private IP for EC2 instances",
        explanation: "An ENI provides a static MAC address and private IP address that can be attached to EC2 instances, allowing instances to retain network configuration even after being moved."
    },
    {
        id: 22,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Cross-Region VPC Peering",
        question: "What is one limitation of cross-region VPC peering?",
        options: [
            "A. It does not allow encrypted communication between VPCs.",
            "B. It incurs additional data transfer costs.",
            "C. It can only be used with VPCs in the same account.",
            "D. It does not support IPv6."
        ],
        answer: "B. It incurs additional data transfer costs.",
        explanation: "Cross-region VPC peering allows VPCs in different regions to communicate, but it incurs additional data transfer costs compared to same-region peering."
    },
    {
        id: 23,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "DNS Resolution in VPCs",
        question: "How can you enable DNS resolution between an on-premises network and a VPC?",
        options: [
            "A. Use Route 53 Private Hosted Zones",
            "B. Use VPC Peering",
            "C. Use an Internet Gateway",
            "D. Use AWS Direct Connect"
        ],
        answer: "A. Use Route 53 Private Hosted Zones",
        explanation: "Route 53 Private Hosted Zones allow DNS resolution between resources in a VPC and an on-premises network without exposing DNS queries to the public internet."
    },
    {
        id: 24,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Subnet Types",
        question: "Which of the following is required to convert a public subnet into a private subnet?",
        options: [
            "A. Remove the Internet Gateway from the route table",
            "B. Add a NAT Gateway to the subnet",
            "C. Attach an Elastic IP to the instances",
            "D. Remove the Route 53 Resolver"
        ],
        answer: "A. Remove the Internet Gateway from the route table",
        explanation: "To convert a public subnet into a private subnet, you must remove the route to the Internet Gateway from the subnet's route table."
    },
    {
        id: 25,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "NAT Instance vs. NAT Gateway",
        question: "What is one advantage of using a NAT Gateway over a NAT Instance?",
        options: [
            "A. NAT Gateway automatically scales for higher throughput",
            "B. NAT Gateway is less expensive than a NAT Instance",
            "C. NAT Instance supports VPC endpoints, while NAT Gateway does not",
            "D. NAT Instance provides automatic failover, while NAT Gateway does not"
        ],
        answer: "A. NAT Gateway automatically scales for higher throughput",
        explanation: "NAT Gateway is a fully managed service that automatically scales to accommodate higher traffic throughput, while NAT Instances require manual management."
    },
    {
        id: 26,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "AWS Global Accelerator vs. CloudFront",
        question: "What is the primary difference between AWS Global Accelerator and CloudFront?",
        options: [
            "A. CloudFront is used for content delivery, while Global Accelerator improves application availability and performance by routing traffic globally",
            "B. Global Accelerator provides content caching, while CloudFront improves network performance",
            "C. CloudFront uses TCP and UDP, while Global Accelerator uses only HTTP and HTTPS",
            "D. Global Accelerator provides SSL termination, while CloudFront does not"
        ],
        answer: "A. CloudFront is used for content delivery, while Global Accelerator improves application availability and performance by routing traffic globally",
        explanation: "CloudFront is a content delivery network (CDN) for distributing content to edge locations, while Global Accelerator improves application availability and performance by routing traffic to optimal endpoints."
    },
    {
        id: 27,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "AWS VPN vs. Direct Connect",
        question: "What is one key difference between AWS VPN and AWS Direct Connect?",
        options: [
            "A. VPN provides higher bandwidth than Direct Connect",
            "B. Direct Connect offers lower latency and dedicated bandwidth",
            "C. VPN provides a physical connection, while Direct Connect is virtual",
            "D. Direct Connect encrypts traffic, while VPN does not"
        ],
        answer: "B. Direct Connect offers lower latency and dedicated bandwidth",
        explanation: "AWS Direct Connect provides a dedicated network connection with lower latency and higher bandwidth compared to AWS VPN, which operates over the public internet."
    },
    {
        id: 28,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "IPv6 in VPC",
        question: "Which of the following is required to enable IPv6 support in an existing VPC?",
        options: [
            "A. Create a new VPC with IPv6 enabled",
            "B. Assign an IPv6 CIDR block to the VPC",
            "C. Attach an IPv6-enabled Internet Gateway",
            "D. Enable dual-stack mode on the VPC"
        ],
        answer: "B. Assign an IPv6 CIDR block to the VPC",
        explanation: "To enable IPv6 in an existing VPC, you must assign an IPv6 CIDR block to the VPC, which allows resources within the VPC to have IPv6 addresses."
    },
    {
        id: 29,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Transitive Routing",
        question: "What is a limitation of using VPC Peering compared to AWS Transit Gateway?",
        options: [
            "A. VPC Peering supports transitive routing, while Transit Gateway does not",
            "B. VPC Peering does not support transitive routing between VPCs",
            "C. Transit Gateway is limited to a single region, while VPC Peering is not",
            "D. VPC Peering provides better performance for multi-region traffic"
        ],
        answer: "B. VPC Peering does not support transitive routing between VPCs",
        explanation: "VPC Peering allows direct communication between VPCs but does not support transitive routing. AWS Transit Gateway allows transitive routing between VPCs and on-premises networks."
    },
    {
        id: 30,
        subDomain: "5.1 Implement networking features and connectivity",
        criticalTopic: "Bastion Host",
        question: "What is the primary purpose of a bastion host in a VPC?",
        options: [
            "A. To route traffic between VPCs",
            "B. To provide a secure entry point for administrative access to instances in private subnets",
            "C. To distribute traffic across multiple instances",
            "D. To enable DNS resolution within private subnets"
        ],
        answer: "B. To provide a secure entry point for administrative access to instances in private subnets",
        explanation: "A bastion host provides a secure entry point to access instances in private subnets, typically used for SSH or RDP access."
    }
];
