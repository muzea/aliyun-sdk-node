export interface DescribePluginTemplatesRequest {
    /**
     * API网关插件名称
     * @example `jwtAuth`
     */
    "PluginName"?: string;
    /**
     * 语言类型。系统权限策略的描述将以此语言返回。
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh`
     */
    "Language"?: string;
}
