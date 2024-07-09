export interface DescribeFileReportRequest {
    /**
     * 要查询的文件hash（MD5值）。
     * @example `b4208cc50cb22a0f82a47d49fde4312a`
     */
    "FileHash": string;
    /**
     * 要查询的字段。可以输入多个参数值，以英文逗号分隔。
     * 取值：
     * - **ThreatTypes**：威胁情报事件的类型。
     * - **Intelligences**：威胁情报事件。
     * - **AttackPreferenceTop5**：被攻击网站所属行业的Top 5。
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
