export interface ListGroupAuthorizationRulesResponse {
    /**
     * 请求id。
     * @example `1651FBB6-4FBF-49FF-A9F5-DF5D696C7EC6`
     */
    RequestId: string;
    /**
     * 授权规则列表。
     */
    GroupAuthorizationRules: {
        /**
         * 授权规则id。
         * @example `ar5gg-y5g4rp2w1tl1w7zg59`
         */
        AuthorizationRuleId: string;
        /**
         * 授权规则状态，取值：
         * - **Creating**: 创建中
         * - **Available**: 有效的稳定状态
         * - **Pending**: 配置中
         * - **Deleting**: 删除中
         * - **UnAvailable**: 无效
         * @example `Creating`
         */
        Status: string;
        /**
         * 授权规则名称
         * @example `test`
         */
        Name: string;
        /**
         * 授权规则描述，长度不超过256字符。
         * @example `ar5gg-test
        `
         */
        Description: string;
        /**
         * 类型，取值：
         * - **System**: 系统
         * - **Default**: 默认
         * - **Customer**: 自定义
         * @example `Default`
         */
        Type: string;
        /**
         * 源CIDR地址块。
         * @example `0.0.0.0/0`
         */
        SourceCidr: string;
        /**
         * 目标类型，取值：
         * 1. Cidr
         * 2. Domain
         * 3. IpPort
         * @example `Cidr`
         */
        DestinationType: string;
        /**
         * 协议类型。取值：
         * - **tcp**。
         * - **udp**。
         * - **icmp**。
         * - **all**：支持所有协议。
         * @example `all`
         */
        Protocol: string;
        /**
         * 目标端口范围。取值范围：
         * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：-1/-1。
         * - ALL：-1/-1。
         * @example `0-65535`
         */
        DestinationPort: string;
        /**
         * 目标地址、域名或泛域名，前缀匹配。
         * @example `47.103.184.100/32`
         */
        Destination: string;
        /**
         * 授权规则策略，取值：
         * - **Permit**：允许
         * - **Deny**：拒绝
         * @example `Permit`
         */
        Policy: string;
        /**
         * 是否为DNS。
         * @example `true`
         */
        Dns: boolean;
        /**
         * 创建时间。
         * @example `2022-06-21 15:27:24`
         */
        CreateTime: string;
    }[];
    /**
     * 下一次查询的起始token。
     * @example `iou001238joojjaere
    `
     */
    NextToken: string;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 列表的条目数。
     * @example `2`
     */
    TotalCount: string;
}
