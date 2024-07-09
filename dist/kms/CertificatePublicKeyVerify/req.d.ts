export interface CertificatePublicKeyVerifyRequest {
    /**
     * 证书ID。证书管家中证书的全局唯一标识符。
     * @example `12345678-1234-1234-1234-12345678****`
     */
    "CertificateId": string;
    /**
     * 签名算法。取值：
     * - RSA_PKCS1_SHA_256
     * - RSA_PSS_SHA_256
     * - ECDSA_SHA_256
     * - SM2DSA
     *
     * > SM2DSA签名算法仅在中国内地使用托管密码机的地域支持。更多信息，请参见[托管密码机概述](~~125803~~)。
     * @example `ECDSA_SHA_256`
     */
    "Algorithm": string;
    /**
     * 原始签名数据。
     * 使用Base64编码。例如：原始签名数据的十六进制内容为`[0x31, 0x32, 0x33, 0x34]`，则对应的Base64编码为`MTIzNA==`。
     * 当MessageType取值为RAW时，数据内容需小于4KB。
     * 如果待签名数据内容大于4KB，您可以将MessageType指定为DIGEST，将Message指定为本地计算的消息摘要（又称哈希值）。证书管家将使用您自己的证书应用系统计算消息摘要，使用的消息摘要算法须与指定签名算法需要的消息摘要算法保持一致。具体如下：
     * - RSA_PKCS1_SHA_256、RSA_PSS_SHA_256和ECDSA_SHA_256对应的消息摘要算法为SHA-256。
     * - SM2DSA对应的消息摘要算法为SM3。
     * > 当证书密钥规格为EC_SM2，并且MessageType为DIGEST时，Message值为GB/T 32918.2-2016 6.1中描述的`e`。
     * @example `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`
     */
    "Message": string;
    /**
     * 消息类型。取值：
     * - RAW（默认值）：原始数据。
     * - DIGEST：原始数据的消息摘要（哈希值）。
     * @example `RAW`
     */
    "MessageType": string;
    /**
     * 签名值。
     * 使用Base64编码。
     * @example `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`
     */
    "SignatureValue": string;
}
