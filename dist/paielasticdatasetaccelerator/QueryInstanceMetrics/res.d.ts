export interface QueryInstanceMetricsResponse {
    /**
     * 请求ID。
     * @example `A731A84D-55C9-44F7-99BB-E1CF0CF19197`
     */
    RequestId: string;
    /**
     * 监控指标信息列表。
     */
    Metrics: any[];
    /**
     * 时间间隔。
     * @example `60s`
     */
    Period: string;
}
