export interface DescribeWebPathRequest {
    /**
     * 告警配置类型。取值：
     * - **web_path**
     * @example `web_path`
     */
    "Type"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
