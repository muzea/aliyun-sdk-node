export interface ListUuidsByWebPathRequest {
    /**
     * Web路径。
     * @example `/root/www****`
     */
    "WebPath"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * Web路径类型。取值：
     * - **def**：系统自动识别
     * - **customize**：手动添加
     * @example `def`
     */
    "Type"?: string;
}
