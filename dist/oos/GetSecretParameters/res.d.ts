export interface GetSecretParametersResponse {
    /**
     * 请求ID
     * @example `A5320F1D-92D9-44BB-A416-5FC525ED6D57`
     */
    RequestId: string;
    /**
     * 无效的参数
     */
    InvalidParameters: string[];
    /**
     * 参数信息
     */
    Parameters: {
        /**
         * 参数类型
         * @example `Secret`
         */
        Type: string;
        /**
         * 参数更新时间
         * @example `2020-10-22T03:11:13Z`
         */
        UpdatedDate: string;
        /**
         * 参数更新者
         * @example `root(130900000)`
         */
        UpdatedBy: string;
        /**
         * 密钥ID
         * @example `ssh-bp67acfmxazb4p****`
         */
        KeyId: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 参数值
         * @example `secretParameter,secretParameter1`
         */
        Value: string;
        /**
         * 参数的描述信息
         * @example `secretParameter`
         */
        Description: string;
        /**
         * 参数的约束条件
         * @example `{\"AllowedValues\": [\"test\"]}`
         */
        Constraints: string;
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
         * @example `2020-10-22T03:11:13Z`
         */
        CreatedDate: string;
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 参数名称
         * @example `MySecretParameter`
         */
        Name: string;
        /**
         * 参数ID
         * @example `p-7cdc0000000000000000`
         */
        Id: string;
        /**
         * 参数共享类型
         * @example `Private`
         */
        ShareType: string;
    }[];
}
