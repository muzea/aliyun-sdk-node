export interface ListPhoneMessageQrdlResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
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
     * 返回数据对像。
     */
    Data: {
        /**
         * 号码。
         * @example `86138009****`
         */
        PhoneNumber: string;
        /**
         * 二维码编码。
         * @example `IUIED999`
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
    }[];
}
