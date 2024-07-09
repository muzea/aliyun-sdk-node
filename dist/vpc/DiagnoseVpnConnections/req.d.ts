export interface DiagnoseVpnConnectionsRequest {
    /**
     * IPsec连接所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-qingdao`
     */
    "RegionId": string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp10hz6b0mbp39flt****`
     */
    "VpnGatewayId"?: string;
    /**
     * IPsec连接ID列表。
     */
    "VpnConnectionIds"?: string[];
    /**
     * 隧道ID列表。
     */
    "TunnelIds"?: string[];
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
