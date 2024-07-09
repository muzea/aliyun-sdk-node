export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0*****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C429473A-5C66-4661-B5F8-4F900CD4330A`
     */
    RequestId: string;
    /**
     * 资源绑定的标签信息。
     */
    TagResources: {
        /**
         * 资源类型。
         * @example `stack`
         */
        ResourceType: string;
        /**
         * 资源的标签值。
         * @example `TayValue1`
         */
        TagValue: string;
        /**
         * 资源ID。
         * @example `c754d2a4-28f1-46df-b557-9586173a****`
         */
        ResourceId: string;
        /**
         * 资源的标签键。
         * @example `TagKey1`
         */
        TagKey: string;
    }[];
}
