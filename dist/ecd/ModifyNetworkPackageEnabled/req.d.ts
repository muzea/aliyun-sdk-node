export interface ModifyNetworkPackageEnabledRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 公网精品带宽ID。
     * @example `np-cfedn7r2pe48g****`
     */
    "NetworkPackageId": string;
    /**
     * 恢复或停用公网精品带宽。
     * @example `true`
     */
    "Enabled"?: boolean;
}
