export interface DescribeHighDefinationMonitorResponse {
    /**
     * 日志服务LogProject的名称。
     * @example `my-project`
     */
    LogProject: string;
    /**
     * 请求ID。
     * @example `2F398FF5-B349-5C01-8638-8E9A0BF1DBE6`
     */
    RequestId: string;
    /**
     * 日志服务LogStore的名称。
     * @example `my-log-store`
     */
    LogStore: string;
    /**
     * 本次调用是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: string;
}
