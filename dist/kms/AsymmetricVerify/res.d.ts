export interface AsymmetricVerifyResponse {
    /**
     * 对明文数据进行加密的主密钥版本号。
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
     * 签名验证是否通过。
     * @example `true`
     */
    Value: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `475f1620-b9d3-4d35-b5c6-3fbdd941423d`
     */
    RequestId: string;
}
