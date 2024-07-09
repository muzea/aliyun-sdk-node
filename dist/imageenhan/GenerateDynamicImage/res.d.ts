export interface GenerateDynamicImageResponse {
    /**
     * 请求ID。
     * @example `3C047FB7-AE01-42CF-948F-D57F224620ED`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 微动变换后的视频URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/photo-style-imitation/dynamicPhotoResult/dySkyHair_0d0465eb-b1c9-472a-a7dc-cdff1333f794.avi?Expires=1601196370&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=QejSaTZOR2MB2lVHOUH%2Fj8l3P4****`
         */
        Url: string;
    };
}
