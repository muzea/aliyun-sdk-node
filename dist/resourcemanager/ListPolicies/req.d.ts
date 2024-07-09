export interface ListPoliciesRequest {
    /**
     * 权限策略类型。取值为空表示列出所有类型的权限策略。
     * - Custom：自定义策略。
     * - System：系统策略。
     * @example `Custom`
     */
    "PolicyType"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 语言类型。系统权限策略的描述将以此语言返回。
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh-CN`
     */
    "Language"?: string;
}
