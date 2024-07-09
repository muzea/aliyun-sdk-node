export interface ListSilencePoliciesResponse {
    /**
     * 请求ID。
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
     */
    RequestId: string;
    /**
     * 分页对象。
     */
    PageBean: {
        /**
         * 查询到的静默策略总数。
         * @example `1`
         */
        Total: number;
        /**
         * 查询到的页数。
         * @example `1`
         */
        Page: number;
        /**
         * 每页展示数目。
         * @example `20`
         */
        Size: number;
        /**
         * 静默策略列表。
         */
        SilencePolicies: {
            /**
             * 静默策略ID。
             * @example `123`
             */
            Id: number;
            /**
             * 静默策略名称。
             * @example `silencepolicy_test`
             */
            Name: string;
            /**
             * 分派规则列表。
             */
            MatchingRules: {
                /**
                 * 分派规则条件。
                 */
                MatchingConditions: {
                    /**
                     * 分派规则条件Key。
                     * @example `altertname`
                     */
                    Key: string;
                    /**
                     * 分派规则条件Value。
                     * @example `test`
                     */
                    Value: string;
                    /**
                     * 分派规则条件聚合方式。
                     * - `eq`：等于
                     * - `neq`：不等于
                     * - `in`：包含
                     * - `nin`：不包含
                     * - `re`：匹配正则
                     * - `nre`：正则不匹配
                     * @example `eq`
                     */
                    Operator: string;
                }[];
            }[];
            /**
             * 静默策略是否启用，enable 启用，disable 停用
             * @example `enable`
             */
            State: string;
        }[];
    };
}
