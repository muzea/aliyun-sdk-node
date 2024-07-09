export interface CreateSubscriptionInstanceResponse {
    /**
     * 请求ID。
     * @example `4E9564C5-F99D-4176-A6BA-2D7F2DC8****`
     */
    RequestId: string;
    /**
     * 数据订阅实例ID。
     * @example `dtsfen11q2g23x****`
     */
    SubscriptionInstanceId: string;
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
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
