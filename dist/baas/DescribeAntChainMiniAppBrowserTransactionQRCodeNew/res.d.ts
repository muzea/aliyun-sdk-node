export interface DescribeAntChainMiniAppBrowserTransactionQRCodeNewResponse {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
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
     * 请求消息
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
         * Base64编码的二维码 png 图片
         * @example `iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAIAAACxN37FAAAcb0lEQVR42u3dCZAc1XkAYGlPSRZIGIwEtos4tlM4lE05hhBsU`
         */
        Base64QRCodePNG: string;
        /**
         * 二维码内容
         * @example `https://render.antfin.com/p/s/miniapp-web/?type=trans&from=aliyun&bizid=8bd720bde18c4b37b0f4a1c7834db163&hash=ac73c8fa158436513e0b398632d9a082e04cee3eac6f9fb50087a46d801bdfd1&contractId=`
         */
        QRCodeContent: string;
        /**
         * 交易Hash
         * @example `ac73c8fa158436513e0b398632d9a082e04cee3eac6f9fb50087a46d801bdfd1`
         */
        TransactionHash: string;
        /**
         * 区块链ID
         * @example `8bd720bde18c4b37b0f4a1c7834db163`
         */
        AntChainId: string;
    };
}
