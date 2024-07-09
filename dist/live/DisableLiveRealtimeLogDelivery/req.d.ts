export interface DisableLiveRealtimeLogDeliveryRequest {
    /**
     * 暂停实时日志投递的播流域名。
     * 多个域名之间用英文逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName": string;
}
