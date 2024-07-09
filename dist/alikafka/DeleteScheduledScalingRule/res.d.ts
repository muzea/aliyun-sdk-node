export interface DeleteScheduledScalingRuleResponse {
    /**
     * Id of the request
     * @example `ABA4A7FD-E10F-45C7-9774-A5236015****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回消息。
     * @example `operation success.`
     */
    Message: string;
}
