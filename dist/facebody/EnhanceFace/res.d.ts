export interface EnhanceFaceResponse {
    /**
     * 请求ID。
     * @example `8B031473-6773-4A4C-AF33-A233758E6E98`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 人脸修复增强后的结果图URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-vd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/face-enhancement/2021-11-30/8e34b61c-abcf-4708-9d9d-6501968ee806/20211130_080644126523_47ct9w3pgh.jpg?Expires=1638261404&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=2wPdcuCmr%2F86WpBL3HQJw5uCFl****`
         */
        ImageURL: string;
    };
}
