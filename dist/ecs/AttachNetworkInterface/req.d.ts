export interface AttachNetworkInterfaceRequest {
    /**
     * 实例所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp17pdijfczax1huji****`
     */
    "NetworkInterfaceId": string;
    /**
     * 实例ID。
     * @example `i-bp16qstyvxj9gpqw****`
     */
    "InstanceId": string;
    /**
     * 中继网卡ID。
     * >该参数暂未上线，不支持使用。
     * @example `eni-f8zapqwj1v1j4ia3****`
     */
    "TrunkNetworkInstanceId"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "WaitForNetworkConfigurationReady"?: boolean;
    /**
     * 网卡指定的物理网卡索引。
     * >NetworkCardIndex 取值与实例规格族有关。如果实例规格不支持NetworkCard则不能指定；如果支持，取值请参见[实例规格族](~~25378~~)。
     * @example `0`
     */
    "NetworkCardIndex"?: number;
}
