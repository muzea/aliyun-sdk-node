export interface ImportKeyPairRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 密钥对名称。必须保持名称唯一性。 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `testKeyPairName`
     */
    "KeyPairName": string;
    /**
     * 密钥对的公钥内容。
     * @example `ABC1234567`
     */
    "PublicKeyBody": string;
}
