export interface TagResourcesRequest {
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。列表元素数量最大：50。
     * @example `1`
     */
    "ResourceId": string[];
    /**
     * 标签列表。列表元素数量最大：20。
     */
    "Tag": {
        /**
         * 标签键。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
