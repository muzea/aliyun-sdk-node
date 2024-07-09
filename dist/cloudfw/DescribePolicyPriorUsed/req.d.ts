export interface DescribePolicyPriorUsedRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。
     * 取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 访问控制策略的流量方向。
     * 取值：
     * - **in**：外对内流量。
     * - **out**：内对外流量。
     * @example `in`
     */
    "Direction": string;
    /**
     * 云防火墙防护的资产的IP版本。
     * 取值：
     * - **4**（默认）：IpV4
     * - **6**：IpV6
     * @example `6`
     */
    "IpVersion"?: string;
}
