export interface ValidateInstanceResponse {
    /**
     * 返回参数。
     * @example `true`
     */
    result: boolean;
    /**
     * 错误码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `90D6B8F5-FE97-4509-9AAB-367836C51818`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `success`
     */
    message: string;
}
