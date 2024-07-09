export interface SignRequest {
    /**
     * 待签名数据。使用Base64编码。
     * 例如：待签名数据的十六进制内容为[0x31,0x32, 0x33, 0x34]，则对应的Base64编码为MTIzNA==。当MessageType取值为RAW时，数据内容需小于4KB。如果待签名数据内容大于4KB，您可以将MessageType指定为DIGEST，将Message指定为本地计算的消息摘要（又称哈希值）。证书管家将使用您自己的证书应用系统计算消息摘要，使用的消息摘要算法须与指定签名算法需要的消息摘要算法保持一致。具体如下：
     * - SHA256withRSA、SHA256withRSA/PSS、SHA256withECDSA对应的消息摘要算法为SHA-256。
     * - SM3withSM2对应的消息摘要算法为SM3。
     * @example `MTIzNA==`
     */
    "Message": string;
    /**
     * 证书唯一识别码。该参数可通过调用[ListCert](~~455806~~)获取。
     * - SSL证书识别码一般为{证书ID}-cn-hangzhou。
     * - PCA证书为对应私有证书的Identifier字段。
     * @example `1ef1da5f-38ed-69b3-****-037781890265`
     */
    "CertIdentifier": string;
    /**
     * 签名算法。取值：
     * - SHA256withRSA
     * - SHA256withRSA/PSS
     * - SHA256withECDSA
     * - SM3withSM2
     * @example `SHA256withRSA`
     */
    "SigningAlgorithm": string;
    /**
     * 消息类型。取值：
     * - RAW（默认值）：原始数据。
     * - DIGEST：原始数据的消息摘要（哈希值）。
     * @example `RAW`
     */
    "MessageType": string;
}
