export interface ListClusterMembersRequest {
    /**
     * 集群ID。可以调用ListCluster来获取，具体操作，请参见[ListCluster](~~154995~~)。
     * @example `52984524-6d48-4bbd-85f2-a34b0e5b****`
     */
    "ClusterId": string;
    /**
     * 分页查询时，当前显示的页面数，不设置的情况下默认显示第1页。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，若不设置，则显示该集群的所有ECS列表；若设置，则按照设置的pagesize来分页显示ECS列表。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * ECS列表实例数。
     * @example `1`
     */
    "EcsList"?: string;
}
