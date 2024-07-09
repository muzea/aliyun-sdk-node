export interface AssociateNetworkPackageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽ID。
     * @example `np-e0iodl3yzb62q****`
     */
    "NetworkPackageId": string;
    /**
     * 办公网络ID。可调用[DescribeNetworkPackages](~~216079~~)获取与公网精品带宽绑定的办公网络ID。
     * @example `cn-hangzhou+dir-*********`
     */
    "OfficeSiteId": string;
}
