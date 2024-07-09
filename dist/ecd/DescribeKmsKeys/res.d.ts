export interface DescribeKmsKeysResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * KMS服务状态。
     * @example `enabled`
     */
    KmsServiceStatus: string;
    /**
     * 授权状态。
     * @example `authorized`
     */
    AuthorizeStatus: string;
    /**
     * 用户主密钥CMK（Customer Master Key）。
     */
    Keys: {
        /**
         * 密钥ID。
         * @example `05754286-3ba2-4fa6-8d41-4323aca6****`
         */
        KeyId: string;
        /**
         * ARN资源描述。
         * @example `acs:kms:cn-hangzhou:154035569884****:key/05754286-3ba2-4fa6-8d41-4323aca6****`
         */
        Arn: string;
        /**
         * 密钥别名。
         * @example `TestAlias`
         */
        Alias: string;
        /**
         * 密钥类型。
         * @example `ServiceKey`
         */
        Type: string;
    }[];
}
