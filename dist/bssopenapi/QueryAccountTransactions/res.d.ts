export interface QueryAccountTransactionsResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8634E02D-0942-4B1D-8295-5352FE9A1F39`
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
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 用户账号。
         * @example `test@test.aliyunid.com`
         */
        AccountName: string;
        AccountTransactionsList: {
            /**
             * 流水信息集合。
             */
            AccountTransactionsList: {
                /**
                 * 账期，格式：YYYY-MM。
                 * @example `2020-03`
                 */
                BillingCycle: string;
                /**
                 * 交易渠道。
                 * - 用户余额：AccountBalance。
                 * - 银行转账： BankTransfer。
                 * - 支付宝：Alipay。
                 * - 支付宝花呗：AntCreditPay。
                 * - 线下汇款：OfflineRemittance。
                 * - 信控额度退款：RegularBankCreditRefund。
                 * - 信用卡：CreditCard。
                 * - 网商银行信任付：MyBankCredit。
                 * - 华夏银行分期付：HuaxiaBankCInstallment。
                 * - 苹果支付：ApplePay。
                 * @example `AccountBalance`
                 */
                TransactionChannel: string;
                /**
                 * 订单号/账单号。
                 * @example `2020030242`
                 */
                RecordID: string;
                /**
                 * 交易备注。
                 * @example `NAT_GW`
                 */
                Remarks: string;
                /**
                 * 金额。
                 * @example `0`
                 */
                Amount: string;
                /**
                 * 对应交易账号，比如支付宝充值账号或转账对端账号。
                 * @example `213562146`
                 */
                TransactionAccount: string;
                /**
                 * 交易时间。
                 * @example `2020-03-10T02:03:20Z`
                 */
                TransactionTime: string;
                /**
                 * 交易类型。
                 * - 充值：Payment。
                 * - 提现：Withdraw。
                 * - 退款：Refund。
                 * - 消费：Consumption。
                 * - 转账：Transfer。
                 * - 调账：Adjust。
                 * @example `Consumption`
                 */
                TransactionType: string;
                /**
                 * 收支类型。
                 * - 收入：Income。
                 * - 支出：Expense。
                 * @example `Expense`
                 */
                TransactionFlow: string;
                /**
                 * 资金形式。
                 * - 现金：Cash。
                 * - 保证金：Deposit。
                 * - 信控额度退款：RegularBankCreditRefund。
                 * - 订单直接支付：DirectPay。
                 * @example `Cash`
                 */
                FundType: string;
                /**
                 * 交易渠道流水号。
                 * @example `1234354325`
                 */
                TransactionChannelSN: string;
                /**
                 * 交易编号。
                 * @example `43342334`
                 */
                TransactionNumber: string;
                /**
                 * 余额。
                 * @example `0`
                 */
                Balance: string;
            }[];
        };
    };
}
