export interface DeleteGatewayServiceVersionRequest {
    /**
     * 服务ID。
     * @example `777`
     */
    "ServiceId": number;
    /**
     * 服务版本。
     * @example `{\"name\":\"app\",\"labels\":[{\"key\":\"app\",\"value\":\"demo-server\"}]}`
     */
    "ServiceVersion": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-b6988bd16920479d9104e1729f97****`
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
