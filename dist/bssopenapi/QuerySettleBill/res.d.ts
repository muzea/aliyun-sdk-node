export interface QuerySettleBillResponse {
    /**
     * 状态码
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
     * @example `AE3F4057-DFC9-4B81-8858-F620651010C9`
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
         * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `CAESEgoQCg4KCmdtdF9jcmVhdGUQARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U`
         */
        NextToken: string;
        /**
         * 账期，YYYY－MM。
         * @example `2020-02`
         */
        BillingCycle: string;
        /**
         * 本次请求所返回的最大记录条数。
         * @example `20`
         */
        MaxResults: number;
        /**
         * 账号ID。
         * @example `185xxxxx489`
         */
        AccountID: string;
        /**
         * 总记录数。
         * @example `200`
         */
        TotalCount: number;
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
                 * 支付状态。取值：
                 * - PayFinish：已支付
                 * - PayUnclear：未结清
                 * - PayUnsettle：未结算
                 * - NoSettle：免结算
                 * @example `PayFinish`
                 */
                Status: string;
                /**
                 * 抹零优惠。
                 * @example `0`
                 */
                RoundDownDiscount: string;
                /**
                 * 账单类型：
                 * - Subscription
                 * - OrderPayAsYouGoBill
                 * - Refund
                 * - Adjustment
                 * @example `Subscription`
                 */
                Item: string;
                /**
                 * 币种。
                 * - CNY
                 * - USD
                 * - JPY
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 账单所属账号名称。
                 * @example `test@test.aliyunid.com`
                 */
                BillAccountName: string;
                /**
                 * 代金券抵扣。
                 * @example `0`
                 */
                DeductedByCashCoupons: number;
                /**
                 * 订阅类型。取值：
                 * - Subscription
                 * - PayAsYouGo
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * 账单开始时间。
                 * @example `2020-03-11 07:00:00`
                 */
                UsageStartTime: string;
                /**
                 * 业务类型。
                 * @example `trusteeship`
                 */
                BizType: string;
                /**
                 * 账单结束时间。
                 * @example `2020-03-11 08:00:00`
                 */
                UsageEndTime: string;
                /**
                 * 优惠券抵扣。
                 * @example `0`
                 */
                DeductedByCoupons: number;
                /**
                 * 该条账单对应的订单明细ID。
                 * @example `325345254353`
                 */
                SubOrderId: string;
                /**
                 * 未结清金额。
                 * @example `0`
                 */
                OutstandingAmount: number;
                /**
                 * 订单支付时间。
                 * @example `2020-03-11 08:00:00`
                 */
                PaymentTime: string;
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
                 * 商品Code，与费用中心产品明细Code一致
                 * @example `rds`
                 */
                CommodityCode: string;
                /**
                 * 产品名称。
                 * @example `云数据库RDS`
                 */
                ProductName: string;
                /**
                 * 订单号、账单号。
                 * @example `2020xxxx5912`
                 */
                RecordID: string;
                /**
                 * 信用额度退款抵扣。
                 * @example `0`
                 */
                AdjustAmount: number;
                /**
                 * 产品明细。
                 * @example `关系型数据库RDS（包月）`
                 */
                ProductDetail: string;
                /**
                 * 子账号AccountID（多账号代付场景）。
                 * @example `3532535235`
                 */
                OwnerID: string;
                /**
                 * 储值卡抵扣。
                 * @example `0`
                 */
                DeductedByPrepaidCard: number;
                /**
                 * 账单所属账号ID。
                 * @example `185xxxxx489`
                 */
                BillAccountID: string;
                /**
                 * 现金支付（包含信用额度退款抵扣）。
                 * @example `0`
                 */
                PaymentAmount: number;
                /**
                 * 优惠金额。
                 * @example `0`
                 */
                InvoiceDiscount: number;
                /**
                 * 产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 原始金额。
                 * @example `0`
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
