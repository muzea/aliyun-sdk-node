export interface AuthorizeSecurityGroupRequest {
    /**
     * 安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SecurityGroupId": string;
    /**
     * 安全组规则列表。N的取值范围：1~100。
     */
    "Permissions"?: {
        /**
         * 设置访问权限。取值范围：
         * - accept：接受访问。
         * - drop：拒绝访问，不返回拒绝信息，表现为发起端请求超时或者无法建立连接的类似信息。
         * 默认值：accept。
         * N的取值范围：1~100。
         * @example `accept`
         */
        Policy: string;
        /**
         * 安全组规则优先级，数字越小，代表优先级越高。取值范围：1~100。
         * 默认值：1。
         * N的取值范围：1~100。
         * @example `1`
         */
        Priority: string;
        /**
         * 传输层协议。取值不区分大小写。取值范围：
         * - TCP。
         * - UDP。
         * - ICMP。
         * - ICMPv6。
         * - GRE。
         * - ALL：支持所有协议。
         * N的取值范围：1~100。
         * @example `ALL`
         */
        IpProtocol: string;
        /**
         * 需要设置访问权限的源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
         * N的取值范围：1~100。
         * @example `10.0.0.0/8`
         */
        SourceCidrIp: string;
        /**
         * 需要设置访问权限的源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
         * N的取值范围：1~100。
         * > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`SourceCidrIp`参数不可同时设置。
         * @example `2001:250:6000::***`
         */
        Ipv6SourceCidrIp: string;
        /**
         * 需要设置访问权限的源端安全组ID。
         * - 至少设置`SourceGroupId`、`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourcePrefixListId`参数中的一项。
         * - 如果指定了`SourceGroupId`，没有指定参数`SourceCidrIp`或`Ipv6SourceCidrIp`，则参数`NicType`取值只能为`intranet`。
         * - 如果同时指定了`SourceGroupId`和`SourceCidrIp`，则默认以`SourceCidrIp`为准。
         * N的取值范围：1~100。
         * 您需要注意：
         * - 企业安全组不支持授权安全组访问。
         * - 普通安全组支持授权的安全组数量最多为20个。
         * @example `sg-bp67acfmxazb4p****`
         */
        SourceGroupId: string;
        /**
         * 需要设置访问权限的源端前缀列表ID。您可以调用[DescribePrefixLists](~~205046~~)查询可以使用的前缀列表ID。
         * N的取值范围：1~100。
         * 注意事项：
         * - 安全组的网络类型为经典网络时，不支持设置前缀列表。关于安全组以及前缀列表使用限制的更多信息，请参见[安全组使用限制](~~25412#SecurityGroupQuota1~~)。
         * - 当您指定了`SourceCidrIp`、`Ipv6SourceCidrIp`或`SourceGroupId`参数中的一个时，将忽略该参数。
         * @example `pl-x1j1k5ykzqlixdcy****`
         */
        SourcePrefixListId: string;
        /**
         * 安全组开放的传输层协议相关的目的端口范围。取值范围：
         * - TCP/UDP：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP：-1/-1。
         * - GRE：-1/-1。
         * - IpProtocol取值为ALL：-1/-1。
         * 了解端口的应用场景，请参见[典型应用的常用端口](~~40724~~)。
         * N的取值范围：1~100。
         * @example `80/80`
         */
        PortRange: string;
        /**
         * 目的端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
         * 用于支持五元组规则，请参见[安全组五元组规则](~~97439~~)。
         * N的取值范围：1~100。
         * @example `10.0.0.0/8`
         */
        DestCidrIp: string;
        /**
         * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
         * 用于支持五元组规则，请参见[安全组五元组规则](~~97439~~)。
         * N的取值范围：1~100。
         * > 仅在支持IPv6的VPC类型ECS实例上有效，且该参数与`DestCidrIp`参数不可同时设置。
         * @example `2001:250:6000::***`
         */
        Ipv6DestCidrIp: string;
        /**
         * 安全组开放的传输层协议相关的源端端口范围。取值范围：
         * - TCP/UDP协议：取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：-1/-1。
         * - GRE协议：-1/-1。
         * - IpProtocol取值为ALL：-1/-1。
         * 用于支持五元组规则，请参见[安全组五元组规则](~~97439~~)。
         * N的取值范围：1~100。
         * @example `7000/8000`
         */
        SourcePortRange: string;
        /**
         * 跨账户设置安全组规则时，源端安全组所属的阿里云账户。
         * - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerId`均未设置，则认为是设置您其他安全组的访问权限。
         * - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。
         * N的取值范围：1~100。
         * @example `test@aliyun.com`
         */
        SourceGroupOwnerAccount: string;
        /**
         * 跨账户设置安全组规则时，源端安全组所属的阿里云账户ID。
         * - 如果`SourceGroupOwnerAccount`及`SourceGroupOwnerId`均未设置，则认为是设置您其他安全组的访问权限。
         * - 如果已经设置参数`SourceCidrIp`，则参数`SourceGroupOwnerAccount`无效。
         * N的取值范围：1~100。
         * @example `1234567890`
         */
        SourceGroupOwnerId: number;
        /**
         * 经典网络类型安全组规则的网卡类型。取值范围：
         * - internet：公网网卡。
         * - intranet：内网网卡。
         * 专有网络VPC类型安全组规则无需设置网卡类型，默认为intranet，只能为intranet。
         * 设置安全组之间互相访问时，即仅指定了DestGroupId参数时，只能为intranet。
         * 默认值：internet。
         * N的取值范围：1~100。
         * @example `intranet`
         */
        NicType: string;
        /**
         * 安全组规则的描述信息。长度为1~512个字符。
         * N的取值范围：1~100。
         * @example `This is description.`
         */
        Description: string;
    }[];
    /**
     * 已废弃。请使用`Permissions.N.Policy`来设置访问权限。
     * @example `accept`
     */
    "Policy"?: string;
    /**
     * 已废弃。请使用`Permissions.N.Priority`来指定安全组规则优先级。
     * @example `1`
     */
    "Priority"?: string;
    /**
     * 已废弃。请使用`Permissions.N.IpProtocol`来指定传输层协议。
     * @example `ALL`
     */
    "IpProtocol"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourceCidrIp`来指定源端IPv4 CIDR地址块。
     * @example `10.0.0.0/8`
     */
    "SourceCidrIp"?: string;
    /**
     * 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址块。
     * @example `2001:250:6000::***`
     */
    "Ipv6SourceCidrIp"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourceGroupId`来指定源端安全组ID。
     * @example `sg-bp67acfmxazb4p****`
     */
    "SourceGroupId"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourcePrefixListId`来指定源端前缀列表ID。
     * @example `pl-x1j1k5ykzqlixdcy****`
     */
    "SourcePrefixListId"?: string;
    /**
     * 已废弃。请使用`Permissions.N.PortRange`来指定端口范围。
     * @example `22/22`
     */
    "PortRange"?: string;
    /**
     * 已废弃。请使用`Permissions.N.DestCidrIp`来指定目的端IPv4 CIDR地址段。
     * @example `10.0.0.0/8`
     */
    "DestCidrIp"?: string;
    /**
     * 已废弃。请使用`Permissions.N.Ipv6SourceCidrIp`来指定源端IPv6 CIDR地址块。
     * @example `2001:250:6000::***`
     */
    "Ipv6DestCidrIp"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourcePortRange`来指定源端端口范围。
     * @example `22/22`
     */
    "SourcePortRange"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourceGroupOwnerAccount`来指定源端安全组所属的阿里云账户。
     * @example `test@aliyun.com`
     */
    "SourceGroupOwnerAccount"?: string;
    /**
     * 已废弃。请使用`Permissions.N.SourceGroupOwnerId`来指定源端安全组所属的阿里云账户ID。
     * @example `1234567890`
     */
    "SourceGroupOwnerId"?: number;
    /**
     * 已废弃。请使用`Permissions.N.NicType`来指定网卡类型。
     * @example `intranet`
     */
    "NicType"?: string;
    /**
     * 已废弃。请使用`Permissions.N.Description`来指定安全组规则的描述。
     * @example `This is description.`
     */
    "Description"?: string;
}
