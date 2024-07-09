export interface DescribeSessionStatisticRequest {
    /**
     * 地域ID。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 搜索地域ID。用于过滤出指定地域的桌面信息。
     * @example `cn-hangzhou`
     */
    "SearchRegionId"?: string;
    /**
     * 工作区ID。
     * @example `cn-shanghai+dir-259382****`
     */
    "OfficeSiteId"?: string;
    /**
     * 查询开始时间。
     * @example `1679449506572`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。
     * @example `1677808889806`
     */
    "EndTime"?: string;
    /**
     * 查询时间间隔，单位为秒。取值范围：
     * - 60
     * - 120
     * @example `60`
     */
    "Period"?: number;
}
