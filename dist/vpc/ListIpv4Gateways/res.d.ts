export interface ListIpv4GatewaysResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2D265800-E306-529C-8418-84B0A1D201DB`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * IPv4网关实例的列表信息。
     */
    Ipv4GatewayModels: {
        /**
         * IPv4网关实例关联的VPC的ID。
         * @example `vpc-5tsrxlw7dv074gci4****`
         */
        VpcId: string;
        /**
         * IPv4网关实例的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：已创建，可用状态。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * - **Deleted**：已删除。
         * @example `Created`
         */
        Status: string;
        /**
         * IPv4网关的实例ID。
         * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
         */
        Ipv4GatewayId: string;
        /**
         * IPv4网关实例的描述信息。
         * @example `test`
         */
        Ipv4GatewayDescription: string;
        /**
         * IPv4网关实例是否已经激活。取值：
         * - **true**；已激活。
         * - **false**：未激活。
         * @example `true`
         */
        Enabled: boolean;
        /**
         * IPv4网关创建时间
         * @example `2021-12-02T07:07:35Z`
         */
        GmtCreate: string;
        /**
         * IPv4网关实例关联的路由表ID。
         * @example `vtb-5ts0ohchwkp3dydt2****`
         */
        Ipv4GatewayRouteTableId: string;
        /**
         * IPv4网关实例的名称。
         * @example `name`
         */
        Ipv4GatewayName: string;
        /**
         * IPv4网关所属的资源组ID。
         * @example `rg-bp67acfmxazb4ph****`
         */
        ResourceGroupId: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    }[];
}
