export interface GetJMeterLogsRequest {
    /**
     * 请求第N页的日志信息。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 请求N条记录。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 报告ID。
     * @example `KS2YE3J2`
     */
    "ReportId": string;
    /**
     * 开始时间，单位秒。
     * @example `1637115306000`
     */
    "BeginTime"?: number;
    /**
     * 结束时间，单位秒。
     * @example `1637115309000`
     */
    "EndTime"?: number;
    /**
     * 非法Index直接返回第0台引擎的日志。
     * @example `0`
     */
    "AgentIndex"?: number;
    /**
     * 日志等级。包括：
     * - ERROR：错误
     * - WARN：警告
     * - INFO：信息，默认值
     * - DEBUG：调试
     * - TRACE：跟踪
     * @example `INFO`
     */
    "Level"?: string;
    /**
     * 线程名。
     * @example `main`
     */
    "Thread"?: string;
    /**
     * 关键字。
     * @example `test`
     */
    "Keyword"?: string;
}
