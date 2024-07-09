export interface ListTagKeysResponse {
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3`
     */
    RequestId: string;
    /**
     * 标签键列表。
     */
    TagKeys: {
        /**
         * 标签类型。
         * 取值：**Custom**、**System**或**All**。
         * 默认值：**All**。
         * @example `System`
         */
        Category: string;
        /**
         * 返回满足所有筛选条件的标签。
         * @example `test`
         */
        TagKey: string;
    }[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
}
