export interface ListRulesResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的授权规则列表。
     */
    Rules: {
        /**
         * 授权规则的备注信息。
         * @example `comment`
         */
        Comment: string;
        /**
         * 授权规则有效期结束时间（秒，时间戳格式）。
         * @example `1709258400`
         */
        EffectiveEndTime: number;
        /**
         * 授权规则有效期开始时间（秒，时间戳格式）。
         * @example `1685499134`
         */
        EffectiveStartTime: number;
        /**
         * 授权规则ID。
         * @example `13`
         */
        RuleId: string;
        /**
         * 授权规则名称。
         * @example `rule`
         */
        RuleName: string;
        /**
         * 授权规则状态。
         * - **Enabled**：正常
         * - **Disabled**：已禁用
         * @example `Enabled`
         */
        RuleState: string;
    }[];
    /**
     * 查询到的授权规则总数量。
     * @example `1`
     */
    TotalCount: number;
}
