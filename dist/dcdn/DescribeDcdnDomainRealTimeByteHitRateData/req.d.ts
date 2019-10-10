interface DescribeDcdnDomainRealTimeByteHitRateDataRequest {
    "RegionId"?: string;
    /**
    * 域名。多个之间用逗号（,）隔开。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * @example `2017-12-10T20:00:00Z`
    */ "StartTime"?: string;
    /**
    * @example `2017-12-10T21:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeDcdnDomainRealTimeByteHitRateDataRequest };