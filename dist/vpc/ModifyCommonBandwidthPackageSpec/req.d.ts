export interface ModifyCommonBandwidthPackageSpecRequest {
    /**
     * 共享带宽实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  共享带宽实例的ID。
     * @example `cbwp-2ze2ic1xd2qeqk145****`
     */
    "BandwidthPackageId": string;
    /**
     * 共享带宽实例的带宽峰值。单位：Mbps。
     * <props="china">
     *  - 当共享带宽的计费方式为按带宽计费时，**Bandwidth**的默认取值范围为**2**~**20000**。
     * -  当共享带宽的计费方式为按增强型95计费时，**Bandwidth**的默认取值范围为**200**~**20000**。
     * - 当共享带宽的计费方式为按主流量计费时，**Bandwidth**的默认取值范围为**1**~**2000**。
     * </props>
     * <props="intl">取值范围：**1**~**1000**。</props>
     * @example `1000`
     */
    "Bandwidth": string;
}
