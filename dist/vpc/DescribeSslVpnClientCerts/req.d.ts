export interface DescribeSslVpnClientCertsRequest {
    /**
     * 要查询的SSL客户端证书所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSL服务端ID。
     * @example `vss-bp18q7hzj6largv4v****`
     */
    "SslVpnServerId"?: string;
    /**
     * SSL客户端证书ID。
     * @example `vsc-bp1n8wcf134yl0osr****`
     */
    "SslVpnClientCertId"?: string;
    /**
     * SSL客户端证书的名称。
     * @example `cert1`
     */
    "Name"?: string;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值：**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * SSL客户端证书所属的资源组ID。
     * SSL客户端证书与其关联的SSL服务端的资源组相同。您可以调用[DescribeSslVpnServers](~~2794078~~)接口查询SSL服务端所属的资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
