export interface GenerateOssUploadMetaResponse {
    /**
     * 请求ID。
     * @example `7676B259-FFA5-4971-A9D7-7B3F48D1DEEB`
     */
    RequestId: string;
    /**
     * 上传OSS所需的凭证信息。
     */
    OssUploadMeta: {
        /**
         * sts授权访问token。
         * @example `xxxxxxxxxxxxxxxxx+YHAPgNwi7yfRecMFydL2uPOgBI7LDio0RkbYLmJfIxHM2nGBPdml7kYEOXmJp2aDhbvvwVYIyt/8iES/R6N208wQh0Pk2bu+/9dvalp6wOHF4gkFGhhTVFMuTDRhQlNDU0pWTXVLZzVVMXZGRHciBTQzMjc0KgVhbGljZTCpnJjwySk6BlJzYU1ENUJuCgExGmkKBUFsbG93Eh8KDEFjdGlvbkVxdWFscxIGQWN0aW9uGgcKBW9zczoqEj8KDlJlc291cmNlRXF1YWxzEghSZXNvdXJjZRojCiFhY3M6b3NzOio6NDMyNzQ6c2FtcGxlYm94L2FsaWNlLyo=`
         */
        SecurityToken: string;
        /**
         * 文件在OSS上存储的完整文件名。
         * @example `1768723179523459/11/2018-05-07/cert.rsa`
         */
        ObjectKey: string;
        /**
         * 临时的AccessKey Secret。
         * @example `xxxxxxxxxxxxxxxxx`
         */
        AccessKeySecret: string;
        /**
         * 临时的AccessKey ID。
         * @example `STS.xxxxxxxxxxxxxxxxx`
         */
        AccessKeyId: string;
        /**
         * 上传到指定的Bucket。
         * @example `xxxx`
         */
        Bucket: string;
    };
}
