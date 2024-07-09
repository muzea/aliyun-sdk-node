export interface DecryptRequest {
    /**
     * 待解密的密文。
     * 密文可以通过以下API生成：
     * - [GenerateDataKey](~~28948~~)
     * - [Encrypt](~~28949~~)
     * - [GenerateDataKeyWithoutPlaintext](~~134043~~)
     * @example `DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****`
     */
    "CiphertextBlob": string;
    /**
     * key/value的JSON字符串。
     * > 如果在调用[GenerateDataKey](~~28948~~)、[Encrypt](~~28949~~)或[GenerateDataKeyWithoutPlaintext](~~134043~~)加密时指定了EncryptionContext，则需要在解密时提供同样的参数。更多信息，请参见[EncryptionContext说明](~~42975~~)。
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
}
