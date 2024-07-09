export interface CreateExpressConnectTrafficQosRuleRequest {
    /**
     * QoS策略所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai
    `
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * QoS策略ID。
     * @example `qos-2giu0a6vd5x0mv****`
     */
    "QosId": string;
    /**
     * QoS队列ID。
     * @example `qos-queue-9nyx2u7n71s2rc****`
     */
    "QueueId": string;
    /**
     * QoS规则优先级。取值范围：**1**~**9000**，数字越大优先级越高，在同一个QoS策略内QoS规则优先级不允许重复。
     * @example `1`
     */
    "Priority": number;
    /**
     * QoS规则协议类型，取值：
     * - **ALL**
     * - **ICMP(IPv4)**
     * - **ICMPv6(IPv6)**
     * - **TCP**
     * - **UDP**
     * - **GRE**
     * - **SSH**
     * - **Telnet**
     * - **HTTP**
     * - **HTTPS**
     * - **MS SQL**
     * - **Oracle**
     * - **MySql**
     * - **RDP**
     * - **PostgreSQL**
     * - **Redis**
     * @example `ALL`
     */
    "Protocol": string;
    /**
     * QoS规则流量匹配源IPv4网段。
     * > 不支持输入本参数时，再输入参数**SrcIPv6Cidr**或**DstIPv6Cidr**。
     * @example `1.1.**.**​/24
    `
     */
    "SrcCidr"?: string;
    /**
     * QoS规则流量匹配目的IPv4网段。
     * > 不支持输入本参数时，再输入参数**SrcIPv6Cidr**或**DstIPv6Cidr**。
     * @example `1.1.**.**​/24
    `
     */
    "DstCidr"?: string;
    /**
     * QoS规则流量匹配源IPv6网段。
     * > 不支持输入本参数时，再输入参数**SrcCidr**或**DstCidr**。
     * @example `2001:0db8:1234:****::/64
    `
     */
    "SrcIPv6Cidr"?: string;
    /**
     * QoS规则流量匹配目的IPv6网段。
     * > 不支持输入本参数时，再输入参数**SrcCidr**或**DstCidr**。
     * @example `2001:0db8:1234:****::/64`
     */
    "DstIPv6Cidr"?: string;
    /**
     * QoS规则流量匹配源端口号范围，取值范围：**0**~**65535**，当不匹配时取值为-1。当前只支持指定单个端口号，端口号的起始和终止需要相同。
     * @example `-1/-1
    `
     */
    "SrcPortRange"?: string;
    /**
     * QoS规则流量匹配目的端口号范围。取值范围：**0**~**65535**，如果不匹配时取值为-1。当前只支持指定单个端口号，端口号的起始和终止需要相同。不同的协议类型，对应的目的端口号范围是固定的，取值如下：
     * - **ALL**：-1/-1，不可编辑。
     * - **ICMP(IPv4)**：-1/-1，不可编辑。
     * - **ICMPv6(IPv6)**：-1/-1，不可编辑。
     * - **TCP**：-1/-1，可编辑。
     * - **UDP**：-1/-1，可编辑。
     * - **GRE**：-1/-1，不可编辑。
     * - **SSH**：22/22，不可编辑。
     * - **Telnet**：23/23，不可编辑。
     * - **HTTP**：80/80，不可编辑。
     * - **HTTPS**：443/443，不可编辑。
     * - **MS SQL**：1443/1443，不可编辑。
     * - **Oracle**：1521/1521，不可编辑。
     * - **MySql**：3306/3306，不可编辑。
     * - **RDP**：3389/3389，不可编辑。
     * - **PostgreSQL**：5432/5432，不可编辑。
     * - **Redis**：6379/6379，不可编辑。
     * @example `-1/-1
    `
     */
    "DstPortRange"?: string;
    /**
     * QoS规则匹配流量的DSCP值。取值范围：**0**~**63**，如果不匹配时取值为-1。
     * @example `1`
     */
    "MatchDscp"?: number;
    /**
     * 修改流量中的DSCP值。取值范围：**0**~**63**，如果不修改时取值为-1。
     * @example `1`
     */
    "RemarkingDscp"?: number;
    /**
     * QoS规则的名称。
     * 长度为0～128个字符，不能以`http://` 或`https://`开头。
     * @example `qos-rule-test
    `
     */
    "RuleName"?: string;
    /**
     * QoS规则的描述信息。
     * 长度为0～256个字符，不能以`http://`或`https://`开头。
     * @example `qos-rule-test
    `
     */
    "RuleDescription"?: string;
}
