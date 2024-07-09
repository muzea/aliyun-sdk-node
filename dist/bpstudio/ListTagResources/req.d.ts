export interface ListTagResourcesRequest {
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken"?: string;
    /**
     * 区域ID
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 下一个查询开始Token
     * @example `1`
     */
    "NextToken"?: string;
    /**
     * 资源类型
     * @example `Application`
     */
    "ResourceType": string;
    /**
     * 资源ID,最多 50个子项
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `标签1`
         */
        Key: string;
        /**
         * 标签值
         * @example `值1`
         */
        Value: string;
    }[];
}
