export interface TagDcdnResourcesRequest {
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 资源ID列表。最多可输入 50 个资源 ID。
     * @example `example.com`
     */
    "ResourceId": string[];
    /**
     * 标签列表。最多可输入 20 个标签。
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
