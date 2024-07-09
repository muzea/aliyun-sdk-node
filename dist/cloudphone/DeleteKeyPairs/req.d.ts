export interface DeleteKeyPairsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云手机密钥对名称。取值可以由多个密钥对名称组成一个JSON数组，最多支持100对SSH密钥对，名称之间用半角逗号（,）隔开。
     * @example `[keyPairName1, keyPairNam2, keyPairName3]`
     */
    "KeyPairName": string[];
}
