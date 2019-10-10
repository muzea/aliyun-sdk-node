interface DescribeCommonBandwidthPackagesRequest {
    /**
    * 共享带宽所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    "OwnerId"?: number;
    /**
    * 是否包含未生效的订购数据，默认是**false**。
    * @example `false`
    */ "IncludeReservationData"?: boolean;
    /**
    *  共享带宽实例的ID。
    * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
    */ "BandwidthPackageId"?: string;
    /**
    * 资源组ID。
    * @example `rg-acfmxazb4ph6aiy`
    */ "ResourceGroupId"?: string;
    /**
    * 共享带宽实例名称。
    * @example `test123`
    */ "Name"?: string;
    /**
    *  列表的页码，默认值为1。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    *  分页查询时每页的行数，最大值为50，默认值为10。
    * @example `10`
    */ "PageSize"?: number;
}
export { DescribeCommonBandwidthPackagesRequest };