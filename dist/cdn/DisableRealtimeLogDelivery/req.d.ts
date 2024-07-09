export interface DisableRealtimeLogDeliveryRequest {
    /**
     * 暂停实时日志投递服务域名，多个用英文逗号（,）分隔。
     * @example `example.com`
     */
    "Domain": string;
}
