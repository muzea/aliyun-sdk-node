export interface DescribeDataMaskingTasksRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 任务搜索关键词。支持搜索任务名称和任务编号。
     * @example `test`
     */
    "SearchKey"?: string;
    /**
     * 任务创建的起始时间。格式：时间戳。单位：毫秒。
     * @example `1582992000000`
     */
    "StartTime"?: number;
    /**
     * 脱敏任务创建的结束时间。格式：时间戳。单位：毫秒。
     * @example `1583856000000`
     */
    "EndTime"?: number;
    /**
     * 脱敏数据源所属的产品。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
     * @example `2`
     */
    "DstType"?: number;
    /**
     * 列表每页显示的数据最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
