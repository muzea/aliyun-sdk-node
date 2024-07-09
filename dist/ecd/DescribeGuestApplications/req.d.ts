export interface DescribeGuestApplicationsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-asw3giklqvfqe****`
     */
    "DesktopId": string;
    /**
     * 云电脑的授权用户ID。
     * @example `demo001`
     */
    "EndUserId": string;
}
