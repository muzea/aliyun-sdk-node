export interface ListTaskLogsResponse {
    /**
     * 请求ID。
     * @example `72F15A8A-5A28-5B18-A0DE-0EABD7D3245A`
     */
    RequestId: string;
    /**
     * 日志总行数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 日志列表。
     */
    Logs: string[];
}
