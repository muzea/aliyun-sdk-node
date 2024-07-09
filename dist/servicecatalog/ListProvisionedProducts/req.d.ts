export interface ListProvisionedProductsRequest {
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 过滤条件的名称。取值：
         * - ProvisionedProductName：按实例名称查找，完整匹配（忽略大小写）。
         * - FullTextSearch：全文检索，按实例名称查找，模糊匹配。
         * @example `ProvisionedProductName`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * @example `DEMO-ECS实例`
         */
        Value: string;
    }[];
    /**
     * 排序字段。
     * 取值为CreateTime，表示实例创建时间。
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
    /**
     * 访问过滤器。取值：
     * - User（默认值）：用户。
     * - Account：账号。
     * @example `User`
     */
    "AccessLevelFilter"?: string;
}
