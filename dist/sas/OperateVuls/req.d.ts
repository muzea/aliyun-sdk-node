export interface OperateVulsRequest {
    /**
     * 要修复的漏洞的类型。固定取值：**cve**，表示Linux软件漏洞。
     * @example `cve`
     */
    "Type": string;
    /**
     * 漏洞的处理方式。固定取值：**vul_fix**，表示修复漏洞。
     * @example `vul_fix`
     */
    "OperateType": string;
    /**
     * 要修复的漏洞的名称列表。
     */
    "VulNames": string[];
    /**
     * 要修复漏洞的服务器的UUID列表。
     */
    "Uuids": string[];
}
