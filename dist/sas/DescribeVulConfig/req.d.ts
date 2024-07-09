export interface DescribeVulConfigRequest {
    /**
     * 请求源IP。
     * @example `113.110.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 漏洞管理配置类型，默认查询所有类型的配置。取值：
     * -  **cve**：Linux软件漏洞
     * -  **sys**：Windows系统漏洞
     * -  **cms**：Web-CMS漏洞
     * -  **app**：应用漏洞（web扫描器）
     * -  **emg**：应急漏洞
     * - **scanMode**：显示真实风险漏洞
     * - **imageVulClean**：漏洞保留时长
     * - **yum**：优先使用阿里云源进行漏洞修复
     * @example `cve`
     */
    "Type"?: string;
}
