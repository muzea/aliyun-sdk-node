export interface SetOfficeSiteSsoStatusRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * 开启或者关闭单点登录SSO。
     * @example `true`
     */
    "EnableSso": boolean;
}
