export interface TagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-shenzhen`
     */
    "RegionId": string;
    /**
     * 第N个资源ID，此处是为集群ID。如果有多个，可以传参数名为ResourceId.2、ResourceId.3等等，会给所有资源ID加上Tag里的标签。N为正整数。
     * @example `cds-wz92o754****7779`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 第N个标签的key，N为正整数。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签N的value。
         * @example `v1`
         */
        Value: string;
    }[];
}
