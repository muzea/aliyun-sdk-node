export interface UpdateBlackWhiteListRequest {
    /**
     * 黑名ID。
     * @example `1`
     */
    "Id": number;
    /**
     * 绑定资源作用范围。
     * @example `GATEWAY`
     */
    "ResourceType"?: string;
    /**
     * 黑白名单资源类型。
     * @example `IP`
     */
    "Type"?: string;
    /**
     * 黑名单内容。
     * @example `127.0.2.11`
     */
    "Content"?: string;
    /**
     * 是否开启状态。
     * @example `on`
     */
    "Status"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
     */
    "GatewayUniqueId": string;
    /**
     * 是否白名单（默认为否）。
     * @example `true`
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
