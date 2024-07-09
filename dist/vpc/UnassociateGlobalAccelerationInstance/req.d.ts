export interface UnassociateGlobalAccelerationInstanceRequest {
    /**
     * 全球加速实例所在的地域。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     *  全球加速实例的ID。
     * @example `ga-1sxeedefrr33****`
     */
    "GlobalAccelerationInstanceId": string;
    /**
     * 要解绑的实例类型，取值：
     * - **RemoteEcsInstance**：ECS实例。
     * - **RemoteSlbInstance**：负载均衡实例。
     * - **RemoteEniInstance**：弹性网卡实例。
     * @example `RemoteEcsInstance`
     */
    "InstanceType"?: string;
}
