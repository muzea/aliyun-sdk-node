export interface ListTagValuesResponse {
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
     * @example `593B0448-D13E-4C56-AC0D-FDF0F******`
     */
    RequestId: string;
    /**
     * 标签值。
     */
    TagValues: string[];
    /**
     * 列表条目数。
     * @example `10`
     */
    TotalCount: number;
}
