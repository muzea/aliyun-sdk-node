export interface ListTagResourcesResponse {
    /**
     * 用来返回更多结果。如果一次查询没有返回全部结果，则可在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707ec21345`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `184DE106-CB2C-4DD2-B57F-396652E6C8F8`
     */
    RequestId: string;
    TagResources: {
        /**
         * 查询到的集群和标签的信息。
         */
        TagResource: {
            /**
             * 资源类型，cluster即云原生数据仓库AnalyticDB MySQL集群。
             * @example `cluster`
             */
            ResourceType: string;
            /**
             * 标签键对应的标签值。
             * @example `testvalue1`
             */
            TagValue: string;
            /**
             * 集群ID。
             * @example `am-bp1l20nxxxxxxxxxx`
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
