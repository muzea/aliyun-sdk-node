export interface CreateMetaCollectionResponse {
    /**
     * Id of the request
     * @example `E6F0DBDD-5AD****`
     */
    RequestId: string;
    /**
     * 集合的唯一标识
     * @example `album.11111`
     */
    QualifiedName: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: string;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * HTTP错误码。
     * @example `200`
     */
    HttpStatusCode: string;
}
