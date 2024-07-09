export interface DecryptResponse {
    /**
     * 主密钥下用于解密密文的密钥版本标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyVersionId: string;
    /**
     * 解密密文使用的主密钥ID。
     * 主密钥的全局唯一标识符。
     * @example `202b9877-5a25-46e3-a763-e20791b5****`
     */
    KeyId: string;
    /**
     * 请求ID。
     * @example `207596a2-36d3-4840-b1bd-f87044699bd7`
     */
    RequestId: string;
    /**
     * 解密后的明文。
     * @example `tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****`
     */
    Plaintext: string;
}
