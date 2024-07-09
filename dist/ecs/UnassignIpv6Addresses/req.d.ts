export interface UnassignIpv6AddressesRequest {
    /**
     * 弹性网卡所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp14v2sdd3v8ht****`
     */
    "NetworkInterfaceId": string;
    /**
     * 一个或多个需要删除的IPv6地址。N的取值范围为1~10。
     * @example `2001:db8:1234:1a00::***`
     */
    "Ipv6Address"?: string[];
    /**
     * 一个或多个需要回收的IPv6前缀。N的取值范围为1~10。
     */
    "Ipv6Prefix"?: string[];
}
