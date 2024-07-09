export interface GrantNetLinkRequest {
    /**
     * 5G高速上云实例id。
     * @example `cc5g-xxxx`
     */
    "WirelessCloudConnectorId": string;
    /**
     * 网络连接id。
     * @example `cciot-xxxx`
     */
    "NetLinkId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId可能不一样。
     * @example `f0ba469f-de7f-4dde-8390-0966a1a0ef9a`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除授权规则。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接删除授权规则。
     * @example `False`
     */
    "DryRun"?: boolean;
    /**
     * 阿里云授权者UID。
     * @example `11111111111`
     */
    "GrantAliUid": number;
}
