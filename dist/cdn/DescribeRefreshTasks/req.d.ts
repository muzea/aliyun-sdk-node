export interface DescribeRefreshTasksRequest {
    /**
     * 按任务ID查询刷新状态。
     * @example `1234321`
     */
    "TaskId"?: string;
    /**
     * 按路径查询，准确匹配。
     * @example `http://example.com/1.txt`
     */
    "ObjectPath"?: string;
    /**
     * 取得第几页，取值范围为：**1**~**100000**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 任务类型。取值：
     * - **file**：文件刷新。
     * - **directory**：目录刷新。
     * - **regex**：正则刷新。
     * - **preload**：文件预热。
     * - **block**：URL封禁。
     * - **unblock**：URL解封禁。
     * > 当指定**DomainName**或**Status**参数时，**ObjectType**参数为必传参数。
     * @example `file`
     */
    "ObjectType"?: string;
    /**
     * 加速域名。仅支持单个查询，默认查询所有加速域名。
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
     * 分页大小，默认**20**，最大**100**。取值：**1**~**100**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyuji4b6r4**`
     */
    "ResourceGroupId"?: string;
}
