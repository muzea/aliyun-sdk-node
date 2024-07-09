export interface DescribeEndpointSwitchStatusResponse {
    /**
     * 任务执行状态，返回为：
     * - **NotStarted**：未启动。
     * - **Initializing**：初始化中。
     * - **Switching**：切换中。
     * - **Failed**：执行失败。
     * - **Finished**：执行成功。
     * @example `Finished`
     */
    Status: string;
    /**
     * 本参数已下线。
     * @example `400`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `0DD6B201-604B-4CAB-B6A8-4B2953B5****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
