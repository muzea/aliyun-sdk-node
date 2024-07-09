export interface DescribeTargetRequest {
    /**
     * 查询类型，此处固定为vul。
     * @example `vul`
     */
    "Type"?: string;
    /**
     * 漏洞类型。取值为：
     * - **cms**  Web-CMS漏洞
     * - **sys**    Windows系统漏洞
     * - **cve**    Linux软件漏洞
     * - **emg**   应急漏洞
     * @example `{"vulType":"cms"}`
     */
    "Config"?: string;
}
