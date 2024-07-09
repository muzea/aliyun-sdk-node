export interface QueryAccountTransactionDetailsRequest {
    /**
     * 交易编号
     * @example `410874027490089`
     */
    "TransactionNumber"?: string;
    /**
     * 订单号/账单号
     * @example `2022120336190912`
     */
    "RecordID"?: string;
    /**
     * 交易渠道流水号
     * @example `2022112122001470591458665933`
     */
    "TransactionChannelSN"?: string;
    /**
     * 创建时间起始
     * @example `2022-01-20`
     */
    "CreateTimeStart"?: string;
    /**
     * 创建时间终止
     * @example `2022-12-20`
     */
    "CreateTimeEnd"?: string;
    /**
     * 交易类型。 传入以下交易类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
     * 充值：Payment。
     * 提现：Withdraw。
     * 退款：Refund。
     * 消费：Consumption。
     * 转账：Transfer。
     * 调账：Adjust。
     * @example `Payment`
     */
    "TransactionType"?: string;
    /**
     * 交易渠道。 传入以下交易渠道类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
     * 用户余额：AccountBalance。
     * 银行转账： BankTransfer。
     * 支付宝：Alipay。
     * 支付宝花呗：AntCreditPay。
     * 线下汇款：OfflineRemittance。
     * 信控额度退款：RegularBankCreditRefund。
     * 信用卡：CreditCard。
     * 网商银行信任付：MyBankCredit。
     * 华夏银行分期付：HuaxiaBankCInstallment。
     * 苹果支付：ApplePay
     * @example `AccountBalance`
     */
    "TransactionChannel"?: string;
    /**
     * 分页查询token
     * @example `ABEDSDS124DASA`
     */
    "NextToken"?: string;
    /**
     * 无效参数
     * @example `0`
     */
    "MaxResults"?: number;
}
