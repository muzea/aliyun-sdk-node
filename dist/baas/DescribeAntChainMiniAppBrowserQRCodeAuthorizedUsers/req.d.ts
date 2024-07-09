export interface DescribeAntChainMiniAppBrowserQRCodeAuthorizedUsersRequest {
    /**
     * 区块链ID
     * @example `bDXK6boZ`
     */
    "AntChainId": string;
    /**
     * 二维码类型，当前可以选值为 MINI_APP_BROWSER_TRANSACTION 代表支付宝小程序区块链浏览器。
     * @example `MINI_APP_BROWSER_TRANSACTION`
     */
    "QRCodeType": string;
    /**
     * 每页显示条例数
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页面编号，从1开始
     * @example `1`
     */
    "PageNumber": number;
}
