export interface ModifyVulTargetConfigRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 要设置的漏洞检测的类型。取值：
     * - **cve**：Linux软件漏洞
     * - **sys**：Windows系统漏
     * - **cms**：Web-CMS漏洞
     * - **emg**：应急漏洞
     * @example `cve`
     */
    "Type": string;
    /**
     * 要设置的服务器的UUID。
     * @example `inet-7c676676-06fa-442e-90fb-b802e5d6****`
     */
    "Uuid": string;
    /**
     * 设置开启或关闭漏洞检测。取值：
     * - **on**：开启漏洞检测
     * - **off**：关闭漏洞检测
     * @example `off`
     */
    "Config": string;
}
