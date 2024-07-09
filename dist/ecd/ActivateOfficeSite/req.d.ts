export interface ActivateOfficeSiteRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 已锁定的便捷办公网络ID。
     * @example `cn-hangzhou+dir-803704****`
     */
    "OfficeSiteId": string;
}
