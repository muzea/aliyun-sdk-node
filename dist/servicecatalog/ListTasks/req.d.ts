export interface ListTasksRequest {
    /**
     * 排序字段。
     * 取值为CreateTime，表示任务创建时间。
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
     * 实例ID。
     * @example `pp-bp1ddg1n2a****`
     */
    "ProvisionedProductId": string;
}
