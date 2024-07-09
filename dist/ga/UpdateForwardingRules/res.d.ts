export interface UpdateForwardingRulesResponse {
    /**
     * 转发策略信息。
     */
    ForwardingRules: {
        /**
         * 转发策略ID。
         * @example `frule-bp1dii16gu9qdvb34****`
         */
        ForwardingRuleId: string;
    }[];
    /**
     * 请求ID。
     * @example `64ADAB1E-0B7F-4FD8-A404-3BECC0E9CCFF`
     */
    RequestId: string;
}
