export interface AddMetaCollectionEntityResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `0000-ABCD-E****`
     */
    RequestId: string;
    /**
     * 操作结果：
     * - true: 成功
     * - false: 失败
     * @example `true`
     */
    Status: boolean;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The specified product does not exist.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `9999`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
