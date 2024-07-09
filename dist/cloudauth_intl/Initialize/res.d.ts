export interface InitializeResponse {
    /**
     * Id of the request
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 认证ID
         * @example `08573be80f944d95ac812e019e3655a8`
         */
        TransactionId: string;
        /**
         * 客户端配置
         * @example `***`
         */
        ClientCfg: string;
        /**
         * Web认证Url
         * @example `http****`
         */
        TransactionUrl: string;
    };
}
