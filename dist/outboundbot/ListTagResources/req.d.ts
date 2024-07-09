export interface ListTagResourcesRequest {
    /**
     * 地域
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 资源类型
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token
     * @example `b949ae1f-01dc-4191-ae5a-70fbe6772fd8`
     */
    "NextToken"?: string;
    /**
     * 资源ID，n 的取值范围为 [1, 50]
     * @example `ResourceId.1=b949ae1f-01dc-4191-ae5a-70fbe6772fd8`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键，n 的取值范围为 [1, 20]。
         * @example `Tag.1.Key=key1`
         */
        Key: string;
        /**
         * 标签值，n 的取值范围为 [1, 20]
         * @example `Tag.1.Value=value1`
         */
        Value: string;
    }[];
}
