export interface QueryOperationAuditInfoListRequest {
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 需要查询的域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 审核类型。取值：
     * **1**：线下转移域名。
     * @example `1`
     */
    "AuditType"?: number;
    /**
     * 审核状态。取值：
     * - **0**：待完善资料。
     * - **1**、**2**、**3**、**4**：审核中。
     * - **5**：审核失败。
     * - **6**：审核成功。
     * - **7**：取消审核。
     * @example `1`
     */
    "AuditStatus"?: number;
    /**
     * 每页记录数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `1`
     */
    "PageNum"?: number;
}
