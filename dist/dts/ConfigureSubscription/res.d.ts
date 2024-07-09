export interface ConfigureSubscriptionResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `1D6ECADF-C5E9-4C96-8811-77602B31****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 订阅任务ID。
     * @example `y0zz3t13h7d****`
     */
    DtsJobId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 订阅实例ID。
     * @example `dtsy0zz3t13h7d****`
     */
    DtsInstanceId: string;
    /**
     * 调用出错时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
}
