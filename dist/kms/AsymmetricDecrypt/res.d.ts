export interface AsymmetricDecryptResponse {
    /**
     * 对明文数据进行加密的主密钥版本号。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中也会返回密钥ID。
     * @example `key-hzz630494463ejqjx****`
     */
    KeyId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `475f1620-b9d3-4d35-b5c6-3fbdd941423d`
     */
    RequestId: string;
    /**
     * 解密后的明文，使用Base64编码。
     * @example `SGVsbG8gd29ybGQ=`
     */
    Plaintext: string;
}
