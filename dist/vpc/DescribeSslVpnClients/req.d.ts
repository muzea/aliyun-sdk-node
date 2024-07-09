export interface DescribeSslVpnClientsRequest {
    /**
     * VPN网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * VPN网关实例ID。
     * @example `vpn-gw8gfb947ctddabja****`
     */
    "VpnGatewayId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页可显示的最大条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
