export interface ModifyVulConfigRequest {
    /**
     * 要修改的漏洞类型。取值：
     * - **cve**：Linux漏洞
     * - **sys**：Windows漏洞
     * - **cms**：WebCMS漏洞
     * - **emg**：应急漏洞
     * - **app**：应用漏洞
     * - **yum**：YUM/APT源配置
     * -  **scanMode**：真实风险
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 设置开启或关闭漏洞检测。取值：
     * - **on**：开启漏洞检测
     * - **off**：关闭漏洞检测
     * > 如果是真实风险，取值：
     * > - **real**：真实风险漏洞
     * > - **all**：所有漏洞
     * @example `on`
     */
    "Config"?: string;
}
