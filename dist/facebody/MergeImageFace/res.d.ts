export interface MergeImageFaceResponse {
    /**
     * 请求ID。
     * @example `8473A5E5-488E-4612-800E-F95B42381570`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 融合后的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/image-face-fusion/09dedc78-c355-442a-9312-7ab074d6de49_54dc_20210129-025407.jpg?Expires=1611890647&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=2mk2OgIrwMqrvA%2FvDdp0MNaoVU****`
         */
        ImageURL: string;
    };
}
