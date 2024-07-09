export interface DescribeProjectProgressResponse {
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
     * 页大小，分页查询时生效
     * @example `1`
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
     * 项目进度的相关信息。
     */
    Data: {
        /**
         * 项目的 ID。
         * @example `np_fe****`
         */
        ProjectId: string;
        /**
         * 项目的状态，包括 INIT（未启动）、RUNNING（运行中）、SUSPEND（已暂停）、FAILED（已失败）、FINISHED（已完成）、RELEASING（释放中）、RELEASED（已释放）、DELETED（已删除）、RUNNING_MODIFYING（修改中）和 RUNNING_MERGING。
         * @example `RUNNING`
         */
        Status: string;
        /**
         * 告警保障等级，包括 HIGH（高保护状态）、MEDIUM（中保护状态）、LOW（低保护状态）和 IGNORE（无保护状态）。
         * @example `MEDIUM`
         */
        AlarmLevel: string;
        /**
         * 是否有正向增量同步。
         * @example `true`
         */
        EnableIncrSync: boolean;
        /**
         * 当当前项目运行所处的步骤（PRE_CHECK, TRANSFER_PRECHECK, PREPARE, STRUCT_TRANSFER, STRUCT_MIGRATION, INDEX_MIGRATION, INDEX_TRANSFER, STRUCT_SYNC, FULL_MIGRATION, FULL_TRANSFER, APP_SWITCH, TRANSFER_APP_SWITCH, REVERSE_INCR_SYNC, REVERSE_INCR_TRANSFER, FULL_VALIDATION, FULL_VERIFIER, INCR_LOG_PULL, TRANSFER_INCR_LOG_PULL, INCR_SYNC, INCR_TRANSFER, INCR_VERIFIER, SYNC_PREPARE, TRANSFER_PREPARE, SYNC_INCR_LOG_PULL, CONNECTOR_FULL_SYNC, CONNECTOR_INCR_SYNC）。
         * @example `PRE_CHECK`
         */
        CurrentStep: string;
        /**
         * 正向增量同步位点。当源端为 DB2 LUW、OceanBase、MySQL 或 Oracle 数据库时，格式均为 Unix timestamp，单位为秒。
         * @example `1689248064`
         */
        IncrSyncCheckpoint: number;
        /**
         * 是否有结构传输。
         * @example `true`
         */
        EnableStructTransfer: boolean;
        /**
         * 是否有全量数据传输。
         * @example `true`
         */
        EnableFullTransfer: boolean;
        /**
         * 结构传输进度的百分比，取值范围为 0~100。
         * @example `100`
         */
        StructTransferProgress: number;
        /**
         * 全量传输进度的百分比，取值范围为 0~100。
         * @example `100`
         */
        FullTransferProgress: number;
        /**
         * 是否有反向增量同步。
         * @example `true`
         */
        EnableReverseIncrTransfer: boolean;
        /**
         * 反向增量同步位点。格式为 Unix timestamp，单位为秒。
         * @example `1689248075`
         */
        ReverseIncrTransferCheckpoint: number;
    };
}
