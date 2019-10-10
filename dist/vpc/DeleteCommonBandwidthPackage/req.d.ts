interface DeleteCommonBandwidthPackageRequest {
    /**
    * 共享带宽实例所在的地域。
    * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    *  共享带宽实例的ID。
    * @example `cbwp-2ze2ic1xd2qeqk145pn4u`
    */ "BandwidthPackageId": string;
    "OwnerId"?: number;
    /**
    * 是否强制删除共享带宽实例。取值：
    *
    * - **false**（默认值）：只删除不包含EIP的共享带宽。
    * - **true**：将共享带宽实例中的EIP全部移出后，删除共享带宽。
    * @example `false`
    */ "Force"?: string;
}
export { DeleteCommonBandwidthPackageRequest };