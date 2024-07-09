export interface ReEncryptResponse {
    /**
     * 解密密文使用的主密钥ID。
     * 主密钥的全局唯一标识符。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    KeyId: string;
    /**
     * 主密钥下用于解密密文的密钥版本标识符。
     * @example `202b9877-5a25-46e3-a763-e20791b5****`
     */
    KeyVersionId: string;
    /**
     * 使用指定的主密钥进行再次加密得到的密文。
     * @example `DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****`
     */
    CiphertextBlob: string;
    /**
     * 请求ID。
     * @example `207596a2-36d3-4840-b1bd-f87044699bd7`
     */
    RequestId: string;
}
