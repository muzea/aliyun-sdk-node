export interface ListTagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 如果数据过多，会返回NextToken，用于查询下一页。
     * @example `NextToken`
     */
    "NextToken"?: string;
    /**
     * 第N个资源Id，此处是为集群Id。可同时查询多个资源，可以传参数名为ResourceId.2、ResourceId.3等等。N为正整数。
     * @example `bds-bp15e022622f****`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表
     */
    "Tag"?: {
        /**
         * 要查询的标签的key，可有多个。N为正整数。
         * @example `key1`
         */
        Key: string;
        /**
         * 要查询的标签的value，可有多个。N为正整数。
         * @example `value1`
         */
        Value: string;
    }[];
}
