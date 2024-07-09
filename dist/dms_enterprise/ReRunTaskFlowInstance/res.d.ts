export interface ReRunTaskFlowInstanceResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `8CFF2295-8249-5287-B888-DBD4F0D76CB0`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
