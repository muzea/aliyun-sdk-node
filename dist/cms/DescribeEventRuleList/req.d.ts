export interface DescribeEventRuleListRequest {
    /**
     * 事件报警规则前缀。
     * @example `test`
     */
    "NamePrefix"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 应用分组ID。
     * @example `7378****`
     */
    "GroupId"?: string;
    /**
     * 启用或禁用事件报警规则。取值：
     * true（默认值）：启用。
     * false：禁用。
     * @example `true`
     */
    "IsEnable"?: boolean;
}
