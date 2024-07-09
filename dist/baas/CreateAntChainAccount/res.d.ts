export interface CreateAntChainAccountResponse {
    /**
     * 请求ID
     * @example `0301F6CB-4FA6-4D03-8668-963623B63D0F`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 账户名
         * @example `test`
         */
        Account: string;
        /**
         * 区块链ID
         * @example `bDXK6boZ`
         */
        AntChainId: string;
    };
}
