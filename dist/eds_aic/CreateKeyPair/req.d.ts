export interface CreateKeyPairRequest {
    /**
     * 密钥对名称。长度为 2~128 个英文或中文字符。必须以大小字母或中文开头，不能以http://或https://开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * @example `testKeyPairName`
     */
    "KeyPairName": string;
}
