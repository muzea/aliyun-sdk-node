export interface CreateKeyPairResponse {
    /**
     * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。详情请参见[RFC4716](https://tools.ietf.org/html/rfc4716)。
     * @example `7880c1ad4687fdbf7a6da2131****`
     */
    KeyPairFingerPrint: string;
    /**
     * SSH密钥对的ID。
     * @example `ssh-5lywanlkih1zo9yl8eg****`
     */
    KeyPairId: string;
    /**
     * 密钥对名称。
     * @example `TestKeyPairName`
     */
    KeyPairName: string;
    /**
     * 密钥对的私钥。PEM编码的PKCS#8格式的私钥部分。
     * @example `-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQE****`
     */
    PrivateKeyBody: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
