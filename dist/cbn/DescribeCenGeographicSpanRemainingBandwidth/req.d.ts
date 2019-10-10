interface DescribeCenGeographicSpanRemainingBandwidthRequest {
    "RegionId"?: string;
    /**
    * 带宽包所属的CEN实例ID。
    * @example `cen-nh98vzx8gfhlwn****`
    */ "CenId": string;
    /**
    * 带宽包的互通区域，取值：**China**|**North-America**|**Asia-Pacific**|**Europe**|**Australia**。
    * @example `China`
    */ "GeographicRegionAId": string;
    /**
    * 带宽包的另一个互通区域，取值：**China**|**North-America**|**Asia-Pacific**|**Europe**|**Australia**。
    * @example `North-America`
    */ "GeographicRegionBId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeCenGeographicSpanRemainingBandwidthRequest };