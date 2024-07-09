export interface ModifyConsumerGroupPasswordResponse {
    /**
     * 请求ID。
     * @example `A06B5CFF-9576-4BC1-BE62-A3D43E1F****`
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
