export interface UpdatePluginConfigRequest {
    /**
     * 插件配置ID。
     * @example `1`
     */
    "Id"?: number;
    /**
     * 网关ID。
     * @example `1`
     */
    "GatewayId"?: number;
    /**
     * 网关UniqueId。
     * @example `gw-ubuwqygbq4783gqb2y3f87q****`
     */
    "GatewayUniqueId"?: string;
    /**
     * 网关插件ID。
     * @example `2`
     */
    "PluginId"?: number;
    /**
     * 是否开启。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 插件配置。Wasm插件配置内容是YAML格式，Lua插件配置内容是Lua代码。
     * @example `# 配置必须字段的校验，如下例所示，要求插件配置必须存在 "name"、"age"、“friends” 字段
    name: John
    age: 18
    friends:
    - David
    - Anne
    `
     */
    "Config"?: string;
    /**
     * 插件应用范围。
     * - 全局：0
     * - 路由：1
     * - 域名：2
     * @example `0`
     */
    "ConfigLevel": number;
    /**
     * 域名ID/路由ID列表（根据ConfigLevel区分）
     */
    "ResourceIdList"?: number[];
    /**
     * 创建时间。
     * @example `1667309705000`
     */
    "GmtCreate"?: string;
    /**
     * 更新时间。
     * @example `1667309705000`
     */
    "GmtModified"?: string;
    /**
     * 返回信息的语言类型：
     * zh：中文
     * en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
