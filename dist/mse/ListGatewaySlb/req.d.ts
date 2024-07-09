export interface ListGatewaySlbRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-1cef5440bf2d484db419fb264d4f****`
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
