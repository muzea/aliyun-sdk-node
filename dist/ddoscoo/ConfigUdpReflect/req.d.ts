export interface ConfigUdpReflectRequest {
    /**
     * 要操作的DDoS高防实例的ID。
     * > 您可以调用[DescribeInstanceIds](~~157459~~)查询所有DDoS高防实例的ID。
     * @example `ddoscoo-cn-i7m25564****`
     */
    "InstanceId": string;
    /**
     * 要添加的UDP反射攻击防护策略的配置。
     * 该参数使用JSON结构体转换的字符串表示。JSON结构体包含以下字段：
     * - **UdpSports**：Array类型，必选，要封禁的UDP反射源端口，示例：`[17,19]`。
     *     推荐您封禁以下常见的UDP反射攻击的源端口：
     *     - UDP 17：QOTD反射攻击
     *     - UDP 19：CharGEN反射攻击
     *     - UDP 69：TFTP反射攻击
     *     - UDP 111：Portmap反射攻击
     *     - UDP 123：NTP反射攻击
     *     - UDP 137：NetBIOS反射攻击
     *     - UDP 161：SNMPv2反射攻击
     *     - UDP 389：CLDAP反射攻击
     *     - UDP 1194：OpenVPN反射攻击
     *     - UDP 1900：SSDP反射攻击
     *     - UDP 3389：RDP反射攻击
     *     - UDP 11211：Memcached反射攻击
     * @example `{\"UdpSports\":[17,19]}`
     */
    "Config": string;
    /**
     * DDoS高防实例所属地域ID。取值：
     * - **cn-hangzhou**（默认）：表示中国内地，即DDoS高防（中国内地）实例。
     * - **ap-southeast-1**：表示非中国内地，即DDoS高防（非中国内地）实例。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
