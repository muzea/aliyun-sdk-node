interface ModifySecurityGroupEgressRuleRequest {
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
    * - icmp
    * - gre
    * - tcp
    * - udp
    * - all：支持所有协议
    * @example `tcp`
    */ "IpProtocol": string;
    /**
    * 源端安全组开放的传输层协议相关的端口范围。取值范围：
    * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP 协议：-1/-1 。
    * - GRE 协议：-1/-1。
    * - all：-1/-1 。
    * @example `80/80`
    */ "PortRange": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 目的端安全组ID。
    * @example `sg-securitygroupid22`
    */ "DestGroupId"?: string;
    /**
    * 目的端安全组所属的账号登录名称。
    * @example `155780923770`
    */ "DestGroupOwnerId"?: number;
    /**
    * 目的端安全组所属的账号ID，亦即UID。
    * @example `EcsforCloud@Alibaba.com `
    */ "DestGroupOwnerAccount"?: string;
    /**
    * 目的端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。默认值：0.0.0.0/0
    * @example `10.0.0.0/8`
    */ "DestCidrIp"?: string;
    /**
    * 目的端 IP 地址范围。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
    * @example `2001:db8:1233:1a00::***`
    */ "Ipv6DestCidrIp"?: string;
    /**
    * 源端 IP 地址范围。支持 CIDR 格式和 IPv4 格式的 IP 地址范围。
    * @example `10.0.0.0/8`
    */ "SourceCidrIp"?: string;
    /**
    * 源端 IP 地址范围。支持 CIDR 格式和 IPv6 格式的 IP 地址范围。
    * @example `2001:db8:1234:1a00::***`
    */ "Ipv6SourceCidrIp"?: string;
    /**
    * 源端安全组开放的传输层协议相关的端口范围。取值范围：
    * - TCP/UDP 协议：取值范围为 1~65535。使用斜线（/）隔开起始端口和终止端口。正确示范：1/200；错误示范：200/1。
    * - ICMP 协议：-1/-1。
    * - GRE 协议：-1/-1。
    * - all：-1/-1。
    * @example `80/80`
    */ "SourcePortRange"?: string;
    /**
    * 访问权限。取值范围：
    * - accept：接受访问。
    * - drop：拒绝访问，不发回拒绝信息。
    * 默认值：accept
    * @example `accept`
    */ "Policy"?: string;
    /**
    * 安全组规则优先级。取值范围：1~100
    * 默认值：1
    * @example `1`
    */ "Priority"?: string;
    /**
    * 网卡类型。取值范围：
    * - internet：公网网卡。
    * - intranet：内网网卡。
    * 当设置安全组之间互相访问时，即指定了 DestGroupId且没有指定 DestCidrIp 时，参数 NicType 取值只能为 intranet。
    * @example `internet`
    */ "NicType"?: string;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 安全组规则的描述信息。长度为 1~512 个字符。
    * @example `Thisisanewsecuritygrouprule`
    */ "Description"?: string;
}
export { ModifySecurityGroupEgressRuleRequest };