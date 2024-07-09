export interface ListSecretsRequest {
    /**
     * 返回值中是否包含凭据的资源标签。取值：
     * - true：包含。
     * - false（默认值）：不包含。
     * @example `false`
     */
    "FetchTags"?: string;
    /**
     * 当前页数。
     * 取值范围：大于0。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回值的个数。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 查询符合指定条件的凭据。
     * 由Key-Values键值对组成，长度为0~10。使用一个标签键值过滤资源时，查询到的资源数量不能超过4000个。如果资源数量超过4000个，请使用[ListResourceTags](~~120090~~)接口进行查询。
     * - Key
     *     - 描述：需要查询的属性。
     *     - 类型：String。
     *     - 取值：
     *         - SecretName：凭据名称。
     *         - Description：凭据描述。
     *         - TagKey：标签键。
     *         - TagValue：标签值。
     *         - DKMSInstanceId：KMS实例的实例ID。
     *         - SecretType：凭据类型。
     *
     * - Values
     *     - 描述：属性的具体取值。
     *     - 类型：String。
     *     - 长度：0~10。
     *     - 取值说明：
     *         - Key取值为SecretName时：长度为1~192个字符，可包含英文字母、数字和特殊字符
     * `_/+=.@-`。
     *         - Key取值为Description时：长度为1~256个字符。
     *         - Key取值为TagKey时：长度为1~256个字符，可包含英文字母、数字和特殊字符`/_\-\.+=@:`。
     *         - Key取值为TagValue时：长度为1~256个字符，可包含英文字母、数字和特殊字符 `/_\-\.+=@:`。
     *         - Key取值为DKMSInstanceId时：KMS实例的实例ID，例如kst-xxx。
     *         - Key取值为SecretType时：凭据类型，取值为Generic、Rds、RAMCredentials、ECS。
     * Filters同一个Key中的多个Value之间的逻辑关系为OR。例如：输入`[
     *   {"Key":"SecretName", "Values":["sec1","sec2"]}
     * ]`时，语义为：  `(SecretName=sec1 OR SecretName=sec2) `。
     * @example `[{"Key":"SecretName", "Values":["Val1","Val2"]}]`
     */
    "Filters"?: string;
}
