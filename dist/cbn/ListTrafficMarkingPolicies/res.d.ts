export interface ListTrafficMarkingPoliciesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `699989E4-64A0-5F78-8B93-CDB32D98971F`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 流量标记策略列表。
     */
    TrafficMarkingPolicies: {
        /**
         * 流量标记策略的状态。
         * - **Creating**：创建中。
         * - **Active**：可用。
         * - **Modifying**：修改中。
         * - **Deleting**：删除中。
         * @example `Creating`
         */
        TrafficMarkingPolicyStatus: string;
        /**
         * 流量标记策略ID。
         * @example `tm-iz5egnyitxiroq****`
         */
        TrafficMarkingPolicyId: string;
        /**
         * 流量标记策略的DSCP值。
         * @example `5`
         */
        MarkingDscp: number;
        /**
         * 流量标记策略的名称。
         * @example `nametest`
         */
        TrafficMarkingPolicyName: string;
        /**
         * 流量标记策略的优先级。
         * 数字越小，优先级越高。
         * @example `5`
         */
        Priority: number;
        /**
         * 流量标记策略的描述信息。
         * @example `desctest`
         */
        TrafficMarkingPolicyDescription: string;
        /**
         * 流分类规则列表。
         */
        TrafficMatchRules: {
            /**
             * 流量报文的DSCP值。
             * >如果**MatchDscp**返回值为-1则表示匹配任意的DSCP值。
             * @example `6`
             */
            MatchDscp: number;
            /**
             * 流量报文的目标网段。
             * @example `192.168.120.0/24`
             */
            DstCidr: string;
            /**
             * 流分类规则的描述信息。
             * @example `desctest`
             */
            TrafficMatchRuleDescription: string;
            /**
             * 流量报文的协议类型。
             * > 流量标记策略支持匹配多种协议类型，各个协议类型详情请自行查阅文档。
             * @example `HTTP`
             */
            Protocol: string;
            /**
             * 流分类规则ID。
             * @example `tm-rule-fa9kgq1e90rmhc****`
             */
            TrafficMatchRuleId: string;
            /**
             * 流量报文的源网段。
             * @example `192.168.10.0/24`
             */
            SrcCidr: string;
            /**
             * 流分类规则的名称。
             * @example `nametest`
             */
            TrafficMatchRuleName: string;
            /**
             * 流分类规则的状态。
             * - **Creating**：创建中。
             * - **Active**：可用。
             * - **Deleting**：删除中。
             * @example `Creating`
             */
            TrafficMatchRuleStatus: string;
            /**
             * 流分类规则待匹配的目的端口范围。
             */
            DstPortRange: number[];
            /**
             * 流分类规则待匹配的源端口范围。
             */
            SrcPortRange: number[];
        }[];
        /**
         * 转发路由器实例ID。
         * @example `tr-ccni***`
         */
        TransitRouterId: string;
    }[];
}
