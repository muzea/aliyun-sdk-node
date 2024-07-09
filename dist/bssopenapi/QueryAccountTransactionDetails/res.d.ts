export interface QueryAccountTransactionDetailsResponse {
    /**
     * 响应状态码
     * @example `200`
     */
    Code: string;
    /**
     * 结果描述
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求ID
     * @example `asadadad-edafafafaasd`
     */
    RequestId: string;
    /**
     * 是否成功标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求结果内容
     */
    Data: {
        /**
         * 分页标识
         * @example `ASHDADS`
         */
        NextToken: string;
        /**
         * 查询结果总数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 无效参数
         * @example `0`
         */
        MaxResults: number;
        /**
         * 账户名
         * @example `yidi`
         */
        AccountName: string;
        AccountTransactionsList: {
            /**
             * 明细列表
             */
            AccountTransactionsList: {
                /**
                 * 账期
                 * @example `2022-10`
                 */
                BillingCycle: string;
                /**
                 * 交易渠道
                 * @example `Alipay`
                 */
                TransactionChannel: string;
                /**
                 * 订单号/账单号
                 * @example `2022120336190912`
                 */
                RecordID: string;
                /**
                 * 备注
                 * @example `测试`
                 */
                Remarks: string;
                /**
                 * 金额
                 * @example `1.00`
                 */
                Amount: string;
                /**
                 * 对应交易账号
                 * @example `fortune_test@xxx.com`
                 */
                TransactionAccount: string;
                /**
                 * 交易时间
                 * @example `2022-10-01`
                 */
                TransactionTime: string;
                /**
                 * 交易类型。 传入以下交易类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
                 * 充值：Payment。
                 * 提现：Withdraw。
                 * 退款：Refund。
                 * 消费：Consumption。
                 * 转账：Transfer。
                 * 调账：Adjust。
                 * @example `Consumption`
                 */
                TransactionType: string;
                /**
                 * 收支类型。 传入以下收支类型，查询返回对应类型结果，不存在时结果为空。不传默认返回所有类型。
                 * 收入：Income。
                 * 支出：Expense
                 * @example `Income`
                 */
                TransactionFlow: string;
                /**
                 * 资金形式。
                 * 现金：Cash。
                 * 保证金：Deposit。
                 * 信控额度退款：RegularBankCreditRefund。
                 * 订单直接支付：DirectPay。
                 * @example `Cash`
                 */
                FundType: string;
                /**
                 * 交易渠道流水号
                 * @example `123232434343532`
                 */
                TransactionChannelSN: string;
                /**
                 * 交易编号
                 * @example `43342334`
                 */
                TransactionNumber: string;
                /**
                 * 余额
                 * @example `0`
                 */
                Balance: string;
            }[];
        };
    };
}
