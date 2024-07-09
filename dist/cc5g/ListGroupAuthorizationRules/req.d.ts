export interface ListGroupAuthorizationRulesRequest {
    /**
     * 实例组实例id。
     * @example `cc5gg-****`
     */
    "WirelessCloudConnectorGroupId": string;
    /**
     * 授权规则状态列表
     */
    "Statuses"?: string[];
    /**
     * 授权规则id列表。
     */
    "AuthorizationRuleIds"?: string[];
    /**
     * 授权规则名称列表
     */
    "Names"?: string[];
    /**
     * 目标类型，取值：
     * 1. Cidr
     * 2. Domain
     * 3. IpPort
     * @example `Cidr`
     */
    "DestinationType"?: string;
    /**
     * 协议类型。取值：
     * - **tcp**。
     * - **udp**。
     * - **icmp**。
     * - **all**：支持所有协议。
     * @example `all`
     */
    "Protocol"?: string;
    /**
     * 目标端口范围。取值范围：
     * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
     * - ICMP协议：-1/-1。
     * - ALL：-1/-1。
     * @example `-1/-1`
     */
    "DestinationPort"?: string;
    /**
     * 目标地址、域名或泛域名，前缀匹配。
     * @example `10.0.0.1`
     */
    "Destination"?: string;
    /**
     * 授权规则策略，取值：
     * - **Permit**：允许
     * - **Deny**：拒绝
     * @example `Permit`
     */
    "Policy"?: string;
    /**
     * 类型，取值：
     * - **System**: 系统
     * - **Default**: 默认
     * - **Customer**: 自定义
     * @example `System`
     */
    "Type"?: string;
    /**
     * 是否为DNS。
     * @example `true`
     */
    "Dns"?: boolean;
    /**
     * 上一页的查询返回的值，首页查询不传值。
     * @example `iou001238joojjaere`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
