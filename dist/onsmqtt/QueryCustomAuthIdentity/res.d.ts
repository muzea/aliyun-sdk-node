export interface QueryCustomAuthIdentityResponse {
    /**
     * Id of the request
     * @example `11568B5B-13A8-4E72-9DBA-3A14F7D3****`
     */
    RequestId: string;
    /**
     * 接口返回码：200：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 是否调用成功：true：调用成功。                                 false：调用失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 附加信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 返回数据。
         */
        Results: {
            /**
             * 用户名。
             * @example `test`
             */
            Username: string;
            /**
             * 密钥。
             * @example `62a5916d71767185b48907d85c2efa****`
             */
            Secret: string;
            /**
             * 身份类型。
             * - USER：仅用户名。
             * - CLIENT：具体到客户端。
             * @example `USER`
             */
            IdentityType: string;
            /**
             * 当身份类型是CLIENT时，指定设备的ClientID。
             * @example `GID_ICP@@@4d378084`
             */
            ClientId: string;
            /**
             * 签名校验方式，ORIGIN：原始值比较，即比较password与secret，SIGNED： 对clientId进行HmacSHA1加签（使用secret）验证，然后比较password。
             * @example `SIGNED`
             */
            SignMode: string;
        }[];
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `AAAAAXA+GzVqTutYpgkFjBrchKzuvSbpuTqtt6OF9tsC9QnJ`
         */
        NextToken: string;
    };
}
