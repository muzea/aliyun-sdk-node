export interface SegmentSkinResponse {
    /**
     * 请求ID。
     * @example `DA007354-6CF5-45BE-8333-E06318D848C0`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 分割结果图像的URL地址。
         * 抠图之后返回四通道PNG图，无压缩，图像尺寸保持不变，图像体积会变大。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://viapi-cn-shanghai-dha-segmenter.oss-cn-shanghai.aliyuncs.com/upload/result_skinsegmenter/2020-9-27/invi_skinsegmenter_016011971641871000001_wQbLq9.jpg?Expires=1601198964&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=xjKc%2BScprmB86cxtI%2B1T0R6TlE****`
         */
        URL: string;
    };
}
