interface DescribeDomainRealtimeLogDeliveryRequest {
    "RegionId"?: string;
    /**
    * 开启实时日志投递服务域名。
    * @example `example.com`
    */ "Domain": string;
    "OwnerId"?: number;
}
export { DescribeDomainRealtimeLogDeliveryRequest };