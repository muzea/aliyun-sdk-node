export interface ModifyScheduledScalingRuleResponse {
    /**
     * Id of the request
     * @example `DB6F1BEA-903B-4FD8-8809-46E7E9CE***`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回码。
     * 返回 **200** 为成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `operation success.`
     */
    Message: string;
}
