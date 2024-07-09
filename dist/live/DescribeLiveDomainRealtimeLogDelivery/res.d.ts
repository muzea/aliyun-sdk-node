export interface DescribeLiveDomainRealtimeLogDeliveryResponse {
    /**
     * 域名实时投递状态。取值：
     * - online：开启实时投递。
     * - offline：未开启实时投递。
     * @example `online`
     */
    Status: string;
    /**
     * 实时投递SLS的LogStoreName。
     * @example `logstore_example`
     */
    Logstore: string;
    /**
     * 实时投递SLS的ProjectName。
     * @example `project_example`
     */
    Project: string;
    /**
     * 请求ID。
     * @example `2F8F3852-912F-42AC-80EB-F1CF4284DE93`
     */
    RequestId: string;
    /**
     * 实时投递SLS的Region。
     * @example `cn-shanghai`
     */
    Region: string;
}
