export interface GetSQLReviewOptimizeDetailResponse {
    /**
     * 请求ID。
     * @example `0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 审核详情。
     */
    OptimizeDetail: {
        /**
         * SQL审核优化建议详情信息的查询KEY。
         * @example `a57e54ec5433475ea3082d882fdb****`
         */
        QueryKey: string;
        /**
         * 数据库所属实例ID。
         * @example `123321`
         */
        InstanceId: number;
        /**
         * 数据库ID。
         * @example `111222`
         */
        DbId: number;
        /**
         * SQL类型，如DELETE、UPDATE、ALTER_TABLE等。
         * @example `UPDATE`
         */
        SqlType: string;
        /**
         * SQL质量。
         */
        QualityResult: {
            /**
             * 错误信息。
             * @example `syntax error`
             */
            ErrorMessage: string;
            /**
             * 规则审核结果。
             */
            Results: {
                /**
                 * 规则名。请参见[SQL审核优化建议](~~194114~~)。
                 * @example `SELECT_SUGGEST_ASSIGN_WHERE`
                 */
                RuleName: string;
                /**
                 * SQL审核优化反馈结果。返回值如下：
                 * - **MUST_IMPROVE**：必须改进。
                 * - **POTENTIAL_ISSUE**：潜在问题。
                 * - **SUGGEST_IMPROVE**：建议改进。
                 * - **USEDMSTOOLKIT**：使用无锁结构变更。
                 * - **USEDMSDML_UNLOCK**：使用无锁数据变更。
                 * - **TABLEINDEXSUGGEST**：索引推荐。
                 * @example `MUST_IMPROVE`
                 */
                Feedback: string;
                /**
                 * 管理员进行SQL审核规则自定义配置时填写的**备注**信息。详细操作，请参见[SQL审核优化建议](~~194114~~)。
                 * @example `xxx业务规定：查询必须带where条件`
                 */
                Comments: string;
                /**
                 * 审核信息列表。
                 */
                Messages: string[];
                /**
                 * 某些规则附带生成变更脚本。
                 */
                Scripts: {
                    /**
                     * 执行脚本的目的。当前支持AddIndex（增加索引）。
                     * @example `AddIndex`
                     */
                    OpType: string;
                    /**
                     * 脚本内容。
                     * @example `alter table xxx add index idx_xx(yyy);`
                     */
                    Content: string;
                    /**
                     * 表名。
                     * @example `xxx`
                     */
                    TableName: string;
                }[];
                /**
                 * SQL审核规则。返回值如下：
                 * - **REVIEW**：规范审核。
                 * - **OPTIMIZE**：优化建议。
                 * @example `REVIEW`
                 */
                RuleType: string;
            }[];
            /**
             * 是否遇到错误。返回值如下：
             * - **true**：存在错误。
             * - **false**：不存在错误。
             * @example `false`
             */
            OccurError: boolean;
        };
    };
}
