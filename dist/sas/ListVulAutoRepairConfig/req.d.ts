export interface ListVulAutoRepairConfigRequest {
    /**
     * 漏洞类型。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 漏洞别名。
     * @example `RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)`
     */
    "AliasName"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的可自动修复漏洞配置的数量。默认值为**10**，表示每页显示10条可自动修复漏洞配置。
     * @example `10`
     */
    "PageSize"?: number;
}
