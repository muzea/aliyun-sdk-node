export interface ListAgentlessRelateMaliciousRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize": string;
    /**
     * 事件ID。
     * @example `80****`
     */
    "EventId"?: number;
}
