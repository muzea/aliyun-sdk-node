export interface DescribeAntChainQRCodeAuthorizationV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `980061FC-058D-4298-8598-D9DDB10D0ED4`
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
     * 返回消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 二维码类型，当前可以选值为 MINI_APP_BROWSER_TRANSACTION 代表支付宝小程序区块链浏览器。
         * @example `MINI_APP_BROWSER_TRANSACTION`
         */
        QRCodeType: string;
        /**
         * 授权类型， 当前可选值为 ALL_USER_AUTHORIZATION 代表授权所有用户，SPECIFIC_USER_AUTHORIZATION 代表授权部分用户，UNAUTHORIZED 代表未授权
         * @example `ALL_USER_AUTHORIZATION`
         */
        AuthorizationType: string;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        AntChainId: string;
    };
}
