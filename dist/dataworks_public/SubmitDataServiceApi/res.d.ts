export interface SubmitDataServiceApiResponse {
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 提交是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
