interface DescribeVodDomainLogRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 域名（只支持单个查询）。
    * @example `example1.com`
    */ "DomainName": string;
    /**
    * 分页大小。默认值：**300**。最大值：**1000**。
    * @example `300`
    */ "PageSize"?: number;
    /**
    * 页码。默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 获取日志起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
    * @example `2016-10-20T04:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间需大于起始时间。起止时间和结束时间，间隔不超过一年。
    * 获取日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
    * @example `2016-10-20T04:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeVodDomainLogRequest };