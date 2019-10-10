interface RevokeSecurityGroupEgressRequest {
    /**
    * 源端安全组所属地域 ID。您可以调用 [DescribeRegions](~~25609~~) 查看最新的阿里云地域列表。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 源端安全组 ID。
    * @example `sg-securitygroupid1`
    */ "SecurityGroupId": string;
    /**
    * 传输层协议。不区分大小写。取值范围：
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
    * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP 协议：-1/-1。
    * - GRE 协议：-1/-1。
    * - all：-1/-1。
    * @example `1/200`
    */ "PortRange": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 需要撤销访问权限的目的端安全组 ID。
    * 必须设置 DestGroupId 或者 DestCidrIp 参数。
    * 如果指定了 DestGroupId 没有指定参数 DestCidrIp，则参数 NicType 取值只能为 intranet。如果同时指定了 DestGroupId 和 DestCidrIp，则默认以 DestCidrIp 为准。
    * @example `sg-securitygroupid2`
    */ "DestGroupId"?: string;
    /**
    * 跨账户删除安全组规则时，目的端安全组所属的阿里云账户 ID。
    * - 如果 DestGroupOwnerId 及 DestGroupOwnerAccount 均未设置，则认为是撤销您其他安全组的访问权限。
    * - 如果您已经设置参数 DestCidrIp，则参数 DestGroupOwnerId 无效。
    *
    * @example `155780923770`
    */ "DestGroupOwnerId"?: number;
    /**
    * 跨账户删除安全组规则时，目的端安全组所属的阿里云账户。
    * - 如果 DestGroupOwnerAccount 及 DestGroupOwnerId 均未设置，则认为是撤销您其他安全组的访问权限。
    * - 如果已经设置参数 DestCidrIp，则参数 DestGroupOwnerAccount 无效。
    *
    * @example `FinanceJoshua`
    */ "DestGroupOwnerAccount"?: string;
    /**
    * 目的端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：无。
    * @example `0.0.0.0/0`
    */ "DestCidrIp"?: string;
    /**
    * 目的端 IPv6 CIDR 地址段。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
    * 默认值：无。
    * > 仅支持 VPC 类型的 IP 地址。
    * @example `2001:db8:1233:1a00::***`
    */ "Ipv6DestCidrIp"?: string;
    /**
    * 源端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：无。
    * @example `0.0.0.0/0`
    */ "SourceCidrIp"?: string;
    /**
    * 源端 IPv6 CIDR 地址段。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
    * 默认值：无。
    * > 仅支持 VPC 类型的 IP 地址。
    * @example `2001:db8:1234:1a00::***`
    */ "Ipv6SourceCidrIp"?: string;
    /**
    * 源端安全组开放的传输层协议相关的端口范围。取值范围：
    *
    * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP 协议：-1/-1。
    * - GRE 协议：-1/-1。
    * - all：-1/-1。
    * @example `1/200`
    */ "SourcePortRange"?: string;
    /**
    * 访问权限。取值范围：
    *
    * - accept：接受访问。
    * - drop：拒绝访问，不发回拒绝信息。
    * 默认值：accept
    * @example `accept`
    */ "Policy"?: string;
    /**
    * 安全组规则优先级。取值范围：1~100 默认值：1
    * @example `1`
    */ "Priority"?: string;
    /**
    * 网卡类型。取值范围：
    *
    * - internet：公网网卡。
    * - intranet：内网网卡。
    * 当撤销安全组之间互相访问时，即指定了 DestGroupId 且没有指定 DestCidrIp 时，参数 NicType 取值只能为 intranet。 默认值：internet
    * @example `intranet`
    */ "NicType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
    */ "ClientToken"?: string;
    /**
    * 安全组规则的描述。
    * @example `FinanceJoshuaTest`
    */ "Description"?: string;
}
export { RevokeSecurityGroupEgressRequest };