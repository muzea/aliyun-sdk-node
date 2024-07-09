export interface QueryInstanceGaapCostResponse {
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
     * 请求数据。
     * @example `CCBB1BB9-22F1-4177-867B-7A75D665B488`
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
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页显示条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `20`
         */
        TotalCount: number;
        /**
         * 主机ID。
         * @example `1.1.1.1`
         */
        HostId: string;
        Modules: {
            /**
             * 费用信息。
             */
            Module: {
                /**
                 * 已分摊代金券抵扣。
                 * @example `0`
                 */
                GaapDeductedByCashCoupons: string;
                /**
                 * 订阅类型。取值：
                 * - Subscription：预付费。
                 * - PayAsYouGo：后付费。
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * 本月分摊优惠后金额。
                 * @example `0`
                 */
                MonthGaapPretaxAmount: string;
                /**
                 * 优惠券抵扣。
                 * @example `0`
                 */
                DeductedByCoupons: string;
                /**
                 * 子订单号。
                 * @example `12434345`
                 */
                SubOrderId: string;
                /**
                 * 地域。
                 * @example `cn-hangzhou`
                 */
                Region: string;
                /**
                 * 订单类型：
                 * - New（新购）。
                 * - Renewal（续费）。
                 * - Upgrade（升级）。
                 * - Degrade（降级）。
                 * @example `New`
                 */
                OrderType: string;
                /**
                 * 本月分摊储值卡抵扣。
                 * @example `0`
                 */
                MonthGaapDeductedByPrepaidCard: string;
                /**
                 * 未分摊代金券抵扣。
                 * @example `0`
                 */
                UnallocatedDeductedByCashCoupons: string;
                /**
                 * 本币币种已分摊优惠后金额（国际）。
                 * @example `0`
                 */
                PretaxAmountLocal: string;
                /**
                 * 账期YYYY－MM。
                 * @example `2020-03`
                 */
                BillingCycle: string;
                /**
                 * 付款人账户。
                 * @example `23534534`
                 */
                PayerAccount: string;
                /**
                 * 本币币种对应的本月分摊优惠后金额（国际）。
                 * @example `0.99`
                 */
                MonthGaapPretaxAmountLocal: string;
                /**
                 * 财务核算单元。为预留字段，暂不支持。
                 * @example `无`
                 */
                AccountingUnit: string;
                /**
                 * 本币币种已分摊优惠后金额。
                 * @example `0`
                 */
                GaapPretaxAmountLocal: string;
                /**
                 * 未分摊储值卡抵扣。
                 * @example `0`
                 */
                UnallocatedDeductedByPrepaidCard: string;
                /**
                 * 产品类型。
                 * @example `rds`
                 */
                ProductType: string;
                /**
                 * 现金。
                 * @example `0`
                 */
                PaymentAmount: string;
                /**
                 * 本月分摊原始金额。
                 * @example `0.99`
                 */
                MonthGaapPretaxGrossAmount: string;
                /**
                 * 账单类型：
                 * - SubscriptionOrder （预付订单）。
                 * - PayAsYouGoBill （后付账单）。
                 * - Refund （退款）。
                 * - Adjustment （调账）。
                 * @example `SubscriptionOrder`
                 */
                BillType: string;
                /**
                 * 支付时间。
                 * @example `2018-06-15 15:59:57`
                 */
                PayTime: string;
                /**
                 * 原始金额。
                 * @example `123`
                 */
                PretaxGrossAmount: string;
                /**
                 * 订单号。
                 * @example `213123213123`
                 */
                OrderId: string;
                /**
                 * 未分摊询价优惠。
                 * @example `0`
                 */
                UnallocatedPricingDiscount: string;
                /**
                 * 本月分摊代金券抵扣。
                 * @example `0.75`
                 */
                MonthGaapDeductedByCashCoupons: string;
                /**
                 * 未分摊原始金额。
                 * @example `0`
                 */
                UnallocatedPretaxGrossAmount: string;
                /**
                 * 实例ID。
                 * @example `OSSBAG-cn-0xl0xxxxxx`
                 */
                InstanceID: string;
                /**
                 * 标签。
                 * @example `tag`
                 */
                Tag: string;
                /**
                 * 币种。取值：
                 * - CNY。
                 * - USD。
                 * - JPY。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 已分摊优惠券抵扣。
                 * @example `0`
                 */
                GaapDeductedByCoupons: string;
                /**
                 * 代金券抵扣。
                 * @example `0`
                 */
                DeductedByCashCoupons: string;
                /**
                 * 已分摊储值卡抵扣。
                 * @example `0`
                 */
                GaapDeductedByPrepaidCard: string;
                /**
                 * 已分摊现金。
                 * @example `0`
                 */
                GaapPaymentAmount: string;
                /**
                 * 本币币种未分摊优惠后金额。
                 * @example `0`
                 */
                UnallocatedPretaxAmountLocal: string;
                /**
                 * 本月分摊询价优惠。
                 * @example `0,.25`
                 */
                MonthGaapPricingDiscount: string;
                /**
                 * 询价优惠。
                 * @example `1`
                 */
                PricingDiscount: string;
                /**
                 * 已分摊询价优惠。
                 * @example `0`
                 */
                GaapPricingDiscount: string;
                /**
                 * 资源组。
                 * @example `默认资源组`
                 */
                ResourceGroup: string;
                /**
                 * 未分摊优惠券抵扣。
                 * @example `0`
                 */
                UnallocatedDeductedByCoupons: string;
                /**
                 * 优惠后金额。
                 * @example `0`
                 */
                PretaxAmount: string;
                /**
                 * 未分摊优惠后金额。
                 * @example `0`
                 */
                UnallocatedPretaxAmount: string;
                /**
                 * 已分摊原始金额。
                 * @example `0`
                 */
                GaapPretaxGrossAmount: string;
                /**
                 * 未分摊现金。
                 * @example `0`
                 */
                UnallocatedPaymentAmount: string;
                /**
                 * 支付币种（国际）。
                 * @example `CNY`
                 */
                PaymentCurrency: string;
                /**
                 * 所有者ID。
                 * @example `123213123123`
                 */
                OwnerID: string;
                /**
                 * 储值卡抵扣。
                 * @example `0`
                 */
                DeductedByPrepaidCard: string;
                /**
                 * 已分摊优惠后金额。
                 * @example `0`
                 */
                GaapPretaxAmount: string;
                /**
                 * 本月分摊优惠券抵扣。
                 * @example `0`
                 */
                MonthGaapDeductedByCoupons: string;
                /**
                 * 本月分摊现金。
                 * @example `0`
                 */
                MonthGaapPaymentAmount: string;
                /**
                 * 服务结束时间。
                 * @example `2019-05-01 00:00:00`
                 */
                UsageEndDate: string;
                /**
                 * 服务起始时间。
                 * @example `2019-04-01 00:00:00`
                 */
                UsageStartDate: string;
                /**
                 * 产品代码。
                 * @example `rds`
                 */
                ProductCode: string;
            }[];
        };
    };
}
