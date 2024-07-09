export interface DescribeImageEventOperationPageRequest {
    /**
     * 告警处置规则ID。
     * @example `49616`
     */
    "Id"?: number;
    /**
     * 告警类型。取值：
     * - **sensitiveFile**：敏感文件。
     * @example `sensitiveFile`
     */
    "EventType"?: string;
    /**
     * 告警项关键字。
     * @example `PEM`
     */
    "EventKey"?: string;
    /**
     * 告警项名称。
     * @example `PEM`
     */
    "EventName"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
