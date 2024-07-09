export interface ModifyRealtimeLogDeliveryRequest {
    /**
     * 实时投递sls的ProjectName。
     * @example `testProject`
     */
    "Project": string;
    /**
     * 实时投递sls的LogStoreName。
     * @example `TestLog`
     */
    "Logstore": string;
    /**
     * 实时投递sls的地域，详情请参见[实时日志服务推送地域](~~144883~~)。
     * @example `ch-shanghai`
     */
    "Region": string;
    /**
     * 修改实时日志投递的域名，仅支持修改单个。
     * @example `example.com`
     */
    "Domain": string;
}
