export interface ListGroupAuthorizationRulesResponse {
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 授权规则列表。
     */
    GroupAuthorizationRules: {
        /**
         * 实例组ID。
         * @example `iotccg-g00epppbi9di9y****`
         */
        IoTCloudConnectorGroupId: string;
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
         * 目标端口范围。取值范围：
         * - TCP、UDP协议：1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：-1/-1。
         * - ALL：-1/-1。
         * @example `80/80`
         */
        DestinationPort: string;
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
         * 访问目标地址。
         * @example `47.0.XX.XX`
         */
        Destination: string;
        /**
         * 授权规则的名称。
         * @example `ruletest`
         */
        AuthorizationRuleName: string;
        /**
         * 授权规则的描述信息。
         * @example `rule`
         */
        AuthorizationRuleDescription: string;
        /**
         * 授权规则ID。
         * @example `gar-ez91t41jvi6tr8****`
         */
        AuthorizationRuleId: string;
        /**
         * 授权规则的类型。取值：
         * - **System**，表示授权规则的类型为系统类型。
         * - **Customer**：表示授权规则的类型为自定义类型。
         * - **Default**：表示授权规则的类型为默认类型。
         * @example `System`
         */
        Type: string;
    }[];
}
