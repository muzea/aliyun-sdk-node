interface AddCommonBandwidthPackageIpRequest {
    /**
    * 共享带宽所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  共享带宽的ID。
    * @example `cbwp-2ze2ic1xd2qeqxxxxxxxx`
    */ "BandwidthPackageId": string;
    /**
    * EIP实例的ID。
    * 您可以通过调用[DescribeEipAddresses](~~36018~~)接口查询EIP实例的ID。
    * @example `eip-2zeerraiwb7uxxxxxxxx`
    */ "IpInstanceId": string;
    "OwnerId"?: number;
}
export { AddCommonBandwidthPackageIpRequest };