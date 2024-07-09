export interface UnassignPrivateIpAddressesRequest {
    /**
     * 资源所属地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp67acfmxazb4ph****`
     */
    "NetworkInterfaceId": string;
    /**
     * 一个或多个需要删除的辅助私有IP地址。
     * @example `192.168.**.**`
     */
    "PrivateIpAddress"?: string[];
    /**
     * 一个或多个需要删除的IPv4前缀。
     */
    "Ipv4Prefix"?: string[];
}
