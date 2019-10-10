interface DescribeDomainRealTimeByteHitRateDataRequest {
    "RegionId"?: string;
    /**
    * 加速域名。
    * @example `test.test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 不填默认查询从EndTime起一小时内的数据。
    * @example `2016-10-20T04:00:00Z`
    */ "StartTime"?: string;
    /**
    * 结束时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。
    * - 不填默认查询从开始时间起一小时内的数据。
    * @example `2016-10-20T04:00:00Z`
    */ "EndTime"?: string;
}
export { DescribeDomainRealTimeByteHitRateDataRequest };