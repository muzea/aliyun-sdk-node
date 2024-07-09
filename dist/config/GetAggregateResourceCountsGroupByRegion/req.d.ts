export interface GetAggregateResourceCountsGroupByRegionRequest {
    /**
     * 资源类型。
     * 关于如何获取资源类型，请参见[ListAggregateDiscoveredResources](~~265983~~)。
     * @example `ACS::ECS::Instance`
     */
    "ResourceType"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a260626622af0005****`
     */
    "AggregatorId": string;
    /**
     * 资源目录的资源夹ID。关于如何获取资源目录的资源夹ID，请参见[查看资源夹基本信息](~~111223~~)。
     * @example `r-BU****`
     */
    "FolderId"?: string;
    /**
     * 账号组内待查询资源所属的阿里云账号ID。
     * > 参数ResourceAccountId和ResourceOwnerId二选一，推荐使用本参数。
     * @example `100931896542****`
     */
    "ResourceAccountId"?: number;
}
