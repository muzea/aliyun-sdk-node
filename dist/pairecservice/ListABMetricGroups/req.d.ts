export interface ListABMetricGroupsRequest {
    /**
     * 场景ID，可通过接口[ListScenes]((~~2402581~~))获取。
     * @example `1`
     */
    "SceneId"?: string;
    /**
     * 实例ID，可通过接口[ListInstances](~~2411819~~)获取。
     * @example `pairec-cn-test1`
     */
    "InstanceId": string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指标组实时类型过滤
     * @example `false`
     */
    "Realtime"?: boolean;
    /**
     * 排序依据，取值：
     * - GmtCreateTime：创建时间。
     * - GmtModifiedTime：更新时间。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排序方式，取值：
     * - ASC：升序。
     * - DESC：降序。
     * @example `ASC`
     */
    "Order"?: string;
}
