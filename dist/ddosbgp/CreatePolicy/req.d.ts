export interface CreatePolicyRequest {
    /**
     * 策略名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 策略类型。取值：
     * - **l3**：表示IP防护策略。
     * - **l4**：表示端口防护策略。
     * @example `l3`
     */
    "Type": string;
}
