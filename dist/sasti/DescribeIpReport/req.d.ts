export interface DescribeIpReportRequest {
    /**
     * 要查询的IP。
     * @example `192.0.XX.XX`
     */
    "Ip": string;
    /**
     * 要查询的字段。可以输入多个参数值，以英文逗号分隔。
     * 取值：
     * -  **ThreatTypes**：威胁情报事件的类型。
     * - **Intelligences**：威胁情报事件。
     * - **AttackPreferenceTop5**：被攻击的网站所属的Top 5行业。
     * - **AttackCntByThreatType**：服务器遭受的攻击次数。
     * - **为空**：表示仅返回域名、威胁等级、域名的基础信息、域名Whois信息和SSL证书信息。
     * @example `TagsThreatTypes,Intelligences,AttackPreferenceTop5,AttackCntByThreatType`
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
