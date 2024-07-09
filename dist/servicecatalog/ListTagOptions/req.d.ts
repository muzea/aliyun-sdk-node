export interface ListTagOptionsRequest {
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 标签选项键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签选项值。
         * @example `v1`
         */
        Value: string;
        /**
         * 是否启用。取值：
         * - true（默认值）：启用。
         * - false：禁用。
         * @example `true`
         */
        Active: boolean;
        /**
         * 全文搜索。
         * @example `k1`
         */
        FullTextSearch: string;
    };
    /**
     * 排序字段。
     * 取值为CreateTime，表示标签选项创建时间。
     * @example `CreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值：
     * - Asc：正序。
     * - Desc（默认值）：倒序。
     * @example `Desc`
     */
    "SortOrder"?: string;
}
