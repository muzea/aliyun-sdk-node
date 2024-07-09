export interface GenerateKMSDataKeyResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 数据密钥信息。
     */
    DataKey: {
        /**
         * 主密钥的全局唯一标识符。
         * @example `7906979c-8e06-46a2-be2d-68e3ccbc****
        `
         */
        KeyId: string;
        /**
         * 数据密钥的明文经过Base64编码后的值。
         * @example `QmFzZTY0IGVuY29kZWQgcGxhaW50****
        `
         */
        Plaintext: string;
        /**
         * 数据密钥被加密后的密文。用于在发起转码时填入CipherText参数。
         * @example `
        ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****`
         */
        CiphertextBlob: string;
    };
}
