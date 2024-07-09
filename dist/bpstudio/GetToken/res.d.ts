export interface GetTokenResponse {
    /**
     * 错误信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `A07FFDF2-78FA-1B48-9E38-88E833A93187`
     */
    RequestId: string;
    /**
     * 授权信息
     */
    Data: {
        /**
         * oss访问token
         * @example `ABCD`
         */
        SecurityToken: string;
        /**
         * oss的endpoint
         * @example `https://oss-cn-beijing.aliyuncs.com`
         */
        Endpoint: string;
        /**
         * oss访问access key secret
         * @example `9NG*****K4X`
         */
        AccessKeySecret: string;
        /**
         * oss访问access key id
         * @example `STS.NTm*****8tu`
         */
        AccessKeyId: string;
        /**
         * oss文件保存bucket位置
         * @example `bucket-1`
         */
        Bucket: string;
        /**
         * oss快照保存bucket位置
         * @example `bucket-2`
         */
        SnapshotBucket: string;
    };
    /**
     * 状态码
     * @example `200`
     */
    Code: number;
}
