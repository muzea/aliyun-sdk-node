export interface ListJobSanityCheckResultsResponse {
    /**
     * 所有的算力健康检测的检测结果。
     */
    SanityCheckResults: any[][];
    /**
     * 符合过滤条件的总SanityCheck检测结果数量。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `1AC9xxx-3xxx-5xxx2-xxxx-FA5`
     */
    RequestID: string;
}
