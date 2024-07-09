export interface DescribeNatGatewaysResponse {
    /**
     * 请求ID。
     * @example `2818A8F4-5E2B-5611-8732-5ACF7B677059`
     */
    RequestId: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询的NAT网关列表条目数。
     * @example `49`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * NAT网关的详细信息。
     */
    NatGateways: {
        /**
         * ENS节点ID。
         * @example `cn-xiangyang-5`
         */
        EnsRegionId: string;
        /**
         * NAT网关的ID。
         * @example `nat-5t7nh1cfm6kxiszlttr38****`
         */
        NatGatewayId: string;
        /**
         * 网路ID。
         * @example `n-5s2ml1olj0kzaws9n1yrj****`
         */
        NetworkId: string;
        /**
         * 交换机ID。
         * @example `vsw-5szpp1os9m55myirbflfw****`
         */
        VSwitchId: string;
        /**
         * NAT网关实例名称。
         * @example `test0`
         */
        Name: string;
        /**
         * 创建时间。UTC时间，格式为：YYYY-MM-DDThh:mm:ssZ。
         * @example `2021-11-22T07:03:32Z`
         */
        CreationTime: string;
        /**
         * NAT实例规格。
         * @example `enat.default`
         */
        Spec: string;
    }[];
}
