export interface ListRealtimeLogDeliveryDomainsRequest {
    /**
     * 实时投递sls的ProjectName，多个用英文逗号（,）分隔。
     * @example `ProjectName`
     */
    "Project": string;
    /**
     * 实时投递sls的LogStoreName，多个用英文逗号（,）分隔。
     * @example `LogstoreName`
     */
    "Logstore": string;
    /**
     * 实时投递sls的地域，多个用英文逗号（,）分隔。
     * 地域详情请参见[实时日志投递用户Region列表](~~144883~~)。
     * @example `ch-shanghai`
     */
    "Region": string;
}
