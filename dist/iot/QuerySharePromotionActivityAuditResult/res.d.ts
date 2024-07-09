export interface QuerySharePromotionActivityAuditResultResponse {
    /**
     * 调用结果状态码：
     * - 调用成功，返回空值。
     * - 调用失败，返回错误码。详细信息，请参见下文**错误码**。
     * @example `iot.speech.InvalidIotInstanceId`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `Invalid instance ID.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功后，返回的审核结果数据。
     */
    Data: {
        /**
         * 审核结果。
         * - **1**：待审核。
         * - **2**：审核通过。
         * - **3**：审核拒绝。
         * @example `2`
         */
        AuditResult: number;
    };
}