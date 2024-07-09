export interface EncryptRequest {
    /**
     * 待加密数据。
     * 可以是原文，也可以对原文进行Base64。具体参考MessageType字段。
     * 如果使用Base64编码，例如：待加密数据的十六进制内容为`[0x31, 0x32, 0x33, 0x34]`，则对应的Base64编码为MTIzNA==。
     * Plaintext数据大小限制根据Algorithm的取值有所不同，具体如下：
     * - **RSAES_OAEP_SHA_1**：214字节。
     * - **RSAES_OAEP_SHA_256**：190字节。
     * - **SM2PKE**：6047字节。
     * @example `1234***`
     */
    "Plaintext": string;
    /**
     * 证书唯一识别码。该参数可通过调用[ListCert](~~455806~~)获取。
     * - SSL证书识别码一般为{证书ID}-cn-hangzhou。
     * - PCA证书为对应私有证书的Identifier字段。
     * @example `1ef1da5f-38ed-69b3-****-037781890265`
     */
    "CertIdentifier": string;
    /**
     * 加密算法，取值：
     * - **RSAES_OAEP_SHA_1**
     * - **RSAES_OAEP_SHA_256**
     * - **SM2PKE**
     * @example `RSAESOAEPSHA_1`
     */
    "Algorithm": string;
    /**
     * 消息类型。取值：
     * - RAW（默认值）：将会对Plaintext直接加密操作。
     * - Base64：Plaintext为base64编码格式，将会对Plaintext base64解密之后再进行加密操作。
     * @example `RAW`
     */
    "MessageType"?: string;
}
