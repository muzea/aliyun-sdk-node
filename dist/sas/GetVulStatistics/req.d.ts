export interface GetVulStatisticsRequest {
    /**
     * 指定访问源的IP地址。
     * @example `10.12.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 指定要查询的资产分组ID。多个资产分组ID使用半角逗号（,）分隔。
     * > 您可以调用[DescribeAllGroups](~~DescribeAllGroups~~)接口获取该参数。
     * @example `9997897`
     */
    "GroupIdList": string;
    /**
     * 指定要查询统计值的漏洞类型。多个漏洞类型使用半角逗号（,）分隔。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏洞
     * - **cms**：Web-CMS漏洞
     * - **emg**：应急漏洞
     * - **app**：应用漏洞（web扫描器）
     * - **sca**：应用漏洞（软件成分分析）
     * @example `cve`
     */
    "TypeList": string;
}
