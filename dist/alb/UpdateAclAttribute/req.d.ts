export interface UpdateAclAttributeRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B******`
     */
    "ClientToken"?: string;
    /**
     * ACL实例ID
     * @example `acl-hp34s2h0xx1ht4nwo****`
     */
    "AclId": string;
    /**
     * ACL的名称。必须以大小写字母或中文开头，可包含数字，半角句号（.），下划线（_）和短划线（-），限制长度为2~128个字符。
     * @example `test-acl`
     */
    "AclName": string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP `2xx`状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
}
