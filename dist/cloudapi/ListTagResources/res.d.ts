export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token。
     * NextToken为**-1**表示没有下一个。
     * @example `1d2db86sca4384811e0b5e8707e68181f`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `2D69A58F-345C-4FDE-88E4-BF5189484043`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源列表
         */
        TagResource: {
            /**
             * 标签值
             * @example `zhangsan`
             */
            TagValue: string;
            /**
             * 资源类型
             * @example `apiGroup`
             */
            ResourceType: string;
            /**
             * 资源ID
             * @example `285bb759342649a1b70c2093a772e087`
             */
            ResourceId: string;
            /**
             * 标签键
             * @example `owner`
             */
            TagKey: string;
        }[];
    };
}
