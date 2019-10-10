interface ModifyCommonBandwidthPackageIpBandwidthRequest {
    /**
    * 共享带宽所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 共享带宽的实例ID。
    * @example `cbwp-2zep6hw5d6y8exxxxxxxx`
    */ "BandwidthPackageId": string;
    /**
    * 已经加入到共享带宽的EIP的实例ID。
    * @example `eip-2zewysoansu0sxxxxxxxx`
    */ "EipId": string;
    /**
    * 在共享带宽内最大可分配的带宽值，单位为Mbps。
    * @example `500`
    */ "Bandwidth": string;
    "OwnerId"?: number;
}
export { ModifyCommonBandwidthPackageIpBandwidthRequest };