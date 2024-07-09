export interface TagResourcesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型,必须为：PolarDBXInstance
     * @example `PolarDBXInstance`
     */
    "ResourceType": string;
    /**
     * 资源ID,最多 50个子项
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多包含20个子项
     */
    "Tag": {
        /**
         * 标签键
         * @example `12`
         */
        Key: string;
        /**
         * 标签值
         * @example `22`
         */
        Value: string;
    }[];
}
