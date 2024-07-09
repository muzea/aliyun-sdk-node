export interface LeaveSecurityGroupRequest {
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId": string;
    /**
     * 实例ID。
     * > 当该参数传入值时，`NetworkInterfaceId`必须为空。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId"?: string;
    /**
     * 弹性网卡ID。
     * > 当该参数传入值时，`InstanceId`必须为空。
     * @example `eni-bp13kd656hxambfe****`
     */
    "NetworkInterfaceId"?: string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * - 实例移出安全组的操作可以不指定地域ID。
     * - 弹性网卡移出安全组的操作必须指定弹性网卡所在的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
