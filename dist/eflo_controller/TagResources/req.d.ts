export interface TagResourcesRequest {
    /**
     * 资源类型
     * @example `Cluster`
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
     * 标签
     */
    "Tag": {
        /**
         * 标签键
         * @example `app`
         */
        Key: string;
        /**
         * 标签值
         * @example `v3`
         */
        Value: string;
    }[];
}
