interface DescribeLiveStreamSnapshotInfoRequest {
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
    * 格式：2015-12-01T17:36:00Z。
    * @example `2017-12-21T08:00:00Z`
    */ "StartTime": string;
    /**
    * 结束时间。EndTime和StartTime之间的间隔不能超过**1**天。
    * 格式：2015-12-01T17:36:00Z。
    * @example `2017-12-22T08:00:00Z`
    */ "EndTime": string;
    /**
    * 您的加速域名。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    *
    * 一次调用获取的数量。
    * - 取值范围：1~100
    * - 默认值：10
    * @example `10`
    */ "Limit"?: number;
    /**
    * 排序。取值：
    * - asc（默认值）：升序
    * - desc：降序
    * @example `asc`
    */ "Order"?: string;
}
export { DescribeLiveStreamSnapshotInfoRequest };