export interface GenerateDataKeyWithoutPlaintextRequest {
    /**
     * 主密钥（CMK）的全局唯一标识符。该参数也可以被指定为CMK绑定的别名，详情请参见别名使用说明。
     *
     * @example `1234abcd-12ab-34cd-56ef-12345678****`
     */
    "KeyId": string;
    /**
     *  指定生成的数据密钥的长度，取值：
     * - AES_256：256位的对称密钥
     * - AES_128：128位的对称密钥
     * > 建议使用KeySpec或者NumberOfBytes来指定数据密钥长度。如果两者都不指定，KMS生成256位的数据密钥；如果两者都被指定，KMS会忽略KeySpec参数。
     * @example `AES_256`
     */
    "KeySpec"?: string;
    /**
     * 指定生成的数据密钥的长度。
     * 取值：1~1024。
     * 单位：字节
     * @example `256`
     */
    "NumberOfBytes"?: number;
    /**
     * key/value对的JSON字符串，如果指定了该参数，则在调用Decrypt 时需要提供同样的参数，详情请参见[EncryptionContext说明](~~42975~~)。
     *
     * @example `{"Example":"Example"}`
     */
    "EncryptionContext"?: any;
}
