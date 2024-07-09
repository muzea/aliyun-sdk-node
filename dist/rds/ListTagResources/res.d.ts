export interface ListTagResourcesResponse {
    /**
     * 如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707ec21345`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `47A514A1-4B77-4E30-B4C5-2A880650B3FD`
     */
    RequestId: string;
    TagResources: {
        /**
         * 查询到的实例和标签列表。
         */
        TagResource: {
            /**
             * 标签键对应的标签值。
             * @example `testvalue1`
             */
            TagValue: string;
            /**
             * 资源类型，`ALIYUN::RDS::INSTANCE`即云数据库RDS实例。
             * @example `ALIYUN::RDS::INSTANCE`
             */
            ResourceType: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `testkey1`
             */
            TagKey: string;
        }[];
    };
}
