export interface ListSLARulesResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `3D1A59F4-EB2B-5D24-80A5-90C446A00DE2`
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
     * - **true**：请求成功。
     * - **false**：请求失败。
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
             * @example `2`
             */
            Id: number;
            /**
             * 任务流ID。
             * @example `11****`
             */
            DagId: number;
            /**
             * 任务流节点ID。
             * @example `1`
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
             * 超时时间（单位：分钟）。
             * @example `1080`
             */
            IntervalMinutes: number;
        }[];
    };
}
