export interface ListProductsAsEndUserRequest {
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 过滤条件的名称。取值：
         * - ProductName：按产品名称查找，完整匹配（忽略大小写）。
         * - FullTextSearch：全文检索，按产品名称、产品提供者、产品描述查找，模糊匹配。
         * @example `ProductName`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * @example `DEMO-创建ECS`
         */
        Value: string;
    }[];
    /**
     * 排序字段。
     * 取值为CreateTime，表示产品创建时间。
     * 默认取值CreateTime。
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
}
