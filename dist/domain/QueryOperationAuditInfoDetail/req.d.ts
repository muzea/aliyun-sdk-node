export interface QueryOperationAuditInfoDetailRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 审核记录ID。
     * @example `1`
     */
    "AuditRecordId": number;
}
