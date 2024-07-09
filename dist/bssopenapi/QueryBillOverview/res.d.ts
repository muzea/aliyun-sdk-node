export interface QueryBillOverviewResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BCB1E1BC-05BF-4217-80EE-BF09A29407BA`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 账期，格式：YYYY-MM。
         * @example `2020-03`
         */
        BillingCycle: string;
        /**
         * 账号ID。
         * @example `185766xxxx`
         */
        AccountID: string;
        /**
         * 账号。
         * @example `test@test.aliyunid.com`
         */
        AccountName: string;
        Items: {
            /**
             * 账单详情。
             */
            Item: {
                /**
                 * 抹零优惠。
                 * @example `0`
                 */
                RoundDownDiscount: string;
                /**
                 * 账单类型，取值：
                 * - SubscriptionOrder。预付费账单
                 * - PayAsYouGoBill。后付费账单
                 * - Refund。退款
                 * - Adjustment。调账
                 * @example `PayAsYouGoBill`
                 */
                Item: string;
                /**
                 * 币种，取值：
                 * - CNY。
                 * - USD。
                 * - JPY。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 订阅类型，取值：
                 * - Subscription：预付费。
                 * - PayAsYouGo：后付费。
                 * @example `Subscription`
                 */
                SubscriptionType: string;
                /**
                 * 代金券抵扣。
                 * @example `0`
                 */
                DeductedByCashCoupons: number;
                /**
                 * 账单所属账号名称。
                 * @example `test@test.aliyunid.com`
                 */
                BillAccountName: string;
                /**
                 * 业务类型。
                 * @example `trusteeship`
                 */
                BizType: string;
                /**
                 * 优惠券抵扣。
                 * @example `0`
                 */
                DeductedByCoupons: number;
                /**
                 * 未结清金额或信用结算金额（普通用户的欠费， 或者信用客户信用额度消耗）。
                 * @example `0`
                 */
                OutstandingAmount: number;
                /**
                 * 产品Code，与费用中心账单产品Code一致
                 * @example `rds`
                 */
                PipCode: string;
                /**
                 * 应付金额。
                 * @example `100`
                 */
                PretaxAmount: number;
                /**
                 * 产品名称。
                 * @example `Nat网关`
                 */
                ProductName: string;
                /**
                 * 商品Code，与费用中心产品明细Code一致
                 * @example `rds`
                 */
                CommodityCode: string;
                /**
                 * 信用额度退款抵扣。
                 * @example `0`
                 */
                AdjustAmount: number;
                /**
                 * 产品明细。
                 * @example `NAT Gateway (Pay-As-You-Go)`
                 */
                ProductDetail: string;
                /**
                 * 账单OwnerID。
                 * @example `1222`
                 */
                OwnerID: string;
                /**
                 * 储值卡抵扣。
                 * @example `0`
                 */
                DeductedByPrepaidCard: number;
                /**
                 * 产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 优惠金额。
                 * @example `0`
                 */
                InvoiceDiscount: number;
                /**
                 * 现金支付（含信用额度退款抵扣）。
                 * @example `100`
                 */
                PaymentAmount: number;
                /**
                 * 账单所属账号ID。
                 * @example `185766xxxx`
                 */
                BillAccountID: string;
                /**
                 * 原始金额。
                 * @example `100`
                 */
                PretaxGrossAmount: number;
                /**
                 * 现金支付（不包含信用额度退款抵扣）。
                 * @example `0`
                 */
                CashAmount: number;
                /**
                 * 产品代码。
                 * @example `rds`
                 */
                ProductCode: string;
            }[];
        };
    };
}
