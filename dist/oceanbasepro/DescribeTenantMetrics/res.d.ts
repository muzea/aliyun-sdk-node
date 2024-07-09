export interface DescribeTenantMetricsResponse {
    /**
     * 总数量。
     * @example `9`
     */
    TotalCount: number;
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 租户指标信息。
     * @example `"Metrics":[ {"request_queue_rt":0.0,"TimeStamp":"2022-02-23T01:58:00Z"}]`
     */
    TenantMetrics: string;
}
