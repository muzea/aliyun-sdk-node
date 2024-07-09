export interface DeleteSecretRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz*****`
     */
    "ClientToken"?: string;
    /**
     * 地域ID，可通过调用DescribeSecrets接口获取该参数的值。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 已创建的Data API账号的用户凭证，可通过调用createSecret接口获取该参数的值。
     * >**SecretName**和本参数必须传入其一。
     * @example `acs:rds:cn-hangzhou:1335786***:dbInstance/rm-bp1m7l3j63****`
     */
    "SecretArn"?: string;
    /**
     * 用户凭证名称。
     * > * **SecretArn**和本参数必须传入其一。
     * > * 本参数需要和**DbInstanceId**一起传入。
     * @example `Foo`
     */
    "SecretName"?: string;
    /**
     * 数据库类型。
     * > 该参数当前仅支持传入MySQL值。
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * >本参数需要和**SecretName**一起传入。
     * @example `rm-sfjdlsjxxxxx`
     */
    "DbInstanceId"?: string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
