export interface CreateRulesResponse {
    /**
     * 请求ID。
     * @example `9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C`
     */
    RequestId: string;
    Rules: {
        /**
         * 转发规则列表。
         */
        Rule: {
            /**
             * 转发规则名称。
             * @example `Rule2`
             */
            RuleName: string;
            /**
             * 转发规则ID。
             * @example `rule-bp12jzy0*****`
             */
            RuleId: string;
        }[];
    };
}
