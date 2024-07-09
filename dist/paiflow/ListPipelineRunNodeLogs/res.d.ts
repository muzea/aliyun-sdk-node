export interface ListPipelineRunNodeLogsResponse {
    /**
     * 请求ID。
     * @example `473469C7-****-****-****-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 符合过滤条件的作业数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 查询返回的日志列表。
     */
    Logs: string[];
}
