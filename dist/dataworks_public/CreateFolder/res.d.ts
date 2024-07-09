export interface CreateFolderResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 新建文件夹的唯一标识符。
     * @example `bdfd68****`
     */
    Data: string;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `0000-ABCD-EFG`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
}
