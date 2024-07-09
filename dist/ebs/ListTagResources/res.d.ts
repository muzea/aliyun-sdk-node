export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 由资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
     */
    TagResources: {
        /**
         * 资源的标签键。
         * @example `TestKey`
         */
        TagKey: string;
        /**
         * 资源的标签值。
         * @example `TestValue`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `pair-cn-c4d2t7f****`
         */
        ResourceId: string;
        /**
         * 资源类型定义。可能值：
         * - dedicatedblockstoragecluster：专属块存储集群。
         * - diskreplicapair：异步复制关系。
         * - diskreplicagroup：一致性复制组。
         * @example `pair`
         */
        ResourceType: string;
    }[];
    /**
     * 请求ID。
     * @example `484256DA-D816-44D2-9D86-B6EE4D5B****`
     */
    RequestId: string;
}
