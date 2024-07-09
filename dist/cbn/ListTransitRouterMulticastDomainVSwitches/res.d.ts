export interface ListTransitRouterMulticastDomainVSwitchesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `B0E7E43C-979A-5130-AA0D-B3ADA69E0827`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 交换机ID列表。
     */
    VSwitchIds: string[];
}
