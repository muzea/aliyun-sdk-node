export interface GetNetworkInterfaceRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 所属灵骏子网（Subnet）
     * @example `subnet-f3zfzmnc`
     */
    "SubnetId": string;
    /**
     * 灵骏网卡ID
     * @example `lni-bp18exxqa2rvfn45e5pz`
     */
    "NetworkInterfaceId": string;
}
