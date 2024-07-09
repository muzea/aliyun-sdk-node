export interface UnAssignPrivateIpAddressRequest {
    /**
     * 所属地域
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网卡ID
     * @example `lni-bp18exxqa2rvfn45e5pz`
     */
    "NetworkInterfaceId": string;
    /**
     * 所属Subnet
     * @example `subnet-f3zfzmnc`
     */
    "SubnetId": string;
    /**
     * IP唯一标识
     * @example `sip-xxxx`
     */
    "IpName": string;
    /**
     * 私有IP地址
     * @example `10.209.75.242`
     */
    "PrivateIpAddress"?: string;
    /**
     * popApi 默认不忽略，幂等使用
     */
    "ClientToken"?: string;
}
