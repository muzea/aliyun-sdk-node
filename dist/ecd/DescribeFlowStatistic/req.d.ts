export interface DescribeFlowStatisticRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑ID。
     * @example `ecd-7w78ozhjcwa3u****`
     */
    "DesktopId"?: string;
    /**
     * 统计间隔。单位：秒。
     * @example `3600`
     */
    "Period": number;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId": string;
    /**
     * 分页查询时，当前页的页码。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，每页最大行数。
     * @example `20`
     */
    "PageSize"?: number;
}
