export interface DescribeSslVpnClientCertRequest {
    /**
     * 要查询的SSL客户端证书所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要查询的SSL客户端证书的ID。
     * @example `vsc-bp17r58rjf5r1gjyr****`
     */
    "SslVpnClientCertId": string;
}
