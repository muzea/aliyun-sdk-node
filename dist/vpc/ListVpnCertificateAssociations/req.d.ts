export interface ListVpnCertificateAssociationsRequest {
    /**
     * VPN网关所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 证书类型。取值：
     * - **Encryption**：加密证书。
     * - **Signature**：签名证书。
     * @example `Signature`
     */
    "CertificateType"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `caeba0bbb2be0****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**20**，默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * VPN网关实例ID列表。
     * 一次最多支持查询20个VPN网关实例与SSL证书的绑定关系。
     * @example `vpn-bp1q8bgx4xnkm****`
     */
    "VpnGatewayId"?: string[];
    /**
     * 证书ID列表。
     * 一次最多支持查询20个SSL证书与VPN网关实例的绑定关系。
     * @example `6bfe4218-ea1d****`
     */
    "CertificateId"?: string[];
}
