export interface ListApiDatasourceRequest {
    /**
     * 工作空间ID。
     * @example `89713491-cb4f-4579-b889-e82c35f1****`
     */
    "WorkspaceId": string;
    /**
     * API数据源列表的当前页码：
     * - 起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：100
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * API数据源名称的关键字。
     * @example `测试`
     */
    "KeyWord"?: string;
}
