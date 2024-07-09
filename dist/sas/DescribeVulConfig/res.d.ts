export interface DescribeVulConfigResponse {
    /**
     * 配置数据总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413BB68`
     */
    RequestId: string;
    /**
     * 漏洞管理配置列表。
     */
    TargetConfigs: {
        /**
         * 漏洞管理配置类型。取值：
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
        Type: string;
        /**
         * 全局开关。取值：
         * - **off**：关闭
         * - **on**：开启
         * @example `on`
         */
        OverAllConfig: string;
        /**
         * 漏洞扫描配置。
         * > 当type为**cve**、**sys**、**cms**、**app**、**emg**、**yum**时，取值如下：
         * >  - **on**：开启
         * > - **off**：关闭
         * >
         * > 当type为**scanMode**时，取值如下：
         * > - **real**：显示真实风险漏洞
         * > - **all**：所有漏洞
         * >
         * > 当type为**imageVulClean**时，该值表示漏洞保留时长（天）
         * @example `90`
         */
        Config: string;
    }[];
}
