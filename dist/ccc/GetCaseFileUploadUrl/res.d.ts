export interface GetCaseFileUploadUrlResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 用于上传文件的预签名的OSS文件上传链接，有效期为一小时。
         * @example `https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/namelist.csv?Expires=1642067227&OSSAccessKeyId=****&Signature=****`
         */
        Url: string;
        /**
         * OSS文件的Key。
         * @example `ccc-test/namelist.csv`
         */
        CaseFileKey: string;
    };
    /**
     * 请求ID。
     * @example `BA03159C-E808-4FF1-B27E-A61B6E888D7F`
     */
    RequestId: string;
}
