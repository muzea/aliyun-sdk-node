export interface GetLeniPrivateIpAddressRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏弹性网卡辅助私网IP唯一标识。
     * @example `sip-8ylg****`
     */
    "IpName": string;
    /**
     * 灵骏弹性网卡ID。
     * @example `leni-1234****`
     */
    "ElasticNetworkInterfaceId": string;
}
