export interface CreateIpsecServerResponse {
    /**
     * IPsec服务端创建时间。
     * T表示分隔符，Z表示的是UTC，即世界标准时间。
     * @example `2021-02-22T03:24:28Z`
     */
    CreationTime: string;
    /**
     * IPsec服务端ID。
     * @example `iss-bp1jougp8cfsbo8y9****`
     */
    IpsecServerId: string;
    /**
     * 请求ID。
     * @example `690A967E-D4CD-4B69-8C78-94FE828BA10B`
     */
    RequestId: string;
    /**
     * IPsec服务端名称。
     * @example `test`
     */
    IpsecServerName: string;
    /**
     * VPN网关实例ID。
     * @example `vpn-bp17lofy9fd0dnvzv****`
     */
    VpnGatewayId: string;
    /**
     * VPN网关所属地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
}
