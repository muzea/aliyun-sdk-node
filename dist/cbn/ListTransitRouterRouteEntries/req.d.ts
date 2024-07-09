export interface ListTransitRouterRouteEntriesRequest {
    /**
     * 分批次查询时，每次显示的条目数。取值范围：**1**~**100**。默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 路由条目的目标网段（**本参数即将废弃，建议使用RouteFilter参数**）。
     * @example `192.168.0.0/24`
     */
    "TransitRouterRouteEntryDestinationCidrBlock"?: string;
    /**
     * 路由条目的状态。取值：
     * - **All**：表示查询全部状态的路由条目。
     * - **Active（默认值）**：表示仅查询生效状态的路由条目。
     * - **Rejected**：表示仅查询因路由冲突而被拒绝的路由条目。
     * - **Prohibited**：表示仅查询因匹配到路由策略而被禁止的路由条目。
     * - **Standby**：表示仅查询作为备份的路由条目。
     * - **Candidate**：表示仅查询作为候选的路由条目。
     * 如果您未指定本参数的值，系统默认仅查询生效状态的路由条目。
     * @example `Active`
     */
    "TransitRouterRouteEntryStatus"?: string;
    /**
     * 企业版转发路由器路由表ID。
     * @example `vtb-bp1dudbh2d5na6b50****`
     */
    "TransitRouterRouteTableId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `fce19****`
     */
    "NextToken"?: string;
    /**
     * 路由条目的名称。
     * @example `testname`
     */
    "TransitRouterRouteEntryNames"?: string[];
    /**
     * 路由条目ID。
     * @example `rte-oklkgwmj97z6dn****`
     */
    "TransitRouterRouteEntryIds"?: string[];
    /**
     * 路由条目的类型。取值：
     * - **Propagated**：当前路由表自动学习产生。
     * - **Static**：当前路由表静态配置产生。
     * @example `Propagated`
     */
    "TransitRouterRouteEntryType"?: string;
    /**
     * 下一跳类型。取值：
     * - **BlackHole**：表示指定该路由条目为黑洞路由。
     * - **Attachment**：表示指定该路由条目的下一跳为网络实例连接。
     * @example `Attachment`
     */
    "TransitRouterRouteEntryNextHopType"?: string;
    /**
     * 路由条目的下一跳所关联的网络实例连接ID。
     * @example `tr-attach-nls9fzkfat8934****`
     */
    "TransitRouterRouteEntryNextHopId"?: string;
    /**
     * 路由条目的下一跳实例ID。
     * @example `vpc-m5ent6du8deaq5*****`
     */
    "TransitRouterRouteEntryNextHopResourceId"?: string;
    /**
     * 路由条目的下一跳实例类型。取值：
     * - **VPC**：专有网络VPC（Virtual Private Cloud）实例。
     * - **VBR**：边界路由器VBR（Virtual Border Router）实例。
     * - **TR**：转发路由器实例。
     * - **VPN**：IPsec连接实例。
     * @example `VPC`
     */
    "TransitRouterRouteEntryNextHopResourceType"?: string;
    /**
     * 路由条目的起源实例ID。
     * @example `vpc-m5ent6du8deaq5*****`
     */
    "TransitRouterRouteEntryOriginResourceId"?: string;
    /**
     * 路由条目的起源实例类型。取值：
     * - **VPC**：专有网络VPC（Virtual Private Cloud）实例。
     * - **VBR**：边界路由器VBR（Virtual Border Router）实例。
     * - **TR**：转发路由器实例。
     * - **VPN**：IPsec连接实例。
     * @example `VPC`
     */
    "TransitRouterRouteEntryOriginResourceType"?: string;
    /**
     * 前缀列表ID。
     * @example `pl-6ehtn5kqxgeyy08fi****`
     */
    "PrefixListId"?: string;
    /**
     * 路由条目网段过滤的条件信息。
     */
    "RouteFilter"?: {
        /**
         * 过滤条件。取值：
         * - **PrefixExactMatchCidrs**：精确匹配。
         * - **LongestPrefixMatchCidrs**：最长前缀匹配，支持传入IP和CIDR。
         * - **SubnetOfMatchCidrs**：子网匹配，匹配传入的CIDR的子网，含传入的CIDR。
         * - **SupernetOfMatchCidrs**：超网匹配，匹配传入的CIDR的超网，含传入的CIDR。
         * 多个过滤条件之间默认是**与**的关系，即必须符合所有过滤条件，才视为匹配过滤条件。不能重复传入相同的过滤条件。
         * @example `PrefixExactMatchCidrs`
         */
        Key: string;
        /**
         * 过滤条件值的列表。
         */
        Value: string[];
    }[];
}
