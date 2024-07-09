export interface DescribeAntChainQRCodeAuthorizationV2Request {
    /**
     * 区块链ID
     * @example `8bd720bde18c4b37b0f4a1c7834db163`
     */
    "AntChainId": string;
    /**
     * 二维码类型，当前可以选值为 MINI_APP_BROWSER_TRANSACTION 代表支付宝小程序区块链浏览器。
     * @example `MINI_APP_BROWSER_TRANSACTION`
     */
    "QRCodeType": string;
}
