export interface StartSubscriptionInstanceResponse {
    /**
     * 请求ID。
     * @example `B083F9AB-BE9B-4716-8AD3-CFA04391****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 任务ID，该参数即将下线。
     * @example `11****`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
