export interface ListGroupIpMappingRulesResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 列表条目数。
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
     * @example `20`
     */
    MaxResults: number;
    /**
     * 需要进行重定向的IP地址列表。
     */
    IpMappingRules: {
        /**
         * 云连接器实例组ID。
         * @example `iotccg-g00epppbi9di9y****`
         */
        IoTCloudConnectorGroupId: string;
        /**
         * 授权规则IP重定向的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：创建完成。
         * - **Updating**：更新中。
         * - **Associating**：IP绑定中。
         * - **Dissociating**：IP解绑中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Created`
         */
        IpMappingRuleStatus: string;
        /**
         * 需要进行重定向的IP地址。
         * @example `47.0.XX.XX`
         */
        MappingIp: string;
        /**
         * 重定向的目标IP地址。
         * @example `192.168.10.8`
         */
        DestinationIp: string;
        /**
         * 需要进行IP重定向的授权规则名称。
         * @example `name`
         */
        IpMappingRuleName: string;
        /**
         * 需要进行IP重定向的授权规则描述。
         * @example `description`
         */
        IpMappingRuleDescription: string;
        /**
         * 需要进行IP重定向的授权规则的ID。
         * @example `im-irrp3bzuu5nrbx****`
         */
        IpMappingRuleId: string;
    }[];
}
