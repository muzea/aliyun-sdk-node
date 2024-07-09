export interface ModifyEntitlementRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId": string;
    /**
     * 用户名列表。该列表中的用户将成为指定云电脑的授权用户，该云电脑此前已有的授权用户将被移除。可设置1~100个用户名。
     * @example `alice`
     */
    "EndUserId"?: string[];
}
