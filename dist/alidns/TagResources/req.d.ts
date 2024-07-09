export interface TagResourcesRequest {
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
     * 标签键值对数组。
     */
    "Tag": {
        /**
         * 标签键。不能以acs:或aliyun，开头，长度不能超过20字节。
         * @example `abcd`
         */
        Key: string;
        /**
         * 标签值。长度不能超过20字节。
         * @example `abcd`
         */
        Value: string;
    }[];
    /**
     * 资源id。
     * @example `dns-example.com`
     */
    "ResourceId": string[];
}
