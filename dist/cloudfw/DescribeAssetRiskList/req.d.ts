export interface DescribeAssetRiskListRequest {
    /**
     * 访问者源IP地址。
     * @example `47.100.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 云防火墙防护的资产的IP版本。
     * 取值：
     * - **4**（默认）：IpV4
     * - **6**：IpV6
     * @example `4`
     */
    "IpVersion": number;
    /**
     * 待查询的IP地址列表参数，IP地址之间用半角逗号（,）分隔，一次性最多查询20个IP地址。
     * >- IPv4举例：47.97.XX.XX。
     * >- IPv6举例：2001:db8:ffff:ffff:ffff:XXXX:ffff。
     */
    "IpAddrList"?: string[];
}
