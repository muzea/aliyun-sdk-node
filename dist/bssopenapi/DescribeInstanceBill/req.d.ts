export interface DescribeInstanceBillRequest {
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
     * 产品类型。
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `PayAsYouGo`
     */
    "SubscriptionType"?: string;
    /**
     * 是否按照计费项维度拉取数据。
     * - false。与费用中心-费用账单-账单明细-实例账单一致。
     * - true。与费用中心-费用账单-账单明细-计费项账单一致。
     * >默认 false。
     * @example `false`
     */
    "IsBillingItem"?: boolean;
    /**
     * 用来表示当前调用开始读取的位置，参数值必须为空或者使用返回结果中的NextToken设值，否则会报错。空代表从头开始读取。
     * @example `CAESEgoQCg4KCm`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。默认值：20，最大值：300。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 根据原价（PretaxGrossAmount）和应付（PretaxAmount）是否都为0做过滤。取值：
     * - false。
     * - true。
     * @example `false`
     */
    "IsHideZeroCharge"?: boolean;
    /**
     * 账单日期，仅当Granularity为DAILY时必填，格式为YYYY-MM-DD。
     * @example `2020-03-02`
     */
    "BillingDate"?: string;
    /**
     * 查询账单的颗粒度。取值如下：
     * - MONTHLY：月。与费用中心-费用账单-账单明细-账期账单一致。
     * - DAILY：日。与费用中心-费用账单-账单明细-按天账单一致。
     * > 选择DAILY需指定BillingDate。
     * @example `MONTHLY`
     */
    "Granularity"?: string;
    /**
     * 资源归属账号ID，资源归属账号是实际使用资源的账号。
     * @example `122`
     */
    "BillOwnerId"?: number;
    /**
     * 实例ID。
     * @example `abc`
     */
    "InstanceID"?: string;
    /**
     * 产品Code，与费用中心账单产品Code一致。
     * @example `rds`
     */
    "PipCode"?: string;
}
