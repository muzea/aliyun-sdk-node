export interface ListAppsRequest {
    /**
     * 工作空间
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * Next Token
     * @example `TestToken`
     */
    "NextToken"?: string;
    /**
     * 最大返回结果数
     * @example `5`
     */
    "MaxResults"?: number;
    /**
     * 排序依据
     * @example `createtime`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序
     * @example `true`
     */
    "IsReversed"?: boolean;
    /**
     * Label 选择器
     * @example `env=test`
     */
    "LabelSelector"?: string;
    /**
     * 应用范围
     * @example `Public`
     */
    "Scope"?: string;
    /**
     * 应用描述语言
     * @example `WDL`
     */
    "Language"?: string;
    /**
     * 应用类型
     * @example `App`
     */
    "AppType"?: string;
    /**
     * 按照名字匹配
     * @example `TestName`
     */
    "Search"?: string;
}
