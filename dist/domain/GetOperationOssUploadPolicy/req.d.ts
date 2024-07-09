export interface GetOperationOssUploadPolicyRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 审核类型。取值：
     * **1**：线下转移域名。
     * @example `1`
     */
    "AuditType": number;
}
