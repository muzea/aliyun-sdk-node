export interface DescribeVodRefreshTasksRequest {
    /**
     * 按任务ID查询刷新状态。
     * @example `70422****`
     */
    "TaskId"?: string;
    /**
     * 按路径查询，准确匹配。
     * @example `http://example.com/***.txt`
     */
    "ObjectPath"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务类型。取值范围：
     * - **file**：文件刷新。
     * - **directory**：目录刷新。
     * - **preload**：文件预热。
     * > 当指定DomainName或Status时，ObjectType该项为必填。
     * @example `file`
     */
    "ObjectType"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 任务状态。取值：
     * - **Complete**：完成。
     * - **Refreshing**：刷新中。
     * - **Failed**：刷新失败。
     * @example `Complete`
     */
    "Status"?: string;
    /**
     * 分页大小，每页显示的条目数。默认值：**20**。最大值：**50**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 仅能查询3天内的数据。
     * @example `2017-01-01T12:12:20Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-01T12:30:20Z`
     */
    "EndTime"?: string;
}
