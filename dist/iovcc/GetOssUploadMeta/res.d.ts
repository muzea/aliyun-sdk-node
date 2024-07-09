export interface GetOssUploadMetaResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 上传需要的信息
     */
    OssUploadMeta: {
        /**
         * 上传需要的信息
         * @example `STS.xxxxxxxxxxx`
         */
        AccessKey: string;
        /**
         * 签名
         * @example `xxxxxxxxxxxx=`
         */
        Signature: string;
        /**
         * 上传的OSS服务器地址
         * @example `http://xxxxxx.oss-cn-shanghai.aliyuncs.com`
         */
        Host: string;
        /**
         * OSS上传文件的Policy
         * @example `xxxxxxxxxxxxxx`
         */
        Policy: string;
        /**
         * STS token
         * @example `xxxxxxxxxxxxxx`
         */
        SecurityToken: string;
        /**
         * 上传文件的目标路径
         * @example `11/1527911483513.zip`
         */
        ObjectKey: string;
    };
}
