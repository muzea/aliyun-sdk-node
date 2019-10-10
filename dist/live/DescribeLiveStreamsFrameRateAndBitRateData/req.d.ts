interface DescribeLiveStreamsFrameRateAndBitRateDataRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 您的域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 直播流名称。
    * @example `testStream`
    */ "StreamName"?: string;
    /**
    * 开始时间。UTC格式。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * UTC格式。StartTime和EndTime时间间隔在7天内，且EndTime超过当前时间。
    * @example `2017-12-21T09:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeLiveStreamsFrameRateAndBitRateDataRequest };