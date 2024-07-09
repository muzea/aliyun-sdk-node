export interface ListKeyPairsRequest {
    /**
     * 密钥对所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 密钥对名称。
     * @example `testKeyPair`
     */
    "KeyPairName"?: string;
    /**
     * 密钥对的指纹。根据RFC4716定义的公钥指纹格式，采用MD5信息摘要算法。
     * @example `ABC1234567`
     */
    "KeyPairFingerPrint"?: string;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值，初次调用无需配置。
     * @example `ADBAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数。取值范围：1~100。
     * @example `50`
     */
    "MaxResults"?: number;
}
