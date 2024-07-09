export interface ListRolesRequest {
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
     * 语言类型。角色描述将以此语言返回。
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh-CN`
     */
    "Language"?: string;
}
