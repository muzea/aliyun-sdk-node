export interface ModifyUserToDesktopGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要替换授权用户的云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
    /**
     * 需移除的授权用户ID列表。可配置1~500个。
     */
    "OldEndUserIds": string[];
    /**
     * 需添加的授权用户ID列表。可配置1~500个。
     */
    "NewEndUserIds": string[];
}
