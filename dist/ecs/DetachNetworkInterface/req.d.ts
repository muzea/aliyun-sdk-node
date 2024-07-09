export interface DetachNetworkInterfaceRequest {
    /**
     * 资源所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp67acfmxazb4p****`
     */
    "NetworkInterfaceId": string;
    /**
     * 实例ID。
     * @example `i-bp67acfmxazb4p****`
     */
    "InstanceId": string;
    /**
     * 中继网卡ID。
     * >该参数暂未上线，不支持使用。
     * @example `eni-f8zapqwj1v1j4ia3****`
     */
    "TrunkNetworkInstanceId"?: string;
}
