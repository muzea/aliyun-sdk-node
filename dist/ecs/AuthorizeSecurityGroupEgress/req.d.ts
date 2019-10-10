interface AuthorizeSecurityGroupEgressRequest {
    /**
    * 源端安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 源端安全组ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    /**
    * 传输层协议。取值大小写敏感。取值范围：
    *
    * - icmp
    * - gre
    * - tcp
    * - udp
    * - all：支持所有协议
    * @example `all`
    */ "IpProtocol": string;
    /**
    * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
    *
    * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP协议：-1/-1。
    * - GRE协议：-1/-1。
    * - all：-1/-1。
    * @example `1/200`
    */ "PortRange": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 需要设置访问权限的目的端安全组ID。
    * 至少设置一项DestGroupId或者DestCidrIp参数。
    * 如果指定了DestGroupId没有指定参数DestCidrIp，则参数NicType取值只能为intranet。
    * 如果同时指定了DestGroupId和DestCidrIp，则默认以DestCidrIp为准。
    * @example `sg-securitygroupid2`
    */ "DestGroupId"?: string;
    /**
    * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户ID。
    *
    * - 如果DestGroupOwnerId及DestGroupOwnerAccount均未设置，则认为是设置您其他安全组的访问权限。
    * - 如果您已经设置参数DestCidrIp，则参数DestGroupOwnerId无效。
    * @example `155780923770`
    */ "DestGroupOwnerId"?: number;
    /**
    * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户。
    *
    * - 如果DestGroupOwnerAccount及DestGroupOwnerId均未设置，则认为是设置您其他安全组的访问权限。
    * - 如果已经设置参数DestCidrIp，则参数DestGroupOwnerAccount无效。
    * @example `FinanceJoshua`
    */ "DestGroupOwnerAccount"?: string;
    /**
    * 目的端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
    * 默认值：无。
    * @example `10.0.0.0/8`
    */ "DestCidrIp"?: string;
    /**
    * 目的端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
    * 默认值：无。
    * >仅支持VPC类型的IP地址。
    * @example `2001:db8:1233:1a00::***`
    */ "Ipv6DestCidrIp"?: string;
    /**
    * 源端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
    * 默认值：无。
    * @example `10.0.0.0/8`
    */ "SourceCidrIp"?: string;
    /**
    * 源端IPv6 CIDR地址段。支持CIDR格式和IPv6格式的IP地址范围。
    *
    *
    * 默认值：无。
    * >仅支持VPC类型的IP地址。
    * @example `2001:db8:1234:1a00::***`
    */ "Ipv6SourceCidrIp"?: string;
    /**
    * 源端安全组开放的传输层协议相关的端口范围。取值范围：
    *
    * - TCP/UDP协议：1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP协议：-1/-1。
    * - GRE协议：-1/-1。
    * - all：-1/-1。
    * @example `80/80`
    */ "SourcePortRange"?: string;
    /**
    * 设置访问权限。取值范围：
    *
    * - accept：接受访问。
    * - drop：拒绝访问，不返回拒绝信息。
    * 默认值：accept。
    * @example `accept`
    */ "Policy"?: string;
    /**
    * 安全组规则优先级。取值范围：1~100
    * 默认值：1。
    * @example `1`
    */ "Priority"?: string;
    /**
    * 网卡类型。取值范围：
    *
    * - internet：公网网卡。
    * - intranet：内网网卡。
    * 当设置安全组之间互相访问时，即指定了DestGroupId且没有指定DestCidrIp时，参数NicType取值只能为intranet。
    * 默认值：internet。
    * @example `intranet`
    */ "NicType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000 `
    */ "ClientToken"?: string;
    /**
    * 安全组规则的描述信息。长度为1~512个字符。
    * @example `FinanceJoshua`
    */ "Description"?: string;
}
export { AuthorizeSecurityGroupEgressRequest };