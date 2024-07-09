export interface UpdateDataServiceApiResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 更新API是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
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
