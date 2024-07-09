export interface QueryOperationAuditInfoDetailResponse {
    /**
     * 审核信息。
     * @example `{"regType":1,"registrantName":"张三","telephone":"1390123****","account":"username@example.com","reason":1,"remark":"账号丢失"}`
     */
    AuditInfo: string;
    /**
     * 审核状态。取值：
     * - **0**：待完善资料。
     * - **1**、**2**、**3**、**4**：审核中。
     * - **5**：审核失败。
     * - **6**：审核成功。
     * - **7**：取消审核。
     * @example `1`
     */
    AuditStatus: number;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-40EC-8035-4B12FEFD7D1L`
     */
    RequestId: string;
    /**
     * 审核业务名称。
     * @example `example.com等域名线下转移`
     */
    BusinessName: string;
    /**
     * 审核类型。取值：
     * **1**：线下转移域名。
     * @example `1`
     */
    AuditType: number;
    /**
     * 域名。
     * @example `example.com,aliyundoc.com`
     */
    DomainName: string;
    /**
     * 记录创建时间。
     * @example `1581919010100`
     */
    CreateTime: number;
    /**
     * 记录更新时间。
     * @example `1581919010101`
     */
    UpdateTime: number;
    /**
     * 审核记录ID。
     * @example `1`
     */
    Id: string;
    /**
     * 审核备注。
     * @example `审核通过`
     */
    Remark: string;
}
