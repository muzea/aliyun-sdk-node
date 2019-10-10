interface DescribeDomainRealTimeTrafficDataRequest {
    "RegionId"?: string;
    /**
    * 如果参数为空，默认返回所有加速域名合并后数据。
    * 可输入需要查询的加速域名。支持批量域名查询，多个域名用逗号（,）分隔。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟，不写默认读取过去1小时数据。
    * @example `2015-12-10T20:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2015-12-10T20:01:00Z`
    */ "EndTime"?: string;
}
export { DescribeDomainRealTimeTrafficDataRequest };