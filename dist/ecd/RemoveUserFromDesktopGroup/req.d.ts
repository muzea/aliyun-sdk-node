export interface RemoveUserFromDesktopGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需移除授权用户的云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId"?: string;
    /**
     * 需移除的授权用户列表。
     */
    "EndUserIds": string[];
    /**
     * 云电脑池ID列表。
     */
    "DesktopGroupIds"?: string[];
}
