export interface ListFeatureConsistencyCheckJobsRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
     * @example `pairec-cn-********`
     */
    "InstanceId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 排序依据：
     * - GmtCreateTime：按创建时间。
     * - GmtModifiedTime：按更新时间。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式：
     * - ASC：升序。
     * - DESC：降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 任务状态。取值如下：
     * - ToRun：待运行。
     * - Running：运行中。
     * - Success：成功。
     * - Failure：失败。
     * - Stopped：停止或已取消。
     * @example `Running`
     */
    "Status"?: string;
}
