export interface GetJMeterLogsResponse {
    /**
     * 日志记录总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `A8E16480-15C1-555A-922F-B736A005E52D`
     */
    RequestId: string;
    /**
     * 错误提示信息，若成功则为空。
     * @example `空`
     */
    Message: string;
    /**
     * 返回日志记录数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回第N页的日志信息。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 日志内容
     * @example `{ "timeTS":1637114804326, "instanceId":0, "level":"INFO", "logger":"org.apache.jmeter.util.JMeterUtils", "sceneId":251546, 	"planId":1501546, "thread":"main", "time":"2021-11-17T10:06Z", "taskId":15015460000, "logText":"Setting Locale to en_EN\n" }`
     */
    Logs: any[];
    /**
     * 系统状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 引擎数量。若想获得第N台引擎的日志，可以根据引擎数量进行传值。
     * @example `3`
     */
    AgentCount: number;
}
