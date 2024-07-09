export interface DescribeDcdnTagResourcesRequest {
    /**
     * 资源类型，固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。最多可输入50个资源ID。
     * @example `example.com`
     */
    "ResourceId": string[];
    /**
     * 标签列表。最多可输入20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `product`
         */
        Value: string;
    }[];
}
