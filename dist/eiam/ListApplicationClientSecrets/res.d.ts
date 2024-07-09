export interface ListApplicationClientSecretsResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 密钥信息。
     */
    ApplicationClientSecrets: {
        /**
         * 实例ID。
         * @example `idaas_wdziy4vnjt33ehhf7z2o2nxxxx`
         */
        InstanceId: string;
        /**
         * 应用ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx
        `
         */
        ApplicationId: string;
        /**
         * 应用的客户端ID。
         * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
         */
        ClientId: string;
        /**
         * 应用的客户端密钥ID。
         * @example `sci_k52x2ru63rlkflina5utgkxxxx`
         */
        SecretId: string;
        /**
         * 应用的客户端密钥secret（返回的ClientSecret已被脱敏）。
         * @example `eyJh*****************************************************************************************************OQ`
         */
        ClientSecret: string;
        /**
         * 客户端密钥状态，取值可选范围：
         * - enabled：启用中。
         * - disabled：禁用中。
         * @example `enabled`
         */
        Status: string;
        /**
         * 客户端密钥最近使用时间，Unix时间戳格式，单位为毫秒。
         * @example `1649830226000`
         */
        LastUsedTime: number;
    }[];
}
