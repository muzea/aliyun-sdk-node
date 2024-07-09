export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token。
     * @example `4ieSWJCwxvW3dk3wF.BqkrZmP72nWu5zJ5NWydMqyEs****`
     */
    NextToken: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `134D6018-EB68-4B7C-BABF-4DB09023E014`
     */
    RequestId: string;
    /**
     * 堡垒机实例及其绑定的标签列表。
     * 包括实例ID、资源类型、标签键和标签值信息。
     */
    TagResources: {
        /**
         * 标签值。
         * @example `testapi`
         */
        TagValue: string;
        /**
         * 资源类型。
         * 唯一取值为INSTANCE，表示堡垒机实例。
         * @example `INSTANCE`
         */
        ResourceType: string;
        /**
         * 实例ID。
         * @example `bastionhost-cn-78v1gc****`
         */
        ResourceId: string;
        /**
         * 标签键。
         * @example `test`
         */
        TagKey: string;
    }[];
}
