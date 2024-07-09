export interface RetouchSkinResponse {
    /**
     * 请求ID。
     * @example `FD2BF3DF-3D98-1D5D-85BB-C8EC3A9FE347`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 美肤后图像的URL地址。
         * > 该URL地址为临时地址，有效期为30分钟，过期后将无法访问。若需要长时间或者永久保存文件，请在30分钟内访问URL地址，下载文件转存到自己的OSS或者其他存储空间。
         * @example `http://vibktprfx-prod-prod-aic-gd-cn-shanghai.oss-cn-shanghai.aliyuncs.com/skin-retouch/FD2BF3DF-3D98-1D5D-85BB-C8EC3A9FE347_3467_20210923-094238.jpg?Expires=1632391959&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=jXJcFTv3no7Gx%2BLuPvANhRSnc2****`
         */
        ImageURL: string;
    };
}
