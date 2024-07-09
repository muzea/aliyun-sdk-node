export interface UpdateGatewayServiceVersionRequest {
    /**
     * 服务ID。
     * @example `575`
     */
    "ServiceId": number;
    /**
     * 服务版本。
     * @example `{\"name\":\"v3\",\"labels\":[{\"key\":\"version\",\"value\":\"v3\"}]}`
     */
    "ServiceVersion": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-eccf313e2224438ba53d95d039e5****`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
