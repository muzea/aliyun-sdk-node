export interface UnassignLeniPrivateIpAddressRequest {
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
    /**
     * 幂等标识。
     * @example `967e77a2-b61d-11ec-a147-0242c0a80504`
     */
    "ClientToken"?: string;
}
