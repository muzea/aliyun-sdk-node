export interface AssignPrivateIpAddressesRequest {
    /**
     * 弹性网卡所属的地域。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡ID。
     * @example `eni-bp67acfmxazb4p****`
     */
    "NetworkInterfaceId": string;
    /**
     * 指定私网IP地址数量，自动从交换机的空闲IP地址中分配IP地址。
     * 分配辅助私网IP地址时，您不能同时指定`PrivateIpAddress.N`和`SecondaryPrivateIpAddressCount`。
     * @example `1`
     */
    "SecondaryPrivateIpAddressCount"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 从弹性网卡所属交换机的空闲IP地址中选择一个或多个辅助私网IP地址。N的取值范围：
     * - 弹性网卡处于可用（`Available`）状态：1~32。
     * - 弹性网卡处于已附加（`InUse`）状态：受到实例规格限制，更多信息，请参见[实例规格族](~~25378~~)。
     * 分配辅助私网IP地址时，您不能同时指定`PrivateIpAddress.N`和`SecondaryPrivateIpAddressCount`。
     * @example `10.1.**.**`
     */
    "PrivateIpAddress"?: string[];
    /**
     * 为弹性网卡指定一个或多个IPv4前缀。N的取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。
     */
    "Ipv4Prefix"?: string[];
    /**
     * 为弹性网卡指定随机生成的IPv4前缀数量。取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。
     * @example `1`
     */
    "Ipv4PrefixCount"?: number;
}
