export interface GetGatewayOptionRequest {
    /**
     * 网关ID。
     * @example `429`
     */
    "GatewayId"?: number;
    /**
     * 网关唯一ID。
     * @example `gw-c9bc5afd61014165bd58f621b491*****`
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
