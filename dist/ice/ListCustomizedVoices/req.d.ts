export interface ListCustomizedVoicesRequest {
    /**
     * - 声音类型，取值范围：
     *   - Basic 基础版
     *   - Standard 大众版
     * - 不填默认为 Basic，查询基础版
     * @example `Standard`
     */
    "Type"?: string;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
}
