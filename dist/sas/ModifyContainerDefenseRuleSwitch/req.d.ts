export interface ModifyContainerDefenseRuleSwitchRequest {
    /**
     * 需要修改的规则的ID列表。
     */
    "RuleIds"?: number[];
    /**
     * 规则的开关状态。取值：
     * - **1**：表示开启。
     * - **0**：表示关闭。
     * @example `0`
     */
    "RuleSwitch"?: number;
}
