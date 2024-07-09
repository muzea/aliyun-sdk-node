export interface GetInterceptionSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760E840`
     */
    RequestId: string;
    /**
     * 统计信息。
     */
    InterceptionSummary: {
        /**
         * 未防护的集群数。
         * @example `0`
         */
        CloseClusterCount: number;
        /**
         * 最近30天风险数。
         * @example `0`
         */
        RiskCount30Day: number;
        /**
         * 最近180天风险数。
         * @example `0`
         */
        RiskCount180Day: number;
        /**
         * 开启防护的集群数。
         * @example `0`
         */
        OpenClusterCount: number;
        /**
         * 最近24小时风险数。
         * @example `0`
         */
        RiskCountToday: number;
        /**
         * 关闭的规则数。
         * @example `0`
         */
        CloseRuleCount: number;
        /**
         * 规则总数。
         * @example `0`
         */
        RuleCount: number;
        /**
         * 总集群数。
         * @example `0`
         */
        ClusterCount: number;
        /**
         * 启用的规则数。
         * @example `0`
         */
        OpenRuleCount: number;
        /**
         * 指定集群的拦截记录总数。
         * @example `0`
         */
        InterceptionCountInDays: number;
    };
}
