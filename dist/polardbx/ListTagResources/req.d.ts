export interface ListTagResourcesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token
     * @example `xxdds`
     */
    "NextToken"?: string;
    /**
     * 资源类型，必须填写：PolarDBXInstance
     * @example `PolarDBXInstance`
     */
    "ResourceType": string;
    /**
     * 资源ID,最多 50个子项
     */
    "ResourceId"?: string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `1`
         */
        Key: string;
        /**
         * 标签值
         * @example `2`
         */
        Value: string;
    }[];
}
