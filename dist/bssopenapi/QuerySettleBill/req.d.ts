export interface QuerySettleBillRequest {
    /**
     * 账期，YYYY-MM。
     * @example `2018-07`
     */
    "BillingCycle": string;
    /**
     * 类型。取值：
     * - SubscriptionOrder 预付费订单
     * - PayAsYouGoBill 后付费账单
     * - Refund 退款账单
     * - Adjustment 调账账单
     * @example `SubscriptionOrder`
     */
    "Type"?: string;
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
     * - Subscription 预付费
     * - PayAsYouGo 后付费
     * >  必须和ProductCode参数一起使用。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 根据原价（PretaxGrossAmount）是否为0做过滤，默认为否（兼容现有逻辑）。
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "IsHideZeroCharge"?: boolean;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * @example `CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U`
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。默认值：20，最大值：300。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 资源归属账号的ID，资源归属账号是实际使用资源的账号。
     * @example `123`
     */
    "BillOwnerId"?: number;
    /**
     * 订单号、账单号。
     * @example `12233`
     */
    "RecordID"?: string;
}
