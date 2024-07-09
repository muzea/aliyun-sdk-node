export interface ListAuthorizationRulesResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 授权规则总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 分页大小。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 授权规则列表。
     */
    AuthorizationRules: {
        /**
         * 云连接器实例ID。
         * @example `iotcc-bp1odcab8tmno0hdq****`
         */
        IoTCloudConnectorId: string;
        /**
         * 访问策略。取值：
         * - **Permit**：允许。
         * - **Deny**：拒绝。
         * @example `Permit`
         */
        Policy: string;
        /**
         * 授权规则状态。取值：
         * - **Creating**：创建中。
         * - **Created**：创建完成。
         * - **Deleting**：删除中。
         * - **Updating**：更新中。
         * @example `Created`
         */
        AuthorizationRuleStatus: string;
        /**
         * 源CIDR地址块。
         */
        SourceCidrs: string[];
        /**
         * 访问目标类型。取值：
         * - **Cidr**：CIDR地址块。
         * - **Domain**：域名。
         * @example `Cidr`
         */
        DestinationType: string;
        /**
         * 协议类型。取值：
         * - **tcp**。
         * - **udp**。
         * - **icmp**。
         * - **all**：支持所有协议。
         * @example `tcp`
         */
        Protocol: string;
        /**
         * 目标端口范围。取值范围：
         * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：-1/-1。
         * - ALL：-1/-1。
         * @example `80/80`
         */
        DestinationPort: string;
        /**
         * 访问目标。
         * @example `192.168.XX.XX`
         */
        Destination: string;
        /**
         * 授权规则名称。
         * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、下划线（_）或短划线（-）。
         * @example `rule01`
         */
        AuthorizationRuleName: string;
        /**
         * 授权规则描述。
         * @example `rule01`
         */
        AuthorizationRuleDescription: string;
        /**
         * 授权规则ID。
         * @example `ar-1234abcb8tmno0hdq****`
         */
        AuthorizationRuleId: string;
        /**
         * 授权规则的类型。取值：
         * -  **System**，表示授权规则的类型为系统类型。
         * - **Customer**：表示授权规则的类型为自定义类型。
         * - **Default**：表示授权规则的类型为默认类型。
         * @example `System`
         */
        AuthorizationRuleType: string;
    }[];
}
