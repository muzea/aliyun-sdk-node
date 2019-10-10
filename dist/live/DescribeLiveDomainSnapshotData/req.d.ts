interface DescribeLiveDomainSnapshotDataRequest {
    /**
    * 区域。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    /**
    * 获取数据结束时间。需大于起始时间。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
    * @example `2018-01-02T00:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 获取数据起始时间点。
    * 日期格式按照ISO8601表示法，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
    * > 支持查询**2018/01/01**起的数据，即**StartTime**≥`2018-01-01T00:00:00Z`。
    * @example `2018-01-01T00:00:00Z`
    */ "StartTime": string;
    /**
    * 需要查询的直播域名。
    * @example `www.example.com`
    */ "DomainName"?: string;
}
export { DescribeLiveDomainSnapshotDataRequest };