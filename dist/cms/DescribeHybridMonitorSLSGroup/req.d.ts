export interface DescribeHybridMonitorSLSGroupRequest {
    /**
     * 搜索关键字。
     * @example `Logstore`
     */
    "Keyword"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * Logstore组名称。
     * @example `Logstore_test`
     */
    "SLSGroupName"?: string;
}
