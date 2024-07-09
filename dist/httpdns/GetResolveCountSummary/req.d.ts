export interface GetResolveCountSummaryRequest {
    /**
     * 统计数据粒度，可选值有**day**和**month**。
     * @example `day`
     */
    "Granularity": string;
    /**
     * 统计时间跨度。
     * @example `7`
     */
    "TimeSpan": number;
}
