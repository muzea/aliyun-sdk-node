export interface ListFeatureConsistencyCheckJobConfigsRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~2411819~~)。
     * @example `pairec-cn-********`
     */
    "InstanceId": string;
    /**
     * 页码。起始值为1，默认值为1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 排序依据。
     * - GmtCreateTime：按创建时间排序。
     * - GmtModifiedTime-按更新时间排序。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式。
     * - ASC：升序。
     * - DESC：降序。
     * @example `ASC`
     */
    "Order"?: string;
}
