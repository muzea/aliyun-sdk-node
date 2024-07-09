export interface RemindQuotaApplicationApprovalResponse {
    /**
     * 请求ID。
     * @example `D47B3A10-CDAC-5412-B2EE-EC9A3DBE9053`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误码。
     * @example `PARAMETER.ILLEGALL`
     */
    DynamicCode: string;
    /**
     * 动态错误信息。
     * @example `Parameter[%s] is required.`
     */
    DynamicMessage: string;
    /**
     * 错误信息。
     * @example `You are not authorized to do this action or the API input parameter is invalid.`
     */
    ErrorMsg: string;
    /**
     * 错误码。
     * @example `RAM.PERMISSION.DENIED
    `
     */
    ErrorCode: string;
    /**
     * 是否调用成功。取值：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回对象，配额申请单ID。
     * @example `219f1ff6-6205-495f-bda7-90d2fe945e****`
     */
    Module: string;
    /**
     * 是否允许重试。取值：
     * - false：不允许重试。
     * - true：允许重试。
     * @example `false`
     */
    AllowRetry: boolean;
    /**
     * 错误的参数组。
     */
    ErrorArgs: any[];
}
