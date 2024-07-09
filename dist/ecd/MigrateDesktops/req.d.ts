export interface MigrateDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 目标办公网络ID。
     * @example `cn-shenzhen+dir-388505****`
     */
    "TargetOfficeSiteId": string;
    /**
     * 云电脑ID列表。可设置1~100个。
     */
    "DesktopId": string[];
}
