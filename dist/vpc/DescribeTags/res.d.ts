export interface DescribeTagsResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `C46FF5A8-C5F0-4024-8262-B16B639225A0`
     */
    RequestId: string;
    TagResources: {
        /**
         * 所有满足筛选条件的标签列表。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `FinanceJoshua`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `FinanceDept`
             */
            TagKey: string;
        }[];
    };
}
