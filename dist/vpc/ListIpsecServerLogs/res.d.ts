export interface ListIpsecServerLogsResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `DEDAC5B1-9292-5BF7-BDDF-61BA58CFB2FB`
     */
    RequestId: string;
    /**
     * 当前页下日志的条目数。
     * @example `10`
     */
    Count: number;
    /**
     * 查询的日志是否精确。取值：
     * - **true**：精确。
     * - **false**：不精确。
     * @example `true`
     */
    IsCompleted: boolean;
    /**
     * 日志信息列表。
     */
    Data: string[];
}
