interface DescribeLiveStreamsControlHistoryRequest {
    "RegionId"?: string;
    /**
    * 查询开始时间。UTC格式：2015-12-01T17:37:00Z。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime": string;
    /**
    * 查询结束时间。UTC格式：2015-12-01T17:37:00Z。
    * EndTime和StartTime之间的间隔不能超过30天。
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime": string;
    /**
    * 您的直播加速域名。
    * @example `play.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 直播流所属应用名称。
    * @example `testApp`
    */ "AppName"?: string;
}
export { DescribeLiveStreamsControlHistoryRequest };