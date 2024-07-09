export interface CancelWaitingAsyncJobResponse {
    /**
     * 请求ID。
     * @example `43A0AEB6-45F4-4138-8E89-E1A5D63200E3`
     */
    RequestId: string;
    /**
     * 返回结果信息。
     * @example `Cancel job success`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 异步任务错误码。
     * @example `InvalidParameter`
     */
    HttpCode: string;
}
