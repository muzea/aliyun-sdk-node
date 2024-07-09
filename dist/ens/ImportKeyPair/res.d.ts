export interface ImportKeyPairResponse {
    /**
     * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。
     * @example `fdaf8ff7a756ef843814fc****`
     */
    KeyPairFingerPrint: string;
    /**
     * 密钥对名称。
     * @example `TestKeyPairName`
     */
    KeyPairName: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
