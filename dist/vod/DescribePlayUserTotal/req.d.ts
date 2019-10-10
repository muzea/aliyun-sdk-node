interface DescribePlayUserTotalRequest {
    "RegionId"?: string;
    /**
    * 结束时间，UTC格式。
    * @example `2016-06-30T19:00:00Z`
    */ "EndTime": string;
    "OwnerId"?: number;
    /**
    * 起始时间，UTC格式。
    * 支持查询2018-01-01起的数据，即StartTime大于等于2018-01-01T00:00:00Z。
    * @example `2016-06-29T19:00:00Z`
    */ "StartTime": string;
}
export { DescribePlayUserTotalRequest };