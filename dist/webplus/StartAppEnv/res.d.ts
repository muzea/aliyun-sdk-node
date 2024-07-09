export interface StartAppEnvResponse {
    /**
     * 环境变更响应信息
     */
    EnvChange: {
        /**
         * 变更开始时间
         * @example `1562672060867`
         */
        StartTime: string;
        /**
         * 变更ID
         * @example `wc-5d247bbcd43be51c729*****`
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
     * @example `8D69F3C4-EA43-49D5-875A-0893BF*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
