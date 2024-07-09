export interface AsymmetricDecryptRequest {
    /**
     * 解密密文，使用Base64编码。
     * > 您可以调用[AsymmetricEncrypt](~~148131~~)接口生成密文。
     * @example `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`
     */
    "CiphertextBlob": string;
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 密钥版本ID。密钥版本的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "KeyVersionId": string;
    /**
     * 解密算法。
     * @example `RSAES_OAEP_SHA_1`
     */
    "Algorithm": string;
}
