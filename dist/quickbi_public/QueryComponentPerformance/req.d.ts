export interface QueryComponentPerformanceRequest {
    /**
     * 查询类型：
     * - **lastDay**：昨天
     * - **sevenDays**：七天内
     * - **thirtyDays**：三十天内
     * @example `sevenDays`
     */
    "QueryType": string;
    /**
     * 工作空间ID。
     * @example `89713491-cb4f-4579-b889-e82c35f1****`
     */
    "WorkspaceId": string;
    /**
     * 作品的ID。这里的作品包括数据门户，仪表板，电子表格，自助取数。
     * @example `6b407e50-e774-406b-9956-da2425c2****`
     */
    "ReportId"?: string;
    /**
     * 资源类型。
     * @example `report`
     */
    "ResourceType"?: string;
    /**
     * 平均耗时（分钟）。
     * @example `1`
     */
    "CostTimeAvgMin"?: number;
    /**
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：1000
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 工作空间成员列表的当前页码：
     * - 起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNum"?: number;
}
