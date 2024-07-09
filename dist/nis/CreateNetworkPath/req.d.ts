export interface CreateNetworkPathRequest {
    /**
     * 要创建网络分析路径的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 路径名称。
     * @example `ecs2PublicIp`
     */
    "NetworkPathName": string;
    /**
     * 源资源ID。
     * @example `i-2zef4ngqfarepyun****`
     */
    "SourceId": string;
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
     * 源IP地址。
     * @example `172.17.XX.XX`
     */
    "SourceIpAddress"?: string;
    /**
     * 源端口。
     * @example `443`
     */
    "SourcePort"?: number;
    /**
     * 目的资源ID。
     * @example `i-bp13d0e064gubm****`
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
     * 目的IP地址。
     * @example `192.168.XX.XX`
     */
    "TargetIpAddress"?: string;
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
     * 网络路径的描述信息。
     * @example `分析ECS到ECS路径`
     */
    "NetworkPathDescription"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * 一次调用最多支持添加20个标签。
         * @example `role`
         */
        Key: string;
        /**
         * 标签值。最多支持输入20个标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `ops`
         */
        Value: string;
    }[];
    /**
     * 路径所属的资源组。
     * @example `rg-acfm27qsxjj****`
     */
    "ResourceGroupId"?: string;
}
