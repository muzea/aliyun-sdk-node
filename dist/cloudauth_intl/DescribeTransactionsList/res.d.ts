export interface DescribeTransactionsListResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回码。
     * @example `Success`
     */
    Code: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        Page: number;
        /**
         * 总页数。
         * @example `6`
         */
        TotalPages: number;
        /**
         * 当前页总交易数量。
         * @example `300`
         */
        TransactionsOnPage: number;
        /**
         * 转出交易列表。
         */
        Out: {
            /**
             * 交易地址。
             * @example `0xd90e2***b90ad053324f31b`
             */
            Address: string;
            /**
             * 交易hash列表。
             */
            TxHashList: string[];
            /**
             * 交易金额。
             * @example `743`
             */
            Amount: number;
            /**
             * 类型。
             * - 1: EOA address / bitcoin address
             * - 2: malicious address
             * - 3: entity label address
             * - 4: contract address
             * @example `1`
             */
            Type: number;
            /**
             * 标签。
             * @example `Tor***uter`
             */
            Label: string;
        }[];
        /**
         * 转入交易列表。
         */
        In: {
            /**
             * 交易地址。
             * @example `0xd90e2***b90ad053324f31b
            `
             */
            Address: string;
            /**
             * 交易hash列表。
             */
            TxHashList: string[];
            /**
             * 交易金额。
             * @example `0.0845`
             */
            Amount: number;
            /**
             * 类型。
             * 1: EOA address / bitcoin address
             * 2: malicious address
             * 3: entity label address
             * 4: contract address
             * @example `1`
             */
            Type: number;
            /**
             * 标签。
             * @example `bi***ce`
             */
            Label: string;
        }[];
    };
}
