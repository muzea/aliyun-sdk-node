export interface DescribeIpv6GatewaysResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `E3A06196-3E7C-490D-8F39-CB4B5A0CE8AD`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的条目数量。
     * @example `2`
     */
    TotalCount: number;
    Ipv6Gateways: {
        /**
         * IPv6网关的详细信息。
         */
        Ipv6Gateway: {
            /**
             * IPv6网关的创建时间。
             * @example `2020-12-20T14:51:23Z`
             */
            CreationTime: string;
            /**
             * IPv6网关的运行状态。取值：
             * - **Pending**：配置中。
             * - **Available**：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * IPv6网关关联的VPC ID。
             * @example `vpc-123sedrfswd23****`
             */
            VpcId: string;
            /**
             * IPv6网关的描述信息。
             * @example `descriptionforIPv6GW`
             */
            Description: string;
            /**
             * IPv6网关的ID。
             * @example `ipv6gw-hp3rwmtmfhgisipv6gw-hp3rwmtmfhgis****`
             */
            Ipv6GatewayId: string;
            /**
             * IPv6网关的过期时间。
             * @example `2021-12-20T14:51:23Z`
             */
            ExpiredTime: string;
            /**
             * IPv6网关的状态，取值：
             * - **Normal**：正常。
             * - **FinancialLocked**：欠费锁定。
             * - **SecurityLocked**：安全锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * IPv6网关的名称。
             * @example `ipv6GW`
             */
            Name: string;
            /**
             * IPv6网关的计费方式。
             *
             * 仅取值：**PostPaid**，表示后付费。
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            /**
             * IPv6网关的地域ID。
             * @example `cn-huhehaote`
             */
            RegionId: string;
            /**
             * 资源组ID。
             * @example `rg-bp67acfmxazb4ph****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 标签列表信息。
                 */
                Tag: {
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
            };
        }[];
    };
}
