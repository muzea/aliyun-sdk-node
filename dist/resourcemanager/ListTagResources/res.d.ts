export interface ListTagResourcesResponse {
    /**
     * 根据`NextToken`判断是否具备下一个查询开始的`Token`。取值：
     * - 如果`NextToken`为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果`NextToken`有值，则该值就是下一个查询开始的`Token`。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `8054B059-6B36-53BF-AA45-B8C9A0ED05AB`
     */
    RequestId: string;
    /**
     * 标签列表。
     */
    TagResources: {
        /**
         * 标签值。
         * @example `k1`
         */
        TagValue: string;
        /**
         * 资源组ID或资源目录成员ID。
         * @example `rg-aekz6bre2uq****`
         */
        ResourceId: string;
        /**
         * 标签键。
         * @example `k1`
         */
        TagKey: string;
        /**
         * 资源类型。取值：
         * - resourcegroup：资源组。
         * - Account：资源目录成员。
         * @example `resourcegroup`
         */
        ResourceType: string;
    }[];
}
