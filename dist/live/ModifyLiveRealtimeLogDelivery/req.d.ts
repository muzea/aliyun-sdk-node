export interface ModifyLiveRealtimeLogDeliveryRequest {
    /**
     * 实时投递SLS的ProjectName。
     * @example `project_example`
     */
    "Project": string;
    /**
     * 实时投递日志服务（SLS）的LogStoreName。
     * @example `logstore_example`
     */
    "Logstore": string;
    /**
     * 实时投递SLS的Region。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 修改实时日志投递的主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
}
