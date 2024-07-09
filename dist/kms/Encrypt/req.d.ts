export interface EncryptRequest {
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     *
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 待加密明文（必须经过Base64编码）。
     * @example `SGVsbG8gd29y****`
     */
    "Plaintext": string;
    /**
     * key/value的JSON字符串。如果指定了该参数，则在调用Decrypt时需要提供同样的参数，详情请参见[EncryptionContext说明](~~42975~~)。
     *
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
}
