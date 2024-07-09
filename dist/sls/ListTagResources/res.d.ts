export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    nextToken: string;
    /**
     * 返回的标签列表。
     */
    tagResources: {
        /**
         * 资源ID。
         * @example `ali-test-project`
         */
        resourceId: string;
        /**
         * 资源类型。
         * @example `project`
         */
        resourceType: string;
        /**
         * 标签的键。
         * @example `key1`
         */
        tagKey: string;
        /**
         * 标签的值。
         * @example `value1`
         */
        tagValue: string;
    }[];
}
