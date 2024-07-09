export interface QueryAccountBalanceResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `16176743-6DC7-4CB3-BB25-A13982D8DFAD`
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
         * 可用额度。
         * @example `10000.00`
         */
        AvailableAmount: string;
        /**
         * 信控余额。
         * @example `0.00`
         */
        CreditAmount: string;
        /**
         * 网商银行信用额度。
         * @example `0.00`
         */
        MybankCreditAmount: string;
        /**
         * 币种。取值范围：
         * - CNY：人民币。
         * - USD：美元。
         * - JPY：日元。
         * @example `CNY`
         */
        Currency: string;
        /**
         * 现金余额。
         * @example `10000.00`
         */
        AvailableCashAmount: string;
        /**
         * 生态客户Quota限额
         * @example `10000.00
        `
         */
        QuotaLimit: string;
    };
}
