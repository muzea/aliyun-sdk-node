export interface CreateLiveRealTimeLogDeliveryRequest {
    /**
     * 实时投递SLS的ProjectName。
     * @example `test_project`
     */
    "Project": string;
    /**
     * 实时投递SLS的LogStoreName。
     * @example `test_logstore`
     */
    "Logstore": string;
    /**
     * 实时投递SLS的Region。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
}
