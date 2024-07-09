export interface ListControlPoliciesRequest {
    /**
     * 管控策略类型。取值：
     * - System：系统管控策略。
     * - Custom：自定义管控策略。
     * @example `System`
     */
    "PolicyType"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定返回结果中管控策略描述的语言。取值：
     * - zh-CN（默认值）：中文。
     * - en：英文。
     * - ja：日文。
     * > 该参数仅在系统管控策略时有效。
     * @example `zh-CN`
     */
    "Language"?: string;
}
