export interface ListNetworkInterfacesRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏网卡ID。
     * @example `lni-bp18exxqa2rvfn45e5pz`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 所属灵骏网段（VPD）实例ID。
     * @example `vpd-iv2zm1qf`
     */
    "VpdId"?: string;
    /**
     * 所属机器ID。
     * @example `r-2ze121o4uhr4np3r5t-db-5`
     */
    "NodeId"?: string;
    /**
     * 所属灵骏子网（Subnet）实例ID。
     * @example `subnet-anhtskts`
     */
    "SubnetId"?: string;
    /**
     * 网卡IP地址。
     * @example `203.107.46.227`
     */
    "Ip"?: string;
    /**
     * 当前页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 当前页数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否需要分页。
     * @example `false`
     */
    "EnablePage"?: boolean;
}
