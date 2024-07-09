export interface DescribeAntChainQRCodeAuthorizationResponse {
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
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
         * 授权类型， 当前可选值 为 ALL_USER_AUTHORIZATION 代表授权所有用户，SPECIFIC_USER_AUTHORIZATION 代表授权部分用户，UNAUTHORIZED 代表未授权
         * @example `ALL_USER_AUTHORIZATION`
         */
        AuthorizationType: string;
        /**
         * 区块链ID
         * @example `bDXK6boZ`
         */
        AntChainId: string;
    };
}
