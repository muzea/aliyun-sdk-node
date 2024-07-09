export interface ListWorkerInstancesResponse {
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
         * @example `200
        `
         */
        Code: string;
        /**
         * 包括 FATAL、ERROR、WARNING 和 CRITICAL。
         * @example `FATAL`
         */
        Level: string;
        /**
         * 错误描述（新）。
         * @example `successful
        `
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
         * @example `null
        `
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
     * @example `200`
     */
    Code: string;
    /**
     * 错误描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 建议。
     * @example `null`
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
     * @example `237`
     */
    TotalCount: number;
    /**
     * 请求耗时，单位为秒。
     * @example `71`
     */
    Cost: string;
    /**
     * 传输实例的信息。
     */
    Data: {
        /**
         * 传输实例的 ID。
         * @example `g_i4katzv***`
         */
        Id: string;
        /**
         * 传输实例的规格。
         * @example `oms.g2m.small`
         */
        Spec: string;
        /**
         * 传输实例的名称。
         * @example `i4wa71k****`
         */
        Name: string;
        /**
         * 传输实例的状态。
         * @example `ONLINE`
         */
        Status: string;
        /**
         * 地域。
         * @example `null`
         */
        Region: string;
        /**
         * 项目的 ID。
         * @example `np_4kb18w****`
         */
        ProjectId: string;
        /**
         * 项目的名称。
         * @example `j_migration_cloud-kafkavpc-ob`
         */
        ProjectName: string;
        /**
         * 项目的类型。
         * @example `MIGRATION`
         */
        ProjectType: string;
        /**
         * 创建时间，以 UTC + 0 时区的时间格式展示。
         * @example `2023-07-14T20:49:53
        `
         */
        GmtCreate: string;
    }[];
}
