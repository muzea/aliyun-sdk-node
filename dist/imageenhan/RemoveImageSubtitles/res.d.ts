export interface RemoveImageSubtitlesResponse {
    /**
     * 请求ID。
     * @example `939B2103-EE28-4F2D-9773-9A37AD00E5B7`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出擦除字幕后的图像URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://algo-app-aic-vd-cn-shanghai-prod.oss-cn-shanghai.aliyuncs.com/image-desubtitle/2020-03-23-08/02%3A50-e8af2ea3-bddc-4ec8-b21c-493ee687465e.jpg?Expires=1584952370&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=qVnfWZJ2QtI9NRWQ410FsEFioq****`
         */
        ImageURL: string;
    };
}
