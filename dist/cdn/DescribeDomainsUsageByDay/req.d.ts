interface DescribeDomainsUsageByDayRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 需要查询的加速域名，只支持一个域名，不写代表查询当前用户下所有域名。
    * @example `www.yourdomain.com`
    */ "DomainName"?: string;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2017-12-21T08:00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点，结束时间需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2017-12-22T08:00:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeDomainsUsageByDayRequest };