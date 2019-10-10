interface DescribeLiveStreamBitRateDataRequest {
    "RegionId"?: string;
    /**
    * 您的域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName"?: string;
    /**
    * 直播流的名称。
    * @example `testStream`
    */ "StreamName"?: string;
    /**
    * 起始时间。
    * UTC格式，例如：2016-06-29T19:00:00Z。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * UTC格式，例如：2016-06-30T19:00:00Z
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeLiveStreamBitRateDataRequest };