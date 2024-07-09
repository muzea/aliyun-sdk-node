export interface ListTagResourcesRequest {
    /**
     * 要查询的集群ID列表。
     * @example `["xxxxx","xxxxxx"]`
     */
    "resource_ids": string[];
    /**
     * 资源类型，目前支持：`CLUSTER`。
     * @example `CLUSTER`
     */
    "resource_type": string;
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "region_id": string;
    /**
     * 要查询的标签列表，限制最多包含20个子项。
     * @example `[{\"key\":\"env\",\"value\",\"dev\"},{\"key\":\"dev\", \"value\":\"IT\"}]`
     */
    "tags"?: any[];
    /**
     * 下一个查询开始的令牌。
     * @example `***`
     */
    "next_token"?: string;
}
