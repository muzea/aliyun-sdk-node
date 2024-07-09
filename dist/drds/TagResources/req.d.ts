export interface TagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为INSTANCE。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签的键。
         * @example `color`
         */
        Key: string;
        /**
         * 标签的值。
         * @example `red`
         */
        Value: string;
    }[];
    /**
     * 资源列表。
     */
    "ResourceId": string[];
}
