export interface DescribeIpv6EgressOnlyRulesResponse {
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `E16671B7-DEA6-48E0-8E9C-41913DAD44DD`
     */
    RequestId: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    Ipv6EgressOnlyRules: {
        /**
         * 仅主动出规则的详细信息。
         */
        Ipv6EgressOnlyRule: {
            /**
             * 仅主动出规则的状态。
             * @example `Available`
             */
            Status: string;
            /**
             * 仅主动出规则的描述信息。
             * @example `ruledescription`
             */
            Description: string;
            /**
             * 仅主动出规则的ID。
             * @example `ipv6py-bp1rr7fq1md8pbb3k****`
             */
            Ipv6EgressOnlyRuleId: string;
            /**
             * 配置了仅主动出规则的IPv6地址的ID。
             * @example `ipv6gw-bp1rhhs9zjlxukc5e****`
             */
            InstanceId: string;
            /**
             * 配置了仅主动出规则的实例类型。
             * @example `Ipv6Address`
             */
            InstanceType: string;
            /**
             * 仅主动出规则的名称。
             * @example `rulename`
             */
            Name: string;
        }[];
    };
}
