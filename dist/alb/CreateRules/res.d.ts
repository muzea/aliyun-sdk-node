export interface CreateRulesResponse {
    /**
     * 异步任务ID。
     * @example `72dcd26b-f12d-4c27-b3af-18f6aed5****`
     */
    JobId: string;
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    /**
     * 转发规则列表。
     */
    RuleIds: {
        /**
         * 转发规则ID。
         * @example `rule-a3x3pg1yohq3lq****`
         */
        RuleId: string;
        /**
         * 转发规则优先级，取值范围：**1~10000**。值越小表示优先级越高。
         * > 同一个监听内规则优先级必须唯一。
         * @example `10`
         */
        Priority: number;
    }[];
}
