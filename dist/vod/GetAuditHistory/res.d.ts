export interface GetAuditHistoryResponse {
    /**
     * 本次审核结果。表示当前人工审核的结果，取值范围：
     * - **Normal**：正常。
     * - **Blocked**：屏蔽。
     * @example `Normal`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `04F0F334-1335-43*****D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 审核历史记录总条数。
     * @example `2`
     */
    Total: number;
    /**
     * 审核历史记录列表。
     */
    Histories: {
        /**
         * 本次审核结果。取值范围：
         * - **Normal**（正常）
         * - **Blocked**（屏蔽）
         * @example `Blocked`
         */
        Status: string;
        /**
         * 记录创建的时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-01-11T12:00:00Z`
         */
        CreationTime: string;
        /**
         * 审核详情，审核员给出的具体评价。
         * @example `有露点镜头`
         */
        Comment: string;
        /**
         * 审核不通过理由。若审核结果为不通过，需给出不通过的理由。
         * @example `色情视频`
         */
        Reason: string;
        /**
         * 审核员。
         * @example `auditor`
         */
        Auditor: string;
    }[];
}
