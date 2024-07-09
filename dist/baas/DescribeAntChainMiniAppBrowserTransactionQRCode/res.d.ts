export interface DescribeAntChainMiniAppBrowserTransactionQRCodeResponse {
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
         * Base64编码的二维码 png 图片
         * @example `iVBORw0KGgo......ABJRU5ErkJggg==`
         */
        Base64QRCodePNG: string;
        /**
         * 交易哈希值
         * @example `10692388f8b729cbb42d2985eebd3567812def357eb826a7ec810ce97e1f295e`
         */
        TransactionHash: string;
        /**
         * 二维码内容
         * @example `https://render.antfin.com/p/s/miniapp-web/?type=trans&from=aliyun&bizid=bDXK6boZ&hash=10692388f8b729cbb42d2985eebd3567812def357eb826a7ec810ce97e1f295e`
         */
        QRCodeContent: string;
        /**
         * 区块链ID
         * @example `bDXK6boZ`
         */
        AntChainId: string;
    };
}
