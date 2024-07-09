export interface UpdateGatewayNameRequest {
    /**
     * 网关名称。
     * @example `demo-test`
     */
    "Name"?: string;
    /**
     * 网关唯一ID。
     * @example `gw-1cef54brvecdb419fb264d4f9b8c`
     */
    "GatewayUniqueId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
