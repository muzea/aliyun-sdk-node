interface DescribeRouteServicesInCenRequest {
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
    * 云企业网ID。
    * @example `cen-7qthudw0ll6jmc****`
    */ "CenId"?: string;
    /**
    * 服务的域名或IP。
    * @example `100.64.0.0/24`
    */ "Host"?: string;
    /**
    * 云服务的服务所在地。
    * @example `cn-hangzhou`
    */ "HostRegionId"?: string;
    /**
    * 云服务的访问所在地。
    * @example `cn-beijing`
    */ "AccessRegionId"?: string;
    /**
    * 服务关联的VPC。
    * @example `vpc-bp1t36rn9l53iwbsf****`
    */ "HostVpcId"?: string;
}
export { DescribeRouteServicesInCenRequest };