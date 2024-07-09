export interface CheckMetaPartitionResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * MaxCompute表的分区是否存在。
     * - true：存在。
     * - false：不存在。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `0bc1ec92159376`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
