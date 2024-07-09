export interface ListVulGlobalConfigRequest {
    /**
     * 配置项的key。取值：
     * - **vul_scan_ip_list**：漏洞扫描IP集合。
     * @example `vul_scan_ip_list`
     */
    "ConfigKey"?: string;
}
