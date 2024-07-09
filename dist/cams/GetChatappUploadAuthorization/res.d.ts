export interface GetChatappUploadAuthorizationResponse {
    /**
     * 请求ID。
     * @example `90E63D28-E31D-1EB2-8939-A94866411B2O`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 错误提示信息。
     * @example `无`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * Oss授权上传文件的AccessKeyId。
         * @example `2skeuurfj****`
         */
        AccessKeyId: string;
        /**
         * Oss授权上传文件的Secret。
         * @example `skdkdukeuuuu****`
         */
        AccessKeySecret: string;
        /**
         * Oss上传的Bucket名称。
         * @example `oss`
         */
        BucketName: string;
        /**
         * Oss授权上传的目录。
         * @example `100010****`
         */
        Dir: string;
        /**
         * Oss授权上传的服务器地址。
         * @example `https://oss.com`
         */
        EndPoint: string;
        /**
         * 授权密钥。
         * @example `dkdieiii****`
         */
        SecurityToken: string;
        /**
         * 超时时间。单位为秒。
         * @example `3600`
         */
        Expire: number;
    };
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
