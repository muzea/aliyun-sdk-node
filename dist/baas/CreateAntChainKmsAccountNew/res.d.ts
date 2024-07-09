export interface CreateAntChainKmsAccountNewResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `063C2175-C755-5C85-9C42-5EB432B67D9B`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 返回信息
     * @example `没有权限`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 结果
     */
    Result: {
        /**
         * 托管账户公钥
         * @example `d408f5c5c3c118b23646f4059c81fbe5a1b067a12f96f4a7a5e09eae10c81288cdf64aa887af89738b9ec5d16bc124594bf820a4afa24fe0de9d8dcfd1d99500`
         */
        PubKey: string;
        /**
         * 托管账户ID
         * @example `1234565181228596659400e4-3bd7-4a83-b9af-d12654bb5779`
         */
        MyKmsKeyId: string;
    };
}
