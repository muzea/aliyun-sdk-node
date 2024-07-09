export interface CreateNetworkAclEntryRequest {
    /**
     * 网络ACL的ID。
     * @example `nacl-bp1lhl0taikrbgnh****`
     */
    "NetworkAclId": string;
    /**
     * 规则条目的名称。
     * 长度为1～128个字符，不能以http://或https://开头。
     * @example `acl-1`
     */
    "NetworkAclEntryName"?: string;
    /**
     * 网络ACL的描述信息。
     * 长度为1～256个字符，不能以http://或https://开头。
     * @example `This is my NetworkAcl.`
     */
    "Description"?: string;
    /**
     * 规则方向。取值：
     * - **ingress**：入方向
     * - **egress**：出方向
     * @example `ingress`
     */
    "Direction": string;
    /**
     * 授权策略，取值：
     * - **accept**：允许
     * - **drop**：拒绝
     * @example `accept`
     */
    "Policy": string;
    /**
     * 源地址网段。
     * @example `10.0.0.0/24`
     */
    "CidrBlock": string;
    /**
     * 协议类型。取值：
     * - **icmp**：网络控制报文协议。
     * - **tcp**：传输控制协议。
     * - **udp**：用户数据报协议。
     * - **all**：支持所有协议。
     * @example `all`
     */
    "Protocol": string;
    /**
     * 端口范围。
     * - 当规则的**Protocol**（协议类型）为**all**或**icmp**时，端口范围为-1/-1，表示不限制端口。
     * - 当规则的**Protocol**（协议类型）为**tcp**或**udp**时，端口范围为**1~65535**，格式为**1/200**或**80/80**，表示端口1到端口200或端口80。
     * @example `-1/-1`
     */
    "PortRange": string;
    /**
     * 规则优先级。取值范围：**1~100**。默认值：**1**。
     * @example `1`
     */
    "Priority": number;
}
