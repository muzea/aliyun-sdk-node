export interface QueryOperationAuditInfoListResponse {
    /**
     * 是否有上一页。
     * @example `true`
     */
    PrePage: boolean;
    /**
     * 当前页码。
     * @example `2`
     */
    CurrentPageNum: number;
    /**
     * 请求ID。
     * @example `9DFCF6F8-243C-40EC-8035-4B12FEFD7D48`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `20`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `10`
     */
    TotalPageNum: number;
    /**
     * 审核数据。
     */
    Data: {
        /**
         * 记录更新时间。
         * @example `1581919010101`
         */
        UpdateTime: number;
        /**
         * 审核备注。
         * @example `审核中`
         */
        Remark: string;
        /**
         * 记录创建时间。
         * @example `1581919010101`
         */
        CreateTime: number;
        /**
         * 审核类型。取值：
         * **1**：线下转移域名。
         * @example `1`
         */
        AuditType: number;
        /**
         * 审核业务的名称。
         * @example `example.com等域名线下转移`
         */
        BusinessName: string;
        /**
         * 待审核信息。
         * @example `{"regType":1,"registrantName":"张三","telephone":"1390123****","account":"username@example.com","reason":1,"remark":"账号丢失"}`
         */
        AuditInfo: string;
        /**
         * 域名。
         * @example `example.com,aliyundoc.com`
         */
        DomainName: string;
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
         * 审核记录ID。
         * @example `1`
         */
        Id: number;
    }[];
    /**
     * 总记录数。
     * @example `199`
     */
    TotalItemNum: number;
    /**
     * 是否有下一页。
     * @example `true`
     */
    NextPage: boolean;
}
