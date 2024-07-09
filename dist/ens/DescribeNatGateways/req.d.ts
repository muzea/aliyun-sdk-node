export interface DescribeNatGatewaysRequest {
    /**
     * ENS节点ID。
     * @example `cn-wuxi-9`
     */
    "EnsRegionId"?: string;
    /**
     * NAT网关的ID。
     * @example `nat-5t7nh1cfm6kxiszlttr38****`
     */
    "NatGatewayId"?: string;
    /**
     * 网络ID。
     * @example `n-2zeuphj08tt7q3brd****`
     */
    "NetworkId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-5rllcjb3ol6duzjdnbm1o****`
     */
    "VSwitchId"?: string;
    /**
     * NAT网关实例名称。
     * @example `test0`
     */
    "Name"?: string;
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值为**100**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
