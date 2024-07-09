export interface RefineMaskResponse {
    /**
     * 请求ID。
     * @example `E948F80B-86D9-54E0-9FF9-ACF3B1DA83C4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回结果的图像。
         */
        Elements: {
            /**
             * 输出的精细化Mask的图像URL地址。
             * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
             * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
             * @example `http://algo-app-taobao-mm-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/pixelai-portrait-beauty%2F2020_03_04%2F61f544a1a5004c88a2bf29452db494e9.jpeg?OSSAccessKeyId=LTAI4Fmdm1gQonFLrghJ****&Expires=1583406122&Signature=Heet1ivG0xFP3YlO6usvd0pmrH****`
             */
            ImageURL: string;
        }[];
    };
}
