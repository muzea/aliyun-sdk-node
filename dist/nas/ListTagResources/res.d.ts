export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。NextToken为空说明为最后一个。
     * @example ` 无`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `2D69A58F-345C-4FDE-88E4-BF518948****`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源列表信息集合。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `filesystem`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `test`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `i-2zebd226fxed6h4iadhe`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `test1`
             */
            TagKey: string;
        }[];
    };
}
