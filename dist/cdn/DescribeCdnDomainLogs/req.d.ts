interface DescribeCdnDomainLogsRequest {
    "RegionId"?: string;
    /**
    * 域名，只支持单个查询。
    * @example `www.yourdomain.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 分页大小，默认**300**，最大**1000**，取值：**1**~**1000**。
    * @example `300`
    */ "PageSize"?: number;
    /**
    * 取得第几页，取值范围为：大于**1**的任意整数。
    * @example `2`
    */ "PageNumber"?: number;
    /**
    * 获取日志起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。
    * @example `2017-12-21T08:00:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取日志结束时间。结束时间需大于起始时间，起止时间和结束时间，间隔不超过一年。
    * 获取日期格式按照ISO8601表示法，并使用UTC时间。
    * @example `2017-12-22T08:00:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeCdnDomainLogsRequest };