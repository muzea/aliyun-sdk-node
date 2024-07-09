export interface GenerateAndExportDataKeyRequest {
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "KeyId": string;
    /**
     * 指定生成的数据密钥的长度，取值：
     * - AES_256：256位的对称密钥。
     * - AES_128：128位的对称密钥。
     * > 建议使用KeySpec或者NumberOfBytes来指定数据密钥长度。如果两者都不指定，KMS生成256位的数据密钥；如果两者都被指定，KMS会忽略KeySpec参数。
     * @example `AES_256`
     */
    "KeySpec"?: string;
    /**
     * 指定生成的数据密钥的长度。
     * 取值：1~1024。
     * 单位：字节。
     * @example `32`
     */
    "NumberOfBytes"?: number;
    /**
     * key/value对的JSON字符串，如果指定了该参数，则在解密或者使用其他密钥转加密时需要提供同样的参数，详情请参见[EncryptionContext说明](~~42975~~)。
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
    /**
     * Base64编码的公钥。
     * @example `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********`
     */
    "PublicKeyBlob": string;
    /**
     * PublicKeyBlob密钥的类型。密钥类型详情，请参见[非对称密钥简介](~~148147~~)。
     * 取值：
     * - RSA_2048
     * - EC_SM2
     *
     * @example `RSA_2048`
     */
    "WrappingKeySpec": string;
    /**
     * 使用PublicKeyBlob所指定的公钥，加密（Wrap）数据密钥时的加密算法。算法详情，请参见[AsymmetricDecrypt](~~148130~~)。
     * 取值：
     * - RSAES_OAEP_SHA_256
     * - RSAES_OAEP_SHA_1
     * - SM2PKE
     *
     * @example `RSAES_OAEP_SHA_256`
     */
    "WrappingAlgorithm": string;
}
