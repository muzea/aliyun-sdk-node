export interface GetArtifactRepositoryCredentialsResponse {
    /**
     * 请求的ID。
     * @example `94E89857-B994-44B6-9C4F-DBD200E9XXXX`
     */
    RequestId: string;
    /**
     * 过期时间。
     * @example `1526549792000`
     */
    ExpireDate: string;
    /**
     * 访问凭证。
     */
    Credentials: {
        /**
         * 用户名称。
         * @example `xxx`
         */
        Username: string;
        /**
         * 密码。
         * @example `eyJ0aW1lIjoiMTUyNjU0OTc5:0705733****`
         */
        Password: string;
        /**
         * 访问密钥ID。
         * @example `STS.xxx`
         */
        AccessKeyId: string;
        /**
         * 访问密钥secret值。
         * @example `xxx`
         */
        AccessKeySecret: string;
        /**
         * 安全令牌。
         * @example `xxx`
         */
        SecurityToken: string;
    };
    /**
     * 可上传的资源信息。
     */
    AvailableResources: {
        /**
         * 地域ID。
         * @example `oss-cn-hangzhou`
         */
        RegionId: string;
        /**
         * 仓库名称。
         * @example `computenest-artifacts-draft-cn-hangzhou`
         */
        RepositoryName: string;
        /**
         * 路径。
         * @example `"/xxx/"`
         */
        Path: string;
    }[];
}
