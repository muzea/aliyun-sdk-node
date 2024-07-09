export interface DescribeRouteEntryListRequest {
    /**
     * 路由条目所在路由表的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的路由表的ID。
     * @example `vtb-bp1r9pvl4xen8s9ju****`
     */
    "RouteTableId": string;
    /**
     * 要查询的路由条目的ID。
     * @example `rte-bp1mnnr2al0naomnp****`
     */
    "RouteEntryId"?: string;
    /**
     * 路由条目的目标网段，支持IPv4和IPv6网段。
     * @example `192.168.2.0/24`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 路由条目的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "RouteEntryName"?: string;
    /**
     * IP协议的版本。取值：
     * - **ipv4**：ipv4协议。
     * - **ipv6**：ipv6协议。
     * @example `ipv4`
     */
    "IpVersion"?: string;
    /**
     * 路由的类型。取值：
     * - **Custom**：自定义路由。
     * - **System**：系统路由。
     * - **BGP**：BGP路由。
     * - **CEN**：云企业网CEN（Cloud Enterprise Network）路由。
     * - **ECR**：专线网关路由。
     * @example `System`
     */
    "RouteEntryType"?: string;
    /**
     * 下一跳实例ID。
     * @example `vpn-bp10zyaph5cc8b7c7****`
     */
    "NextHopId"?: string;
    /**
     * 下一跳类型。取值：
     * - **Instance**（默认值）：ECS实例。
     * - **HaVip**：高可用虚拟IP。
     * - **VpnGateway**：VPN网关。
     * - **NatGateway**：NAT网关。
     * - **NetworkInterface**：辅助弹性网卡。
     * - **RouterInterface**：路由器接口。
     * - **IPv6Gateway**：IPv6网关。
     * - **Attachment**：转发路由器。
     * - **Ipv4Gateway**：IPv4网关。
     * - **GatewayEndpoint**：网关终端节点。
     * - **CenBasic**：CEN不支持转发路由器。
     * - **Ecr**：专线网关。
     * @example `Instance`
     */
    "NextHopType"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResult"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 路由托管的类型。如果该字段为空，即表示该路由没有被托管。
     * 取值：**TR**，表示托管类型为转发路由器类型。
     * @example `TR`
     */
    "ServiceType"?: string;
    /**
     * 路由条目的目标网段列表。
     */
    "DestCidrBlockList"?: string[];
}
