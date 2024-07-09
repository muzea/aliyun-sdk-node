export interface DescribeDomainRealtimeLogDeliveryResponse {
    /**
     * 域名实时投递状态。取值：
     * - **online**：投递中。
     * - **offline**：停止投递。
     * @example `online`
     */
    Status: string;
    /**
     * 实时投递sls的LogStoreName。
     * @example `LogstoreName`
     */
    Logstore: string;
    /**
     * 实时投递sls的ProjectName。
     * @example `ProjectName`
     */
    Project: string;
    /**
     * 请求ID。
     * @example `2F8F3852-912F-42AC-80EB-F1CF4284DE93`
     */
    RequestId: string;
    /**
     * 实时投递sls的地域。
     * @example `cn-shanghai`
     */
    Region: string;
}
