export interface AssignIpv6AddressesRequest {
    /**
     * 弹性网卡所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp1iqejowblx6h8j****`
     */
    "NetworkInterfaceId": string;
    /**
     * 为弹性网卡指定随机生成的IPv6地址数量。取值范围：1~10。
     * > 调用该接口时，您必须设置`Ipv6Addresses.N`参数或者`Ipv6AddressCount`参数的其中一个，但不能同时设置这两个参数。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 为弹性网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。
     * 取值示例：Ipv6Address.1=2001:db8:1234:1a00::\*\*\*\*
     * > 调用该接口时，您必须设置`Ipv6Addresses.N`参数或者`Ipv6AddressCount`参数的其中一个，但不能同时设置这两个参数。
     * @example `2001:db8:1234:1a00::****`
     */
    "Ipv6Address"?: string[];
    /**
     * 为弹性网卡指定一个或多个IPv6前缀。N的取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。
     */
    "Ipv6Prefix"?: string[];
    /**
     * 为弹性网卡指定一个或多个IPv6前缀。取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv6前缀，则必须设置Ipv6Prefix.N或者Ipv6PrefixCount的其中一个，但不能同时设置这两个参数。
     * @example `1`
     */
    "Ipv6PrefixCount"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
