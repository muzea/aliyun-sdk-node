export interface AddGatewayServiceVersionRequest {
    /**
     * 服务ID。
     * @example `33`
     */
    "ServiceId"?: number;
    /**
     * 服务版本。
     * @example `{\"name\":\"v1\",\"labels\":[{\"key\":\"version\",\"value\":\"v1\"}]}`
     */
    "ServiceVersion"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-913a49bab6c5461187a3305fb8da****`
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
