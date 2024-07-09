export interface DescribeServiceLogResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82********`
     */
    RequestId: string;
    /**
     * 返回的日志信息。
     */
    Logs: string[];
    /**
     * 当前页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 总计数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 总计页码。
     * @example `500`
     */
    TotalPageNum: number;
}
