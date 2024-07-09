export interface ListDispatchRuleResponse {
    /**
     * 请求ID。
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****	`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    DispatchRules: {
        /**
         * 通知策略的名称。
         * @example `Prod`
         */
        Name: string;
        /**
         * 通知策略的启用状态。
         * - `true`：启用。
         * - `false`：关闭。
         * @example `true`
         */
        State: string;
        /**
         * 通知策略ID。
         * @example `10282`
         */
        RuleId: number;
    }[];
}
