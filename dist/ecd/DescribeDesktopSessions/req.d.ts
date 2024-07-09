export interface DescribeDesktopSessionsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string;
    /**
     * 终端用户ID。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 会话连接状态。
     * @example `Connected`
     */
    "SessionStatus"?: string;
    /**
     * 查询开始时间。
     * @example `2023-01-28T02:31:43Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。
     * @example `2023-02-13T02:51:43Z`
     */
    "EndTime"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，每页最大行数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云电脑ID。可设置1~100个。
     */
    "DesktopId"?: string[];
    /**
     * 云电脑名称。
     * @example `DemoComputer`
     */
    "DesktopName"?: string;
    "SubPayType"?: string;
}
