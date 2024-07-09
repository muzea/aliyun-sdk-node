export interface GetGatewayServiceDetailRequest {
    /**
     * 服务ID。
     * @example `35`
     */
    "ServiceId": number;
    /**
     * 网关唯一标识ID。
     * @example `gw-f4c960ad071a48a790b36324394c****`
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
