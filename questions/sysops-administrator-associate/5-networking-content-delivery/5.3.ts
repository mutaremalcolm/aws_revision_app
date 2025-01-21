// Networking and Content Delivery - Troubleshoot network connectivity issues

export const sysOpsNetworkTroubleshooting = [
    {
        id: 11,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Internet Gateway vs NAT Gateway",
        question: "Which situation would require a NAT Gateway instead of an Internet Gateway in a VPC?",
        options: [
            "A. To allow instances in a private subnet to access the internet while keeping them private",
            "B. To provide internet access to instances in a public subnet",
            "C. To route traffic between two VPCs",
            "D. To enable DNS resolution for private instances"
        ],
        answer: "A. To allow instances in a private subnet to access the internet while keeping them private",
        explanation: "A NAT Gateway allows instances in private subnets to initiate outbound connections to the internet, without exposing them to incoming internet traffic."
    },
    {
        id: 12,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Security Group Misconfigurations",
        question: "Why might an instance in a VPC fail to connect to the internet, despite having an Internet Gateway attached and a proper route to the Internet Gateway?",
        options: [
            "A. Incorrect IAM role attached",
            "B. Misconfigured Security Group blocking outbound traffic",
            "C. Missing VPC Peering",
            "D. A DNS misconfiguration"
        ],
        answer: "B. Misconfigured Security Group blocking outbound traffic",
        explanation: "If a Security Group is misconfigured to block outbound traffic, the instance will be unable to establish outbound connections even with an Internet Gateway properly configured."
    },
    {
        id: 13,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "DNS Resolution in Hybrid Environments",
        question: "How can you ensure consistent DNS resolution for instances across an AWS VPC and an on-premises data center?",
        options: [
            "A. Use VPC Peering",
            "B. Enable Route 53 Resolver with outbound and inbound endpoints",
            "C. Use CloudFront for DNS routing",
            "D. Attach an Elastic IP to every instance"
        ],
        answer: "B. Enable Route 53 Resolver with outbound and inbound endpoints",
        explanation: "Route 53 Resolver with outbound and inbound endpoints enables DNS queries between VPCs and on-premises networks, ensuring seamless DNS resolution in hybrid environments."
    },
    {
        id: 14,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPC Peering DNS Issues",
        question: "Why might DNS resolution fail for instances in two peered VPCs, despite successful peering configuration?",
        options: [
            "A. The DNS resolution option is disabled in the VPC settings",
            "B. VPC Peering does not support DNS queries",
            "C. Both VPCs are in the same region",
            "D. Security Groups must be adjusted to allow DNS queries"
        ],
        answer: "A. The DNS resolution option is disabled in the VPC settings",
        explanation: "In VPC Peering configurations, DNS resolution must be explicitly enabled to allow instances in peered VPCs to resolve each other's domain names."
    },
    {
        id: 15,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Elastic Network Interface (ENI)",
        question: "What could be the cause if an instance with multiple ENIs fails to communicate on one of the ENIs?",
        options: [
            "A. The wrong route table is associated with the subnet",
            "B. Security Group rules do not allow inbound traffic on the secondary ENI",
            "C. The Elastic IP is not associated with the primary ENI",
            "D. The instance is running in a different region"
        ],
        answer: "B. Security Group rules do not allow inbound traffic on the secondary ENI",
        explanation: "For instances with multiple ENIs, each ENI must have appropriate Security Group rules to allow inbound and outbound traffic, or else communication on that ENI will fail."
    },
    {
        id: 16,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Route Propagation with VPN",
        question: "Why might traffic fail to route between your VPC and an on-premises environment connected via VPN?",
        options: [
            "A. Route propagation is disabled on the VPC route table",
            "B. The VPN endpoint is missing an Elastic IP",
            "C. VPC Peering is not configured",
            "D. VPC Flow Logs are disabled"
        ],
        answer: "A. Route propagation is disabled on the VPC route table",
        explanation: "Route propagation must be enabled for VPN connections to dynamically update the route tables with the routes to the on-premises network."
    },
    {
        id: 17,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPN Overlap of CIDR Blocks",
        question: "What might cause a VPN connection to fail when connecting a VPC to an on-premises data center?",
        options: [
            "A. Incorrect Security Group rules",
            "B. Overlapping CIDR blocks between the VPC and the on-premises network",
            "C. The absence of Route 53 Resolver",
            "D. Insufficient bandwidth on the VPC"
        ],
        answer: "B. Overlapping CIDR blocks between the VPC and the on-premises network",
        explanation: "Overlapping CIDR blocks between a VPC and an on-premises network can cause VPN routing conflicts, preventing traffic from flowing between the two networks."
    },
    {
        id: 18,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Cross-Zone Load Balancing",
        question: "What might cause uneven traffic distribution in an Elastic Load Balancer, despite enabling cross-zone load balancing?",
        options: [
            "A. Misconfigured health checks",
            "B. The absence of VPC Peering",
            "C. Security Group rules blocking traffic to one Availability Zone",
            "D. Insufficient EC2 instances in some Availability Zones"
        ],
        answer: "A. Misconfigured health checks",
        explanation: "If health checks are misconfigured, some instances may be marked as unhealthy, preventing traffic from being distributed evenly across all instances."
    },
    {
        id: 19,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "NAT Gateway Connectivity",
        question: "What could be a possible cause if instances in a private subnet are unable to connect to the internet, even though a NAT Gateway is configured?",
        options: [
            "A. The NAT Gateway is in a different Availability Zone",
            "B. The private subnet's route table is missing a route to the NAT Gateway",
            "C. The private subnet lacks an Internet Gateway",
            "D. The NAT Gateway is misconfigured with an Elastic IP"
        ],
        answer: "B. The private subnet's route table is missing a route to the NAT Gateway",
        explanation: "The route table associated with the private subnet must have a route directing outbound traffic to the NAT Gateway in order for instances to access the internet."
    },
    {
        id: 20,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Security Group and Port Mismatch",
        question: "If an EC2 instance cannot be accessed via SSH, but the instance is running, what might be the issue?",
        options: [
            "A. The instance lacks a NAT Gateway",
            "B. Port 22 is blocked in the Security Group",
            "C. The instance's IAM role is misconfigured",
            "D. The VPC route table is missing a route to the NAT Gateway"
        ],
        answer: "B. Port 22 is blocked in the Security Group",
        explanation: "If SSH access is not available, it is likely that Port 22 is not open in the Security Group attached to the instance."
    },
    {
        id: 21,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPC Endpoints Misconfiguration",
        question: "Why might an instance in a private subnet fail to access an S3 bucket via a VPC endpoint?",
        options: [
            "A. The instance lacks an Internet Gateway",
            "B. The VPC endpoint policy restricts access to the bucket",
            "C. S3 Transfer Acceleration is not enabled",
            "D. The instance is missing an Elastic IP"
        ],
        answer: "B. The VPC endpoint policy restricts access to the bucket",
        explanation: "VPC endpoint policies control which resources can be accessed through the endpoint, so if the policy restricts access to the S3 bucket, the instance will not be able to connect."
    },
    {
        id: 22,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Elastic IP Misuse",
        question: "Why might an Elastic IP fail to allow external connectivity to an instance?",
        options: [
            "A. The instance's Security Group is misconfigured",
            "B. Elastic IPs are not supported in a VPC",
            "C. The instance is using a NAT Gateway",
            "D. The instance does not have Route 53 configured"
        ],
        answer: "A. The instance's Security Group is misconfigured",
        explanation: "If the Security Group attached to the instance is blocking traffic on the appropriate ports, external connectivity will fail, even if the instance has an Elastic IP."
    },
    {
        id: 23,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Cross-Region Peering",
        question: "Why might VPC peering between two different regions fail to establish a connection?",
        options: [
            "A. VPC Peering is only supported within the same region",
            "B. Route tables are not updated with the peered VPC CIDR range",
            "C. VPC endpoints are not configured",
            "D. DNS resolution is disabled"
        ],
        answer: "B. Route tables are not updated with the peered VPC CIDR range",
        explanation: "VPC peering requires updating the route tables in both VPCs with the CIDR range of the peered VPC, regardless of whether they are in the same or different regions."
    },
    {
        id: 24,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPC Traffic Mirroring",
        question: "How can you analyze network traffic in your VPC for debugging or compliance purposes?",
        options: [
            "A. Enable VPC Flow Logs",
            "B. Enable VPC Traffic Mirroring",
            "C. Use AWS CloudTrail",
            "D. Use CloudWatch Logs"
        ],
        answer: "B. Enable VPC Traffic Mirroring",
        explanation: "VPC Traffic Mirroring allows you to capture and analyze network traffic in your VPC for troubleshooting, compliance, or security purposes."
    },
    {
        id: 25,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPC Route Tables and Propagation",
        question: "Why might a VPC fail to route traffic between subnets, despite correctly configured route tables?",
        options: [
            "A. Network ACLs are blocking the traffic",
            "B. Security groups are not configured",
            "C. Route propagation is disabled",
            "D. The subnets are in different Availability Zones"
        ],
        answer: "A. Network ACLs are blocking the traffic",
        explanation: "Even if route tables are properly configured, Network ACLs can block traffic between subnets, causing network communication failures."
    },
    {
        id: 26,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "EC2 Reachability",
        question: "What AWS tool can help diagnose the reachability of EC2 instances and their network interfaces?",
        options: [
            "A. AWS Trusted Advisor",
            "B. Reachability Analyzer",
            "C. VPC Flow Logs",
            "D. AWS Config"
        ],
        answer: "B. Reachability Analyzer",
        explanation: "Reachability Analyzer is a tool that allows you to test and analyze network paths between AWS resources to determine why an instance may not be reachable."
    },
    {
        id: 27,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "AWS Direct Connect Latency",
        question: "What might cause increased latency in an AWS Direct Connect connection between on-premises and AWS?",
        options: [
            "A. Security group misconfiguration",
            "B. Insufficient capacity on the Direct Connect link",
            "C. Missing VPC Peering",
            "D. DNS issues in Route 53"
        ],
        answer: "B. Insufficient capacity on the Direct Connect link",
        explanation: "If the Direct Connect link has insufficient capacity or is experiencing congestion, latency will increase between the on-premises environment and AWS."
    },
    {
        id: 28,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "VPN Tunnels",
        question: "Why might a VPN tunnel between AWS and an on-premises environment frequently drop connections?",
        options: [
            "A. The VPN endpoint lacks an Elastic IP",
            "B. The VPN tunnel is missing a health check",
            "C. Phase 2 of the IKE negotiation is timing out",
            "D. DNS resolution is not enabled for the VPN endpoint"
        ],
        answer: "C. Phase 2 of the IKE negotiation is timing out",
        explanation: "Phase 2 of IKE negotiation must complete successfully to establish and maintain a VPN tunnel. If it times out or fails, the connection may drop."
    },
    {
        id: 29,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "Intermittent Connectivity Issues",
        question: "Why might an EC2 instance experience intermittent connectivity issues when communicating with external services?",
        options: [
            "A. Network ACLs are misconfigured",
            "B. Route table propagation is disabled",
            "C. The EC2 instance lacks an IAM role",
            "D. Security group inbound rules are overly restrictive"
        ],
        answer: "A. Network ACLs are misconfigured",
        explanation: "Network ACL misconfigurations can block certain traffic, causing intermittent connectivity issues for EC2 instances when communicating with external services."
    },
    {
        id: 30,
        subDomain: "5.3 Troubleshoot network connectivity issues",
        criticalTopic: "High Availability VPN",
        question: "How can you ensure high availability for a VPN connection between AWS and an on-premises environment?",
        options: [
            "A. Use a single VPN tunnel with health checks",
            "B. Configure two VPN tunnels and use BGP for failover",
            "C. Use Route 53 health checks to monitor the VPN",
            "D. Increase the size of the VPC's CIDR block"
        ],
        answer: "B. Configure two VPN tunnels and use BGP for failover",
        explanation: "For high availability, you should configure two VPN tunnels between AWS and on-premises, using BGP for automatic failover in case one tunnel goes down."
    }
];
