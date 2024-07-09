export interface ModifyGlobalAccelerationInstanceSpecRequest {
    /**
     * 全球加速实例所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  全球加速实例的ID。
     * @example `ga-32s33s****`
     */
    "GlobalAccelerationInstanceId": string;
    /**
     *  全球加速实例的带宽峰值，单位为Mbps，取值：**10**。
     * @example `10`
     */
    "Bandwidth": string;
}
