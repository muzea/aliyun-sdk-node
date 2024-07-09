export interface ListJobsResponse {
    /**
     * 任务列表。
     */
    Jobs: any[];
    /**
     * 符合过滤条件的总任务数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
