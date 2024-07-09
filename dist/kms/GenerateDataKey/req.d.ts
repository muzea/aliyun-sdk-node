export interface GenerateDataKeyRequest {
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     *
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 指定生成的数据密钥的长度，取值：
     * - AES_256：256比特的对称密钥。
     * - AES_128：128比特的对称密钥。
     * > 建议使用KeySpec或者NumberOfBytes来指定数据密钥长度。如果两者都不指定，KMS生成256比特的数据密钥；如果两者都被指定，KMS会忽略KeySpec参数。
     * @example `AES_256`
     */
    "KeySpec"?: string;
    /**
     * 指定生成的数据密钥的长度，单位为字节。
     * 取值：1~1024。
     * 默认值：
     * - 当KeySpec取值为AES_256时，NumberOfBytes默认值为32。
     * - 当KeySpec取值为AES_128时，NumberOfBytes默认值为16。
     * @example `256`
     */
    "NumberOfBytes"?: number;
    /**
     * key/value对的JSON字符串。
     * 如果指定了该参数，则在调用[Decrypt](~~28950~~)接口时需要提供同样的参数。更多信息，请参见[EncryptionContext](~~42975~~)。
     *
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
}
