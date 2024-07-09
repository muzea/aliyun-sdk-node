export interface GetGatewayRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-685f661467b54f48b7b7a76605ce****`
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
