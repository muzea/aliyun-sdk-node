export interface CreateAclRequest {
    /**
     * 全球加速实例所在的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组的名称。
     * 名称长度为 1~128 个字符，以大小写字母或中文开头，可包含数字、半角句号（.）下划线（_）和短划线（-）。
     * @example `test-acl`
     */
    "AclName"?: string;
    /**
     * 访问控制策略组的IP版本。取值：
     * - **IPv4**。
     * - **IPv6**。
     * @example `IPv4`
     */
    "AddressIPVersion": string;
    /**
     * 访问控制策略组条目，即IP地址条目或IP地址段条目。
     * 一次最多支持添加50个条目。
     */
    "AclEntries"?: {
        /**
         * 访问控制策略组条目，即IP地址条目(192.168.XX.XX)或IP地址段条目(10.0.XX.XX/24)。
         * 一次最多支持添加50个条目。
         * @example `10.0.XX.XX/24`
         */
        Entry: string;
        /**
         * 访问控制策略组条目备注内容。
         * 一次最多支持添加50个条目备注。
         * 长度限制为1~256个字符，允许包含字母、数字、短划线（-）、正斜线（/）、半角句号（.）和下划线（_），支持中文字符。
         * @example `test-entry`
         */
        EntryDescription: string;
    }[];
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B3FF3898`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建访问控制策略组。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmwj7wvng3jbi`
     */
    "ResourceGroupId"?: string;
    /**
     * 访问控制策略组的标签信息。
     */
    "Tag"?: {
        /**
         * 访问控制策略组的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 访问控制策略组的标签值。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 最多支持输入20个标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
