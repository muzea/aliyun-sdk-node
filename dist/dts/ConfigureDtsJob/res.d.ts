export interface ConfigureDtsJobResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `224DB9F7-3100-4899-AB9C-C938BCCB****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 迁移或同步任务ID。
     * @example `k2gm967v16f****`
     */
    DtsJobId: string;
    /**
     * 迁移或同步实例ID。
     * @example `dtsk2gm967v16f****`
     */
    DtsInstanceId: string;
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
