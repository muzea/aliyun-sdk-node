export interface ListAuthorizationRulesResponse {
    /**
     * 请求id。
     * @example `207F9929-806E-5622-8E4F-8484F7000C22`
     */
    RequestId: string;
    /**
     * 授权规则列表。
     */
    AuthorizationRules: {
        /**
         * 授权规则id。
         * @example `ar5g-xxxx`
         */
        AuthorizationRuleId: string;
        /**
         * 授权规则状态，取值：
         * -  **Creating**: 创建中
         * -  **Pending**: 配置中
         * -  **Available**: 有效的稳定状态
         * -  **Invalid**: 无效
         * -  **Deleting**: 删除中
         * @example `Pending`
         */
        Status: string;
        /**
         * 授权规则名称。
         * @example `test`
         */
        Name: string;
        /**
         * 授权规则描述。
         * @example `ar5g-test`
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
         * - **Cidr**: 网段
         * - **Domain**: 域名或泛域名
         * - **IpPort**: IP重定向
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
         * @example `10.0.0.0/24`
         */
        Destination: string;
        /**
         * 授权规则策略，取值：
         * - **Permit**：允许
         * - **Deny**：拒绝
         * - **Mapping**：重定向
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
         * @example `2022-3-15 22:20:00`
         */
        CreateTime: string;
    }[];
    /**
     * 下一次查询的起始token。
     * @example `iou001238joojjaere`
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
