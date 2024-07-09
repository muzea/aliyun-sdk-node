export interface CreateQualityEntityResponse {
    /**
     * HTTP请求错误码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 新创建的分区表达式ID。
     * @example `12345`
     */
    Data: number;
    /**
     * 错误信息。
     * @example `Your project is not relative with your account.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `011e1231u3****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `401`
     */
    ErrorCode: string;
}
