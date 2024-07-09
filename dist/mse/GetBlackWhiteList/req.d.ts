export interface GetBlackWhiteListRequest {
    /**
     * 范围类型。
     * @example `GATEWAY`
     */
    "ResourceType"?: string;
    /**
     * 类型。
     * @example `IP`
     */
    "Type"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-32d5c9769c1842b1a2cc3426c59e****`
     */
    "GatewayUniqueId"?: string;
    /**
     * 是否白名单。
     * @example `true`
     */
    "IsWhite"?: boolean;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
