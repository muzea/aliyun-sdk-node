export interface DescribeScdnRefreshTasksRequest {
    /**
     * 按任务ID查询刷新状态。
     * @example `70422****`
     */
    "TaskId"?: string;
    /**
     * 按路径查询，准确匹配。
     * @example `http://example.com/examplefile.txt`
     */
    "ObjectPath"?: string;
    /**
     * 取得第几页，取值范围为**1~100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务类型。取值：
     * - **file**
     * - **path**
     * - **preload**
     * 当指定**DomainName**或**TaskStatus**时，该项为必填。
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
     * 分页大小，默认**20**，最大**50**。取值为**1~50**之前的任意整数。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 开始时间。
     * @example `2017-01-01T12:12:20Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * @example `2017-01-01T12:13:20Z`
     */
    "EndTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6****`
     */
    "ResourceGroupId"?: string;
}
