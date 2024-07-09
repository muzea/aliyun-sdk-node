export interface DeleteQualityRuleResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 删除是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。
     * @example `6d739ef6-098a-47****`
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
