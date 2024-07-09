export interface ImportKeyPairResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 密钥对名称。
     * @example `testKeyPairName`
     */
    KeyPairName: string;
    /**
     * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。
     * @example `89:f0:ba:62:ac:b8:aa:e1:61:5e:fd:81:69:86:6d:6b:f0:c0:5a:**`
     */
    KeyPairFingerPrint: string;
}
