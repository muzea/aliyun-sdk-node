export interface UpdatePhoneMessageQrdlResponse {
    /**
     * 请求ID。
     * @example `1612C226-E271-4CFE-9F18-4066D******`
     */
    RequestId: string;
    /**
     * 结果返回OK为正常。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误描述信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 号码。
         * @example `628111908****`
         */
        PhoneNumber: string;
        /**
         * 二维码编码。
         * @example `DEDEE998`
         */
        QrdlCode: string;
        /**
         * 生成图片类型。
         * @example `PNG`
         */
        GenerateQrImage: string;
        /**
         * 消息内容。
         * @example `Hello`
         */
        PrefilledMessage: string;
        /**
         * 深度链接地址。
         * @example `https://wa.msg/`
         */
        DeepLinkUrl: string;
        /**
         * 二维码地址。
         * @example `https://img.png`
         */
        QrImageUrl: string;
    };
}
