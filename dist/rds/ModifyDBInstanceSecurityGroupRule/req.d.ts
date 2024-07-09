export interface ModifyDBInstanceSecurityGroupRuleRequest {
    /**
     * 实例ID。可调用[DescribeDBInstances](~~2628785~~)获取。
     * @example `rm-bp15i4hn07r******`
     */
    "DBInstanceId": string;
    /**
     * 安全组规则ID。可调用[DescribeDBInstanceSecurityGroupRule](~~2834044~~)获取。
     * @example `sgr-2ze17u******`
     */
    "SecurityGroupRuleId": string;
    /**
     * 目的端安全组开放的传输层协议（TCP/UDP）相关的端口范围。
     * 取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200。
     * @example `1/200`
     */
    "PortRange": string;
    /**
     * 传输层协议类型，取值如下：
     * - TCP
     * - UDP
     * @example `TCP
    `
     */
    "IpProtocol": string;
    /**
     * 源端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
     * @example `192.XX.XX.100`
     */
    "SourceCidrIp": string;
    /**
     * 安全组规则描述。
     * @example `zht_test`
     */
    "Description": string;
}
