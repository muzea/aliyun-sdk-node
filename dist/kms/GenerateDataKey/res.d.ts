export interface GenerateDataKeyResponse {
    /**
     * 密钥版本ID。主密钥版本的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * 密钥ID。如果请求中的KeyId参数使用的是密钥别名、密钥ARN，在响应中也会返回密钥ID。
     * @example `key-hzz630494463ejqjx****`
     */
    KeyId: string;
    /**
     * 数据密钥被指定密钥的主版本加密后的密文。
     * @example `ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****`
     */
    CiphertextBlob: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7021b6ec-4be7-4d3c-8a68-1e85d4d515a0`
     */
    RequestId: string;
    /**
     * 数据密钥的明文经过Base64编码后的值。
     * @example `QmFzZTY0IGVuY29kZWQgcGxhaW50****`
     */
    Plaintext: string;
}
