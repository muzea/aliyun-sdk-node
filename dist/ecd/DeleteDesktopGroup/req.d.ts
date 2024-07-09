export interface DeleteDesktopGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
}
