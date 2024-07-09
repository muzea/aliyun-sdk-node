export interface EnableLiveRealtimeLogDeliveryRequest {
    /**
     * 开启实时日志投递服务播流域名。
     * 多个域名之间用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
}
