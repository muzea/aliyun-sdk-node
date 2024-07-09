export interface DescribeDomainResolveRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。
     * 取值包括：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 待解析的域名地址。
     * @example `www.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 云防火墙防护的资产的IP版本。取值：
     * - **4**（默认）：IPV4
     * - **6**：IPV6
     * @example `6`
     */
    "IpVersion"?: string;
}
