export interface ListClusterRequest {
    /**
     * 命名空间的ID。查询命名空间ID，请参见[ListUserDefineRegion](~~149377~~)。
     * - 未设置该参数，则查询默认命名空间的集群列表。
     * - 设置该参数，则查询指定命名空间的集群列表。
     * @example `cn-beijing:test`
     */
    "LogicalRegionId"?: string;
    /**
     * 资源组ID。查询资源组ID，请参见[ListResourceGroup](~~62055~~)。
     * - 未设置该参数，则查询默认资源组的集群列表。
     * - 设置该参数，则查询指定资源组的集群列表。
     * @example `461`
     */
    "ResourceGroupId"?: string;
}
