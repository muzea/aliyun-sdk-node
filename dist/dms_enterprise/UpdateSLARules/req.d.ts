export interface UpdateSLARulesRequest {
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `11****`
     */
    "DagId": number;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * SLA规则列表。
     */
    "SlaRuleList"?: {
        /**
         * 任务流ID。
         * @example `15***`
         */
        DagId: number;
        /**
         * 任务节点ID。
         * @example `0`
         */
        NodeId: number;
        /**
         * 规则类型：
         * - **0**：任务流SLA规则。
         * - **1**：任务节点SLA规则。
         * @example `0`
         */
        Type: number;
        /**
         * 超时时间（单位：分钟）。
         * @example `1080`
         */
        IntervalMinutes: number;
    }[];
}
