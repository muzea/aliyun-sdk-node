export interface CreateGroupMonitoringAgentProcessResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `718FEA81-64C3-4F23-8F90-0531F7489FC1`
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
     * 组进程信息。
     */
    Resource: {
        /**
         * 组进程ID。
         * @example `7F2B0024-4F21-48B9-A764-211CEC48****`
         */
        GroupProcessId: string;
    };
}
