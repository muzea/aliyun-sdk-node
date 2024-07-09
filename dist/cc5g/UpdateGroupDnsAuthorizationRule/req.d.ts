export interface UpdateGroupDnsAuthorizationRuleRequest {
    /**
     * 实例组id。
     * @example `cc5gg-****`
     */
    "WirelessCloudConnectorGroupId": string;
    /**
     * DNS授权规则id。
     * @example `ar5gg-xxxx`
     */
    "AuthorizationRuleId": string;
    /**
     * DNS授权规则名称。
     * 长度为2~128个英文或中文字符，开头必须为大小写英文字母或中文，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `test`
     */
    "Name"?: string;
    /**
     * DNS授权规则描述。
     * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为http://或https://。
     * @example `description`
     */
    "Description"?: string;
    /**
     * 源DNS授权规则IP地址。包括但不限于以下取值：
     * 100.100.2.136，100.100.2.137，100.100.2.138，114.114.114.114，8.8.8.8，8.8.4.4，223.5.5.5，223.6.6.6，221.5.88.88，116.116.116.116，221.228.15.26，61.139.2.69，218.6.200.139，119.29.29.29，218.2.2.2，208.67.220.220，208.67.222.222，218.4.4.4。
     * @example `100.100.2.136
    `
     */
    "SourceDNSIp"?: string;
    /**
     * 目标DNS授权规则IP地址。
     * @example `192.168.0.2
    `
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
     * - **true**：发送检查请求，不会创建授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接创建授权规则。
     * @example `true`
     */
    "DryRun"?: boolean;
}
