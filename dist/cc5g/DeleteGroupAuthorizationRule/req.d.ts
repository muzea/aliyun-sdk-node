export interface DeleteGroupAuthorizationRuleRequest {
    /**
     * 实例组实例id。
     * @example `cc5gg-****`
     */
    "WirelessCloudConnectorGroupId": string;
    /**
     * 授权规则id。
     * @example `ar5gg-12fnojjtkkre28t08j`
     */
    "AuthorizationRuleId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建授权规则。
     * @example `true`
     */
    "DryRun"?: boolean;
}
