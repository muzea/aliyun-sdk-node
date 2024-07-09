export interface DescribeProductAmortizedCostByConsumePeriodRequest {
    /**
     * 账期月
     * 格式：YYYY－MM。
     * @example `2022-10
    `
     */
    "BillingCycle": string;
    /**
     * 摊销月筛选条件。
     * 最多元素个数：10。
     */
    "AmortizationPeriodFilter"?: string[];
    /**
     * 订阅类型。取值：
     * - Subscription：预付费。
     * - PayAsYouGo：后付费。
     * @example `Subscription`
     */
    "SubscriptionType"?: string;
    /**
     * 产品。
     * 参考取值来源：
     * 查QueryProductList 查询产品信息，
     * 查DescribeResourcePackageProduct 查询某个资源包产品的信息。
     * @example `rds`
     */
    "ProductCode"?: string;
    /**
     * 产品明细。
     * @example `rds`
     */
    "ProductDetail"?: string;
    /**
     * 财务单元code。
     * @example `123#
    `
     */
    "CostUnitCode"?: string;
    /**
     * 账单购买者ID筛选条件。
     * 子账号ID。设置可查看财务云子账号账单，不填默认查看当前调用账号及其所有子账号。
     * 最多元素个数：10。
     */
    "BillUserIdList"?: string[];
    /**
     * 账单拥有者ID筛选条件。
     * 子账号ID。设置可查看财务云子账号账单，不填默认查看当前调用账号及其所有子账号。
     * 最多元素个数：10。
     */
    "BillOwnerIdList"?: string[];
    /**
     * 用来表示当前调用开始读取的位置，参数值必须为空或者使用返回结果中的NextToken设值，否则会报错。空代表从头开始读取。
     * @example `CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
    `
     */
    "NextToken"?: string;
    /**
     * 本次读取的最大数据记录数量。默认值：20，最大值：300。
     * @example `20`
     */
    "MaxResults"?: number;
}
