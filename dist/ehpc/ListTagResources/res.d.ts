export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0axxxx`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `484256DA-D816-44D2-9D86-B6EE4D5BA78C`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签列表。
         */
        TagResource: {
            /**
             * 资源类型。目前仅支持cluster，即E-HPC集群。
             * @example `cluster`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源ID，即集群ID。
             * @example `ehpc-hz-xxxx`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
