export interface DescribeVulTargetStatisticsRequest {
    /**
     * 要查询的漏洞类型。取值：
     * - **cve**：Linux漏洞
     * - **sys**：Windows漏洞
     * - **cms**：WebCMS漏洞
     * - **emg**：应急漏洞
     * @example `cve`
     */
    "Type"?: string;
}
