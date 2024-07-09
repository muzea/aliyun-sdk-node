export interface AddMockRuleRequest {
    /**
     * 规则名称。
     * @example `agent-auto-test-sc`
     */
    "Name": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 规则来源
     * @example `edasmsc`
     */
    "Source": string;
    /**
     * 服务提供者应用ID。
     * @example `dcqtkuhnc4@66e5235415****`
     */
    "ProviderAppId"?: string;
    /**
     * 服务提供者应用名称。
     * @example `demo-cartservice`
     */
    "ProviderAppName"?: string;
    /**
     * 描述。
     * @example `{}`
     */
    "ExtraJson": string;
    /**
     * 入参数，支持JSON格式。
     * @example `[]`
     */
    "ScMockItems": string;
    /**
     * 回收站中的项目。
     * @example `[]`
     */
    "DubboMockItems": string;
    /**
     * 用户自定义应用ID。
     * @example `[{\"appName\":\"provide\",\"appId\":\"bst8l6o735@f6d8aaf6e56e67d\"}]`
     */
    "ConsumerAppIds": string;
    /**
     * 报警规则的启用状态。取值：
     * - `true`：启用。
     * - `false`：禁用。
     * @example `true`
     */
    "Enable"?: boolean;
    /**
     * 慢调用RT。取值如下：
     * - 15：15ms
     * - 30：30ms
     * - 60：60ms
     * - 120：120ms
     * @example `1`
     */
    "MockType"?: number;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
