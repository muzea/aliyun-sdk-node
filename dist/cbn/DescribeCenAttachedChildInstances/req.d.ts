interface DescribeCenAttachedChildInstancesRequest {
    "RegionId"?: string;
    /**
    *  指定云企业网实例的ID。
    * @example `cen-7qthudw0ll6jmcx****`
    */ "CenId": string;
    "OwnerId"?: number;
    /**
    *  列表的页码，默认值为**1**。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 加载的网络实例类型，取值：
    * - **VPC**。
    * - **VBR**。
    * - **CCN**。
    * @example `VPC`
    */ "ChildInstanceType"?: string;
    /**
    * 网络实例的所属地域。
    * @example `us-west-1`
    */ "ChildInstanceRegionId"?: string;
}
export { DescribeCenAttachedChildInstancesRequest };