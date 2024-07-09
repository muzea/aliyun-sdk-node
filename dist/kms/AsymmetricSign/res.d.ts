export interface AsymmetricSignResponse {
    /**
     * 密钥版本ID。密钥版本的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * 主密钥的全局唯一标识符。
     * > 如果请求中的KeyId参数使用的是主密钥的别名，在响应中会返回别名对应的主密钥标识符。
     * @example `5c438b18-05be-40ad-b6c2-3be6752c****`
     */
    KeyId: string;
    /**
     * 计算出来的签名。
     * > 使用Base64编码。
     * @example `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==`
     */
    Value: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `475f1620-b9d3-4d35-b5c6-3fbdd941423d`
     */
    RequestId: string;
}
