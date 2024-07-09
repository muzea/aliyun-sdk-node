export interface ListApplicationGroupsRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "ApplicationName"?: string;
    /**
     * 部署地域ID（即资源所在地域ID）。
     * @example `cn-hangzhou`
     */
    "DeployRegionId"?: string;
    /**
     * 分页大小。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `-`
     */
    "NextToken"?: string;
    /**
     * 云资源的类型。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 云资源的资源ID。
     * @example `i-2vcj9raxrhxb48zz3whw`
     */
    "ResourceId"?: string;
    /**
     * 云资源所属的产品code。
     * @example `ecs`
     */
    "ResourceProduct"?: string;
}
