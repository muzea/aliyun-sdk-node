export interface MakeSuperResolutionImageResponse {
    /**
     * 请求ID。
     * @example `47DD87F1-D077-499A-8D96-C82F006A6839`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 分辨率放大后的图像URL地址，图像格式为PNG。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://ivpd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/upload/ai-gateway_prod/ds%253D20191121/sisrx2_157433961551387538.jpg?Expires=1574598816&OSSAccessKeyId=LTAI4FeJ8qKkYn6SrHhQ****&Signature=8phY6dOz4U889nHfHC1g51nwAi****`
         */
        Url: string;
    };
}
