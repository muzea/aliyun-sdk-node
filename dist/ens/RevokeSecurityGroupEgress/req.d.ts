export interface RevokeSecurityGroupEgressRequest {
    /**
     * 传输层协议。取值大小写敏感。取值范围：
     * - tcp
     * - udp
     * - icmp
     * - gre
     * - all：支持所有协议
     * @example `all`
     */
    "IpProtocol": string;
    /**
     * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
     * - TCP/UDP协议：取值范围为**1**~**65535**。使用斜线（/）隔开起始端口和终止端口。正确示范：**1/200**；错误示范：**200/1**。
     * - ICMP协议：**-1/-1**。
     * - GRE协议：**-1/-1**。
     * - IpProtocol取值为all：**-1/-1**。
     * @example `22/22`
     */
    "PortRange": string;
    /**
     * 安全组ID。
     * @example `sg-bp67acfmxazb4ph***`
     */
    "SecurityGroupId": string;
    /**
     * 设置访问权限。取值：
     * - **accept**：接受访问。
     * - **drop**：拒绝访问，不返回拒绝信息。
     * 默认值：**accept**。
     * @example `accept`
     */
    "Policy"?: string;
    /**
     * 安全组规则优先级。取值范围：**1**~**100**，数值越小，代表优先级越高。
     * 默认值：**1**。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 目的端IP地址范围。支持CIDR格式和IPv4格式的IP地址范围。
     * 默认值：无。
     * @example `10.0.0.0/8`
     */
    "DestCidrIp": string;
    /**
     * 源端安全组开放的传输层协议相关的端口范围。取值范围：
     * - TCP/UDP协议：取值范围为**1**~**65535**。使用斜线（/）隔开起始端口和终止端口。正确示范：**1/200**；错误示范：**200/1**。
     * - ICMP协议：**-1/-1**。
     * - GRE协议：**-1/-1**。
     * - IpProtocol取值为all：**-1/-1**。
     * @example `22/22`
     */
    "SourcePortRange"?: string;
}
