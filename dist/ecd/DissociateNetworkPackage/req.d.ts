export interface DissociateNetworkPackageRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽ID。可调用[DescribeNetworkPackages](~~216079~~)获取该参数。
     * @example `np-*********`
     */
    "NetworkPackageId": string;
}
