export interface ListTagResourcesResponse {
    /**
     * 用来返回更多结果。如果一次查询没有返回全部结果，则会返回该参数。您可以在后续查询中传入前一次返回的token继续查询。
     * @example `212db86sca4384811e0b5e8707e******`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `688C04E4-23F8-409F-8A38-B954D5******`
     */
    RequestId: string;
    TagResources: {
        /**
         * 查询到的集群和标签的信息。
         */
        TagResource: {
            /**
             * 资源类型，取值固定为**cluster**。
             * @example `cluster`
             */
            ResourceType: string;
            /**
             * 标签键对应的标签值。
             * @example `test`
             */
            TagValue: string;
            /**
             * 集群ID。
             * @example `pc-****************`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `type`
             */
            TagKey: string;
        }[];
    };
}
