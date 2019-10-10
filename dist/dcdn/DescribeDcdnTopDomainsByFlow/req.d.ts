interface DescribeDcdnTopDomainsByFlowRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 最小数据粒度为5分钟。
    * - 不写默认读取当月数据。
    * @example `2016-03-01T04:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2016-03-14T07:34:00Z`
    */ "EndTime"?: string;
    /**
    * 域名获取数量限制，默认为**20**，取值支持**1**~**100**。
    * @example `20`
    */ "Limit"?: number;
}
export { DescribeDcdnTopDomainsByFlowRequest };