export interface DescribeTagResourcesRequest {
    /**
     * 固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 资源ID列表，最大元素数量：50。
     * @example `1`
     */
    "ResourceId": string[];
    /**
     * 标签组合列表。最大元素数量：20。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
