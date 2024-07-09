export interface ListDefaultSLARulesResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `3E8AF4C3-A822-53A8-970C-059EE83BBD5A`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    SLARuleList: {
        /**
         * SLA规则列表。
         */
        SLARule: {
            /**
             * SLA规则ID。
             * @example `1`
             */
            Id: number;
            /**
             * 任务流ID。
             * @example `0`
             */
            DagId: number;
            /**
             * 任务流节点ID。
             * @example `0`
             */
            NodeId: number;
            /**
             * 规则类型：
             * - **0**：任务流SLA规则。
             * - **1**：任务节点SLA规则。
             * @example `0`
             */
            RuleType: number;
            /**
             * 超时时间(单位: 分钟)。
             * @example `1080`
             */
            IntervalMinutes: number;
        }[];
    };
}
