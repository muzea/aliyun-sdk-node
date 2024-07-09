export interface SubmitOperationCredentialsRequest {
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
    "AuditRecordId"?: number;
    /**
     * 域名持有者类型。取值：
     * - **1**：个人。
     * - **2**：企业。
     * @example `1`
     */
    "RegType"?: number;
    /**
     * 审核类型。取值：
     * **1**：线下转移域名。
     * @example `1`
     */
    "AuditType"?: number;
    /**
     * 待审核的证件资料信息。
     * @example `[{"credentialType":"SHSQB",""credentialUrl":"11212121/1212d**​/sqb.jpg"},{"credentialType":"SFZZM",""credentialUrl":"11212121/1212d**​/sfzzm.jpg"}]`
     */
    "Credentials"?: string;
}
