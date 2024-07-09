export interface AsymmetricSignRequest {
    /**
     * 主密钥（CMK）的全局唯一标识符。
     * > 该参数也可以被指定为主密钥绑定的别名。更多信息，请参见[别名使用说明](~~68522~~)。
     * @example `5c438b18-05be-40ad-b6c2-3be6752c****`
     */
    "KeyId": string;
    /**
     * 密钥版本ID。密钥版本的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "KeyVersionId": string;
    /**
     * 签名算法。
     * @example `RSA_PSS_SHA_256`
     */
    "Algorithm": string;
    /**
     * 使用Algorithm中对应的哈希算法，对原始消息生成的摘要。
     * > - 使用Base64编码。
     * > - 关于如何计算消息摘要，请参见[非对称数字签名](~~148146~~)的**签名预处理：计算消息摘要**章节。
     * @example `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiu****=`
     */
    "Digest": string;
}
