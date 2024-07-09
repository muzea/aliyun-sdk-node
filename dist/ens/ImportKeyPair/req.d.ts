export interface ImportKeyPairRequest {
    /**
     * 密钥对名称。命名规则如下所示：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）、或者连字符（-）。
     * 仅支持传单个密钥对。
     * @example `TestKeyPairName`
     */
    "KeyPairName": string;
    /**
     * 密钥对的公钥内容。仅支持传单个内容。
     * @example `ssh-rsa AAAAB****`
     */
    "PublicKeyBody": string;
}
