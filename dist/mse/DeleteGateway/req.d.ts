export interface DeleteGatewayRequest {
    /**
     * 删除网关时是否同时删除代购的SLB。
     * @example `true`
     */
    "DeleteSlb"?: boolean;
    /**
     * 网关唯一标识。
     * @example `gw-0fe488252dc44d55a9dd57875193a1d7`
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
