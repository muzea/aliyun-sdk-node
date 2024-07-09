export interface QueryAccountTransactionsRequest {
    /**
     * 交易编号。
     * @example `133314076`
     */
    "TransactionNumber"?: string;
    /**
     * 订单/账单号。
     * @example `20200302`
     */
    "RecordID"?: string;
    /**
     * 交易渠道流水号。
     * @example `12342134`
     */
    "TransactionChannelSN"?: string;
    /**
     * 创建时间段起，格式例：2018-01-01T00:00:00Z。
     * @example `2020-03-05T01:46:09Z`
     */
    "CreateTimeStart"?: string;
    /**
     * 创建时间段止，默认查询时间往前一个月。格式例：2018-01-01T00:00:00Z。
     * @example `2020-03-06T01:55:00Z`
     */
    "CreateTimeEnd"?: string;
    /**
     * 页码。不填默认1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示条数。不填默认20
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 交易类型。
     * 传入以下交易类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
     * - 充值：Payment。
     * - 提现：Withdraw。
     * - 退款：Refund。
     * - 消费：Consumption。
     * - 转账：Transfer。
     * - 调账：Adjust。
     * @example `Payment`
     */
    "TransactionType"?: string;
    /**
     * 收支类型。
     * 传入以下收支类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
     * - 收入：Income。
     * - 支出：Expense。
     * @example `Income`
     */
    "TransactionFlow"?: string;
    /**
     * 交易渠道。
     * 传入以下交易渠道类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
     * - 用户余额：AccountBalance。
     * - 银行转账： BankTransfer。
     * - 支付宝：Alipay。
     * - 支付宝花呗：AntCreditPay。
     * - 线下汇款：OfflineRemittance。
     * - 信控额度退款：RegularBankCreditRefund。
     * - 信用卡：CreditCard。
     * - 网商银行信任付：MyBankCredit。
     * - 华夏银行分期付：HuaxiaBankCInstallment。
     * - 苹果支付：ApplePay
     * @example `AccountBalance`
     */
    "TransactionChannel"?: string;
}
