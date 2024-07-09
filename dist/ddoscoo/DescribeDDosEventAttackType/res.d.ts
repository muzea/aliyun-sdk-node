export interface DescribeDDosEventAttackTypeResponse {
    /**
     * 本次请求的ID。
     * @example `6F644A6E-40E7-483F-9DBB-CC27E16BB555`
     */
    RequestId: string;
    /**
     * 攻击类型信息。
     */
    AttackTypes: {
        /**
         * 该攻击类型的请求包数量。
         * @example `145902`
         */
        InPkts: number;
        /**
         * 攻击类型。取值：
         * - **QOTD-Reflect-Flood**：QOTD反射攻击
         * - **CharGEN-Reflect-Flood**：CharGEN反射攻击
         * - **DNS-Reflect-Flood**：DNS反射攻击
         * - **TFTP-Reflect-Flood**：TFTP反射攻击
         * - **Portmap-Reflect-Flood**：Portmap反射攻击
         * - **NTP-Reflect-Flood**：NTP反射攻击
         * - **NetBIOS-Reflect-Flood**：NetBIOS反射攻击
         * - **SNMPv2-Reflect-Flood**：SNMPv2反射攻击
         * - **CLDAP-Reflect-Flood**：CLDAP反射攻击
         * - **Ripv1-Reflect-Flood**：Ripv1反射攻击
         * - **OpenVPN-Reflect-Flood**：OpenVPN反射攻击
         * - **SSDP-Reflect-Flood**：SSDP反射攻击
         * - **NetAssistant-Reflect-Flood**：NetAssistant反射攻击
         * - **WSDiscovery-Reflect-Flood**：WSDiscovery反射攻击
         * - **Kad-Reflect-Flood**：Kad反射攻击
         * - **mDNS-Reflect-Flood**：mDNS反射攻击
         * - **10001-Reflect-Flood**：10001反射攻击
         * - **Memcached-Reflect-Flood**：Memcached反射攻击
         * - **QNP-Reflect-Flood**：QNP反射攻击
         * - **DVR-Reflect-Flood**：DVR反射攻击
         * - **CoAP-Reflect-Flood**：CoAP反射攻击
         * - **ADDP-Reflect-Flood**：ADDP反射攻击
         * - **Tcp-Syn**：TCP SYN Flood攻击
         * - **Tcp-Fin**：TCP FIN Flood攻击
         * - **Tcp-Ack**：TCP ACK Flood攻击
         * - **Tcp-Rst**：TCP RST Flood攻击
         * - **Tcp-Pushack**：TCP PSH+ACK Flood攻击
         * - **Tcp-Synack**：TCP SYN+ACK Flood攻击
         * - **Udp-None**：UDP攻击
         * - **Udp-Ssh**：UDP SSH协议攻击
         * - **Udp-Dns**：UDP DNS协议攻击
         * - **Udp-Http**：UDP HTTP协议攻击
         * - **Udp-Https**：UDP HTTPS协议攻击
         * - **Udp-Ntp**：UDP NTP协议攻击
         * - **Udp-Ldap**：UDP LDAP协议攻击
         * - **Udp-Ssdp**：UDP SSDP协议攻击
         * - **Udp-Memcached**：Memcache UDP反射放大攻击
         * - **Tcp-Other**：TCP其他类型攻击
         * - **Icmp**：ICMP Flood攻击
         * - **Igmp**：IGMP Flood攻击
         * - **Ipv6**：IPv6攻击
         * @example `Tcp-Syn`
         */
        AttackType: string;
    }[];
}
