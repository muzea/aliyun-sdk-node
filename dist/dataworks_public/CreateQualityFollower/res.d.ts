export interface CreateQualityFollowerResponse {
    /**
     * HTTP错误码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 新创建的订阅关系ID。
     * @example `12345`
     */
    Data: number;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `ecb967ec-c137-48****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
