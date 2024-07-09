export interface ListSecurityGroupRequest {
    /**
     * 网关ID
     * @example `gw-e98e40675aaf49bda082137d158e1585`
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
