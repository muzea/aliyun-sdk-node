interface DescribePlayTopVideosRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 日期，UTC格式。
    * @example `2016-06-29T19:00:00Z`
    */ "BizDate": string;
    /**
    * 分页的页码，默认值：**1**。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 每页大小，默认值为**100**，最大值为**1000**。
    * @example `100`
    */ "PageSize"?: number;
}
export { DescribePlayTopVideosRequest };