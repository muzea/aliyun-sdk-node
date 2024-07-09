export interface QueryInstanceBillRequest {
    /**
     * 账期YYYY－MM。仅支持最近18个月账期。
     * @example `2020-03`
     */
    "BillingCycle": string;
    /**
     * 产品代码。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品类型。当ProductCode为云市场产品code时，此参数必填。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * >必须和**ProductCode**参数一起使用。
     * @example `PayAsYouGo`
     */
    "SubscriptionType"?: string;
    /**
     * 是否按照计费项维度拉取数据。
     * - false。与“费用中心-费用账单-账单明细-实例”账单一致。
     * - true。与“费用中心-费用账单-账单明细-计费项”账单一致。
     * 默认 false。
     * @example `false`
     */
    "IsBillingItem"?: boolean;
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页数量，默认值：20，最大值：300。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 根据原价（**PretaxGrossAmount**）和应付（**PretaxAmount**）是否都为0做过滤。取值：
     * - false。
     * - true。
     * @example `false`
     */
    "IsHideZeroCharge"?: boolean;
    /**
     * 账单日期，仅当**Granularity**为DAILY时必填，格式为YYYY-MM-DD。
     * @example `2020-03-03`
     */
    "BillingDate"?: string;
    /**
     * 查询账单的颗粒度。取值：
     * - MONTHLY：月。与“费用中心-费用账单-账单明细-账期”账单一致。
     * - DAILY：日。与“费用中心-费用账单-账单明细-按天”账单一致。
     * 选择DAILY需指定**BillingDate**。
     * @example `MONTHLY`
     */
    "Granularity"?: string;
    /**
     * 资源归属账号ID，资源归属账号是实际使用资源的账号。
     * @example `122`
     */
    "BillOwnerId"?: number;
}
