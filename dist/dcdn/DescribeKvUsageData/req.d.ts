export interface DescribeKvUsageDataRequest {
    /**
     * 命名空间ID，若参数为空，默认返回所有命名空间聚合的数据。
     * 支持多个命名空间查询，多个命名空间用半角逗号（,）分隔， 最多支持查询30个命名空间。
     * @example `12423131231****`
     */
    "NamespaceId"?: string;
    /**
     * 获取数据起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为：yyyy-MM-ddTHH:mm:ssZ。
     * 最小数据粒度为1小时。不填默认读取过去7天的数据。
     * @example `2022-08-10T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-08-10T23:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 请求数据类型，可以指定为：**acc**。
     * @example `acc`
     */
    "Field": string;
    /**
     * 访问类型，若参数为空，则默认返回所有类型聚合的结果。可以指定为：
     * - **get**：GET请求。
     * - **put**：PUT请求。
     * - **list**：LIST请求。
     * - **delete**：DELETE请求。
     * @example `get`
     */
    "AccessType"?: string;
    /**
     * 响应数据类型，取值：
     * - **detail**：详细数据
     * - **total**：汇总数据
     * 默认为**detail**。
     * @example `detail`
     */
    "ResponseType"?: string;
    /**
     * 分组键，可以指定为**type**、**namespace**。
     * - **type**：指定后数据将会按时序被分组输出，且仅返回5分钟粒度数据。
     * - **namespace**：指定后数据将按照namespace分组输出，不会对数据进行补零。
     * - 为空时：默认为**type**。
     * **ResponseType**为**total**时，不支持分组返回**namespace**，将继续按照**type**分组返回。
     * @example `type`
     */
    "SplitBy"?: string;
}
