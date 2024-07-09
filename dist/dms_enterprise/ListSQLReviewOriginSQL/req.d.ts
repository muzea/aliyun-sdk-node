export interface ListSQLReviewOriginSQLRequest {
    /**
     * SQL审核工单号。您可以调用[CreateSQLReviewOrder](~~257777~~)接口获取该参数。
     * @example `903****`
     */
    "OrderId": number;
    /**
     * 工单参数（过滤条件）。
     */
    "OrderActionDetail"?: {
        /**
         * 审核文件ID。
         * @example `85****`
         */
        FileId: number;
        /**
         * SQL审核优化建议。取值如下：
         * - **MUST_IMPROVE**：必须改进。
         * - **POTENTIAL_ISSUE**：潜在问题。
         * - **SUGGEST_IMPROVE**：建议改进。
         * - **USE_DMS_TOOLKIT**：使用无锁结构变更。
         * - **USE_DMS_DML_UNLOCK**：使用无锁数据变更。
         * - **TABLE_INDEX_SUGGEST**：索引推荐。
         * @example `MUST_IMPROVE`
         */
        SQLReviewResult: string;
        /**
         * 检测结果。取值及说明如下：
         * - **new**：等待分析。
         * - **unknown**：解析异常。
         * - **check_not_pass**：检测不通过。
         * - **check_pass**：检测通过。
         * - **force_pass**：人工通过。
         * - **force_not_pass**：人工不通过。
         * @example `check_not_pass`
         */
        CheckStatusResult: string;
        /**
         * 分页参数。
         */
        Page: {
            /**
             * 从第几页开始。
             * @example `1`
             */
            PageNumber: number;
            /**
             * 每页数据量。
             * @example `20`
             */
            PageSize: number;
        };
    };
    /**
     * 租户ID。您可以调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数。
     * @example `233***`
     */
    "Tid"?: number;
}
