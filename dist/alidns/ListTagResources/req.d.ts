export interface ListTagResourcesRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型。
     * @example `DOMAIN`
     */
    "ResourceType": string;
    /**
     * 下一个查询开始Token。
     * @example `4698691`
     */
    "NextToken"?: string;
    /**
     * 标签键值对数组。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `abcd`
         */
        Key: string;
        /**
         * 标签值。
         * @example `abcd`
         */
        Value: string;
    }[];
    /**
     * 资源id。
     */
    "ResourceId"?: string[];
}
