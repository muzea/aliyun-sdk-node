export interface ListInstancesRequest {
    /**
     * 页码，起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 状态过滤。
     * ● Initializing-初始化中。
     * ● Running-运行中。
     * ● Failure-创建失败。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 排序依据。
     * ● GmtCreateTime-创建时间。
     * ● GmtModifiedTime-更新时间。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * ● ASC-升序。
     * ● DESC-降序。
     * @example `DESC`
     */
    "Order"?: string;
}
