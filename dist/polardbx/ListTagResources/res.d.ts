export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token，NextToken为空说明没有下一个
     * @example `xxdd`
     */
    NextToken: string;
    /**
     * 请求Id
     * @example `xxxx-xxxxxx`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源列表
         */
        TagResource: {
            /**
             * 资源类型
             * @example `PolarDBXInstance`
             */
            ResourceType: string;
            /**
             * 标签值
             * @example `1`
             */
            TagValue: string;
            /**
             * 资源ID
             * @example `pxc-xxxx`
             */
            ResourceId: string;
            /**
             * 标签键
             * @example `1`
             */
            TagKey: string;
        }[];
    };
}
