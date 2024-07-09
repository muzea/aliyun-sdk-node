export interface CreateMonitoringAgentProcessResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误消息。
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0DFCB47D-E7E1-4CBE-A381-8339F7B300EF`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 进程ID。
     * @example `12345`
     */
    Id: number;
}
