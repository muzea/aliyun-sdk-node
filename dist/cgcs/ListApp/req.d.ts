export interface ListAppRequest {
    /**
     * 搜索关键词。
     * > 您可以通过输入应用ID或应用名称实现模糊查询。
     * @example `example`
     */
    "KeySearch"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~9999。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
