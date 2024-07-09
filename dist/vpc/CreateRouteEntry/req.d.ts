export interface CreateRouteEntryRequest {
    /**
     * 路由表所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     *  要添加自定义路由条目的路由表ID。
     * @example `vtb-bp145q7glnuzd****`
     */
    "RouteTableId": string;
    /**
     * 自定义路由条目的目标网段，支持IPv4、IPv6、前缀列表的目标网段和前缀列表的实例ID。需满足以下要求：
     *
     * - 目标网段不能指向100.64.0.0/10或被100.64.0.0/10包含。
     *
     * - 同一张路由表内的不同路由条目的目标网段不能相同。
     * @example `192.168.0.0/24`
     */
    "DestinationCidrBlock": string;
    /**
     * 自定义路由条目的下一跳实例的ID。
     * @example `i-j6c2fp57q8rr4jlu****`
     */
    "NextHopId"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，请确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 要添加的自定义路由条目的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "RouteEntryName"?: string;
    /**
     * 自定义路由条目的描述信息。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 自定义路由条目的下一跳的类型，取值：
     * - **Instance**（默认值）：ECS实例。
     * - **HaVip**：高可用虚拟IP。
     * - **RouterInterface**：路由器接口。
     * - **NetworkInterface**：弹性网卡。
     * - **VpnGateway**：VPN网关。
     * - **IPv6Gateway**：IPv6网关。
     * - **NatGateway**：NAT网关。
     * - **Attachment**：转发路由器。
     * - **VpcPeer**：VPC对等连接。
     * - **Ipv4Gateway**：IPv4网关。
     * - **GatewayEndpoint**：网关终端节点。
     * - **Ecr**：专线网关。
     * @example `RouterInterface`
     */
    "NextHopType"?: string;
    /**
     * 下一跳的信息。
     */
    "NextHopList"?: {
        /**
         * ECMP路由的下一跳实例的ID。
         * @example `ri-2zeo3xzyf3cd8r4****`
         */
        NextHopId: string;
        /**
         * ECMP路由的下一跳的路由权重。
         * @example `10`
         */
        Weight: number;
        /**
         * ECMP路由的下一跳的类型，目前仅取值：**RouterInterface**（路由器接口）。
         * @example `RouterInterface`
         */
        NextHopType: string;
    }[];
}
