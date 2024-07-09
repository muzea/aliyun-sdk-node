export interface GetSecretParameterResponse {
    /**
     * 请求ID。
     * @example `7F14FB7C-C9BE-44AE-92ED-21ACC02FBFD2`
     */
    RequestId: string;
    /**
     * 加密参数信息
     */
    Parameter: {
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
         * 加密使用的KMS 的KeyId
         * @example `80e9409f-78fa-42ab-84bd-83f40c******`
         */
        KeyId: string;
        /**
         * 标签
         * @example `{"k1": "v1", "k2": "v2"}`
         */
        Tags: any;
        /**
         * 参数内容
         * @example `SecretParameter`
         */
        Value: string;
        /**
         * 参数描述信息
         * @example `SecretParameter`
         */
        Description: string;
        /**
         * 参数约束条件
         * @example `'{''AllowedValues":["secretparameter"],"AllowedPattern":".*","MinLength":0,"MaxLength":20}'`
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
         * @example `2020-09-01T09:28:47Z`
         */
        CreatedDate: string;
        /**
         * 参数版本号
         * @example `1`
         */
        ParameterVersion: number;
        /**
         * 加密参数名称
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
        /**
         * KMS实例的实例ID。
         * @example `kst-hzz****`
         */
        DKMSInstanceId: string;
    };
}
