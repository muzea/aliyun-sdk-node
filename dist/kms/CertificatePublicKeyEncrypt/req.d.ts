export interface CertificatePublicKeyEncryptRequest {
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `12345678-1234-1234-1234-12345678****`
     */
    "CertificateId": string;
    /**
     * 加密算法，取值：
     * - RSAES_OAEP_SHA_1
     * - RSAES_OAEP_SHA_256
     * - SM2PKE
     *
     * > SM2PKE加密算法仅在中国内地使用托管密码机的地域支持。更多信息，请参见[托管密码机概述](~~125803~~)。
     * @example `RSAES_OAEP_SHA_256`
     */
    "Algorithm": string;
    /**
     * 待加密数据。
     * 使用Base64编码。例如：待加密数据的十六进制内容为`[0x31, 0x32, 0x33, 0x34]`，则对应的Base64编码为`MTIzNA==`。
     * Plaintext数据大小限制根据Algorithm的取值有所不同，具体如下：
     * - RSAES_OAEP_SHA_1：214字节。
     * - RSAES_OAEP_SHA_256：190字节。
     * - SM2PKE：6047字节。
     *
     *
     *
     * 如果需要对超出接口限制的数据进行加密，可以先调用[GenerateDataKey](~~28948~~)接口生成数据加密密钥加密数据，再调用CertificatePublicKeyEncrypt接口加密数据密钥。
     * @example `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`
     */
    "Plaintext": string;
}
