export interface GetLniPrivateIpAddressRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网卡ID
     * @example `lni-bp18exxqa2rvfn45e5pz`
     */
    "NetworkInterfaceId": string;
    /**
     * IP唯一标识
     * @example `sip-xxxxx`
     */
    "IpName": string;
}
