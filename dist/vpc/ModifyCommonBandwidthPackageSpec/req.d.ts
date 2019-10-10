interface ModifyCommonBandwidthPackageSpecRequest {
    /**
    * 共享带宽实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  共享带宽实例的ID。
    * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
    */ "BandwidthPackageId": string;
    /**
    *  共享带宽实例的带宽峰值，单位为Mbps。
    * @example `100`
    */ "Bandwidth": string;
    "OwnerId"?: number;
}
export { ModifyCommonBandwidthPackageSpecRequest };