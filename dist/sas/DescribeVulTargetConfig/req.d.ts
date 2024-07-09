export interface DescribeVulTargetConfigRequest {
    /**
     * 要查询的漏洞类型。取值：
     * - **cve**：Linux漏洞
     * - **sys**：Windows漏洞
     * - **cms**：WebCMS漏洞
     * - **emg**：应急漏洞
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 服务器uuid。
     * @example `ae1527a9-2308-46ab-b10a-48ae7ff7****`
     */
    "Uuid"?: string;
}
