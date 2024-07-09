export interface GetIpv4GatewayAttributeResponse {
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
     * - **Activating**：使能中。
     * @example `Created`
     */
    Status: string;
    /**
     * IPv4网关的实例ID。
     * @example `ipv4gw-5tsnc6s4ogsedtp3k****`
     */
    Ipv4GatewayId: string;
    /**
     * 请求ID。
     * @example `7F79A919-6FE9-50C4-967B-45705E1F9C38`
     */
    RequestId: string;
    /**
     * IPv4网关实例的描述信息。
     * @example `new`
     */
    Ipv4GatewayDescription: string;
    /**
     * IPv4网关是否已经激活。取值：
     * - **true**：已激活。
     * - **false**：未激活。
     * @example `true`
     */
    Enabled: boolean;
    /**
     * IPv4网关实例关联的路由表ID。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    Ipv4GatewayRouteTableId: string;
    /**
     * IPv4网关的实例名称。
     * @example `name`
     */
    Ipv4GatewayName: string;
    /**
     * 创建时间。
     * @example `2022-02-24T09:02:36Z`
     */
    CreateTime: string;
    /**
     * IPv4网关所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    ResourceGroupId: string;
    /**
     * 标签列表信息。
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
}
