interface DescribeCenRegionDomainRouteEntriesRequest {
    "RegionId"?: string;
    /**
    * 指定待查询的云企业网实例的ID。
    * @example `cen-7qthudw0ll6j****`
    */ "CenId": string;
    /**
    * 指定待查询的地域的ID。
    * @example `cn-hangzhou`
    */ "CenRegionId": string;
    /**
    * @example `111`
    */ "OwnerId"?: number;
    /**
    * 列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `1`
    */ "PageSize"?: number;
    /**
    * @example `111`
    */ "Status"?: string;
}
export { DescribeCenRegionDomainRouteEntriesRequest };