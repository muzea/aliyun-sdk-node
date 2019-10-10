interface DescribeRealtimeDeliveryAccRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 获取日志起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。
    * @example `2016-10-20T04:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
    * 获取日期格式按照ISO8601表示法，并使用UTC时间。
    * @example `2016-10-20T04:00:00Z`
    */ "EndTime"?: string;
    /**
    * 查询数据的时间粒度，支持**300**、**3600**、**86400**秒。
    * - 不传和传的值不支持时，时间跨度不超过3天，默认值**300**秒。
    * - 超过3天不超过30天默认值**3600**秒。
    * - 超过30天默认值**86400**秒。
    * @example `300`
    */ "Interval"?: string;
    /**
    * 实时日志投递的Project。
    * @example `Project`
    */ "Project"?: string;
    /**
    * 实时日志投递的Logstore。
    * @example `LogStore`
    */ "LogStore"?: string;
}
export { DescribeRealtimeDeliveryAccRequest };