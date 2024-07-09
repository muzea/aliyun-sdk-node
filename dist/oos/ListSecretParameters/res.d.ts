export interface ListSecretParametersResponse {
    /**
     * 翻页标记的Token
     * @example `sPH90GZOVGC6KPDUL0FIIbEtMQHq_19S6_4O_XqA`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `CA9C6248-AF2A-4AE9-A166-88FD901BBB90`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 加密参数信息
     */
    Parameters: {
        /**
         * 参数类型
         * @example `Secret`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-09-01T09:35:17Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 加密使用的KMS的KeyId
         * @example `80e9409f-78fa-42ab-84bd-83f40c******`
         */
        KeyId: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 参数描述信息
         * @example `SecretParameter`
         */
        Description: string;
        /**
         * 资源组ID
         * @example `rg-acfmxsn4m4******`
         */
        ResourceGroupId: string;
        /**
         * 参数创建者
         * @example `root(130900000)`
         */
        CreatedBy: string;
        /**
         * 参数创建时间
         * @example `2020-09-01T09:28:47Z`
         */
        CreatedDate: string;
        /**
         * 参数版本
         * @example `1`
         */
        ParameterVersion: string;
        /**
         * 参数名称
         * @example `MySecretParameter`
         */
        Name: string;
        /**
         * 加密参数Id
         * @example `p-14ed150fdcd048xxxxxx`
         */
        Id: string;
        /**
         * 参数共享类型
         * @example `Private`
         */
        ShareType: string;
    }[];
}
