export interface ModifyDcdnWafPolicyRequest {
    /**
     * 需要修改的防护策略ID，仅支持单个输入。
     * @example `1000001`
     */
    "PolicyId": number;
    /**
     * 修改后的防护策略名称。
     * >该参数与PolicyStatus至少传一个。
     * @example `policy_test`
     */
    "PolicyName"?: string;
    /**
     * 修改后的防护策略状态，取值：
     * - **on**：开启。
     * - **off**：关闭。
     * >该参数与PolicyName至少传一个。
     * @example `on`
     */
    "PolicyStatus"?: string;
}
