interface RemoveCommonBandwidthPackageIpRequest {
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
    * EIP实例的ID。
    * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
    * @example `eip-2zeerraiwb7uj6i0d0fo3`
    */ "IpInstanceId": string;
    "OwnerId"?: number;
}
export { RemoveCommonBandwidthPackageIpRequest };