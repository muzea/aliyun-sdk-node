export interface LiquifyFaceResponse {
    /**
     * 请求ID。
     * @example `CA1C8937-B30C-15E6-B804-41C357BA413B`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 瘦脸后图像的URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/face-liquify/CA1C8937-B30C-15E6-B804-41C357BA413B_5eca_20210923-093411.jpg?Expires=1632391451&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=46apJQVNBz%2FFzDLEYn2M1w9MKA****`
         */
        ImageURL: string;
    };
}
