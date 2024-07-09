export interface GetClusterRuleSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-xxx`
     */
    RequestId: string;
    /**
     * 集群规则概述信息。
     */
    ClusterRuleSummary: {
        /**
         * 集群拦截开关。取值：
         * - **0:** 关
         * - **1:** 开
         * @example `0`
         */
        InterceptionSwitch: number;
        /**
         * 关闭的规则数。
         * @example `1`
         */
        CloseRuleCount: number;
        /**
         * 集群拦截模式。
         * @example `0`
         */
        InterceptionType: number;
        /**
         * 配置的规则总数。
         * @example `10`
         */
        RuleCount: number;
        /**
         * 开启防护的规则数。
         * @example `1`
         */
        OpenRuleCount: number;
        /**
         * 建议规则数。
         * @example `1`
         */
        SuggestRuleCount: number;
        /**
         * 近7天拦截（或告警）数。
         * @example `10`
         */
        InterceptionCount7Day: number;
    };
}
