export interface EnableProxyProtocolRequest {
    /**
     * 网关唯一ID
     * @example `gw-c9bc5afd61014165bd58f621b491*****`
     */
    "GatewayUniqueId": string;
    /**
     * 是否使用ProxyProtocol方式开启保持客户端源IP功能，取值：
     * - **true**：开启保持客户端源IP功能。
     * - **false**（默认值）：不开启保持客户端源IP功能。
     * @example `true`
     */
    "EnableProxyProtocol": boolean;
    /**
     * 返回结果显示的语言。取值：zh（默认值）：中文，en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
