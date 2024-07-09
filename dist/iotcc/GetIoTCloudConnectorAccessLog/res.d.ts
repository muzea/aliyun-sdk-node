export interface GetIoTCloudConnectorAccessLogResponse {
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 访问日志投递的日志项目。
     * @example `sls-setter`
     */
    AccessLogSlsProject: string;
    /**
     * 访问日志投递的日志库。
     * @example `test`
     */
    AccessLogSlsLogStore: string;
    /**
     * 访问日志的状态，取值：
     * - **Opening**：开启中。
     * - **Opened**：已开启。
     * - **Closed**：已关闭。
     * - **Closing**：关闭中。
     * @example `Opened`
     */
    AccessLogStatus: string;
}
