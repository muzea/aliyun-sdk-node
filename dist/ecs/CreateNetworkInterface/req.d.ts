export interface CreateNetworkInterfaceRequest {
    /**
     * 实例所在地域的ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 弹性网卡的标签。
     */
    "Tag"?: {
        /**
         * 弹性网卡的标签键。N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 弹性网卡的标签值。N的取值范围：1~20。一旦传入该值，可以为空字符串。最多支持128个字符，不能以acs:开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。您可以调用[ListResourceGroups](~~158855~~)查询资源组信息。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 指定VPC的交换机ID。弹性网卡的私网IP地址在交换机的IP地址段内的空闲地址中取值。
     * @example `vsw-bp1s5fnvk4gn2tws03****`
     */
    "VSwitchId": string;
    /**
     * 弹性网卡的主私有IP地址。
     * 指定IP必须是在所属交换机的地址段内的空闲地址，不指定则默认随机分配该交换机中的空闲地址。
     * @example `172.17.**.**`
     */
    "PrimaryIpAddress"?: string;
    /**
     * 加入一个安全组。安全组和弹性网卡必须在同一个专有网络VPC中。
     * > 调用接口时，您必须设置`SecurityGroupId`或`SecurityGroupIds.N`其中一个，但不支持同时设置。
     * @example `sg-bp1fg655nh68xyz9i****`
     */
    "SecurityGroupId"?: string;
    /**
     * 弹性网卡名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空。
     * @example `testNetworkInterfaceName`
     */
    "NetworkInterfaceName"?: string;
    /**
     * 弹性网卡的描述信息。长度为2~256个英文或中文字符，不能以`http://`或`https://`开头。
     * 默认值：空。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "Visible"?: boolean;
    /**
     * 弹性网卡类型。取值范围：
     * - Secondary：弹性辅助网卡。
     * - Trunk：中继网卡 (邀测中）。
     * 默认值：Secondary。
     * @example `Secondary`
     */
    "InstanceType"?: string;
    /**
     * >该参数已废弃。
     * @example `null`
     */
    "BusinessType"?: string;
    /**
     * 指定私有IP地址数量，让ECS为您自动创建IP地址。取值范围：1~49。
     * @example `1`
     */
    "SecondaryPrivateIpAddressCount"?: number;
    /**
     * 弹性网卡队列数。取值范围：1~2048
     * 附加弹性网卡时，该值必须少于实例规格支持单块网卡的最大队列数。实例规格的单块网卡最大队列数可以通过[DescribeInstanceTypes](~~25620~~)接口查询`MaximumQueueNumberPerEni`字段。
     * 默认值：空。在附加时会采用实例规格的弹性网卡默认队列数，实例规格的弹性网卡默认队列数可以通过[DescribeInstanceTypes](~~25620~~)接口查询`SecondaryEniQueueNumber`字段。
     * @example `1`
     */
    "QueueNumber"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 弹性网卡的通讯模式。取值范围：
     * - Standard：使用TCP通讯模式。
     * - HighPerformance：开启ERI（Elastic RDMA Interface）接口，使用RDMA通讯模式。
     * > 对于使用RDMA通信模式的弹性网卡，仅允许与实例规格支持ERI的实例绑定，且使用RDMA模式的弹性网卡数量不能超过该实例规格族的限制。更多信息，请参见[实例规格族](~~25378~~)，[在企业级实例上配置eRDMA](~~336853~~)<props="china">及[在GPU实例上配置eRDMA](~~2248432~~)</props>。
     * 默认值：Standard。
     * @example `Standard`
     */
    "NetworkInterfaceTrafficMode"?: string;
    /**
     * >该参数正在邀测中，暂未开放使用。
     * @example `22`
     */
    "QueuePairNumber"?: number;
    /**
     * 加入一个或多个安全组。安全组和弹性网卡必须在同一个专有网络VPC中。N的取值范围与弹性网卡能够加入安全组配额有关，更多信息，请参见[使用限制](~~25412~~)。
     * > 调用接口时，您必须设置`SecurityGroupId`或`SecurityGroupIds.N`其中一个，但不支持同时设置。
     * @example `sg-bp1fg655nh68xyz9i****`
     */
    "SecurityGroupIds"?: string[];
    /**
     * 从弹性网卡所属交换机的CIDR地址段内的空闲地址中选择一个或多个辅助私有IP地址。N的取值范围：0~10。
     * > 分配辅助私有IP地址时，您不能同时指定参数`PrivateIpAddress.N`和参数`SecondaryPrivateIpAddressCount`。
     * @example `172.17.**.**`
     */
    "PrivateIpAddress"?: string[];
    /**
     * 为弹性网卡指定一个或多个IPv6地址。支持设置最多10个IPv6地址，即N的取值范围：1~10。
     * 取值示例：Ipv6Address.1=2001:db8:1234:1a00::\*\*\*\*
     * > 如果您需要为弹性网卡设置IPv6地址，则必须设置`Ipv6Addresses.N`或者`Ipv6AddressCount`的其中一个，但不能同时设置这两个参数。
     * @example `2001:db8:1234:1a00::****`
     */
    "Ipv6Address"?: string[];
    /**
     * 为弹性网卡指定随机生成的IPv6地址数量。取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv6地址，则必须设置`Ipv6Addresses.N`或者`Ipv6AddressCount`的其中一个，但不能同时设置这两个参数。
     * @example `1`
     */
    "Ipv6AddressCount"?: number;
    /**
     * 为弹性网卡指定一个或多个IPv4前缀。N的取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。
     */
    "Ipv4Prefix"?: string[];
    /**
     * 为弹性网卡指定一个或多个IPv4前缀。取值范围：1~10。
     * > 如果您需要为弹性网卡设置IPv4前缀，则必须设置Ipv4Prefix.N或者Ipv4PrefixCount的其中一个，但不能同时设置这两个参数。
     * @example `1`
     */
    "Ipv4PrefixCount"?: number;
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
     * 释放实例时是否保留网卡。取值范围：
     * - true：不保留。
     * - false：保留。
     * @example `true`
     */
    "DeleteOnRelease"?: boolean;
    /**
     * 弹性网卡出方向队列深度。
     * 您需要注意：
     * - 网卡的出方向队列深度必须和入方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
     * - 较大的出方向队列深度可以提升出方向的吞吐量，但会占用更多的内存。
     * @example `8192`
     */
    "TxQueueSize"?: number;
    /**
     * 弹性网卡入方向队列深度。
     * 您需要注意：
     * - 网卡的入方向队列深度必须和出方向队列深度相等，取值范围：8192~16384，且必须为 2 的幂。
     * - 较大的入方向队列深度可以提升入方向的吞吐量，但会占用更多的内存。
     * @example `8192`
     */
    "RxQueueSize"?: number;
    "NetworkInterfaceTrafficConfig"?: {
        QueueNumber: number;
        NetworkInterfaceTrafficMode: string;
        QueuePairNumber: number;
        TxQueueSize: number;
        RxQueueSize: number;
    };
    "ConnectionTrackingConfiguration"?: {
        TcpEstablishedTimeout: number;
        TcpClosedAndTimeWaitTimeout: number;
        UdpTimeout: number;
    };
    "EnhancedNetwork"?: {
        EnableSriov: boolean;
    };
}
