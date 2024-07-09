export interface DeleteForwardingRulesResponse {
    /**
     * 转发策略信息。
     */
    ForwardingRules: {
        /**
         * 转发策略ID。
         * @example `frule-bp19a3t3yzr21q3****`
         */
        ForwardingRuleId: string;
    }[];
    /**
     * 请求ID。
     * @example `CFC67ED9-4AB1-431F-B6E3-A752B7B8CCD4`
     */
    RequestId: string;
}
