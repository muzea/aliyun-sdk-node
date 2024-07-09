export interface ModifySecurityGroupEgressRuleRequest {
    /**
     * 源端安全组所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
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
     * 安全组规则ID。
     * 根据安全组规则ID修改规则时，该参数必填。
     * @example `sgr-bp67acfmxazb4q****`
     */
    "SecurityGroupRuleId"?: string;
    /**
     * 访问权限。取值范围：
     * - accept：接受访问。
     * - drop：拒绝访问，不返回拒绝信息。
     * 默认值：accept。
     * @example `accept`
     */
    "Policy"?: string;
    /**
     * 安全组规则优先级。取值范围：1~100。
     * 默认值：1。
     * @example `1`
     */
    "Priority"?: string;
    /**
     * 传输层协议。不区分大小写。取值范围：
     * - ICMP
     * - GRE
     * - TCP
     * - UDP
     * - ALL：支持所有协议。
     * @example `tcp`
     */
    "IpProtocol"?: string;
    /**
     * 目的端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。
     * 默认值：无。
     * @example `10.0.0.0/8`
     */
    "DestCidrIp"?: string;
    /**
     * 目的端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。
     * > 仅支持VPC类型的IP地址，且该参数与`DestCidrIp`参数不可同时设置。
     * 默认值：无。
     * @example `2001:db8:1233:1a00::***`
     */
    "Ipv6DestCidrIp"?: string;
    /**
     * 需要设置访问权限的目的端安全组ID。至少设置一项`DestGroupId`或者`DestCidrIp`参数。
     * - 至少设置DestGroupId、DestCidrIp、Ipv6DestCidrIp或DestPrefixListId参数中的一项。
     * - 如果指定了DestGroupId没有指定参数DestCidrIp，则参数NicType取值只能为intranet。
     * - 如果同时指定了DestGroupId和DestCidrIp，则默认以DestCidrIp为准。
     * @example `sg-bp67acfmxa123b****`
     */
    "DestGroupId"?: string;
    /**
     * 目的端前缀列表ID。您可以调用[DescribePrefixLists](~~205046~~)查询可以使用的前缀列表ID。
     * 当您指定了`DestCidrIp`、`Ipv6DestCidrIp`或者`DestGroupId`参数中的一个时，将忽略该参数。
     * @example `pl-x1j1k5ykzqlixdcy****`
     */
    "DestPrefixListId"?: string;
    /**
     * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
     * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200。
     * - ICMP协议：-1/-1。
     * - GRE协议：-1/-1。
     * - ALL：-1/-1。
     * @example `80/80`
     */
    "PortRange"?: string;
    /**
     * 源端IPv4 CIDR地址块。支持CIDR格式和IPv4格式的IP地址范围。
     * 默认值：无。
     * @example `10.0.0.0/8`
     */
    "SourceCidrIp"?: string;
    /**
     * 源端IPv6 CIDR地址块。支持CIDR格式和IPv6格式的IP地址范围。
     * > 仅支持VPC类型的IP地址，且该参数与`SourceCidrIp`参数不可同时设置。
     * 默认值：无。
     * @example `2001:db8:1234:1a00::***`
     */
    "Ipv6SourceCidrIp"?: string;
    /**
     * 源端安全组开放的传输层协议相关的端口范围。取值范围：
     * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
     * - ICMP协议：-1/-1。
     * - GRE协议：-1/-1。
     * - ALL：-1/-1。
     * @example `80/80`
     */
    "SourcePortRange"?: string;
    /**
     * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户。
     * @example `EcsforCloud@Alibaba.com`
     */
    "DestGroupOwnerAccount"?: string;
    /**
     * 跨账户设置安全组规则时，目的端安全组所属的阿里云账户ID。
     * @example `1234567890`
     */
    "DestGroupOwnerId"?: number;
    /**
     * 根据安全组规则ID修改规则时，不支持修改该参数。
     * 如果需要修改，建议先增加一条新规则，再删除当前规则。
     * @example `intranet`
     */
    "NicType"?: string;
    /**
     * 安全组规则的描述信息。长度为1~512个字符。
     * @example `This is a new securitygroup rule.`
     */
    "Description"?: string;
}
