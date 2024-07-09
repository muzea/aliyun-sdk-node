export interface GetPluginConfigRequest {
    /**
     * 网关UniqueId。
     * @example `gw-ubuwqygbq4783gqb2y3f87q****
    `
     */
    "GatewayUniqueId": string;
    /**
     * 网关插件ID。
     * @example `123`
     */
    "PluginId": number;
    /**
     * 返回信息的语言类型：
     * zh：中文
     * en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
