export interface DeleteGlobalAccelerationInstanceRequest {
    /**
     * 全球加速实例所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  全球加速实例的ID。
     * @example `ga-asdfsl22s****`
     */
    "GlobalAccelerationInstanceId": string;
}
