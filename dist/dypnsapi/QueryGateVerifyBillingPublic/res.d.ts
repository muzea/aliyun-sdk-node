export interface QueryGateVerifyBillingPublicResponse {
    /**
     * 状态码。取值：
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8906582E-6722`
     */
    RequestId: string;
    /**
     * 具体到每个方案号的计费量和金额。
     */
    Data: {
        /**
         * 该方案的消费金额（单位：元）。
         * @example `1234`
         */
        AmountSum: string;
        /**
         * 消费金额列表。
         */
        SceneBillingList: {
            /**
             * 计费量。
             * @example `74`
             */
            Add: string;
            /**
             * 单价（单位：元）。
             * @example `0.02`
             */
            SinglePrice: string;
            /**
             * 该方案的消费金额（单位：元）。
             * @example `1.48`
             */
            Amount: string;
            /**
             * 认证方式。
             * @example `本机号码校验`
             */
            ItemName: string;
            /**
             * 方案Code。
             * @example `FC100000038194004`
             */
            SceneCode: string;
            /**
             * App名称。
             * @example `阿里云`
             */
            AppName: string;
            /**
             * 方案名称。
             * @example `阿里云通信`
             */
            SceneName: string;
        }[];
    };
}
