export interface ListTagResourcesResponse {
    /**
     * 如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707ec2****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `47A514A1-4B77-4E30-B4C5-2A880650****`
     */
    RequestId: string;
    TagResources: {
        /**
         * 实例和标签的信息。
         */
        TagResource: {
            /**
             * 标签的值。
             * @example `demovalue`
             */
            TagValue: string;
            /**
             * 资源类型。返回值固定为**ALIYUN::KVSTORE::INSTANCE**，即云数据库Redis实例。
             * @example `ALIYUN::KVSTORE::INSTANCE`
             */
            ResourceType: string;
            /**
             * 资源ID，即Redis实例的ID。
             * @example `r-bp1zxszhcgatnx****`
             */
            ResourceId: string;
            /**
             * 标签的键。
             * @example `demokey`
             */
            TagKey: string;
        }[];
    };
}
