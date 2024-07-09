export interface AbortChangeResponse {
    /**
     * 被中止的变更信息
     */
    EnvChange: {
        /**
         * 该变更的开始执行时间戳
         * @example `1557911256210`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5cdbd6d884b53b4bc95*****`
         */
        ChangeId: string;
        /**
         * 环境ID
         * @example `we-5d39b8ba6786bd4b149*****`
         */
        EnvId: string;
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `14A65FB3-DFD6-4D9A-83EA-9259C2D3****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
