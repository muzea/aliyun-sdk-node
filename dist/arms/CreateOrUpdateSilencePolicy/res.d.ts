export interface CreateOrUpdateSilencePolicyResponse {
    /**
     * 请求ID。
     * @example `A5EC8221-08F2-4C95-9AF1-49FD998C****`
     */
    RequestId: string;
    /**
     * 静默策略对象。
     */
    SilencePolicy: {
        /**
         * 静默策略ID。
         * @example `1234`
         */
        Id: number;
        /**
         * 静默策略名称。
         * @example `silencepolicy_test`
         */
        Name: string;
        /**
         * 分派规则。
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
    };
}
