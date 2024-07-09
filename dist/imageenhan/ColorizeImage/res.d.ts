export interface ColorizeImageResponse {
    /**
     * 请求ID。
     * @example `124A4B09-68EF-4178-B98D-319089D4268B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 处理后的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vc-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/face-enhancement/2020_11_26/20201126_182812286268_079260.jpg?Expires=1606388292&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=f71Bx37g%2BGhM%2B6FOXM0EbNL8W4****`
         */
        ImageURL: string;
    };
}
