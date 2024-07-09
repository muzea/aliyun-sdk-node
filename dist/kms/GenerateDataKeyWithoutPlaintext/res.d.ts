export interface GenerateDataKeyWithoutPlaintextResponse {
    /**
     * 用于加密明文的密钥版本标志符。是指定CMK的主版本。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * CMK的全局唯一标识符。
     * > 如果请求中的KeyId参数使用的是CMK的别名，在响应中会返回别名对应的CMK标志符。
     * @example `599fa825-17de-417e-9554-bb032cc6****`
     */
    KeyId: string;
    /**
     * 数据密钥被指定CMK的主版本加密后的密文。
     * @example `ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****`
     */
    CiphertextBlob: string;
    /**
     * 本次请求的ID。
     * @example `7021b6ec-4be7-4d3c-8a68-1e85d4d515a0`
     */
    RequestId: string;
}
