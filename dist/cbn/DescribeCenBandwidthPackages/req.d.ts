interface DescribeCenBandwidthPackagesRequest {
    "RegionId"?: string;
    "IncludeReservationData"?: boolean;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `2`
    */ "PageSize"?: number;
    "Filter"?: string[];
    /**
    * 过滤条件之间的关系，取值：
    * - **false**：过滤值之间是**与**关系。
    * - **true**：过滤值之间是**或**关系。
    * @example `false`
    */ "IsOrKey"?: boolean;
}
export { DescribeCenBandwidthPackagesRequest };