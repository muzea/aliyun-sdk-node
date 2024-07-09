export interface DeleteKeyPairsRequest {
    /**
     * 密钥对名称。命名规则如下所示：
     * - 长度为2~128个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）、或者连字符（-）。
     * 在进行删除密钥对前，您可以调用DescribeKeyPairs查询已有密钥对。
     * @example `TestKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * SSH密钥对的ID。
     * @example `ssh-5lywanlkih1zo9yl8eg****`
     */
    "KeyPairId"?: string;
}
