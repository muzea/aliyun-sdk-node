export interface CreateVulAutoRepairConfigRequest {
    /**
     * 漏洞类型。取值：
     * -**cve**：Linux软件漏洞
     * -**sys**：Windows系统漏洞
     * @example `cve`
     */
    "Type": string;
    /**
     * 可自动修复的漏洞列表。
     */
    "VulAutoRepairConfigList": {
        /**
         * 漏洞别名。
         * @example `CVE-2018-25032:zlib 1.2.11 memory corruption`
         */
        AliasName: string;
        /**
         * 漏洞名称。
         * @example `anolisos:8.4:ANSA-2022:0001`
         */
        Name: string;
    }[];
    /**
     * 添加可自动化修复漏洞的原因说明。
     * @example `TestAutoRepair`
     */
    "Reason"?: string;
}
