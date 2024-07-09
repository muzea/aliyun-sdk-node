export interface DescribeServerCertificatesResponse {
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF34B540710`
     */
    RequestId: string;
    ServerCertificates: {
        /**
         * 服务器证书列表。
         */
        ServerCertificate: {
            /**
             * 服务器证书上传的时间戳。
             * @example `1504147745000`
             */
            CreateTimeStamp: number;
            /**
             * 阿里云证书服务的服务器证书名称。
             * @example `testcertkey`
             */
            AliCloudCertificateName: string;
            /**
             * 过期时间。
             * @example `2023-01-26T23:59:59Z`
             */
            ExpireTime: string;
            /**
             * 服务器证书上传的时间。
             * @example `2021-08-31T02:49:05Z`
             */
            CreateTime: string;
            /**
             * 服务器证书ID。
             * @example `123157********_166f8204689_1714763408_709981430-cn-east-hangzhou-02`
             */
            ServerCertificateId: string;
            /**
             * 过期时间戳。
             * @example `15041477450`
             */
            ExpireTimeStamp: number;
            /**
             * 服务器证书的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 服务器证书名称。
             * @example `slb`
             */
            ServerCertificateName: string;
            /**
             * 服务器证书的指纹。
             * @example `68:08:1a:f8:2c:97:69:a3:a1:e6:16:41:4b:ca:4f:5d:ee:a5:ef:0d`
             */
            Fingerprint: string;
            /**
             * 域名，对应证书的`CommonName`字段。
             * @example `www.example.com`
             */
            CommonName: string;
            /**
             * 企业资源组ID。
             * @example `rg-atstuj3rtop****`
             */
            ResourceGroupId: string;
            /**
             * 是否是阿里云证书服务中的证书：
             * - **1**：是。
             * - **0**：不是。
             * @example `0`
             */
            IsAliCloudCertificate: number;
            /**
             * 阿里云证书服务的服务器证书ID。
             * @example `7309********_15d97e7709a_71445759hr_789289731`
             */
            AliCloudCertificateId: string;
            Tags: {
                /**
                 * 资源标签。
                 */
                Tag: {
                    /**
                     * 资源的标签值。
                     * @example `1`
                     */
                    TagValue: string;
                    /**
                     * 资源的标签键。
                     * @example `test`
                     */
                    TagKey: string;
                }[];
            };
            SubjectAlternativeNames: {
                /**
                 * 数组格式，返回证书的备用域名列表，对应证书的`Subject Alternative Name`字段。
                 */
                SubjectAlternativeName: string[];
            };
        }[];
    };
}
