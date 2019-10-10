interface DescribeLiveStreamRecordContentRequest {
    "RegionId"?: string;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName": string;
    /**
    * 直播流名称。
    * @example `testStream`
    */ "StreamName": string;
    /**
    * 开始时间。
    * 格式：UTC时间。
    * 示例：2015-12-01T17:36:00Z。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime": string;
    /**
    * 结束时间。与StartTime的间隔时间不能超过4天。
    * 格式：UTC时间。
    * 示例：2015-12-01T17:36:00Z。
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
}
export { DescribeLiveStreamRecordContentRequest };