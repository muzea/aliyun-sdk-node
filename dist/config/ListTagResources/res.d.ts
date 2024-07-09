export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token。
     * > 如果为空，则说明无下一页。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJ****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `AB2E4317-06A6-5745-B7C3-E001E551****`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源绑定的标签列表。
         */
        TagResource: {
            /**
             * 标签键。
             * @example `Env`
             */
            TagKey: string;
            /**
             * 标签值。
             * @example `prod`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `cr-115b626622af0060****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `ACS::Config::Rule`
             */
            ResourceType: string;
        }[];
    };
}
