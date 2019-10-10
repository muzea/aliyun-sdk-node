interface DisableRealtimeLogDeliveryRequest {
    "RegionId"?: string;
    /**
    * 暂停实时日志投递服务域名，多个以逗号（,）分隔。
    * @example `example.com`
    */ "Domain": string;
    "OwnerId"?: number;
}
export { DisableRealtimeLogDeliveryRequest };