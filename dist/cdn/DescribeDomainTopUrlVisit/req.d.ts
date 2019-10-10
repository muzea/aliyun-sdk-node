interface DescribeDomainTopUrlVisitRequest {
    "RegionId"?: string;
    /**
    * 只支持单个域名查询。
    * 如果该参数为空，默认返回所有加速域名合并后数据。
    * @example `test.test.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 开始获取数据的时间点。
    * - 格式为：YYYY-MM-DDThh:mm:ssZ。
    * - 查询某天的数据，建议传YYYY-MM-DDT16:00:00Z。
    * - 不写默认读取过去24小时数据。
    * @example `2018-10-03T16:00:00Z`
    */ "StartTime"?: string;
    /**
    * 获取数据结束时间点。
    * - 结束时间需大于起始时间。
    * - 日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
    * @example `2018-10-03T16:00:00Z`
    */ "EndTime"?: string;
    /**
    * 排序方式，支持**traf**和**pv**，默认**pv**。
    * @example `pv`
    */ "SortBy"?: string;
}
export { DescribeDomainTopUrlVisitRequest };