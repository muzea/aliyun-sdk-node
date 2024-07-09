export interface ImageBlindPicWatermarkResponse {
    /**
     * 请求ID。
     * @example `DE7869E4-0ACE-4C02-8B98-540B49F49205`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 当调用功能为`encode_pic`或`encode_pic_plus`时，返回带有添加水印的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty%2F2020_03_04%2F61f544a1a5004c88a2bf29452db494e9.jpeg?OSSAccessKeyId=LTAI4Fmdm1gQonFLrghJ****&Expires=158340****&Signature=Heet1ivG0xFP3YlO6usvd0pmrH****`
         */
        WatermarkImageURL: string;
        /**
         * 当调用功能为`decode_pic`或`decode_pic_plus`时，返回解码后的水印图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty%2F2020_03_04%2F61f544a1a5004c88a2bf29452db494e9.jpeg?OSSAccessKeyId=LTAI4Fmdm1gQonFLrghJ****&Expires=158340****&Signature=Heet1ivG0xFP3YlO6usvd0pmrH****`
         */
        LogoURL: string;
    };
}
