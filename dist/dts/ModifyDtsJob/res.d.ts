export interface ModifyDtsJobResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `1D6ECADF-C5E9-4C96-8811-77602B31****`
     */
    RequestId: string;
    /**
     * DTS任务ID。
     * @example `bi6e22a****`
     */
    DtsJobId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用出错时返回的错误信息。
     * > 该参数的数据类型应为String，实际示例值为**The request processing has failed due to some unknown error**.
     * @example `true`
     */
    ErrMessage: boolean;
}
