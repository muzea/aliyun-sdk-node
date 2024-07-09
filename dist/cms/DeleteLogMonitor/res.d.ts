export interface DeleteLogMonitorResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `metric not exist.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `42BFFC2B-5E4D-4FDE-BCC6-E91EE33C5967`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
