export interface CreateSslVpnClientCertRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-0016e04115b`
     */
    "ClientToken"?: string;
    /**
     * VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  SSL-VPN服务端的ID。
     * @example `vss-m5et0q3iy1qex328w****`
     */
    "SslVpnServerId": string;
    /**
     * 客户端证书的名称。
     * 长度为1～100个字符，不能以`http://`或`https://`开头。
     * @example `SslVpnClientCert1`
     */
    "Name"?: string;
}
