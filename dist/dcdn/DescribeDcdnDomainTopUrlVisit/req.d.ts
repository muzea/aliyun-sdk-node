interface DescribeDcdnDomainTopUrlVisitRequest {
    "RegionId"?: string;
    /**
    * 加速域名，只支持一个域名。
    * @example `example.com`
    */ "DomainName": string;
    "OwnerId"?: number;
    /**
    * 开始获取数据的时间点。不写默认读取过去24小时数据。
    * 格式为：YYYY-MM-DDThh:mm:ssZ，查询某天的数据，建议传YYYY-MM-DDT16:00:00Z。
    * @example `2018-10-03T16:00:00Z`
    */ "StartTime"?: string;
    /**
    * 排序方式，支持**traf**和**pv**，默认**pv**。
    * @example `pv`
    */ "SortBy"?: string;
}
export { DescribeDcdnDomainTopUrlVisitRequest };