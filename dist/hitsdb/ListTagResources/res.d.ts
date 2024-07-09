export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `05CB115C-91CB-529F-9098-50C1F6CB3BD3`
     */
    RequestId: string;
    /**
     * 资源列表。
     */
    TagResources: {
        /**
         * 资源类型。返回值固定为**ALIYUN::HITSDB::INSTANCE**。
         * @example `ALIYUN::HITSDB::INSTANCE`
         */
        ResourceType: string;
        /**
         * 标签的值。
         * @example `2.2.8`
         */
        TagValue: string;
        /**
         * 资源ID，即实例ID。
         * @example `ld-bp17j28j2y7pm****`
         */
        ResourceId: string;
        /**
         * 标签的键。
         * @example `test`
         */
        TagKey: string;
    }[];
    /**
     * 下一个查询开始Token。
     * > 如果一次查询没有返回全部结果，则会返回本参数，您可以后续查询中传入本参数返回的值以继续查询。
     * @example `212db86****`
     */
    NextToken: string;
}
