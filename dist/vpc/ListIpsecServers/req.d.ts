export interface ListIpsecServersRequest {
    /**
     * IPsec服务端所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPsec服务端名称。
     * 名称长度为1～100个字符。
     * @example `test`
     */
    "IpsecServerName"?: string;
    /**
     * VPN网关的ID。
     * @example `vpn-bp1q8bgx4xnkm2ogj****`
     */
    "VpnGatewayId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：**1**~**20**，默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * IPsec服务端ID。
     * @example `iss-bp1bo3xuvcxo7ixll****`
     */
    "IpsecServerId"?: string[];
    /**
     * IPsec服务端所属的资源组ID。
     * IPsec服务端与其关联的VPN网关实例的资源组相同。您可以调用[DescribeVpnGateway](~~2794055~~)接口查询VPN网关实例所属的资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
