export interface DeleteLiveRealtimeLogDeliveryRequest {
    /**
     * 播流域名。
     * 多个域名使用英文逗号（,）分隔。
     * @example `example.com,example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 实时投递SLS的ProjectName。
     * @example `project_example`
     */
    "Project": string;
    /**
     * 实时投递SLS的LogStoreName。
     * @example `logstore_example`
     */
    "Logstore": string;
    /**
     * 实时投递SLS的Region。
     * @example `cn-hangzhou`
     */
    "Region": string;
}
