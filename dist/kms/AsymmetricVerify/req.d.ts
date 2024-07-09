export interface AsymmetricVerifyRequest {
    /**
     * 主密钥（CMK）的全局唯一标识符。
     * > 该参数也可以被指定为主密钥绑定的别名。更多信息，请参加见[别名使用说明](~~68522~~)。
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
     * 使用**Algorithm**中对应的哈希算法，对原始消息生成的摘要。
     * > 使用Base64编码。
     * @example `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=`
     */
    "Digest": string;
    /**
     * 待验证的签名值。
     * > 使用Base64编码。
     * @example `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==`
     */
    "Value": string;
}
