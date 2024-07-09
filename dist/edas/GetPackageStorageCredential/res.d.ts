export interface GetPackageStorageCredentialResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * 认证信息。
     */
    Credential: {
        /**
         * OSS的存储Key前缀。
         * @example `release-pkg/117274586608****`
         */
        KeyPrefix: string;
        /**
         * STS安全令牌。
         * @example `<yourSecurityToken>`
         */
        SecurityToken: string;
        /**
         * 用户的AccessKey Secret。
         * @example `<yourAccessKeySecret>`
         */
        AccessKeySecret: string;
        /**
         * 超期时间信息，如：2019-11-10T07:20:19Z。
         * @example `2019-11-10T07:20:19Z`
         */
        Expiration: string;
        /**
         * 用户的AccessKey ID。
         * @example `<yourAccessKeyId>`
         */
        AccessKeyId: string;
        /**
         * OSS的Bucket。
         * @example `edas-bj`
         */
        Bucket: string;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * OSS的公网访问地址。
         * @example `oss-cn-beijing.aliyuncs.com`
         */
        OssPublicEndpoint: string;
        /**
         * OSS的私网访问地址。
         * @example `oss-cn-beijing-internal.aliyuncs.com`
         */
        OssInternalEndpoint: string;
        /**
         * OSS的VPC访问地址。
         * @example `oss-cn-beijing-internal.aliyuncs.com`
         */
        OssVpcEndpoint: string;
    };
}
