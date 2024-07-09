export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `484256DA-D816-44D2-9D86-B6EE4D5BA78C`
     */
    RequestId: string;
    /**
     * 资源及其标签信息集合。
     */
    TagResources: {
        /**
         * 标签值。
         * @example `design`
         */
        TagValue: string;
        /**
         * 资源类型。
         * @example `ALIYUN::GWS::INSTANCE`
         */
        ResourceType: string;
        /**
         * 资源ID，即云电脑ID。
         * @example `ecd-ia2zw38bi6cm7****`
         */
        ResourceId: string;
        /**
         * 标签键。
         * @example `department`
         */
        TagKey: string;
    }[];
}
