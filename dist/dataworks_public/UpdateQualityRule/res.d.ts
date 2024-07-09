export interface UpdateQualityRuleResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 校验规则是否更新成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `You have no permission.`
     */
    ErrorMessage: string;
    /**
     * 请求ID。用于出现错误后排查问题。
     * @example `576b9457-2cf5-4****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
