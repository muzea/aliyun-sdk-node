export interface QueryAccountBillResponse {
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
     * @example `3BFC23FE-A182-4D96-A1E4-7521B30B8E43`
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
         * 账期，格式：YYYY-MM。
         * @example `2020-03`
         */
        BillingCycle: string;
        /**
         * 账号ID。
         * @example `1857xxxxx489`
         */
        AccountID: string;
        /**
         * 每页显示条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `1`
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
                 * 产品Code，与费用中心账单产品Code一致
                 * @example `rds`
                 */
                PipCode: string;
                /**
                 * <props="china">应付金额。</props>
                 * @example `0`
                 */
                PretaxAmount: number;
                /**
                 * 账单日期。
                 * @example `2021-03-01`
                 */
                BillingDate: string;
                /**
                 * 产品名称。
                 * > 仅当**IsGroupByProduct**为true时返回。
                 * @example `rds`
                 */
                ProductName: string;
                /**
                 * 信用额度退款抵扣。
                 * @example `0`
                 */
                AdjustAmount: number;
                /**
                 * 子账号名称。
                 * @example `aligzncloudtest2`
                 */
                OwnerName: string;
                /**
                 * 币种。取值：
                 * - CNY。
                 * - USD。
                 * - JPY。
                 * @example `CNY`
                 */
                Currency: string;
                /**
                 * 账单所属账号名称。
                 * @example `test@test.aliyunid.com`
                 */
                BillAccountName: string;
                /**
                 * 产品订阅类型：
                 * - 预付费：Subscription。
                 * - 后付费：PayAsYouGo。
                 * > 仅当IsGroupByProduct为true时返回。
                 * @example `PayAsYouGo`
                 */
                SubscriptionType: string;
                /**
                 * <props="china">代金券抵扣。</props>
                 * @example `0`
                 */
                DeductedByCashCoupons: number;
                /**
                 * 业务类型。
                 * @example `trusteeship`
                 */
                BizType: string;
                /**
                 * 子账号的阿里云ID。
                 * @example `325434254`
                 */
                OwnerID: string;
                /**
                 * <props="china">储值卡抵扣。</props>
                 * @example `0`
                 */
                DeductedByPrepaidCard: number;
                /**
                 * 优惠券抵扣。
                 * @example `0`
                 */
                DeductedByCoupons: number;
                /**
                 * 账单所属账号ID。
                 * @example `1857xxxxx489`
                 */
                BillAccountID: string;
                /**
                 * 现金支付（含信用额度退款抵扣）。
                 * @example `0`
                 */
                PaymentAmount: number;
                /**
                 * 优惠金额。
                 * @example `0`
                 */
                InvoiceDiscount: number;
                /**
                 * <props="china">未结清金额或信用结算金额。</props>
                 * @example `0`
                 */
                OutstandingAmount: number;
                /**
                 * 财务单元。
                 * @example `未分配`
                 */
                CostUnit: string;
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
                 * 产品code。
                 * > 仅当**IsGroupByProduct**为true时返回。
                 * @example `rds`
                 */
                ProductCode: string;
            }[];
        };
    };
}
