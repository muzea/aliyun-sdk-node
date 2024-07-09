export interface GetPluginsRequest {
    /**
     * 网关ID。
     * @example `gw-0adf3ad751284cc69fcf9669fba*****`
     */
    "GatewayUniqueId": string;
    /**
     * 插件类型：
     * - 自定义：0
     * - 认证权限：1
     * - 安全防护：2
     * - 传输协议：3
     * - 流量管控：4
     * - 流量观测：5
     * @example `1`
     */
    "Category"?: number;
    /**
     * 是否已启用。
     * @example `true`
     */
    "EnableOnly"?: boolean;
    /**
     * 插件名称。
     * @example `key-auth`
     */
    "Name"?: string;
    /**
     * 返回信息的语言类型：
     * zh：中文
     * en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
