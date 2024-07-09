export interface ListProjectFullVerifyResultResponse {
    /**
     * 是否调用成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误详情。
     */
    ErrorDetail: {
        /**
         * 错误码（新）。
         * @example `CM-RESOAT1111
        `
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `ERROR`
         */
        Level: string;
        /**
         * 错误描述（新）。
         * @example `A system error occurred.`
         */
        Message: string;
        /**
         * 用于填充 Message 中的占位符。
         */
        ExtraContext: any;
        /**
         * 错误信息的 Key。
         * @example `null`
         */
        MessageMcmsKey: string;
        /**
         * 用于填充 MessageMcmsKey 中的占位符。
         */
        MessageMcmsContext: any;
        /**
         * 错误原因。
         * @example `null`
         */
        Reason: string;
        /**
         * 错误原因的 Key。
         * @example `null`
         */
        ReasonMcmsKey: string;
        /**
         * 错误原因的上下文。
         */
        ReasonMcmsContext: any;
        /**
         * 建议（新）。
         * @example `null`
         */
        Proposal: string;
        /**
         * 建议内容的 Key。
         * @example `null`
         */
        ProposalMcmsKey: string;
        /**
         * 建议内容的上下文。
         */
        ProposalMcmsContext: any;
        /**
         * 上游错误详情，用于处理 HTTP 请求。
         * @example `null`
         */
        UpstreamErrorDetail: any;
    };
    /**
     * 错误码（旧）。
     * @example `INNER_ERROR`
     */
    Code: string;
    /**
     * 错误描述（旧）。
     * @example `A system error occurred.
    `
     */
    Message: string;
    /**
     * 建议（旧）。
     * @example `Contact the administrator.`
     */
    Advice: string;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数，分页查询时生效。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `1`
     */
    Cost: string;
    /**
     * 项目的全量校验结果相关信息。
     */
    Data: {
        /**
         * 不一致数据的总条数。
         * @example `11`
         */
        DifferentNumber: number;
        /**
         * 全量校验列表。
         */
        FullVerifyTableStatistics: {
            /**
             * 源端表的名称。
             * @example `source_table`
             */
            SourceTableName: string;
            /**
             * 源端数据库的名称。
             * @example `source_db`
             */
            SourceSchemaName: string;
            /**
             * 目标端数据库的名称。
             * @example `dest_db`
             */
            DestSchemaName: string;
            /**
             * 仅源端存在的数据条数。
             * @example `0`
             */
            SourceOnlyCount: number;
            /**
             * 仅目标端存在的数据条数。
             * @example `0`
             */
            DestOnlyCount: number;
            /**
             * 两端不一致数据的条数。
             * @example `0`
             */
            MismatchedCount: number;
            /**
             * 两端一致数据的条数。
             * @example `200`
             */
            ConsistentCount: number;
            /**
             * 全量校验的进度。
             * @example `80`
             */
            Progress: string;
            /**
             * 全量校验的相关信息。
             * @example `null`
             */
            Message: string;
            /**
             * 迁移的状态，包括 `RUNNING`、`ERROR`、`FINISHED` 和 `SUSPEND`。
             * @example `RUNNING`
             */
            Status: string;
            /**
             * 全量校验结果的类型，包括 RUNNING、SCHEMA_MISMATCH、INDEX_CONFLICT、TARGET_TABLE_NOT_EXIST、RUNTIME_EXCEPTION、BOTH_EMPTY、CONSISTENT、INCONSISTENT、SOURCE_EMPTY、TARGET_EMPTY、MISMATCH_LIMIT、MISMATCH_LIMIT_NO_PK 和 NOT_CATEGORIZED。
             * @example `RUNNING`
             */
            ResultType: string;
            /**
             * 全量校验结果类型的描述。
             * @example `desc`
             */
            ResultDesc: string;
            /**
             * 表失败的信息和原因集合。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111
                `
                 */
                Code: string;
                /**
                 * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
                 * @example `ERROR`
                 */
                Level: string;
                /**
                 * 错误描述（新）。
                 * @example `null`
                 */
                Message: string;
                /**
                 * 用于填充 Message 中的占位符。
                 */
                ExtraContext: any;
                /**
                 * 错误信息的 Key。
                 * @example `null`
                 */
                MessageMcmsKey: string;
                /**
                 * 用于填充 MessageMcmsKey 中的占位符。
                 */
                MessageMcmsContext: any;
                /**
                 * 错误原因。
                 * @example `null`
                 */
                Reason: string;
                /**
                 * 错误原因的 Key。
                 * @example `null`
                 */
                ReasonMcmsKey: string;
                /**
                 * 错误原因的上下文。
                 */
                ReasonMcmsContext: any;
                /**
                 * 建议（新）。
                 * @example `null`
                 */
                Proposal: string;
                /**
                 * 建议内容的 Key。
                 * @example `null`
                 */
                ProposalMcmsKey: string;
                /**
                 * 建议内容的上下文。
                 */
                ProposalMcmsContext: any;
                /**
                 * 上游错误详情，用于处理 HTTP 请求。
                 * @example `null`
                 */
                UpstreamErrorDetail: any;
            }[];
        }[];
    };
}
