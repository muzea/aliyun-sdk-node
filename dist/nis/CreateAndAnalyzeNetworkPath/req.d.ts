export interface CreateAndAnalyzeNetworkPathRequest {
    /**
     * 源资源ID。
     * @example `i-uf62y8khhbkbdrp6****`
     */
    "SourceId": string;
    /**
     * 源IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIpAddress"?: string;
    /**
     * 目的IP地址。
     * @example `172.50.XX.XX`
     */
    "TargetIpAddress"?: string;
    /**
     * 源资源类型。
     *  - **ecs**：云服务器ECS（Elastic Compute Service）。
     *  - **internetIp**：公网IP地址。
     *  - **vsw**：交换机（vSwitch）。
     *  - **vpn**：VPN网关。
     *  - **vbr**：边界路由器VBR（Virtual Border Router）。
     * @example `ecs`
     */
    "SourceType": string;
    /**
     * 源端口。
     * @example `0`
     */
    "SourcePort"?: number;
    /**
     * 目的资源ID。
     * @example `i-m5eactvw7wtpktv5****`
     */
    "TargetId"?: string;
    /**
     * 目的资源类型。
     *  - **ecs**：云服务器ECS（Elastic Compute Service）。
     * - **internetIp**：公网IP地址。
     *  - **vsw**：交换机（vSwitch）。
     *  - **vpn**：VPN网关。
     *  - **vbr**：边界路由器VBR（Virtual Border Router）。
     *  - **clb**：传统型负载均衡CLB（Classic Load Balancer）。
     * @example `ecs`
     */
    "TargetType"?: string;
    /**
     * 目的端口。
     * @example `80`
     */
    "TargetPort"?: number;
    /**
     * 协议类型。取值：
     *  - **tcp**：传输控制协议。
     *  - **udp**：用户数据报协议。
     *  - **icmp**：网络控制报文协议。
     * @example `tcp`
     */
    "Protocol"?: string;
    /**
     * 要发起网络可达性分析任务的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
}
