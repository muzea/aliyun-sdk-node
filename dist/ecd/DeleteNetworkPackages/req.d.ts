export interface DeleteNetworkPackagesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽ID列表。可设置一个或者多个。
     */
    "NetworkPackageId": string[];
}
