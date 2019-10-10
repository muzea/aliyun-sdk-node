interface DescribeCenPrivateZoneRoutesRequest {
    "RegionId"?: string;
    /**
    * 云企业网ID。
    * @example `cen-7qthudw0ll6jmc****	`
    */ "CenId": string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
    /**
    * 访问所在地。
    * 访问所在地是指通过CEN访问PrivateZone服务的源地域。
    * @example `cn-hangzhou`
    */ "AccessRegionId"?: string;
    /**
    * 服务所在地。
    * 服务所在地是指通过CEN访问PrivateZone服务的目的地域。
    * @example `cn-hangzhou`
    */ "HostRegionId"?: string;
}
export { DescribeCenPrivateZoneRoutesRequest };