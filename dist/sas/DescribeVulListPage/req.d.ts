export interface DescribeVulListPageRequest {
    /**
     * 漏洞的cve编号。
     * @example `CVE-2022-44702`
     */
    "CveId"?: string;
    /**
     * 漏洞名称。
     * @example `远程代码执行漏洞`
     */
    "VulNameLike"?: string;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的漏洞类型。取值：
     * - cve：Linux漏洞
     * - sys：Windows漏洞
     * - app：应用漏洞
     * @example `cve`
     */
    "VulType"?: string;
    /**
     * 支持RASP实时防护，取值：
     * - **0**：不支持
     * - **1**：支持
     * @example `0`
     */
    "RaspDefend"?: number;
}
