export interface DescribeSslVpnServersRequest {
    /**
     * SSL-VPN服务端所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSL-VPN服务端的ID。
     * @example `vss-bp15j3du13gq1dgey****`
     */
    "SslVpnServerId"?: string;
    /**
     * VPN网关的ID。
     * @example `vpn-bp1on0xae9d771ggi****`
     */
    "VpnGatewayId"?: string;
    /**
     * SSL-VPN服务端的名称。
     * 长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * SSL-VPN服务端所属的资源组ID。
     * SSL-VPN服务端与其关联的VPN网关实例的资源组相同。您可以调用[DescribeVpnGateway](~~2794055~~)接口查询VPN网关实例所属的资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
