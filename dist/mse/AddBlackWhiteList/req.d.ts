export interface AddBlackWhiteListRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-0fe488252dc44d55a9dd57875193****`
     */
    "GatewayUniqueId": string;
    /**
     * 生效粒度：
     * - GATEWAY：网关全局
     * - DOMAIN：域名
     * - ROUTE：路由
     * @example `GATEWAY`
     */
    "ResourceType"?: string;
    /**
     * 黑白名单类型。
     * @example `IP`
     */
    "Type"?: string;
    /**
     * 黑名单内容。
     * @example `1.117.115.51`
     */
    "Content"?: string;
    /**
     * 黑名单状态描述。
     * - on 开启
     * - off 关闭
     * @example `off`
     */
    "Status"?: string;
    /**
     * 是否白名单（默认为否）。
     * @example `false`
     */
    "IsWhite"?: boolean;
    /**
     * 资源ID列表JSON。
     * @example `[123]`
     */
    "ResourceIdJsonList"?: string;
    /**
     * 备注。
     * @example `this is a note`
     */
    "Note"?: string;
    /**
     * 名称。
     * @example `name`
     */
    "Name"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
