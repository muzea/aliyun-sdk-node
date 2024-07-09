export interface ErasePersonResponse {
    /**
     * 请求ID。
     * @example `2FEDA495-9A5D-48B5-8922-98A4FE01D381`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出图像的URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-isr-lab-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/remove-person/2020-10-29_10%3A59%3A21.421276_img19.png?Expires=1603970961&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=9lBakx0r6FOssTEYTcKs5pk8ta****`
         */
        ImageUrl: string;
    };
}
