export interface CreateSecretRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 地域ID，您可调用DescribeDBInstanceAttribute接口查看实例所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库用户名。
     * @example `user_jack`
     */
    "Username": string;
    /**
     * 数据库密码。
     * @example `12345678`
     */
    "Password": string;
    /**
     * 实例ID，您可调用DescribeDBInstances接口获取该参数的值。
     * @example `rm-sdfljk123****`
     */
    "DbInstanceId": string;
    /**
     * 实例所在的资源组ID，您可调用DescribeDBInstanceAttribute接口获取该参数的值。
     * @example `rg-acfmxypivk****`
     */
    "ResourceGroupId": string;
    /**
     * 数据库名称。
     * @example `users`
     */
    "DbNames"?: string;
    /**
     * 用户对凭证的描述。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 凭证的名称。
     * @example `Foo`
     */
    "SecretName"?: string;
    /**
     * 数据库类型。
     * > 该参数当前仅支持传入MySQL值。
     * @example `MySQL`
     */
    "Engine": string;
}
