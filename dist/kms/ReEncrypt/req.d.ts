export interface ReEncryptRequest {
    /**
     * 待转加密的密文。
     * 该参数可以为对称加密或非对称加密返回的密文数据。
     * - 对称加密：调用[Encrypt](~~28949~~)、[GenerateDataKey](~~28948~~)、[GenerateDataKeyWithoutPlaintext](~~134043~~)或[GenerateAndExportDataKey](~~176804~~)接口返回的密文数据。
     * - 非对称加密：可以是调用[GenerateAndExportDataKey](~~176804~~)接口返回的公钥加密数据，也可以是外部系统使用非对称公钥加密的数据。
     * @example `ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********`
     */
    "CiphertextBlob": string;
    /**
     * 解密密文时使用的主密钥ID。
     * 主密钥的全局唯一标识符。
     * > 当CiphertextBlob是非对称加密返回的公钥加密数据时需要指定该参数。
     * @example `5c438b18-05be-40ad-b6c2-3be6752c****`
     */
    "SourceKeyId"?: string;
    /**
     * 用于解密密文的密钥版本标识符。
     * > 当CiphertextBlob是非对称加密返回的公钥加密数据时需要指定该参数。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "SourceKeyVersionId"?: string;
    /**
     * CiphertextBlob是公钥加密结果时，指定公钥加密的算法。算法详情，请参见[AsymmetricDecrypt](~~148130~~)。
     * 取值：
     * - RSAES_OAEP_SHA_256
     * - RSAES_OAEP_SHA_1
     * - SM2PKE
     *
     * > 当CiphertextBlob是非对称加密返回的公钥加密数据时需要指定该参数。
     * @example `RSAES_OAEP_SHA_256`
     */
    "SourceEncryptionAlgorithm"?: string;
    /**
     * key/value的JSON字符串。如果在[Encrypt](~~28949~~)、[GenerateDataKey](~~28948~~)、[GenerateDataKeyWithoutPlaintext](~~134043~~)或[GenerateAndExportDataKey](~~176804~~) API中指定了该参数，则需要提供同样的参数才能解密，详情请参见[EncryptionContext说明](~~42975~~)。
     * > 当CiphertextBlob是对称加密返回的密文数据时需要指定该参数。
     * @example `{"Example":"Example"}`
     */
    "SourceEncryptionContext"?: any;
    /**
     * 对密文解密后再次加密时使用的对称主密钥ID。
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "DestinationKeyId": string;
    /**
     * key/value的JSON字符串，用于目标主密钥加密时的加密上下文。
     * @example `{"Example":"Example"}`
     */
    "DestinationEncryptionContext"?: any;
}
