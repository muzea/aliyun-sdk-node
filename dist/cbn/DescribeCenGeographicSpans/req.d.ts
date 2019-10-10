interface DescribeCenGeographicSpansRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 互通区域。
    * @example `china-china`
    */ "GeographicSpanId"?: string;
}
export { DescribeCenGeographicSpansRequest };