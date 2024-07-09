export interface CreateScheduledScalingRuleResponse {
    /**
     * Id of the request
     * @example `DB6F1BEA-903B-4FD8-8809-46E7E9CE***`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
}
