export interface ListTagResourcesResponse {
    /**
     * 再次查询时，若期望返回结果承接本页，则在请求参数中的NextToken传入该值。若NextToken对应返回值为空，则表示不存在下一页。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `A5EF78C1-67FC-4E36-A6A8-7DF9C51726DF`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签及资源关系。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `template`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `v1`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `TagTest2`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `k1`
             */
            TagKey: string;
        }[];
    };
}
