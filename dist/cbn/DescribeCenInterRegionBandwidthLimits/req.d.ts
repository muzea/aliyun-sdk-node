interface DescribeCenInterRegionBandwidthLimitsRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `1`
    */ "PageSize"?: number;
    /**
    *  指定查询该云企业网实例内的跨地域互通带宽。
    * @example `cen-7qthudw0ll6jm****`
    */ "CenId"?: string;
}
export { DescribeCenInterRegionBandwidthLimitsRequest };