export interface CancelCommonBandwidthPackageIpBandwidthRequest {
    /**
     * 共享带宽所属的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 共享带宽的实例ID。
     * @example `cbwp-bp13d0m4e2qv8xxxxxxxx`
     */
    "BandwidthPackageId": string;
    /**
     * 已经加入到共享带宽的EIP的实例ID。
     * @example `eip-2zewysoansu0sxxxxxxxx`
     */
    "EipId": string;
}
