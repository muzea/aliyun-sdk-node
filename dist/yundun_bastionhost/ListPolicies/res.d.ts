export interface ListPoliciesResponse {
    /**
     * 控制策略列表。
     */
    Policies: {
        /**
         * 控制策略备注。
         * @example `备注`
         */
        Comment: string;
        /**
         * 控制策略ID。
         * @example `2`
         */
        PolicyId: string;
        /**
         * 控制策略名称。
         * @example `test`
         */
        PolicyName: string;
        /**
         * 控制策略的优先级，数字越小优先级越高。
         * @example `1`
         */
        Priority: number;
    }[];
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的控制策略总数量。
     * @example `10`
     */
    TotalCount: number;
}
