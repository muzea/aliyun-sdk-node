export interface AllocateIpv6InternetBandwidthResponse {
    /**
     * IPv6地址的ID。
     * @example `ipv6-2zen5j4axcp5l5qyy****`
     */
    Ipv6AddressId: string;
    /**
     * 请求ID。
     * @example `6972A26E-99B1-4367-9890-FBDEBB0F5E7D`
     */
    RequestId: string;
    /**
     * 开通公网带宽后，要查询的IPv6网关对应的公网带宽实例ID。
     * @example `ipv6bw-uf6hcyzu65v98v3du****`
     */
    InternetBandwidthId: string;
}
