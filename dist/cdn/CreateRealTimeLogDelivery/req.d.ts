export interface CreateRealTimeLogDeliveryRequest {
    /**
     * 实时投递sls的ProjectName。
     * @example `ProjectName`
     */
    "Project": string;
    /**
     * 实时投递sls的LogStoreName。
     * @example `LogstoreName`
     */
    "Logstore": string;
    /**
     * 实时投递sls的地域，详情请参见[实时日志投递用户Region列表](~~144883~~)。
     * @example `cn-shanghai`
     */
    "Region": string;
    /**
     * 开启实时日志投递服务域名。
     * @example `example.com`
     */
    "Domain": string;
}
