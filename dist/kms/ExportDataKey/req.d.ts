export interface ExportDataKeyRequest {
    /**
     * 主密钥（CMK）加密的数据密钥的密文。
     * @example `ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********`
     */
    "CiphertextBlob": string;
    /**
     * key/value的JSON字符串。EncryptionContext是使用CMK加密数据密钥时传入的加密上下文，详情请参见[EncryptionContext说明](~~42975~~)。
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
    /**
     * Base64格式的公钥。
     * @example `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********`
     */
    "PublicKeyBlob": string;
    /**
     * PublicKeyBlob的密钥类型。密钥类型详情，请参见[非对称密钥简介](~~148147~~)。
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
