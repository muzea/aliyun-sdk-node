export interface DescribeEnsRouteEntryListRequest {
    /**
     * 要查询的路由表的ID。
     * @example `vtb-hp3wdhynneo7fsclox8hs`
     */
    "RouteTableId": string;
    /**
     * 要查询的路由条目的ID。
     * @example `rte-8vbdw66evgv44u2u7v3hx`
     */
    "RouteEntryId"?: string;
    /**
     * 路由条目的目标网段
     * @example `11.0.0.0/16`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 路由条目的类型。取值：
     * - Custom：自定义路由。
     * - System：系统路由。
     * @example `Custom`
     */
    "RouteEntryType"?: string;
    /**
     * 自定义路由条目的下一跳的类型，取值：
     * - Instance（默认值）：ENS实例。
     * @example `Instance`
     */
    "NextHopType"?: string;
    /**
     * 下一跳实例ID。
     * @example `i-2zecshuv3axtr2gc4noa`
     */
    "NextHopId"?: string;
    /**
     * 路由条目的名称。
     * @example `test0`
     */
    "RouteEntryName"?: string;
    /**
     * 查询列表的页码。取值：>0，默认查询第1页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。默认值：10，取值：10~100。
     * @example `10`
     */
    "PageSize"?: number;
}
