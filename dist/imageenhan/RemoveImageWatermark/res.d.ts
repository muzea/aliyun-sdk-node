export interface RemoveImageWatermarkResponse {
    /**
     * 请求ID。
     * @example `885070A7-E721-4062-99A0-80C0EBBF9406`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图像标志擦除后的结果图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/image-delogo/2020-03-27-03/00%3A06-5a6f0a0f-c940-4955-af75-79e8267f1699.jpg?Expires=1585279806&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=R4OC2R5%2Fkw08XYFXmCWjgk7Y9N****`
         */
        ImageURL: string;
    };
}
