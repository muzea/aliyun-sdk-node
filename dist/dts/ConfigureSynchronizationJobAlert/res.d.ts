export interface ConfigureSynchronizationJobAlertResponse {
    /**
     * 请求ID。
     * @example `8EEE7858-7D41-4EDF-9435-AEED2A34****`
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
     * 调用出错时返回的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
