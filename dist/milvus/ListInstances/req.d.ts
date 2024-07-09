export interface ListInstancesRequest {
    /**
     * 实例名称。
     * @example `milvus-test`
     */
    "ClusterName"?: string;
    /**
     * 实例ID。
     * @example `c-123xxx`
     */
    "ClusterId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域。
     * @example `cn-beijing`
     */
    "RegionId"?: string;
}
