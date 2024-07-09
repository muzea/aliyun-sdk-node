export interface DescribeDcdnRefreshTasksRequest {
    /**
     * 任务ID，当您创建刷新或预热任务，会返回任务ID。
     * @example `704225667`
     */
    "TaskId"?: string;
    /**
     * 按路径查询，准确匹配。
     * @example `http://example.com/examplefile.txt`
     */
    "ObjectPath"?: string;
    /**
     * 取得页数。取值范围为：**1**~**100000**。
     * @example `2`
     */
    "PageNumber"?: number;
    /**
     * 任务类型。
     * - **file**：刷新URL。
     * - **directory**：刷新目录。
     * - **regex**：正则刷新。
     * - **preload**：预热URL。
     * 当指定**DomainName**或**Status**时，该参数必填。
     * @example `file`
     */
    "ObjectType"?: string;
    /**
     * 加速域名，仅支持单个查询，默认查询所有加速域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 任务状态。
     * - **Complete**：完成。
     * - **Refreshing**：刷新中。
     * - **Failed**：刷新失败。
     * @example `Complete`
     */
    "Status"?: string;
    /**
     * 分页大小。默认值：**20**，最大值：**50**，取值范围：**1**~**50**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2017-01-01T12:12:20Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2017-01-01T12:13:20Z`
     */
    "EndTime"?: string;
}
