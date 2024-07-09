export interface ApproveFotaUpdateRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-138dsptkrt00u****`
     */
    "DesktopId": string;
    /**
     * 镜像版本。可调用[DescribeImages](~~188895~~)获取该参数。
     * @example `0.0.1-D-20220513.143129`
     */
    "AppVersion": string;
}
