export interface ListTagResourcesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DE65F6B7-7566-4802-9007-96F2494AC512`
     */
    RequestId: string;
    TagResources: {
        /**
         * 绑定标签的资源信息。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            TagValue: string;
            /**
             * 资源类型。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `lb-bp16qjewdsunr4****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
