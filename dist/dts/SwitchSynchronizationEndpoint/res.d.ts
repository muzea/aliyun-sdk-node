export interface SwitchSynchronizationEndpointResponse {
    /**
     * 请求ID。
     * @example `3232F84C-C961-4811-B014-4EA7A27C****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 任务ID，您可以根据此返回值调用[DescribeEndpointSwitchStatus](~~135598~~)接口查询该任务的执行状态。
     * @example `11****	`
     */
    TaskId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
