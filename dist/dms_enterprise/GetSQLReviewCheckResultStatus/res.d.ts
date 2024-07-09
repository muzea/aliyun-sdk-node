export interface GetSQLReviewCheckResultStatusResponse {
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
     * SQL审核结果。
     */
    CheckResultStatus: {
        /**
         * 总SQL数量，单位：条。
         * @example `10`
         */
        TotalSQLCount: number;
        /**
         * 已审核SQL数量，单位：条。
         * @example `10`
         */
        CheckedCount: number;
        /**
         * 检测状态。
         */
        CheckStatusResult: {
            /**
             * 等待审核的SQL数量，单位：条。
             * @example `0`
             */
            New: number;
            /**
             * 解析异常的SQL数量，单位：条。
             * @example `0`
             */
            Unknown: number;
            /**
             * 检测不通过的SQL数量，单位：条。
             * @example `1`
             */
            CheckNotPass: number;
            /**
             * 检测通过的SQL数量，单位：条。
             * @example `8`
             */
            CheckPass: number;
            /**
             * 人工通过的SQL数量，单位：条。
             * @example `1`
             */
            ForcePass: number;
            /**
             * 人工不通过的SQL数量，单位：条。
             * @example `0`
             */
            ForceNotPass: number;
        };
        /**
         * SQL审核优化建议。
         */
        SQLReviewResult: {
            /**
             * 必须改进的SQL数量，单位：条。
             * @example `1`
             */
            MustImprove: number;
            /**
             * 潜在问题的SQL数量，单位：条。
             * @example `0`
             */
            PotentialIssue: number;
            /**
             * 建议改进的SQL数量，单位：条。
             * @example `3`
             */
            SuggestImprove: number;
            /**
             * 推荐使用无锁结构变更的SQL数量，单位：条。
             * @example `0`
             */
            UseDmsToolkit: number;
            /**
             * 推荐使用无锁数据变更的SQL数量，单位：条。
             * @example `0`
             */
            UseDmsDmlUnlock: number;
            /**
             * 索引推荐的SQL数量，单位：条。
             * @example `2`
             */
            TableIndexSuggest: number;
        };
    };
}
