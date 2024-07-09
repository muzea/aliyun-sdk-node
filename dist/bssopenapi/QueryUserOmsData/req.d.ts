export interface QueryUserOmsDataRequest {
    /**
     * 用量数据产品和明细信息，一般为ProductCode，不同产品存在多种计量模型。
     * @example `rds`
     */
    "Table": string;
    /**
     * 计量数据时间类型，参考具体产品文档描述选用。
     * - Raw：小时。
     * - Hour：小时。
     * - Day：天。
     * - Month：月。
     * @example `Hour`
     */
    "DataType": string;
    /**
     * 请求的开始时间。
     * 日期格式按照ISO8601标准标示，并需要使用UTC时间。格式：yyyy-mm-ddThh:mm:ssZ。
     * @example `2020-02-20T12:00:00Z`
     */
    "StartTime": string;
    /**
     * 请求的结束时间。
     * 日期格式按照ISO8601标准标示，并需要使用UTC时间。格式：yyyy-mm-ddThh:mm:ssZ。
     * @example `2020-02-21T12:00:00Z`
     */
    "EndTime": string;
    /**
     * 设定结果从NextToken之后按字母排序的第一个开始返回。默认从头返回。
     * @example `NextToken`
     */
    "Marker"?: string;
    /**
     * 分页查询每页行数，1~200，默认值100。
     * @example `1`
     */
    "PageSize"?: number;
}
