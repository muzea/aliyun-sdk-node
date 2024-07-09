export interface TagLiveResourcesRequest {
    /**
     * 资源ID。取值：直播域名。
     * N的取值范围为**1~50**。
     * @example `example.com`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。N的取值范围为**1~20**。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。N的取值范围为**1~20**。
         * @example `product`
         */
        Value: string;
    }[];
    /**
     * 资源类型。固定值：**DOMAIN**。
     * @example `DOMAIN`
     */
    "ResourceType": string;
}
