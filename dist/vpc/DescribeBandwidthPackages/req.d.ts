interface DescribeBandwidthPackagesRequest {
    /**
    *  NAT网关所在的地域。 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * @example `123`
    */ "OwnerId"?: number;
    /**
    *  NAT网关带宽包的ID。
    * @example `bwp-bp1xea10o8qxwdfs****`
    */ "BandwidthPackageId"?: string;
    /**
    *  NAT网关的ID。
    * @example `ngw-bp1uewa15k4iydfre****`
    */ "NatGatewayId"?: string;
    /**
    * 列表的页码，默认值为**1**。
    * @example `10`
    */ "PageNumber"?: number;
    /**
    * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeBandwidthPackagesRequest };