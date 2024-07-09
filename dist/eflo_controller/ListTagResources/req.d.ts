export interface ListTagResourcesRequest {
    /**
     * 资源类型
     * @example `Node`
     */
    "ResourceType": string;
    /**
     * 资源id列表
     */
    "ResourceId": string[];
    /**
     * 地域Id
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `PodName`
         */
        Key: string;
        /**
         * 标签值
         * @example `WFT-OTC`
         */
        Value: string;
    }[];
    /**
     * 查询凭证（Token），取值为上一次API调用返回的 NextToken 参数值
     * @example `AAAAAdQ3Z+oPlg49gsr2y8jb6wY=`
     */
    "NextToken"?: string;
}
