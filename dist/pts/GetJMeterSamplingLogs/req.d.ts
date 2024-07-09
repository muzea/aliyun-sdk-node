export interface GetJMeterSamplingLogsRequest {
    /**
     * 请求第N页采样日志信息。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 请求N条采样日志记录。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 开始时间，单位毫秒。
     * @example `1637157073000`
     */
    "BeginTime"?: number;
    /**
     * 结束时间，单位毫秒。
     * @example `1637157076000`
     */
    "EndTime"?: number;
    /**
     * 报告ID。
     * @example `7R4RE352`
     */
    "ReportId": string;
    /**
     * 压测引擎编号，该字段暂未启用。
     * @example `14238000`
     */
    "AgentId"?: number;
    /**
     * 第N个采样器，从0开始。
     * @example `0`
     */
    "SamplerId"?: number;
    /**
     * 采样结果是否成功。
     * @example `true`
     */
    "Success"?: boolean;
    /**
     * 线程名。支持模糊搜索，按空格分词。
     * @example `main`
     */
    "Thread"?: string;
    /**
     * 关键字，可以通过对场景名（**SceneName**）进行模糊搜索或者对场景ID（**SceneId**）进行精确搜索。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 最小响应时间，单位为ms。
     * @example `0`
     */
    "MinRT"?: number;
    /**
     * 最大响应时间，单位为ms。
     * @example `1000`
     */
    "MaxRT"?: number;
    /**
     * 响应码。
     * @example `200`
     */
    "ResponseCode"?: string;
}
