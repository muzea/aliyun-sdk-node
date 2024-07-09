export interface DescribeProjectStepsResponse {
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
         * @example `CM-RESOAT1111`
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
         * @example `Contact the administrator. `
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
     * @example `A system error occurred.`
     */
    Message: string;
    /**
     * 建议（旧）。
     * @example `Contact the administrator. `
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
     * @example `4`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `1`
     */
    Cost: string;
    /**
     * 项目步骤的相关信息。
     */
    Data: {
        /**
         * 步骤的运行顺序。
         * @example `1`
         */
        Order: number;
        /**
         * 步骤的名称。
         * @example `PRE_CHECK`
         */
        Name: string;
        /**
         * 步骤描述，包括预检查、结构迁移、结构同步、全量迁移、全量同步、全量校验、索引迁移、增量日志拉取、增量同步、增量校验和正向切换。
         * @example `预检查`
         */
        Description: string;
        /**
         * 步骤的运行状态，包括 INIT（初始化）、RUNNING（运行中）、FAILED（失败）、 FINISHED（已完成）、SUSPEND（已暂停）、MONITORING（持续监控状态，用于增量同步和增量校验的持续监控态）。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 补充信息。
         */
        ExtraInfo: {
            /**
             * 错误详情。
             */
            ErrorDetails: {
                /**
                 * 错误码（新）。
                 * @example `CM-RESOAT1111`
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
                 * 建议。
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
            /**
             * 错误码。
             * @example `INNER_ERROR`
             */
            ErrorCode: string;
            /**
             * 错误描述。
             * @example `The ResourceDirectoryId is invalid.`
             */
            ErrorMsg: string;
            /**
             * 错误的相关参数。
             */
            ErrorParam: any;
            /**
             * 错误时间。
             * @example `null`
             */
            FailedTime: string;
        };
        /**
         * 开始时间，以 UTC + 0 时区的时间格式展示。
         * @example `2020-05-22T17:04:18`
         */
        StartTime: string;
        /**
         * 结束时间，以 UTC + 0 时区的时间格式展示。
         * @example `2020-05-22T17:04:18`
         */
        FinishTime: string;
        /**
         * 步骤的运行进度。
         * @example `100`
         */
        Progress: number;
        /**
         * 各步骤的运行详情。具体包含的信息请参见《StepInfo 数据结构》。
         * @example `null`
         */
        StepInfo: any;
    }[];
}
