export interface QueryAccountBillRequest {
    /**
     * 账单日期，YYYY-MM。
     * @example `2018-07`
     */
    "BillingCycle": string;
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页数量，默认值20，最大值：300。
     * @example `20`
     */
    "PageSize"?: number;
    "OwnerID"?: number;
    /**
     * 是否增加产品Code汇总。
     * - true。
     * - false。
     * 默认false。
     * @example `false`
     */
    "IsGroupByProduct"?: boolean;
    /**
     * 产品code。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 资源归属账号ID，资源归属账号是实际使用资源的账号。
     * @example `122`
     */
    "BillOwnerId"?: number;
    /**
     * 查询账单的颗粒度。取值：
     * - MONTHLY：月。与费用中心-费用账单-账单明细-账期账单一致。
     * - DAILY：日。与费用中心-费用账单-账单明细-按天账单一致。
     * > 选择DAILY需指定BillingDate。
     * @example `MONTHLY`
     */
    "Granularity"?: string;
    /**
     * 账单日期，仅当Granularity为DAILY时必填，格式为YYYY-MM-DD。
     * @example `2021-06-01`
     */
    "BillingDate"?: string;
}
