export interface ListTagResourcesResponse {
    /**
     * 唯一请求ID。
     * @example `C78D9B61-69D8-5655-A312-A15DA5EA5D5E`
     */
    RequestId: string;
    /**
     * 标签资源集合
     */
    TagResources: {
        /**
         * 关联资源的ID。
         * @example `i-5zy93g7z1hnkdmav84joxyzgn`
         */
        ResourceId: string;
        /**
         * 资源类型。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 实例的标签键。
         * @example `test_tag_key-2`
         */
        TagKey: string;
        /**
         * 标签值。
         * @example `CLUSTER`
         */
        TagValue: string;
    }[];
    /**
     * 下一个查询开始的Token。
     * @example `abcfeg368547ccdef`
     */
    NextToken: string;
}
