export interface DescribeVpnPbrRouteEntriesRequest {
    /**
     * VPN网关实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp1a3kqjiiq9legfx****`
     */
    "VpnGatewayId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
