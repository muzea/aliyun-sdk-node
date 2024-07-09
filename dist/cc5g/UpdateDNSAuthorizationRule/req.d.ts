export interface UpdateDNSAuthorizationRuleRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * DNS授权规则ID。
     * @example `ar5g-xxxx`
     */
    "AuthorizationRuleId": string;
    /**
     * 名称，长度不超过128字符。
     * @example `test`
     */
    "Name"?: string;
    /**
     * 描述，长度不超过256字符。
     * @example `ar5g-test`
     */
    "Description"?: string;
    /**
     * DNS服务器地址。
     * @example `0.0.0.0`
     */
    "SourceDNSIp"?: string;
    /**
     * 需要重定向的DNS服务器地址。
     * @example `10.0.0.1`
     */
    "DestinationIp"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `TF-******-1633255280-43c94bf7-2dd3-4c14-8`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会更新DNS授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后更新DNS授权规则。
     * @example `true`
     */
    "DryRun"?: boolean;
}
