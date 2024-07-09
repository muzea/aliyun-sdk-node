export interface GetJobSanityCheckResultResponse {
    /**
     * 任务ID。
     * @example `dlc-20210126170216-xxxxxx`
     */
    JobId: string;
    /**
     * 算力健康检测的检测结果。
     */
    SanityCheckResult: any[];
    /**
     * 请求ID。
     * @example `B3789344-F1xxxBE-5xx2-A04D-xxxxx`
     */
    RequestID: string;
}
