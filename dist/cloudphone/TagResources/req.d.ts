export interface TagResourcesRequest {
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。取值范围：
     * - instance：弹性云手机实例
     * @example `instance`
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
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值
         * @example `TestValue`
         */
        Value: string;
    }[];
}
