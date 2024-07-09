export interface AsymmetricEncryptRequest {
    /**
     * 要加密的明文，使用Base64编码。
     * @example `SGVsbG8gd29ybGQ=`
     */
    "Plaintext": string;
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 密钥版本ID。密钥版本的全局唯一标识符。
     * > 您可以调用[ListKeyVersions](~~133966~~)接口获取KeyVersionId（密钥版本ID）。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "KeyVersionId": string;
    /**
     * 加密算法。
     * @example `RSAES_OAEP_SHA_1`
     */
    "Algorithm": string;
}
