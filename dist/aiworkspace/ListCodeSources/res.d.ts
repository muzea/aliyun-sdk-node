export interface ListCodeSourcesResponse {
    /**
     * 代码源配置列表。
     */
    CodeSources: any[];
    /**
     * 符合过滤条件的代码源配置的总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
}
