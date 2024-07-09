export interface DescribeDomainReportRequest {
    /**
     * 需要查询的域名。支持通配符域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 要查询的字段。可以输入多个参数值，以英文逗号分隔。
     * 取值：
     * -  **ThreatTypes**：从威胁情报、安全事件分析出来的该域名所具备的风险标签。
     * - **Intelligences**：详细的威胁情报事件。
     * - **AttackPreferenceTop5**：被攻击的网站所属的Top 5行业。
     * - **AttackCntByThreatType**：服务器遭受的攻击次数。
     * - **为空**：表示仅返回域名、威胁等级、域名的基础信息、域名Whois信息和SSL证书信息。
     * @example `ThreatTypes,Intelligences,AttackPreferenceTop5,AttackCntByThreatType`
     */
    "Field"?: string;
    /**
     * 设置结果返回语言
     * - **zh**：简体中文
     * - **en**：英文
     * @example `zh/en`
     */
    "ServiceLang"?: string;
}
