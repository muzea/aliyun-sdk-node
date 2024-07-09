export interface ListPortfoliosRequest {
    /**
     * 产品ID。
     * @example `prod-bp18r7q127****`
     */
    "ProductId"?: string;
    /**
     * 过滤条件。
     */
    "Filters"?: {
        /**
         * 过滤条件的名称。取值：
         * - PortfolioName：按产品组合名称查找，完整匹配（忽略大小写）。
         * - FullTextSearch：全文检索，按产品组合名称、产品组合提供者、产品组合描述查找，模糊匹配。
         * @example `PortfolioName`
         */
        Key: string;
        /**
         * 过滤条件的值。
         * @example `DEMO-IT服务`
         */
        Value: string;
    }[];
    /**
     * 排序字段。
     * 取值为CreateTime，表示产品组合创建时间。
     * @example `CreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值：
     * - Asc：正序。
     * - Desc：倒序。
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
     * 查询范围。取值：
     * - Local（默认值）：在当前账号中创建的产品组合。
     * - Import：从其他账号导入的产品组合。
     * - All：所有可以使用的产品组合。
     * @example `Local`
     */
    "Scope"?: string;
}
